const {Pool, Client} = require('pg');
const loginCredential = require ('./config');

const pool = new Pool({
  user: 'postgres',
  password: loginCredential,
  host: 'localhost',
  port: 5432,
  database: 'postgres'
});

const client = new Client({
  user: 'postgres',
  password: loginCredential,
  host: 'localhost',
  port: 5432,
  database: 'postgres'
});
client.connect();

module.exports = pool;
module.exports = client;
