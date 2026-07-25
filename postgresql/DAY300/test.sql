-- Verification queries for Day 300
-- 1. Inspect table schemas via information_schema
SELECT table_name, column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name IN ('app_users', 'wallet_accounts')
ORDER BY table_name, ordinal_position;

-- 2. Fetch all users residing in Bengaluru
SELECT user_id, full_name, email, city, created_at
FROM app_users
WHERE city = 'Bengaluru';

-- 3. Check wallet balances with formatted Rupee display
SELECT 
    wallet_id,
    user_id,
    upi_vpa,
    balance_inr,
    CONCAT('₹ ', balance_inr) AS formatted_balance,
    is_kyc_verified
FROM wallet_accounts
ORDER BY balance_inr DESC;
