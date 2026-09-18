#!/bin/bash
# Demonstration of Docker image tagging and registry commands

APP_NAME="swiggy-delivery-engine"
VERSION="1.2.0"
REGISTRY_USER="kushaldev"

echo "1. Building image locally..."
docker build -t $APP_NAME:local .

echo "
2. Tagging image with semantic version..."
docker tag $APP_NAME:local $REGISTRY_USER/$APP_NAME:$VERSION
docker tag $APP_NAME:local $REGISTRY_USER/$APP_NAME:latest

echo "
3. Inspecting tagged images:"
docker images | grep $APP_NAME

echo "
4. Simulation of push command:"
echo "Command to push: docker push $REGISTRY_USER/$APP_NAME:$VERSION"
