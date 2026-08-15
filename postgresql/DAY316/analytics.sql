-- Day 316: Capstone Business Intelligence Queries

-- 1. Customer Lifetime Spend & Order Count Dashboard
SELECT 
    u.user_id,
    u.full_name,
    u.phone_number,
    COUNT(o.order_id) AS total_orders_placed,
    CONCAT('₹ ', COALESCE(SUM(o.total_amount_inr), 0)) AS total_lifetime_spent,
    MAX(o.ordered_at) AS last_order_date
FROM users u
LEFT JOIN orders o ON u.user_id = o.user_id
GROUP BY u.user_id, u.full_name, u.phone_number
ORDER BY SUM(o.total_amount_inr) DESC NULLS LAST;

-- 2. Top-Selling Products by Revenue (Using CTE & Window function)
WITH product_revenue AS (
    SELECT 
        p.product_id,
        p.product_name,
        p.brand,
        c.category_name,
        SUM(oi.quantity) AS units_sold,
        SUM(oi.quantity * oi.unit_price_inr) AS gross_sales_inr
    FROM products p
    JOIN categories c ON p.category_id = c.category_id
    JOIN order_items oi ON p.product_id = oi.product_id
    GROUP BY p.product_id, p.product_name, p.brand, c.category_name
)
SELECT 
    product_name,
    brand,
    category_name,
    units_sold,
    CONCAT('₹ ', gross_sales_inr) AS revenue,
    DENSE_RANK() OVER (ORDER BY gross_sales_inr DESC) AS revenue_rank
FROM product_revenue;

-- 3. Dark Store Performance Breakdown
SELECT 
    m.merchant_id,
    m.store_name,
    m.locality,
    COUNT(o.order_id) AS orders_fulfilled,
    CONCAT('₹ ', COALESCE(SUM(o.total_amount_inr), 0)) AS total_revenue
FROM merchants m
LEFT JOIN orders o ON m.merchant_id = o.merchant_id
GROUP BY m.merchant_id, m.store_name, m.locality
ORDER BY total_revenue DESC;
