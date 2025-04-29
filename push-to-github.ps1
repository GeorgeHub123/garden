# GitHub Push Script

# Ask for the GitHub token
Write-Host "===== GitHub Repository Push Tool =====" -ForegroundColor Cyan
Write-Host ""
Write-Host "This script will help you push your Dracula website to GitHub." -ForegroundColor Yellow
Write-Host ""
$token = Read-Host "Please enter your GitHub Personal Access Token"

if (-not $token) {
    Write-Host "Error: Token is required." -ForegroundColor Red
    exit 1
}

# Set the remote URL with the token
Write-Host ""
Write-Host "Setting up remote repository..." -ForegroundColor Yellow
git remote set-url origin "https://GeorgeHub123:$token@github.com/GeorgeHub123/garden.git"

# Check if remote setup was successful
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error setting up remote repository." -ForegroundColor Red
    exit 1
}

# Push to GitHub
Write-Host ""
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
git push -u origin master

# Check if push was successful
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error pushing to GitHub. Please check your token and try again." -ForegroundColor Red
    exit 1
} else {
    Write-Host ""
    Write-Host "Success! Your code has been pushed to GitHub." -ForegroundColor Green
    Write-Host "Repository URL: https://github.com/GeorgeHub123/garden" -ForegroundColor Cyan
} 