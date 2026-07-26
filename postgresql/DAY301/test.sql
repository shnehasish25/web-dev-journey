-- Testing constraint enforcement

-- 1. Querying valid accounts
SELECT account_id, account_holder_name, ifsc_code, balance_inr, account_type
FROM bank_accounts;

-- 2. Intentionally attempting invalid balance insert (Should fail with chk_positive_balance)
DO $$
BEGIN
    BEGIN
        INSERT INTO bank_accounts (account_number, ifsc_code, account_holder_name, balance_inr)
        VALUES ('99999999999999', 'HDFC0001234', 'Invalid User', -500.00);
    EXCEPTION WHEN check_violation THEN
        RAISE NOTICE 'SUCCESS: Negative balance was blocked by chk_positive_balance!';
    END;
END $$;

-- 3. Intentionally testing invalid PAN card format
DO $$
BEGIN
    BEGIN
        INSERT INTO kyc_documents (user_id, pan_number, masked_aadhaar)
        VALUES (4, 'INVALID_PAN', 'XXXX-XXXX-9999');
    EXCEPTION WHEN check_violation THEN
        RAISE NOTICE 'SUCCESS: Bad PAN format was blocked by chk_pan_format!';
    END;
END $$;
