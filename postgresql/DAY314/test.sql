-- Testing Views & Triggers for Day 314

-- 1. Query the public view
SELECT * FROM v_active_users_public;

-- 2. Inspect Materialized View
SELECT * FROM mv_monthly_revenue;

-- 3. Trigger Test: Update user's city and verify updated_at & audit log
UPDATE registered_users 
SET city = 'Mysuru' 
WHERE user_id = 1;

-- Check updated timestamp on user
SELECT user_id, full_name, city, updated_at FROM registered_users WHERE user_id = 1;

-- Check audit log table populated by trigger
SELECT * FROM user_profile_audit;

-- 4. Refresh Materialized View concurrently
REFRESH MATERIALIZED VIEW CONCURRENTLY mv_monthly_revenue;
SELECT * FROM mv_monthly_revenue;
