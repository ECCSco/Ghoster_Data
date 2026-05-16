@echo off
title AI Portable Launcher

set OLLAMA_HOME=%~dp0AI\.ollama

start "" /MIN ollama serve
timeout /t 3 >nul

start "" node "%~dp0server.js"
timeout /t 2 >nul

start "" "%~dp0cloudflared.exe" tunnel --url http://localhost:3000

pause
