const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// mysql connection to login and get the company_db database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // replace with your MySQL username IF your default user isn't 'root'
      user: 'root',
      // Replace with your MySQL password
      password: '1234',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
  );

inquirer.prompt([
    {
        type: input, 
    }
]);
  