-- Clients: Some have orders, some are brand new with zero orders
INSERT INTO app_clients (client_name, city) VALUES
('Kushal Kumar', 'Bengaluru'),
('Neha Deshmukh', 'Bengaluru'),
('Karthik Raja', 'Bengaluru'),
('Tanvi Hegde', 'Bengaluru'); -- Tanvi hasn't made any booking yet

-- Riders
INSERT INTO delivery_riders (rider_name, vehicle_type, rating) VALUES
('Manjunath S', 'EV Scooter', 4.92),
('Syed Farhan', 'Motorcycle', 4.75),
('Pradeep Gowda', 'EV Scooter', 4.88);

-- Deliveries (One delivery has no rider assigned yet!)
INSERT INTO parcel_deliveries (client_id, rider_id, pickup_area, drop_area, delivery_fee_inr, delivery_status) VALUES
(1, 1, 'Bellandur', 'Koramangala 4th Block', 85.00, 'DELIVERED'),
(1, 2, 'Bellandur', 'HSR Layout Sector 1', 65.00, 'DELIVERED'),
(2, 1, 'Indiranagar', 'Domlur', 55.00, 'IN_TRANSIT'),
(3, NULL, 'Whitefield', 'Marathahalli', 110.00, 'LOOKING_FOR_RIDER');
