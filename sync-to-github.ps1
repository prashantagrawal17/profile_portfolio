# Sync PortfolioSite\web folder to GitHub repo profile_portfolio
# Run from: PortfolioSite\web (or from PortfolioSite with $WebPath set)
# Usage: .\sync-to-github.ps1

$ErrorActionPreference = "Stop"
$RepoUrl = "https://github.com/prashantagrawal17/profile_portfolio.git"
$SyncDir = "_profile_portfolio_sync"

# Where is the web folder? (script may be in PortfolioSite\web or PortfolioSite)
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
if ((Split-Path -Leaf $ScriptDir) -eq "web") {
    $WebPath = $ScriptDir
    $ParentPath = Split-Path -Parent $ScriptDir
} else {
    $ParentPath = $ScriptDir
    $WebPath = Join-Path $ScriptDir "web"
}

$ClonePath = Join-Path $ParentPath $SyncDir

Write-Host "Web source: $WebPath"
Write-Host "Sync clone: $ClonePath"
Write-Host ""

# 1) Clone or pull
if (-not (Test-Path $ClonePath)) {
    Write-Host "Cloning $RepoUrl into $ClonePath ..."
    Set-Location $ParentPath
    git clone $RepoUrl $SyncDir
    if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
} else {
    Write-Host "Pulling latest from origin/main ..."
    Set-Location $ClonePath
    git pull origin main
    if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
}

# 2) Copy web contents into clone (exclude node_modules, .angular, .ionic, www)
Write-Host "Copying web contents (excluding node_modules, .angular, .ionic, www) ..."
$exclude = @("node_modules", ".angular", ".ionic", "www")
Get-ChildItem $WebPath -Force | Where-Object { $exclude -notcontains $_.Name } | ForEach-Object {
    Copy-Item $_.FullName -Destination $ClonePath -Recurse -Force
}

# 3) Git add, commit, push
Set-Location $ClonePath
git add -A
$status = git status -s
if (-not $status) {
    Write-Host "No changes to commit. Repo is in sync."
    exit 0
}
Write-Host "Changes staged. Committing..."
git commit -m "Sync from local PortfolioSite/web"
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
Write-Host "Pushing to origin main..."
git push origin main
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
Write-Host "Done. GitHub repo is updated."
