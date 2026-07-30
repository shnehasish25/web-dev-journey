-- Day 303: Quick-Commerce Grocery Catalog
DROP TABLE IF EXISTS grocery_products;

CREATE TABLE grocery_products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(150) NOT NULL,
    category VARCHAR(60) NOT NULL,
    brand VARCHAR(80) NOT NULL,
    price_inr NUMERIC(10, 2) NOT NULL,
    stock_quantity INT NOT NULL DEFAULT 0,
    is_available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
