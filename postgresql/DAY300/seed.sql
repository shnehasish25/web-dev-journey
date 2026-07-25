-- Seed data with realistic Indian context
INSERT INTO app_users (full_name, email, phone_number, city) VALUES
('Kushal Kumar', 'kushal.dev@outlook.in', '+919876543210', 'Bengaluru'),
('Priya Sharma', 'priya.s@gmail.com', '+919812345678', 'Bengaluru'),
('Rohan Verma', 'rohan.v@techblr.co', '+919700112233', 'Mysuru'),
('Sneha Patel', 'sneha.patel@zomato-mock.in', '+919655443322', 'Bengaluru');

-- Insert wallets for users
INSERT INTO wallet_accounts (user_id, upi_vpa, balance_inr, is_kyc_verified) VALUES
(1, 'kushal@oksbi', 4500.50, TRUE),
(2, 'priya@okhdfcbank', 12850.75, TRUE),
(3, 'rohan@paytm', 820.00, FALSE),
(4, 'sneha@icici', 24900.00, TRUE);
