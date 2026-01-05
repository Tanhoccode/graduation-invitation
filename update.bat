@echo off
echo ====================================
echo   UPDATE GITHUB PAGES
echo ====================================
echo.

echo [1/3] Checking for changes...
git status

echo.
echo [2/3] Adding all changes...
git add .

echo.
echo [3/3] Committing changes...
set /p commit_msg="Enter commit message (or press Enter for default): "
if "%commit_msg%"=="" set commit_msg=Update website
git commit -m "%commit_msg%"

echo.
echo [4/4] Pushing to GitHub...
git push origin main

echo.
echo ====================================
echo   DONE! 
echo ====================================
echo.
echo Your changes have been pushed to GitHub.
echo Wait 1-2 minutes for GitHub Pages to rebuild.
echo.
echo To see changes:
echo 1. Clear browser cache (Ctrl+Shift+Delete)
echo 2. Hard refresh (Ctrl+F5)
echo 3. Or add ?v=1 to your URL
echo.
pause

