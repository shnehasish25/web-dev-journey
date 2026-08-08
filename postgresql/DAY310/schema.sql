-- Day 310: Quick-Commerce Delivery Timelines & SLA
DROP TABLE IF EXISTS delivery_orders;

CREATE TABLE delivery_orders (
    order_id SERIAL PRIMARY KEY,
    customer_phone VARCHAR(15) NOT NULL,
    customer_email VARCHAR(100) NOT NULL,
    placed_at TIMESTAMPTZ NOT NULL,
    rider_assigned_at TIMESTAMPTZ,
    delivered_at TIMESTAMPTZ,
    target_delivery_minutes INT DEFAULT 15,
    bill_amount_inr NUMERIC(8, 2) NOT NULL
);
