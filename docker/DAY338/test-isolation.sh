#!/bin/bash
# Verify network segmentation
docker compose up -d

echo "Testing: Order service should ping Payment service (Both on internal-net):"
docker exec ms-order-service ping -c 2 ms-payment-service

echo "
Testing: User service trying to ping Payment service (Should FAIL - No route):"
docker exec ms-user-service ping -c 2 -W 2 ms-payment-service || echo "SUCCESS: Network isolation blocked unauthorized access!"

docker compose down
