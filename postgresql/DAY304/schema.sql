-- Day 304: Customer Delivery Profiles & Spending Tiers
DROP TABLE IF EXISTS customer_profiles;

CREATE TABLE customer_profiles (
    profile_id SERIAL PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    primary_phone VARCHAR(15) NOT NULL,
    alternate_phone VARCHAR(15), -- Can be NULL
    address_line TEXT NOT NULL,
    landmark VARCHAR(100),       -- Can be NULL
    pincode VARCHAR(6) NOT NULL,
    lifetime_spend_inr NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
    referral_code VARCHAR(30)    -- Can be NULL
);
