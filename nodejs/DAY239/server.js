// Day 239: express.Router()
const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (req, res) => res.json({ route: 'All Users' }));
router.get('/:id', (req, res) => res.json({ user: req.params.id }));

app.use('/api/users', router); // Mounted at /api/users
app.listen(3008);
