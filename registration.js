const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: 'root', 
    database: 'food'
});

// Connect to MySQL
connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId);
    console.log("connected!");

});

app.post('/register', (req, res) => {
    const { fname, lname, email, pwd, cpwd } = req.body;

    if (pwd !== cpwd) {
        return res.status(400).json({ message: "Passwords do not match" });
    }

    const sql = "INSERT INTO registration (first_name, last_name, email, password, confirm_password) VALUES (?, ?, ?, ?, ?)";
    const values = [fname, lname, email, pwd, cpwd];
    connection.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error executing MySQL query: ' + err.stack);
            return res.status(500).json({ message: "An error occurred while processing your request" });
        }
        console.log('New registration added with ID: ' + result.insertId);
        res.status(200).json({ message: "Registration successful" });
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});
