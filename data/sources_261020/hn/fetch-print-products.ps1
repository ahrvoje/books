param([string]$Jobs)
$taskJobs = Get-Content -LiteralPath $Jobs -Raw | ConvertFrom-Json
$taskResultsFile = 'data/sources_261020/hn/product-results.json'
$taskResults = Get-Content -LiteralPath $taskResultsFile -Raw | ConvertFrom-Json -AsHashtable
foreach ($taskJob in $taskJobs) {
    $taskIndex = [string]$taskJob.index
    $taskUrl = 'https://www.amazon.com/dp/' + $taskJob.asin
    $taskStamp = [DateTime]::UtcNow.ToString('o')
    $taskRecord = @{url=$taskUrl;attemptedAt=$taskStamp;count=$null;expectedTitle=$taskJob.title;expectedAuthor=$taskJob.author}
    try {
        $taskResponse = Invoke-WebRequest -Uri $taskUrl -TimeoutSec 25
        $taskBody = $taskResponse.Content
        $taskRaw = "data/sources_261020/hn/raw/product-$taskIndex.html"
        Set-Content -LiteralPath $taskRaw -Value $taskBody -Encoding utf8
        $taskRecord.rawFile = $taskRaw
        $taskRecord.status = [int]$taskResponse.StatusCode
        $taskRecord.title = [System.Net.WebUtility]::HtmlDecode(([regex]::Match($taskBody,'(?is)<title>(.*?)</title>')).Groups[1].Value)
        $taskRecord.productTitle = [System.Net.WebUtility]::HtmlDecode(([regex]::Match($taskBody,'(?is)<span[^>]*id="productTitle"[^>]*>(.*?)</span>')).Groups[1].Value.Trim())
        $taskRecord.ratingEvidence = ([regex]::Match($taskBody,'(?is)<span[^>]*data-hook="total-review-count"[^>]*>(.*?)</span>')).Groups[1].Value.Trim()
        if ($taskBody -match 'validateCaptcha|Enter the characters you see below|not a robot') {
            $taskRecord.outcome = 'Access challenge; stopped without interaction.'
        } elseif ($taskRecord.ratingEvidence -match '([\d,]+)\s+global ratings') {
            $taskRecord.count = [int]($Matches[1] -replace ',','')
            $taskRecord.outcome = 'Global rating aggregate observed; title and author require reviewer verification.'
        } else {
            $taskRecord.outcome = 'Public page retrieved without a verified total global-rating aggregate.'
        }
    } catch {
        $taskRecord.outcome = $_.Exception.Message
    }
    $taskResults[$taskIndex] = $taskRecord
    $taskResults | ConvertTo-Json -Depth 15 | Set-Content -LiteralPath $taskResultsFile -Encoding utf8
    $taskRecord | ConvertTo-Json -Compress
    if ($taskRecord.outcome -eq 'Access challenge; stopped without interaction.') { break }
}
