-- Day 314: Views, Materialized Views & Audit Triggers
DROP TRIGGER IF EXISTS trg_customer_updated_at ON registered_users;
DROP FUNCTION IF EXISTS update_updated_at_column();
DROP MATERIALIZED VIEW IF EXISTS mv_monthly_revenue;
DROP VIEW IF EXISTS v_active_users_public;
DROP TABLE IF EXISTS user_profile_audit;
DROP TABLE IF EXISTS registered_users;

CREATE TABLE registered_users (
    user_id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(120) NOT NULL UNIQUE,
    phone VARCHAR(15) NOT NULL,
    city VARCHAR(50) DEFAULT 'Bengaluru',
    monthly_orders_count INT DEFAULT 0,
    total_spent_inr NUMERIC(10, 2) DEFAULT 0.00,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_profile_audit (
    audit_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    old_city VARCHAR(50),
    new_city VARCHAR(50),
    changed_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Trigger Function to update 'updated_at' column automatically
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    -- Log city changes to audit table
    IF OLD.city IS DISTINCT FROM NEW.city THEN
        INSERT INTO user_profile_audit (user_id, old_city, new_city)
        VALUES (OLD.user_id, OLD.city, NEW.city);
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_customer_updated_at
BEFORE UPDATE ON registered_users
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Public View hiding internal phone/email
CREATE VIEW v_active_users_public AS
SELECT 
    user_id, 
    full_name, 
    city, 
    total_spent_inr, 
    created_at
FROM registered_users
WHERE is_active = TRUE;
