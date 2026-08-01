-- Day 305: Daily UPI Merchant Transactions Schema
DROP TABLE IF EXISTS upi_transactions;

CREATE TABLE upi_transactions (
    txn_id SERIAL PRIMARY KEY,
    merchant_name VARCHAR(100) NOT NULL,
    locality VARCHAR(60) NOT NULL,
    payment_mode VARCHAR(30) NOT NULL, -- 'GPay', 'PhonePe', 'Paytm', 'Cred'
    amount_inr NUMERIC(10, 2) NOT NULL,
    txn_status VARCHAR(20) NOT NULL,   -- 'SUCCESS', 'FAILED', 'REFUNDED'
    txn_timestamp TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
