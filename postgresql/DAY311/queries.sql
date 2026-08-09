-- Day 311: Simulating an Atomic Wallet Transfer

-- Successful transfer: Kushal pays Swiggy ₹450 for lunch
BEGIN;

-- 1. Lock sender wallet row to avoid concurrent race conditions
SELECT balance_inr 
FROM digital_wallets 
WHERE wallet_id = 1 
FOR UPDATE;

-- 2. Deduct amount from sender
UPDATE digital_wallets 
SET balance_inr = balance_inr - 450.00 
WHERE wallet_id = 1;

-- 3. Credit amount to merchant
UPDATE digital_wallets 
SET balance_inr = balance_inr + 450.00 
WHERE wallet_id = 2;

-- 4. Record audit ledger entry
INSERT INTO wallet_audit_log (sender_wallet_id, receiver_wallet_id, transfer_amount_inr, status)
VALUES (1, 2, 450.00, 'SUCCESS');

COMMIT;

-- Verify final balances
SELECT wallet_id, holder_name, upi_id, balance_inr FROM digital_wallets;
SELECT * FROM wallet_audit_log;
