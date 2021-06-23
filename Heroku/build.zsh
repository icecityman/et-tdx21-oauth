#!/bin/zsh
clear
cp .env ../OAuth.env
npm run build:client && node ./src/server/_WEB.js
# npm run build:client 
# heroku local web=1
node ./src/server/_WEB.js
echo "DONE"