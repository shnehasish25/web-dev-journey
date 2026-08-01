-- Day 305: Aggregation Analytics Queries

-- 1. Overall transaction volume metrics (Successful only)
SELECT 
    COUNT(*) AS total_successful_txns,
    CONCAT('₹ ', SUM(amount_inr)) AS total_gross_volume,
    CONCAT('₹ ', ROUND(AVG(amount_inr), 2)) AS average_ticket_size,
    CONCAT('₹ ', MIN(amount_inr)) AS smallest_txn,
    CONCAT('₹ ', MAX(amount_inr)) AS largest_txn
FROM upi_transactions
WHERE txn_status = 'SUCCESS';

-- 2. Merchant-level breakdown with HAVING filter (volume > ₹1,000)
SELECT 
    merchant_name,
    locality,
    COUNT(*) AS txn_count,
    CONCAT('₹ ', SUM(amount_inr)) AS merchant_revenue,
    CONCAT('₹ ', ROUND(AVG(amount_inr), 2)) AS avg_order_value
FROM upi_transactions
WHERE txn_status = 'SUCCESS'
GROUP BY merchant_name, locality
HAVING SUM(amount_inr) > 1000.00
ORDER BY SUM(amount_inr) DESC;

-- 3. Payment mode share (Which UPI app drives the most volume?)
SELECT 
    payment_mode,
    COUNT(*) AS total_txns,
    CONCAT('₹ ', SUM(amount_inr)) AS volume,
    ROUND((COUNT(*) * 100.0 / (SELECT COUNT(*) FROM upi_transactions WHERE txn_status = 'SUCCESS')), 1) AS txn_share_percentage
FROM upi_transactions
WHERE txn_status = 'SUCCESS'
GROUP BY payment_mode
ORDER BY SUM(amount_inr) DESC;
