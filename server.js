// Credential Encryption
require('dotenv').config();
// Dependencies
const inquirer = require(`inquirer`);
const mysql = require(`mysql2`);

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

function init() {
    console.log(`🚀 Welcome to the employee tracker. Let's get started! 🚀`);
    // Inquirer starting commands go here
}

// Start program in command line
init();