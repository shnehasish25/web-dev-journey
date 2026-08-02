-- Joins demonstrations for Day 306

-- 1. INNER JOIN: Only deliveries that have an assigned rider
SELECT 
    d.delivery_id,
    c.client_name,
    r.rider_name,
    r.vehicle_type,
    CONCAT(d.pickup_area, ' -> ', d.drop_area) AS route,
    CONCAT('₹ ', d.delivery_fee_inr) AS fee
FROM parcel_deliveries d
INNER JOIN app_clients c ON d.client_id = c.client_id
INNER JOIN delivery_riders r ON d.rider_id = r.rider_id;

-- 2. LEFT JOIN: All deliveries, even unassigned ones
SELECT 
    d.delivery_id,
    c.client_name,
    COALESCE(r.rider_name, 'UNASSIGNED - Searching...') AS rider,
    d.delivery_status,
    CONCAT('₹ ', d.delivery_fee_inr) AS fee
FROM parcel_deliveries d
LEFT JOIN app_clients c ON d.client_id = c.client_id
LEFT JOIN delivery_riders r ON d.rider_id = r.rider_id;

-- 3. LEFT JOIN to find inactive clients (Clients with 0 bookings)
SELECT 
    c.client_id,
    c.client_name,
    c.signup_date,
    COUNT(d.delivery_id) AS total_deliveries
FROM app_clients c
LEFT JOIN parcel_deliveries d ON c.client_id = d.client_id
GROUP BY c.client_id, c.client_name, c.signup_date
ORDER BY total_deliveries ASC;
