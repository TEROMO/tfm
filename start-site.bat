@echo off
chcp 65001 >nul
cd /d "%~dp0"

where node >nul 2>&1
if errorlevel 1 (
  echo Не найден Node.js. Установите Node.js версии 22.12 или новее.
  pause
  exit /b 1
)

echo Сайт запускается по адресу http://127.0.0.1:8484
echo Админка: http://127.0.0.1:8484/blog/admin/
echo Не закрывайте это окно, пока работаете с сайтом.
node server\admin.mjs

if errorlevel 1 pause
