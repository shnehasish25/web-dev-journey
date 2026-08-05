-- Day 308: Ride-Hailing Trips & Driver Ratings
DROP TABLE IF EXISTS ride_trips;
DROP TABLE IF EXISTS cab_drivers;

CREATE TABLE cab_drivers (
    driver_id SERIAL PRIMARY KEY,
    driver_name VARCHAR(100) NOT NULL,
    cab_number VARCHAR(15) NOT NULL UNIQUE,
    home_zone VARCHAR(50) NOT NULL
);

CREATE TABLE ride_trips (
    trip_id SERIAL PRIMARY KEY,
    driver_id INT NOT NULL REFERENCES cab_drivers(driver_id),
    fare_inr NUMERIC(8, 2) NOT NULL,
    rider_rating NUMERIC(2, 1) CHECK (rider_rating BETWEEN 1.0 AND 5.0),
    trip_distance_km NUMERIC(5, 2) NOT NULL,
    trip_status VARCHAR(20) DEFAULT 'COMPLETED'
);
