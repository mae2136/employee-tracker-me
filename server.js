// Credential Encryption
require('dotenv').config();
// Dependencies
const mysql = require(`mysql2`);
const Business = require(`./helpers/business`)

// Connect to database with hidden credentials
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: process.env.DB_USERNAME,
        // MySQL password
        password: process.env.DB_KEY,
        // MYSQL database
        database: process.env.DB
    },
    console.log(`Connected to the employees_db database.`)
);

const business = new Business(db);

business.init();