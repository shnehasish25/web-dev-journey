-- CTE & Window Function queries for Day 309

-- 1. CTE + DENSE_RANK: Top revenue generator per cuisine category
WITH ranked_cuisines AS (
    SELECT 
        restaurant_name,
        locality,
        cuisine,
        SUM(revenue_inr) AS total_revenue,
        DENSE_RANK() OVER (
            PARTITION BY cuisine 
            ORDER BY SUM(revenue_inr) DESC
        ) AS cuisine_rank
    FROM restaurant_daily_sales
    GROUP BY restaurant_name, locality, cuisine
)
SELECT 
    cuisine,
    cuisine_rank,
    restaurant_name,
    locality,
    CONCAT('₹ ', total_revenue) AS revenue
FROM ranked_cuisines
WHERE cuisine_rank = 1
ORDER BY total_revenue DESC;

-- 2. Day-over-Day Revenue Change using LAG()
SELECT 
    restaurant_name,
    sale_date,
    revenue_inr AS today_revenue,
    LAG(revenue_inr, 1) OVER (
        PARTITION BY restaurant_name 
        ORDER BY sale_date
    ) AS previous_day_revenue,
    ROUND(
        (revenue_inr - LAG(revenue_inr, 1) OVER (PARTITION BY restaurant_name ORDER BY sale_date)) 
        * 100.0 / NULLIF(LAG(revenue_inr, 1) OVER (PARTITION BY restaurant_name ORDER BY sale_date), 0), 
        2
    ) AS growth_percentage
FROM restaurant_daily_sales
ORDER BY restaurant_name, sale_date;
