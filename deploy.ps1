# Deploy React Portfolio to GitHub Pages
# Usage: .\deploy.ps1

Write-Host "Starting deployment process..." -ForegroundColor Cyan

# Build the project
Write-Host "`nBuilding the project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "`nBuild failed! Aborting deployment." -ForegroundColor Red
    exit 1
}

Write-Host "`nBuild completed successfully!" -ForegroundColor Green

# Navigate to build folder
Set-Location build

# Initialize git repository
Write-Host "`nInitializing git repository in build folder..." -ForegroundColor Yellow
git init

# Add all files
Write-Host "Adding files..." -ForegroundColor Yellow
git add -A

# Commit files
Write-Host "Committing files..." -ForegroundColor Yellow
git commit -m "Deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

# Rename branch to gh-pages
Write-Host "Setting branch to gh-pages..." -ForegroundColor Yellow
git branch -M gh-pages

# Add remote origin
Write-Host "Adding remote..." -ForegroundColor Yellow
git remote add origin https://github.com/jiteshwarn/jiteshwarn.github.io.git

# Force push to gh-pages branch
Write-Host "`nPushing to GitHub Pages..." -ForegroundColor Yellow
git push -f origin gh-pages

if ($LASTEXITCODE -ne 0) {
    Write-Host "`nDeployment failed!" -ForegroundColor Red
    Set-Location ..
    Remove-Item -Recurse -Force "build\.git" -ErrorAction SilentlyContinue
    exit 1
}

# Go back to project root
Set-Location ..

# Clean up .git folder from build directory
Write-Host "`nCleaning up..." -ForegroundColor Yellow
Remove-Item -Recurse -Force "build\.git" -ErrorAction SilentlyContinue

Write-Host "`n========================================" -ForegroundColor Green
Write-Host "Deployment completed successfully!" -ForegroundColor Green
Write-Host "Your portfolio is live at:" -ForegroundColor Green
Write-Host "https://jiteshwarn.github.io" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Green

