#!/bin/bash
# Demonstration of healthcheck inspection

echo "Starting services with healthcheck gating..."
docker compose up -d

echo "
Watching container health state..."
for i in {1..8}; do
  STATUS=$(docker inspect --format='{{json .State.Health.Status}}' healthy-pg)
  echo "Attempt $i: healthy-pg status = $STATUS"
  sleep 2
done

echo "
Final running services:"
docker compose ps

# Cleanup
docker compose down
