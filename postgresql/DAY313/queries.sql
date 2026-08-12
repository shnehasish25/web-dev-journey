-- Day 313: Querying JSONB and Arrays

-- 1. Extract values from nested JSONB using ->>
SELECT 
    event_id,
    event_type,
    payload #>> '{payload,payment,entity,id}' AS payment_id,
    payload #>> '{payload,payment,entity,method}' AS payment_method,
    CONCAT('₹ ', (payload #>> '{payload,payment,entity,amount}')::NUMERIC / 100.0) AS amount_inr,
    payload #>> '{payload,payment,entity,vpa}' AS customer_vpa
FROM razorpay_webhook_events;

-- 2. JSONB containment query with @> (Find all UPI payments)
SELECT event_id, event_type
FROM razorpay_webhook_events
WHERE payload @> '{"payload": {"payment": {"entity": {"method": "upi"}}}}';

-- 3. Querying Arrays: Find delivery partners who serve Bellandur (560103)
SELECT partner_name, spoken_languages, service_pincodes
FROM delivery_partner_profiles
WHERE '560103' = ANY(service_pincodes);

-- 4. Find partners who speak both Kannada and English
SELECT partner_name, spoken_languages
FROM delivery_partner_profiles
WHERE service_pincodes @> ARRAY['560038']::varchar[];
