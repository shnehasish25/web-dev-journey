-- Query demonstrations for Day 304

-- 1. Using COALESCE for fallback contact and landmark
SELECT 
    customer_name,
    primary_phone,
    COALESCE(alternate_phone, 'Not Provided') AS backup_contact,
    address_line,
    COALESCE(landmark, 'No landmark specified') AS delivery_landmark,
    COALESCE(referral_code, 'ORGANIC_SIGNUP') AS acquisition_source
FROM customer_profiles;

-- 2. Finding profiles missing optional contact details
SELECT customer_name, primary_phone, pincode
FROM customer_profiles
WHERE alternate_phone IS NULL;

-- 3. Dynamic Customer Tiering using CASE WHEN
SELECT 
    customer_name,
    CONCAT('₹ ', lifetime_spend_inr) AS total_spend,
    CASE 
        WHEN lifetime_spend_inr >= 50000.00 THEN 'Platinum Club'
        WHEN lifetime_spend_inr >= 15000.00 THEN 'Gold Member'
        WHEN lifetime_spend_inr >= 3000.00  THEN 'Silver Tier'
        ELSE 'Bronze / New User'
    END AS customer_tier,
    CASE 
        WHEN lifetime_spend_inr >= 50000.00 THEN 'Free Delivery + 20% Cashback'
        WHEN lifetime_spend_inr >= 15000.00 THEN 'Free Delivery on Orders > ₹299'
        ELSE 'Standard Delivery Rates'
    END AS loyalty_benefit
FROM customer_profiles
ORDER BY lifetime_spend_inr DESC;
