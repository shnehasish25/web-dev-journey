-- Testing Referential Integrity

-- 1. Try to insert an order with non-existent customer (Should fail with fk_order_customer)
DO $$
BEGIN
    BEGIN
        INSERT INTO food_orders (customer_id, branch_id, total_amount_inr)
        VALUES (9999, 1, 450.00);
    EXCEPTION WHEN foreign_key_violation THEN
        RAISE NOTICE 'SUCCESS: Blocked order with non-existent customer ID 9999!';
    END;
END $$;

-- 2. Try to delete a customer who has orders (Should fail with RESTRICT)
DO $$
BEGIN
    BEGIN
        DELETE FROM customers WHERE customer_id = 1;
    EXCEPTION WHEN foreign_key_violation THEN
        RAISE NOTICE 'SUCCESS: Blocked deleting customer 1 because active orders exist (ON DELETE RESTRICT)!';
    END;
END $$;

-- 3. Display orders with restaurant and customer info
SELECT 
    o.order_id,
    c.full_name AS customer,
    r.brand_name AS restaurant,
    b.locality,
    CONCAT('₹ ', o.total_amount_inr) AS bill_amount,
    o.order_status
FROM food_orders o
JOIN customers c ON o.customer_id = c.customer_id
JOIN restaurant_branches b ON o.branch_id = b.branch_id
JOIN restaurants r ON b.restaurant_id = r.restaurant_id;
