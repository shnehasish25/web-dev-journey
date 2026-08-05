-- Seed Drivers
INSERT INTO cab_drivers (driver_name, cab_number, home_zone) VALUES
('Mahesh Reddy', 'KA-01-MJ-1234', 'Koramangala'),
('Sunil Kumar', 'KA-04-SK-5678', 'Indiranagar'),
('Basavaraj B', 'KA-05-BB-9988', 'Electronic City'),
('Ganesh Prasad', 'KA-03-GP-4321', 'Whitefield'),
('Raghu N', 'KA-51-RN-1122', 'HSR Layout'); -- Has no trips yet!

-- Seed Trips
INSERT INTO ride_trips (driver_id, fare_inr, rider_rating, trip_distance_km) VALUES
(1, 450.00, 4.8, 12.5),
(1, 820.00, 5.0, 24.0),
(1, 310.00, 4.5, 8.2),
(2, 210.00, 4.2, 5.0),
(2, 190.00, 4.0, 4.5),
(3, 1150.00, 4.9, 36.0),
(3, 980.00, 4.7, 30.2),
(4, 150.00, 3.5, 3.0),
(4, 280.00, 4.0, 7.5);
