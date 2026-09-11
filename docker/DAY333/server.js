const express = require('express');
const { createClient } = require('redis');

const app = express();
const PORT = process.env.PORT || 3000;
const REDIS_HOST = process.env.REDIS_HOST || 'localhost';

const redisClient = createClient({
  url: `redis://${REDIS_HOST}:6379`
});

redisClient.on('error', (err) => console.error('Redis Error:', err));

app.get('/api/menu/:restaurant', async (req, res) => {
  const { restaurant } = req.params;
  const cacheKey = `menu:${restaurant.toLowerCase()}`;

  try {
    // 1. Check Redis Cache
    const cachedData = await redisClient.get(cacheKey);
    if (cachedData) {
      return res.json({
        source: 'CACHE_HIT (Redis)',
        latency: '1ms',
        data: JSON.parse(cachedData)
      });
    }

    // 2. Cache MISS: Simulate DB query
    const dbData = {
      restaurant: restaurant,
      speciality: 'Hyderabadi & Andhra Biryani',
      city: 'Bengaluru',
      topItem: 'Chicken Boneless Biryani',
      priceInr: 340.00
    };

    // 3. Save to Redis with 60 second TTL
    await redisClient.set(cacheKey, JSON.stringify(dbData), { EX: 60 });

    res.json({
      source: 'CACHE_MISS (Simulated DB Query)',
      latency: '45ms',
      data: dbData
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

async function start() {
  await redisClient.connect();
  console.log("Connected to Redis container!");
  app.listen(PORT, '0.0.0.0', () => console.log(`Menu API listening on port ${PORT}`));
}

start();
