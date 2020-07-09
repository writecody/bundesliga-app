const {Pool, Client} = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'thetaoistheway4688',
  host: 'localhost',
  port: 5432,
  database: 'bundesliga'
});

const client = new Client({
  user: 'postgres',
  password: 'thetaoistheway4688',
  host: 'localhost',
  port: 5432,
  database: 'bundesliga'
});
client.connect();

module.exports = pool;
module.exports = client;

