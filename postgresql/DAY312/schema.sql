-- Day 312: Indexing High-Volume Transaction Ledger
DROP TABLE IF EXISTS payment_ledger;

CREATE TABLE payment_ledger (
    txn_id BIGSERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    payment_gateway VARCHAR(30) NOT NULL, -- 'Razorpay', 'PayU', 'Juspay'
    pincode VARCHAR(6) NOT NULL,
    amount_inr NUMERIC(10, 2) NOT NULL,
    status VARCHAR(20) NOT NULL,          -- 'SUCCESS', 'FAILED', 'PENDING'
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
