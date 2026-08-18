#!/bin/bash
# Build and run Nginx with port forwarding

echo "Building custom Nginx container..."
docker build -t day319-swiggy-nginx .

echo "Starting container on host port 8080..."
docker run -d --name swiggy-rider-web -p 8080:80 day319-swiggy-nginx

echo "Test with curl:"
curl -I http://localhost:8080
echo "Visit http://localhost:8080 in your browser!"
