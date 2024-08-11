#!/bin/bash

# SSH into your server and deploy
ssh -o StrictHostKeyChecking=no user@your-server-ip << 'ENDSSH'
  # Navigate to the application directory
  cd /path/to/your/app

  # Pull the latest code from the GitHub repository
  git pull origin main

  # Install dependencies
  npm install

  # Build the frontend (if applicable)
  npm run build

  # Restart the application processes
  pm2 restart all
ENDSSH
