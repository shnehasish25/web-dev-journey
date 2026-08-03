-- Insert Menu Items
INSERT INTO menu_items (item_name, category, current_price_inr, is_veg) VALUES
('Ghee Thatte Idli (2 pcs)', 'Breakfast', 65.00, TRUE),
('Crispy Masala Dosa', 'Breakfast', 95.00, TRUE),
('Filter Coffee Degree', 'Beverages', 35.00, TRUE),
('Andhra Chicken Biryani', 'Mains', 280.00, FALSE),
('Paneer Butter Masala', 'Mains', 220.00, TRUE),
('Butter Garlic Naan', 'Breads', 45.00, TRUE);

-- Insert Orders
INSERT INTO orders (customer_name, delivery_address) VALUES
('Kushal Kumar', 'Koramangala 5th Block'),
('Ananya Sen', 'Indiranagar 12th Main'),
('Venkatesh Prasad', 'Jayanagar 4th T Block');

-- Insert Line Items
INSERT INTO order_line_items (order_id, item_id, quantity, unit_price_at_order_inr) VALUES
(1, 1, 2, 65.00), -- 2 x Idli = 130
(1, 2, 1, 95.00), -- 1 x Dosa = 95
(1, 3, 2, 35.00), -- 2 x Coffee = 70. Total = 295

(2, 4, 1, 280.00), -- 1 x Chicken Biryani = 280
(2, 5, 1, 220.00), -- 1 x Paneer = 220
(2, 6, 3, 45.00),  -- 3 x Naan = 135. Total = 635

(3, 2, 2, 95.00),  -- 2 x Dosa = 190
(3, 3, 1, 35.00);  -- 1 x Coffee = 35. Total = 225
