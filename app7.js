
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

// MySQL 8.0 Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'thabitha_jobconnect'
});

db.connect((err) => {
    if (err) {
        console.log('Database Connection Error:', err.message);
    } else {
        console.log('MySQL Database Connected Successfully!');
    }
});

// Home Page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Test Route
app.get('/api/test', (req, res) => {
    res.json({
        message: 'Welcome to Thabitha JobConnect!'
    });
});

// Server Start
app.listen(3000, () => {
    console.log('Thabitha JobConnect Server Started');
    console.log('http://localhost:3000');
});






















