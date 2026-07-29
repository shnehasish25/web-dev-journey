-- Insert Customers
INSERT INTO customers (full_name, phone) VALUES
('Kushal Kumar', '+919876543210'),
('Aditi Rao', '+919123456789'),
('Naveen Gowda', '+919988776655');

-- Insert Restaurants & Branches
INSERT INTO restaurants (brand_name, cuisine_type) VALUES
('Rameshwaram Cafe', 'South Indian'),
('Meghana Foods', 'Andhra Biryani'),
('Truffles', 'Continental & Burgers');

INSERT INTO restaurant_branches (restaurant_id, locality, pincode) VALUES
(1, 'Indiranagar 100ft Road', '560038'),
(1, 'JP Nagar 2nd Phase', '560078'),
(2, 'Koramangala 5th Block', '560095'),
(3, 'St. Marks Road', '560001');

-- Insert Orders
INSERT INTO food_orders (customer_id, branch_id, total_amount_inr, order_status) VALUES
(1, 1, 340.00, 'DELIVERED'),
(1, 3, 780.00, 'DELIVERED'),
(2, 2, 220.00, 'PREPARING'),
(3, 4, 560.50, 'PLACED');
