#!/bin/bash

# SSH into your server and deploy
ssh -o StrictHostKeyChecking=no root@212.38.94.134 << 'ENDSSH'
  cd /root/ApnaBlogApp2
  git pull origin main
  npm install
  npm run build
  pm2 restart all
ENDSSH

