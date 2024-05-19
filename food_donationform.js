const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MySQL database connection configuration
const connection = mysql.createConnection({
    host: 'localhost', // Replace with your MySQL host
    user: 'root', // Replace with your MySQL username
    password: 'root', // Replace with your MySQL password
    database: 'food' // Replace with your database name
});

// Connect to MySQL
connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId);
});

// Handle form submissions
app.post('/submit-form', (req, res) => {
    const formData = {
        full_name: req.body.name,
        food_type: req.body.food,
        quantity: req.body.quantity,
        pincode: req.body.pincode,
        address: req.body.address,
        pickup_date: req.body.date,
        pickup_time: req.body.time
    };

    // Insert form data into the food_donationform table
    connection.query('INSERT INTO food_donationform SET ?', formData, (error, results, fields) => {
        if (error) {
            console.error('Error inserting data: ' + error.message);
            return res.status(500).json({ message: "An error occurred while processing your request" });
        }
        console.log('Inserted data into food_donationform table.');
        res.status(200).json({ message: "Form data submitted successfully" });
    });
});

// Start the server
const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});


