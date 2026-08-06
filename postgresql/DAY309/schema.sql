-- Day 309: Restaurant Sales Leaderboard
DROP TABLE IF EXISTS restaurant_daily_sales;

CREATE TABLE restaurant_daily_sales (
    sale_id SERIAL PRIMARY KEY,
    restaurant_name VARCHAR(100) NOT NULL,
    locality VARCHAR(60) NOT NULL,
    cuisine VARCHAR(50) NOT NULL,
    sale_date DATE NOT NULL,
    revenue_inr NUMERIC(10, 2) NOT NULL,
    orders_count INT NOT NULL
);
