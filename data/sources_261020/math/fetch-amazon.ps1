param([string]$InputFile)
$entries = Get-Content -LiteralPath $InputFile -Raw | ConvertFrom-Json
$results = @()
foreach ($entry in $entries) {
    $record = [ordered]@{ id=$entry.id; url=$entry.url; retrieved=(Get-Date).ToUniversalTime().ToString('o') }
    try {
        $response = Invoke-WebRequest -Uri $entry.url -UseBasicParsing -TimeoutSec 30
        $body = $response.Content
        $record.raw = "data/sources_261020/math/amazon-$($entry.id).html"
        [IO.File]::WriteAllText((Join-Path 'C:\repos\books' $record.raw), $body)
        $record.pageTitle = [regex]::Match($body, '<title>(.*?)</title>', 'Singleline').Groups[1].Value
        $record.globalRatings = [regex]::Match($body, 'data-hook="total-review-count"[^>]*>\s*([\d,]+)\s+global ratings?', 'Singleline').Groups[1].Value
        $record.rating = [regex]::Match($body, 'reviewCountTextLinkedHistogram[^>]*title="([^"]+)"').Groups[1].Value
        $record.status = 'Public product response saved; identity and count require human review.'
        if ($body -match 'Enter the characters you see below|Type the characters you see in this image|<title>Amazon CAPTCHA|<title>Robot Check|<title>Server Busy|/errors_page/validateCaptcha') {
            $record.status = 'Access challenge; stopped without retry.'
            $results += $record
            break
        }
    } catch {
        $record.status = $_.Exception.Message
        $results += $record
        break
    }
    $results += $record
}
$out = [IO.Path]::ChangeExtension($InputFile,'.results.json')
$results | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath $out -Encoding utf8
$results | ForEach-Object { "$($_.id): $($_.pageTitle); ratings=$($_.globalRatings); $($_.status)" }
