-- Generate 5,000 synthetic rows using generate_series
INSERT INTO payment_ledger (user_id, payment_gateway, pincode, amount_inr, status, created_at)
SELECT 
    (1 + (random() * 500)::INT),
    (ARRAY['Razorpay', 'PayU', 'Juspay'])[(1 + (random() * 2)::INT)],
    (ARRAY['560001', '560034', '560038', '560103', '560066'])[(1 + (random() * 4)::INT)],
    ROUND((50 + random() * 2500)::NUMERIC, 2),
    (ARRAY['SUCCESS', 'SUCCESS', 'SUCCESS', 'FAILED', 'PENDING'])[(1 + (random() * 4)::INT)],
    CURRENT_TIMESTAMP - (random() * INTERVAL '90 days')
FROM generate_series(1, 5000);
