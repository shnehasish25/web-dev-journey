#!/bin/bash
# Demonstration of custom bridge network and automatic container DNS

NETWORK_NAME="swiggy-microservices-net"

echo "1. Creating user-defined bridge network..."
docker network create $NETWORK_NAME

echo "2. Starting Backend Database Container..."
docker run -d --name orders-db   --network $NETWORK_NAME   -e POSTGRES_PASSWORD=secretpass   postgres:16-alpine

echo "3. Starting Web Service on same network..."
docker run -d --name web-api   --network $NETWORK_NAME   alpine:3.19 sleep 3600

echo "4. Testing DNS Resolution: Pinging 'orders-db' from 'web-api' container..."
docker exec -it web-api ping -c 3 orders-db

echo "DNS resolution verified! Both containers resolved by name."

# Cleanup
docker stop orders-db web-api && docker rm orders-db web-api
docker network rm $NETWORK_NAME
