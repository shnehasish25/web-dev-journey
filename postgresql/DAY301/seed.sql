-- Valid Indian banking seed records
INSERT INTO bank_accounts (account_number, ifsc_code, account_holder_name, balance_inr, account_type) VALUES
('50100234567890', 'HDFC0001234', 'Kushal Kumar', 45200.50, 'SAVINGS'),
('30987654321011', 'SBIN0004567', 'Priya Sharma', 115000.00, 'SALARY'),
('91827364501234', 'ICIC0000890', 'Rohan Verma', 8500.00, 'SAVINGS'),
('10293847561029', 'KKBK0008123', 'Meghana Foods Indiranagar', 345000.00, 'CURRENT');

-- Valid KYC records
INSERT INTO kyc_documents (user_id, pan_number, masked_aadhaar, verification_status, verified_at) VALUES
(1, 'ABCDE1234F', 'XXXX-XXXX-9012', 'APPROVED', CURRENT_TIMESTAMP),
(2, 'FGHIJ5678K', 'XXXX-XXXX-4532', 'APPROVED', CURRENT_TIMESTAMP),
(3, 'KLMNO9012P', 'XXXX-XXXX-1123', 'PENDING', NULL);
