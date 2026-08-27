#!/bin/bash
# Test passing environment variables dynamically

docker build -t day325-env-demo . -f - <<EOF
FROM node:20-alpine
WORKDIR /app
COPY server.js .
CMD ["node", "server.js"]
EOF

echo "Running with Asia/Kolkata timezone and custom city..."
docker run --rm -d --name env-test   -e PORT=5000   -e CITY=Bengaluru   -e TZ=Asia/Kolkata   -e APP_NAME=SwiggyOps   -p 5000:5000   day325-env-demo

sleep 2
curl http://localhost:5000
echo ""
docker stop env-test
