const { Client } = require('pg')
require('custom-env').env();

const user = process.env.PG_USER;
const password = process.env.PG_PASSWORD;
const port = process.env.PG_PORT;
const host = process.env.PG_HOST;
const db = process.env.PG_DB;

const connectionString = process.env.DATABASE_URL;
console.log(connectionString);

const client = new Client(connectionString)

module.exports = client;