-- Day 311: Atomic UPI Wallet Transfer System
DROP TABLE IF EXISTS wallet_audit_log;
DROP TABLE IF EXISTS digital_wallets;

CREATE TABLE digital_wallets (
    wallet_id SERIAL PRIMARY KEY,
    holder_name VARCHAR(100) NOT NULL,
    upi_id VARCHAR(100) NOT NULL UNIQUE,
    balance_inr NUMERIC(12, 2) NOT NULL DEFAULT 0.00 CHECK (balance_inr >= 0.00)
);

CREATE TABLE wallet_audit_log (
    audit_id SERIAL PRIMARY KEY,
    sender_wallet_id INT REFERENCES digital_wallets(wallet_id),
    receiver_wallet_id INT REFERENCES digital_wallets(wallet_id),
    transfer_amount_inr NUMERIC(10, 2) NOT NULL,
    status VARCHAR(20) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
