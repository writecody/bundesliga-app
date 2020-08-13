const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const pool = require('./db_connection/db');

// middleware
app.use(cors());
app.use(express.json());

// ROUTES

// get all teams
app.get('/teams', async (req, res) => {
  try {
    const allTeams = await pool.query('SELECT * FROM team;');
    res.json(allTeams.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// get one team
app.get('/teams/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const team = await pool.query('SELECT * FROM team WHERE id = $1', [id]);
    res.json(team.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});