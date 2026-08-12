-- Day 313: Razorpay Webhook Event Store with JSONB & Arrays
DROP TABLE IF EXISTS razorpay_webhook_events;
DROP TABLE IF EXISTS delivery_partner_profiles;

CREATE TABLE razorpay_webhook_events (
    event_id SERIAL PRIMARY KEY,
    event_type VARCHAR(60) NOT NULL, -- 'payment.captured', 'payment.failed', 'refund.processed'
    payload JSONB NOT NULL,
    received_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE delivery_partner_profiles (
    partner_id SERIAL PRIMARY KEY,
    partner_name VARCHAR(100) NOT NULL,
    spoken_languages TEXT[] NOT NULL,
    service_pincodes VARCHAR(6)[] NOT NULL,
    current_status VARCHAR(20) DEFAULT 'ONLINE'
);

-- GIN index for blazing fast JSONB queries
CREATE INDEX idx_webhooks_payload ON razorpay_webhook_events USING gin (payload);
