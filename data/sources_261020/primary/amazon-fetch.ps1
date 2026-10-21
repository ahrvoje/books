param([string]$InputFile = 'assessments-draft.json', [string]$OutputFile = 'amazon-direct.json')
$ErrorActionPreference = 'Stop'
$taskDir = Join-Path (Get-Location) 'data/sources_261020/primary'
$records = Get-Content -LiteralPath (Join-Path $taskDir $InputFile) -Raw | ConvertFrom-Json
$observations = @()
foreach ($book in $records) {
    if ($book.status -ne 'recommended' -or ($null -ne $book.amazon -and $null -ne $book.amazon.count)) { continue }
    $match = [regex]::Match($book.purchaseUrl, '/dp/([A-Z0-9]{10})')
    if (-not $match.Success) { continue }
    $asin = $match.Groups[1].Value
    $url = "https://www.amazon.com/dp/$asin"
    $prefix = [IO.Path]::GetFileNameWithoutExtension($OutputFile)
    $outPath = Join-Path $taskDir "raw/$prefix-$($book.id).html"
    $item = [ordered]@{id=$book.id;asin=$asin;url=$url;retrieved=(Get-Date).ToUniversalTime().ToString('o')}
    try {
        $response = Invoke-WebRequest -UseBasicParsing -Uri $url -TimeoutSec 25
        $html = $response.Content
        [IO.File]::WriteAllText($outPath, $html)
        $item.status = [int]$response.StatusCode
        $item.file = "data/sources_261020/primary/raw/$prefix-$($book.id).html"
        $item.challenge = [bool]($html -match 'Type the characters you see in this image|Enter the characters you see below|Robot Check|validateCaptcha')
        $rating = [regex]::Match($html, '([0-9,]+)\s+global ratings?\b')
        if ($rating.Success) { $item.globalRatings = [int]$rating.Groups[1].Value.Replace(',','') }
    } catch {
        $item.status = 'failed'
        $item.error = $_.Exception.Message
    }
    $observations += $item
    $observations | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath (Join-Path $taskDir $OutputFile) -Encoding utf8
    Write-Output "$($book.id): $($item.status); global ratings=$($item.globalRatings)"
    if ($item.challenge -or $item.error -match '403|429|503') { break }
}
