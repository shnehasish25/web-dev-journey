-- Seed users
INSERT INTO registered_users (full_name, email, phone, city, monthly_orders_count, total_spent_inr) VALUES
('Kushal Kumar', 'kushal@dev.in', '+919876543210', 'Bengaluru', 18, 4850.00),
('Priya Sharma', 'priya@tech.in', '+919811223344', 'Bengaluru', 24, 8920.00),
('Arjun Nair', 'arjun@kerala.in', '+919744112233', 'Kochi', 6, 1400.00);

-- Create Materialized View for city-level monthly business metrics
CREATE MATERIALIZED VIEW mv_monthly_revenue AS
SELECT 
    city,
    COUNT(*) AS total_customers,
    SUM(monthly_orders_count) AS total_orders,
    SUM(total_spent_inr) AS gross_revenue_inr
FROM registered_users
GROUP BY city;

CREATE UNIQUE INDEX idx_mv_revenue_city ON mv_monthly_revenue(city);
