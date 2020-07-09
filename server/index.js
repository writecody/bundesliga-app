const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const pool = require('./db');

// middleware
app.use(cors());
app.use(express.json());

// routes

// get all teams
app.get('/teams', async (req, res) => {
  try {
    const allTeams = await pool.query('SELECT * FROM team;');
    res.json(allTeams.rows);
  } catch (error) {
    console.error('error.message');
  }
});

// get one team


app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});