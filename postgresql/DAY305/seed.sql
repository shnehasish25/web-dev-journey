-- Seed transactions across Bengaluru localities
INSERT INTO upi_transactions (merchant_name, locality, payment_mode, amount_inr, txn_status) VALUES
('Asha Tiffins', 'HSR Layout', 'PhonePe', 140.00, 'SUCCESS'),
('Asha Tiffins', 'HSR Layout', 'GPay', 220.00, 'SUCCESS'),
('Asha Tiffins', 'HSR Layout', 'Paytm', 95.00, 'SUCCESS'),
('Asha Tiffins', 'HSR Layout', 'PhonePe', 350.00, 'FAILED'),
('Meghana Foods', 'Koramangala', 'Cred', 1450.00, 'SUCCESS'),
('Meghana Foods', 'Koramangala', 'GPay', 890.00, 'SUCCESS'),
('Meghana Foods', 'Koramangala', 'PhonePe', 2150.00, 'SUCCESS'),
('Third Wave Coffee', 'Indiranagar', 'Cred', 540.00, 'SUCCESS'),
('Third Wave Coffee', 'Indiranagar', 'GPay', 420.00, 'SUCCESS'),
('Third Wave Coffee', 'Indiranagar', 'Paytm', 310.00, 'REFUNDED'),
('Empire Restaurant', 'Church Street', 'PhonePe', 1280.00, 'SUCCESS'),
('Empire Restaurant', 'Church Street', 'GPay', 2450.00, 'SUCCESS'),
('Empire Restaurant', 'Church Street', 'GPay', 820.00, 'SUCCESS'),
('Nandhini Deluxe', 'Koramangala', 'PhonePe', 980.00, 'SUCCESS'),
('Nandhini Deluxe', 'Koramangala', 'Paytm', 1150.00, 'SUCCESS');
