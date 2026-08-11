-- Day 312: Benchmarking Queries Before & After Indexes

-- 1. Analyze query BEFORE adding indexes (Notice 'Seq Scan' in the plan)
EXPLAIN ANALYZE 
SELECT * FROM payment_ledger 
WHERE user_id = 42 
ORDER BY created_at DESC;

-- 2. Create Composite B-Tree Index
CREATE INDEX idx_ledger_user_created ON payment_ledger (user_id, created_at DESC);

-- 3. Create Partial Index for active pending transactions
CREATE INDEX idx_ledger_pending ON payment_ledger (txn_id) WHERE status = 'PENDING';

-- 4. Re-run query AFTER index creation (Notice 'Index Scan' or 'Bitmap Index Scan' and faster execution)
EXPLAIN ANALYZE 
SELECT * FROM payment_ledger 
WHERE user_id = 42 
ORDER BY created_at DESC;

-- 5. Querying pending transactions utilizing partial index
EXPLAIN ANALYZE
SELECT txn_id, amount_inr, payment_gateway
FROM payment_ledger
WHERE status = 'PENDING';
