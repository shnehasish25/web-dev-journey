#!/bin/bash
# Demonstration of database persistence using Docker Named Volumes

VOL_NAME="pg_bengaluru_data"
CONTAINER_1="pg-instance-1"
CONTAINER_2="pg-instance-2"

echo "1. Creating Named Volume: $VOL_NAME"
docker volume create $VOL_NAME

echo "
2. Starting PostgreSQL Container 1 with volume..."
docker run -d --name $CONTAINER_1   -e POSTGRES_PASSWORD=postgrespass   -e POSTGRES_DB=orders_db   -v $VOL_NAME:/var/lib/postgresql/data   -v "$(pwd)/init.sql":/docker-entrypoint-initdb.d/init.sql   -p 5432:5432   postgres:16-alpine

echo "Waiting 5 seconds for Postgres to initialize..."
sleep 5

echo "
3. Stopping and DELETING Container 1 completely..."
docker stop $CONTAINER_1 && docker rm $CONTAINER_1

echo "
4. Starting a BRAND NEW Container 2 attached to the same volume..."
docker run -d --name $CONTAINER_2   -e POSTGRES_PASSWORD=postgrespass   -e POSTGRES_DB=orders_db   -v $VOL_NAME:/var/lib/postgresql/data   -p 5432:5432   postgres:16-alpine

sleep 3
echo "
5. Querying data from Container 2 (Proves persistence!):"
docker exec -it $CONTAINER_2 psql -U postgres -d orders_db -c "SELECT * FROM merchant_wallets;"

# Clean up container
docker stop $CONTAINER_2 && docker rm $CONTAINER_2
echo "Done! The volume $VOL_NAME still holds all records."
