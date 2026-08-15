-- Day 316: QuickBite Production Quick-Commerce Database Schema
DROP TABLE IF EXISTS payment_transactions CASCADE;
DROP TABLE IF EXISTS order_items CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS merchants CASCADE;
DROP TABLE IF EXISTS user_addresses CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- 1. Users table
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    full_name VARCHAR(120) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    phone_number VARCHAR(15) NOT NULL UNIQUE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT chk_indian_phone CHECK (phone_number ~ '^\+91[6-9][0-9]{9}$')
);

-- 2. Delivery addresses
CREATE TABLE user_addresses (
    address_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    tag VARCHAR(20) DEFAULT 'HOME', -- 'HOME', 'WORK', 'OTHER'
    address_line TEXT NOT NULL,
    locality VARCHAR(80) NOT NULL,
    pincode VARCHAR(6) NOT NULL,
    is_default BOOLEAN DEFAULT FALSE
);

-- 3. Merchants / Dark Stores
CREATE TABLE merchants (
    merchant_id SERIAL PRIMARY KEY,
    store_name VARCHAR(120) NOT NULL,
    locality VARCHAR(80) NOT NULL,
    city VARCHAR(50) DEFAULT 'Bengaluru',
    pincode VARCHAR(6) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE
);

-- 4. Product Categories
CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(60) NOT NULL UNIQUE,
    display_order INT DEFAULT 0
);

-- 5. Products catalog
CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    category_id INT NOT NULL REFERENCES categories(category_id),
    product_name VARCHAR(150) NOT NULL,
    brand VARCHAR(80) NOT NULL,
    price_inr NUMERIC(10, 2) NOT NULL CHECK (price_inr > 0),
    stock_quantity INT NOT NULL DEFAULT 0 CHECK (stock_quantity >= 0),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 6. Orders Master
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(user_id) ON DELETE RESTRICT,
    merchant_id INT NOT NULL REFERENCES merchants(merchant_id) ON DELETE RESTRICT,
    delivery_address_id INT NOT NULL REFERENCES user_addresses(address_id),
    total_amount_inr NUMERIC(10, 2) NOT NULL CHECK (total_amount_inr >= 0),
    order_status VARCHAR(30) DEFAULT 'PLACED',
    ordered_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT chk_order_status CHECK (order_status IN ('PLACED', 'PACKING', 'OUT_FOR_DELIVERY', 'DELIVERED', 'CANCELLED'))
);

-- 7. Order Items (Junction table with snapshot price)
CREATE TABLE order_items (
    order_id INT NOT NULL REFERENCES orders(order_id) ON DELETE CASCADE,
    product_id INT NOT NULL REFERENCES products(product_id) ON DELETE RESTRICT,
    quantity INT NOT NULL CHECK (quantity > 0),
    unit_price_inr NUMERIC(10, 2) NOT NULL CHECK (unit_price_inr > 0),

    PRIMARY KEY (order_id, product_id)
);

-- 8. Payment Ledger
CREATE TABLE payment_transactions (
    transaction_id SERIAL PRIMARY KEY,
    order_id INT NOT NULL REFERENCES orders(order_id) ON DELETE RESTRICT,
    payment_mode VARCHAR(30) NOT NULL, -- 'UPI_GPAY', 'UPI_PHONEPE', 'RAZORPAY_CARD', 'COD'
    gateway_txn_ref VARCHAR(100) NOT NULL UNIQUE,
    amount_inr NUMERIC(10, 2) NOT NULL,
    status VARCHAR(20) DEFAULT 'SUCCESS',
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Strategic Indexes
CREATE INDEX idx_orders_user_date ON orders(user_id, ordered_at DESC);
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_orders_pending ON orders(order_id) WHERE order_status IN ('PLACED', 'PACKING');
