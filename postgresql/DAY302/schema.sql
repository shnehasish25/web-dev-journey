-- Day 302: Foreign Keys & Referential Integrity
DROP TABLE IF EXISTS food_orders;
DROP TABLE IF EXISTS restaurant_branches;
DROP TABLE IF EXISTS restaurants;
DROP TABLE IF EXISTS customers;

CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL UNIQUE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE restaurants (
    restaurant_id SERIAL PRIMARY KEY,
    brand_name VARCHAR(100) NOT NULL,
    cuisine_type VARCHAR(50) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE restaurant_branches (
    branch_id SERIAL PRIMARY KEY,
    restaurant_id INT NOT NULL,
    locality VARCHAR(80) NOT NULL,
    city VARCHAR(50) DEFAULT 'Bengaluru',
    pincode VARCHAR(6) NOT NULL,

    CONSTRAINT fk_branch_restaurant 
        FOREIGN KEY (restaurant_id) 
        REFERENCES restaurants(restaurant_id) 
        ON DELETE CASCADE
);

CREATE TABLE food_orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INT NOT NULL,
    branch_id INT NOT NULL,
    total_amount_inr NUMERIC(10, 2) NOT NULL CHECK (total_amount_inr > 0),
    order_status VARCHAR(20) DEFAULT 'PLACED',
    ordered_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,

    -- Explicit Foreign Key Constraints
    CONSTRAINT fk_order_customer 
        FOREIGN KEY (customer_id) 
        REFERENCES customers(customer_id) 
        ON DELETE RESTRICT,

    CONSTRAINT fk_order_branch 
        FOREIGN KEY (branch_id) 
        REFERENCES restaurant_branches(branch_id) 
        ON DELETE RESTRICT
);

-- Index foreign keys for join performance
CREATE INDEX idx_orders_customer_id ON food_orders(customer_id);
CREATE INDEX idx_orders_branch_id ON food_orders(branch_id);
