@echo off
start cmd /k "cd server && node server.js"
start cmd /k "cd client && npm run dev"