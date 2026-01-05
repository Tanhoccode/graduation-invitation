@echo off
echo ====================================
echo   UPDATE IMAGE - FIX CACHE
echo ====================================
echo.

echo [1/3] Updating image version in HTML...
powershell -Command "(Get-Content index.html) -replace 'graduation\.jpg(\?v=\d+)?', 'graduation.jpg?v=%time:~0,2%%time:~3,2%%time:~6,2%' | Set-Content index.html"

echo.
echo [2/3] Adding changes...
git add graduation.jpg index.html

echo.
echo [3/3] Committing and pushing...
git commit -m "Update graduation photo - %date% %time%"
git push origin main

echo.
echo ====================================
echo   DONE!
echo ====================================
echo.
echo Your image has been updated!
echo Wait 1-2 minutes, then:
echo 1. Hard refresh: Ctrl+F5
echo 2. Or clear browser cache
echo.
pause

