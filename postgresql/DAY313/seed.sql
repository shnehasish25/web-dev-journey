-- Insert realistic Razorpay Webhook JSON payloads
INSERT INTO razorpay_webhook_events (event_type, payload) VALUES
('payment.captured', '{
    "entity": "event",
    "account_id": "acc_BLR_1029",
    "event": "payment.captured",
    "payload": {
        "payment": {
            "entity": {
                "id": "pay_O9s8d7f6g5",
                "amount": 45000,
                "currency": "INR",
                "status": "captured",
                "method": "upi",
                "vpa": "kushal@oksbi",
                "email": "kushal.dev@outlook.in",
                "contact": "+919876543210"
            }
        }
    }
}'::jsonb),
('payment.captured', '{
    "entity": "event",
    "account_id": "acc_BLR_1029",
    "event": "payment.captured",
    "payload": {
        "payment": {
            "entity": {
                "id": "pay_X1y2z3a4b5",
                "amount": 128000,
                "currency": "INR",
                "status": "captured",
                "method": "netbanking",
                "bank": "HDFC",
                "email": "priya.s@gmail.com"
            }
        }
    }
}'::jsonb);

-- Insert delivery partner array data
INSERT INTO delivery_partner_profiles (partner_name, spoken_languages, service_pincodes) VALUES
('Manjunath S', ARRAY['Kannada', 'English', 'Hindi'], ARRAY['560034', '560038', '560095']),
('Syed Farhan', ARRAY['Hindi', 'Urdu', 'English', 'Kannada'], ARRAY['560001', '560025', '560027']),
('Karthik Raja', ARRAY['Tamil', 'Kannada', 'English'], ARRAY['560103', '560066', '560037']);
