-- Schema definition for Day 300: Relational Fundamentals
-- Testing table creation with strict data types

DROP TABLE IF EXISTS wallet_accounts;
DROP TABLE IF EXISTS app_users;

-- User profile table
CREATE TABLE app_users (
    user_id SERIAL PRIMARY KEY,
    full_name VARCHAR(120) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    phone_number VARCHAR(15) NOT NULL,
    city VARCHAR(60) DEFAULT 'Bengaluru',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- User wallet table for mock UPI transactions
CREATE TABLE wallet_accounts (
    wallet_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    upi_vpa VARCHAR(100) NOT NULL UNIQUE,
    balance_inr NUMERIC(12, 2) DEFAULT 0.00,
    daily_limit_inr NUMERIC(10, 2) DEFAULT 25000.00,
    is_kyc_verified BOOLEAN DEFAULT FALSE,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
