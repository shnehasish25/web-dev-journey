#!/bin/bash
# Script demonstrating container lifecycle commands

IMAGE_NAME="day318-lifecycle-demo"
CONTAINER_NAME="bengaluru-ping-service"

echo "1. Building image..."
docker build -t $IMAGE_NAME .

echo "
2. Starting container in detached background mode (-d)..."
docker run -d --name $CONTAINER_NAME $IMAGE_NAME

echo "
3. Checking running containers (docker ps)..."
docker ps --filter "name=$CONTAINER_NAME"

echo "
4. Streaming first 5 lines of logs..."
docker logs $CONTAINER_NAME | head -n 5

echo "
5. Executing live command inside running container (docker exec)..."
docker exec $CONTAINER_NAME uname -a

echo "
6. Stopping container gracefully..."
docker stop $CONTAINER_NAME

echo "
7. Cleaning up stopped container..."
docker rm $CONTAINER_NAME
echo "Container removed successfully!"
