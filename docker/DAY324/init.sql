-- Initial seed for persistent Postgres volume test
CREATE TABLE IF NOT EXISTS merchant_wallets (
    wallet_id SERIAL PRIMARY KEY,
    merchant_name VARCHAR(100) NOT NULL,
    upi_vpa VARCHAR(100) NOT NULL,
    balance_inr NUMERIC(10, 2) NOT NULL
);

INSERT INTO merchant_wallets (merchant_name, upi_vpa, balance_inr) VALUES
('Meghana Foods Koramangala', 'meghana@icici', 45000.00),
('Asha Tiffins HSR', 'ashatiffins@paytm', 18500.00),
('Truffles St Marks', 'truffles@hdfc', 32000.00);
