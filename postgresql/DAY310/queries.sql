-- Date/Time & String manipulations for Day 310

-- 1. SLA Performance Analysis: Total delivery duration in minutes
SELECT 
    order_id,
    SPLIT_PART(customer_email, '@', 1) AS username,
    SPLIT_PART(customer_email, '@', 2) AS email_domain,
    TO_CHAR(placed_at, 'DD-Mon-YYYY HH12:MI AM') AS formatted_order_time,
    ROUND(EXTRACT(EPOCH FROM (delivered_at - placed_at)) / 60.0, 1) AS delivery_time_minutes,
    CASE 
        WHEN EXTRACT(EPOCH FROM (delivered_at - placed_at)) / 60.0 <= target_delivery_minutes 
        THEN 'Within 15 Min SLA'
        ELSE 'SLA Breached'
    END AS sla_status
FROM delivery_orders;

-- 2. Extracting day-of-week and time-of-day insights
SELECT 
    order_id,
    TO_CHAR(placed_at, 'Day') AS weekday_name,
    EXTRACT(HOUR FROM placed_at) AS order_hour,
    bill_amount_inr
FROM delivery_orders
ORDER BY placed_at;
