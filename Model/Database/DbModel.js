
const {Pool} = require('pg');
require('dotenv').config();
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
    // host : process.env.DB_HOST,
    // user : process.env.DB_USER,
    // port : process.env.DB_PORT,
    // database : process.env.DB_DATABASE,
    // password : process.env.DB_PASSWORD

    connectionString : connectionString
})

module.exports = pool;