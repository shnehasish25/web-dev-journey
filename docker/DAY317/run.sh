#!/bin/bash
# Shell script to build and run Day 317 minimal Alpine container

echo "=== Building Minimal Alpine Image ==="
docker build -t day317-alpine-demo .

echo "
=== Running Alpine Container ==="
docker run --rm day317-alpine-demo

echo "
=== Inspecting Alpine OS Version ==="
docker run --rm day317-alpine-demo cat /etc/os-release
