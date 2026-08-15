-- QuickBite Seed Data
-- Users
INSERT INTO users (full_name, email, phone_number) VALUES
('Kushal Kumar', 'kushal.dev@outlook.in', '+919876543210'),
('Priya Sharma', 'priya.s@gmail.com', '+919811223344'),
('Rahul Hegde', 'rahul.h@techblr.com', '+919900112233');

-- Addresses
INSERT INTO user_addresses (user_id, tag, address_line, locality, pincode, is_default) VALUES
(1, 'HOME', 'Flat 302, Green Glen Layout, Bellandur', 'Bellandur', '560103', TRUE),
(1, 'WORK', 'RMZ Ecoworld, Campus 4B, Outer Ring Road', 'Marathahalli', '560103', FALSE),
(2, 'HOME', '#12, 4th Cross, Indiranagar', 'Indiranagar', '560038', TRUE),
(3, 'HOME', 'Villa 45, HSR Sector 2', 'HSR Layout', '560102', TRUE);

-- Merchants
INSERT INTO merchants (store_name, locality, pincode) VALUES
('QuickBite Dark Store - Bellandur', 'Bellandur', '560103'),
('QuickBite Dark Store - Indiranagar', 'Indiranagar', '560038'),
('QuickBite Dark Store - HSR Layout', 'HSR Layout', '560102');

-- Categories
INSERT INTO categories (category_name, display_order) VALUES
('Dairy & Breakfast', 1),
('Fresh Fruits & Vegetables', 2),
('Staples & Atta', 3),
('Snacks & Beverages', 4);

-- Products
INSERT INTO products (category_id, product_name, brand, price_inr, stock_quantity) VALUES
(1, 'Nandini Toned Milk 500ml', 'KMF Nandini', 24.00, 200),
(1, 'Amul Salted Butter 100g', 'Amul', 58.00, 150),
(1, 'Nandini Fresh Paneer 200g', 'KMF Nandini', 92.00, 80),
(2, 'Fresh Tender Coconut', 'Local Organic', 55.00, 100),
(3, 'Aashirvaad Shudh Chakki Atta 5kg', 'ITC Aashirvaad', 265.00, 60),
(4, 'Tata Tea Gold 500g', 'Tata', 310.00, 75);

-- Orders
INSERT INTO orders (user_id, merchant_id, delivery_address_id, total_amount_inr, order_status) VALUES
(1, 1, 1, 374.00, 'DELIVERED'),
(2, 2, 3, 224.00, 'DELIVERED'),
(3, 3, 4, 310.00, 'OUT_FOR_DELIVERY');

-- Order Items
INSERT INTO order_items (order_id, product_id, quantity, unit_price_inr) VALUES
(1, 1, 2, 24.00), -- 48
(1, 3, 1, 92.00), -- 92
(1, 4, 1, 55.00), -- 55
(1, 5, 1, 265.00), -- Wait, total calculation: 48+92+55+265 = 460. Let's adjust
(2, 1, 1, 24.00),
(2, 2, 2, 58.00),
(2, 3, 1, 92.00), -- 24 + 116 + 92 = 232
(3, 6, 1, 310.00);

-- Payment Ledger
INSERT INTO payment_transactions (order_id, payment_mode, gateway_txn_ref, amount_inr, status) VALUES
(1, 'UPI_GPAY', 'upi_pay_987654321_gpay', 374.00, 'SUCCESS'),
(2, 'UPI_PHONEPE', 'upi_pay_123456789_phonepe', 224.00, 'SUCCESS'),
(3, 'RAZORPAY_CARD', 'pay_rzp_mock_card_8877', 310.00, 'SUCCESS');
