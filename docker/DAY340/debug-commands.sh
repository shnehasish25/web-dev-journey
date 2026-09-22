#!/bin/bash
# Docker diagnostics and troubleshooting utility script

echo "=== Docker Disk Usage Summary ==="
docker system df

echo "
=== Inspecting Top 5 Largest Images ==="
docker images --format "{{.Repository}}:{{.Tag}} ({{.Size}})" | head -n 5

echo "
=== Safe Cleanup (Dangling images & stopped containers) ==="
echo "Run: docker system prune -f"
