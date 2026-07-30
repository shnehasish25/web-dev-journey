-- Query drills for Day 303

-- 1. Insert with RETURNING clause
INSERT INTO grocery_products (product_name, category, brand, price_inr, stock_quantity)
VALUES ('Filter Coffee Powder 200g', 'Beverages', 'Cothas', 120.00, 50)
RETURNING product_id, product_name, price_inr;

-- 2. ILIKE search (case-insensitive brand or product search)
SELECT product_id, product_name, brand, price_inr
FROM grocery_products
WHERE product_name ILIKE '%nandini%' OR brand ILIKE '%amul%';

-- 3. Price range filtering with BETWEEN and category IN list
SELECT product_name, category, brand, price_inr, stock_quantity
FROM grocery_products
WHERE category IN ('Dairy', 'Beverages')
  AND price_inr BETWEEN 25.00 AND 200.00
ORDER BY price_inr ASC;

-- 4. Pagination: Page 2 (items 6 to 10 sorted by price descending)
SELECT product_id, product_name, price_inr, stock_quantity
FROM grocery_products
WHERE is_available = TRUE
ORDER BY price_inr DESC
LIMIT 5 OFFSET 5;
