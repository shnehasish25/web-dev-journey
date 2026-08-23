#!/bin/bash
# Run container with Bind Mount and anonymous volume for node_modules

echo "Running with Bind Mount..."
docker run --rm -it   --name bind-mount-demo   -p 3000:3000   -v "$(pwd)":/app   -v /app/node_modules   node:20-alpine   sh -c "cd /app && npm install && npm run dev"
