-- Seed realistic quick-commerce delivery timelines
INSERT INTO delivery_orders 
(customer_phone, customer_email, placed_at, rider_assigned_at, delivered_at, bill_amount_inr) 
VALUES
('+919876543210', 'kushal.dev@gmail.com', '2026-03-01 19:10:00+05:30', '2026-03-01 19:12:30+05:30', '2026-03-01 19:23:45+05:30', 420.00),
('+919811223344', 'priya.sharma@yahoo.co.in', '2026-03-01 19:30:00+05:30', '2026-03-01 19:31:10+05:30', '2026-03-01 19:42:00+05:30', 210.00),
('+919900112233', 'rohit.v@techcorp.in', '2026-03-01 20:05:00+05:30', '2026-03-01 20:10:00+05:30', '2026-03-01 20:28:15+05:30', 890.50), -- Missed SLA (> 15 mins)
('+919744332211', 'ananya.s@blrstartup.com', '2026-03-02 08:15:00+05:30', '2026-03-02 08:16:00+05:30', '2026-03-02 08:26:30+05:30', 175.00);
