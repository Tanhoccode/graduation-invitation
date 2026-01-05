@echo off
echo Quick Update Script
echo ===================
echo.
git add .
git commit -m "Quick update - %date% %time%"
git push origin main
echo.
echo Done! Wait 1-2 minutes then:
echo 1. Press Ctrl+F5 to hard refresh
echo 2. Or add ?v=%random% to your URL
pause

