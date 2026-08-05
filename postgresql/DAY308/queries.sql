-- Subquery demonstrations for Day 308

-- 1. Scalar Subquery: Trips that earned above the citywide average fare
SELECT 
    trip_id,
    driver_id,
    fare_inr,
    trip_distance_km,
    rider_rating
FROM ride_trips
WHERE fare_inr > (SELECT AVG(fare_inr) FROM ride_trips)
ORDER BY fare_inr DESC;

-- 2. Correlated Subquery: Find trips where fare is higher than that driver's own average fare!
SELECT 
    t.trip_id,
    d.driver_name,
    t.fare_inr,
    ROUND((SELECT AVG(fare_inr) FROM ride_trips WHERE driver_id = t.driver_id), 2) AS driver_avg_fare
FROM ride_trips t
JOIN cab_drivers d ON t.driver_id = d.driver_id
WHERE t.fare_inr > (
    SELECT AVG(inner_t.fare_inr) 
    FROM ride_trips inner_t 
    WHERE inner_t.driver_id = t.driver_id
);

-- 3. NOT EXISTS: Find drivers who have NEVER completed a single trip
SELECT 
    d.driver_id,
    d.driver_name,
    d.cab_number,
    d.home_zone
FROM cab_drivers d
WHERE NOT EXISTS (
    SELECT 1 
    FROM ride_trips t 
    WHERE t.driver_id = d.driver_id
);
