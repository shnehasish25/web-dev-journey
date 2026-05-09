// Day 242: Tech Jobs API
const express = require('express');
const app = express();
app.use(express.json());

const jobs = [
  { id: 1, role: 'Frontend Dev', company: 'Swiggy', ctc: '18 LPA', location: 'Bengaluru' },
  { id: 2, role: 'Backend Node.js', company: 'Razorpay', ctc: '22 LPA', location: 'Koramangala' }
];

app.get('/api/jobs', (req, res) => {
  res.json({ total: jobs.length, jobs });
});

app.listen(3011);
