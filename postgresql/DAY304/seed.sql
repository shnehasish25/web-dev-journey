-- Seed customers with various nullable fields
INSERT INTO customer_profiles 
(customer_name, primary_phone, alternate_phone, address_line, landmark, pincode, lifetime_spend_inr, referral_code) 
VALUES
('Kushal Kumar', '+919876543210', NULL, 'Flat 302, Green Glen Layout, Bellandur', 'Behind Central Mall', '560103', 18450.00, 'SWIGGY50'),
('Ayesha Khan', '+919811223344', '+919811223355', '#45, 8th Cross, Wilson Garden', NULL, '560027', 4200.00, NULL),
('Deepak Shenoy', '+919900112233', NULL, 'Villa 12, Adarsh Palm Meadows, Whitefield', 'Near Forum Value Mall', '560066', 89200.00, 'PREMIUM_USER'),
('Meera Nair', '+919744332211', '+919744332299', '104, B-Block, Brigade Gateway, Malleshwaram', NULL, '560055', 750.00, NULL),
('Vikram Rathore', '+919633221100', NULL, '#12, 1st Main, Koramangala 4th Block', 'Opposite Sony World Signal', '560034', 31500.00, 'KORA100');
