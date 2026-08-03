-- Day 307: Multi-Table Joins & Bill Calculation

-- 1. Detailed itemized invoice breakdown for Order #1
SELECT 
    o.order_id,
    o.customer_name,
    m.item_name,
    oli.quantity,
    CONCAT('₹ ', oli.unit_price_at_order_inr) AS price_each,
    CONCAT('₹ ', (oli.quantity * oli.unit_price_at_order_inr)) AS line_total
FROM orders o
JOIN order_line_items oli ON o.order_id = oli.order_id
JOIN menu_items m ON oli.item_id = m.item_id
WHERE o.order_id = 1;

-- 2. Calculating Grand Totals + 5% GST for each order
SELECT 
    o.order_id,
    o.customer_name,
    COUNT(oli.item_id) AS distinct_items,
    SUM(oli.quantity) AS total_item_count,
    CONCAT('₹ ', SUM(oli.quantity * oli.unit_price_at_order_inr)) AS subtotal,
    CONCAT('₹ ', ROUND(SUM(oli.quantity * oli.unit_price_at_order_inr) * 0.05, 2)) AS gst_5_percent,
    CONCAT('₹ ', ROUND(SUM(oli.quantity * oli.unit_price_at_order_inr) * 1.05, 2)) AS grand_total
FROM orders o
JOIN order_line_items oli ON o.order_id = oli.order_id
GROUP BY o.order_id, o.customer_name
ORDER BY o.order_id;
