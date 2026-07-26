-- Day 301: Strict Schema with Named Constraints
DROP TABLE IF EXISTS kyc_documents;
DROP TABLE IF EXISTS bank_accounts;

CREATE TABLE bank_accounts (
    account_id SERIAL PRIMARY KEY,
    account_number VARCHAR(18) NOT NULL,
    ifsc_code VARCHAR(11) NOT NULL,
    account_holder_name VARCHAR(120) NOT NULL,
    balance_inr NUMERIC(14, 2) NOT NULL DEFAULT 0.00,
    account_type VARCHAR(20) NOT NULL DEFAULT 'SAVINGS',
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    -- Explicit named constraints
    CONSTRAINT uq_account_number UNIQUE (account_number),
    CONSTRAINT chk_ifsc_format CHECK (ifsc_code ~ '^[A-Z]{4}0[A-Z0-9]{6}$'),
    CONSTRAINT chk_positive_balance CHECK (balance_inr >= 0.00),
    CONSTRAINT chk_account_type CHECK (account_type IN ('SAVINGS', 'CURRENT', 'SALARY'))
);

CREATE TABLE kyc_documents (
    document_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    pan_number VARCHAR(10) NOT NULL,
    masked_aadhaar VARCHAR(12) NOT NULL,
    verification_status VARCHAR(20) NOT NULL DEFAULT 'PENDING',
    verified_at TIMESTAMPTZ,

    CONSTRAINT uq_pan_number UNIQUE (pan_number),
    CONSTRAINT chk_pan_format CHECK (pan_number ~ '^[A-Z]{5}[0-9]{4}[A-Z]{1}$'),
    CONSTRAINT chk_aadhaar_mask CHECK (masked_aadhaar ~ '^XXXX-XXXX-[0-9]{4}$'),
    CONSTRAINT chk_kyc_status CHECK (verification_status IN ('PENDING', 'APPROVED', 'REJECTED'))
);
