param([string]$Targets = "data/sources_261020/reddit/amazon-targets.json")
$ErrorActionPreference = "Stop"
$records = Get-Content -LiteralPath $Targets -Raw | ConvertFrom-Json
$auditPath = "data/sources_261020/reddit/amazon-fetch.json"
$audit = @()
if (Test-Path -LiteralPath $auditPath) { $audit = @(Get-Content -LiteralPath $auditPath -Raw | ConvertFrom-Json) }
foreach ($record in $records) {
    $outPath = "data/sources_261020/reddit/raw/amazon-$($record.id).html"
    if (Test-Path -LiteralPath $outPath) { continue }
    $url = "https://www.amazon.com/dp/$($record.product)"
    $attempt = [ordered]@{ id=$record.id; product=$record.product; url=$url; retrieved=[DateTime]::UtcNow.ToString("o"); rawFile=$outPath; status=$null; finalUrl=$null; reason=$null }
    try {
        $response = Invoke-WebRequest -UseBasicParsing -Uri $url -TimeoutSec 40
        [System.IO.File]::WriteAllText((Join-Path (Get-Location) $outPath), $response.Content)
        $attempt.status = [int]$response.StatusCode
        $attempt.finalUrl = [string]$response.BaseResponse.ResponseUri
        $blocked = $response.Content -match "validateCaptcha|Robot Check|Server Busy"
        $attempt.reason = if ($blocked) { "Challenge or server-busy page; collection stopped." } else { "Public product page retrieved; identity and aggregate require separate validation." }
    } catch {
        $attempt.reason = $_.Exception.Message
        $blocked = $true
    }
    $audit += [pscustomobject]$attempt
    $audit | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath $auditPath -Encoding UTF8
    Write-Output "$($record.id): $($attempt.reason)"
    if ($blocked) { break }
    Start-Sleep -Milliseconds 1200
}
