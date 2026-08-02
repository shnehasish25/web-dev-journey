-- Day 306: Customers, Orders & Delivery Riders
DROP TABLE IF EXISTS parcel_deliveries;
DROP TABLE IF EXISTS delivery_riders;
DROP TABLE IF EXISTS app_clients;

CREATE TABLE app_clients (
    client_id SERIAL PRIMARY KEY,
    client_name VARCHAR(100) NOT NULL,
    city VARCHAR(50) DEFAULT 'Bengaluru',
    signup_date DATE DEFAULT CURRENT_DATE
);

CREATE TABLE delivery_riders (
    rider_id SERIAL PRIMARY KEY,
    rider_name VARCHAR(100) NOT NULL,
    vehicle_type VARCHAR(30) NOT NULL, -- 'EV Scooter', 'Motorcycle'
    rating NUMERIC(3, 2) DEFAULT 4.80
);

CREATE TABLE parcel_deliveries (
    delivery_id SERIAL PRIMARY KEY,
    client_id INT NOT NULL REFERENCES app_clients(client_id),
    rider_id INT REFERENCES delivery_riders(rider_id), -- Can be NULL if not yet assigned
    pickup_area VARCHAR(80) NOT NULL,
    drop_area VARCHAR(80) NOT NULL,
    delivery_fee_inr NUMERIC(8, 2) NOT NULL,
    delivery_status VARCHAR(30) DEFAULT 'ASSIGNED'
);
