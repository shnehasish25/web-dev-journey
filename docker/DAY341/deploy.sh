#!/bin/bash
# One-command production deployment script for QuickBite
set -e

echo "============================================="
echo "   QuickBite Delivery Stack Deployment"
echo "   Locality: Bellandur, Bengaluru"
echo "============================================="

echo "
[1/3] Building and starting containerized services..."
docker compose up -d --build

echo "
[2/3] Waiting for all service healthchecks to pass..."
docker compose ps

echo "
[3/3] Deployment complete! Stack is live at http://localhost"
echo "- Web Frontend: http://localhost"
echo "- API Healthcheck: http://localhost/api/health"
