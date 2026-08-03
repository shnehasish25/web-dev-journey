-- Day 307: Many-to-Many Food Ordering Schema
DROP TABLE IF EXISTS order_line_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS menu_items;

CREATE TABLE menu_items (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(120) NOT NULL,
    category VARCHAR(50) NOT NULL,
    current_price_inr NUMERIC(8, 2) NOT NULL CHECK (current_price_inr > 0),
    is_veg BOOLEAN DEFAULT TRUE
);

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    delivery_address TEXT NOT NULL,
    status VARCHAR(30) DEFAULT 'CONFIRMED',
    ordered_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Junction Table for N:M Relationship
CREATE TABLE order_line_items (
    order_id INT NOT NULL REFERENCES orders(order_id) ON DELETE CASCADE,
    item_id INT NOT NULL REFERENCES menu_items(item_id) ON DELETE RESTRICT,
    quantity INT NOT NULL CHECK (quantity > 0),
    unit_price_at_order_inr NUMERIC(8, 2) NOT NULL,

    PRIMARY KEY (order_id, item_id)
);
