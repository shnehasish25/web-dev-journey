#!/bin/bash
# Shell script to demonstrate stats and log rotation inspection

echo "Starting bounded container..."
docker compose up -d

echo "
Sampling resource usage via docker stats (Press Ctrl+C to stop)..."
docker stats --no-stream

echo "
Inspecting log configuration:"
docker inspect --format='{{json .HostConfig.LogConfig}}' bounded-worker

docker compose down
