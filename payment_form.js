const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 1025; 

// Create a connection pool to MySQL Workbench
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'food' 
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-payment', (req, res) => {
  const { full_name, pincode, email, address, payment_mode } = req.body;

  pool.query('INSERT INTO payment_form (full_name, pincode, email, address, payment_mode) VALUES (?, ?, ?, ?, ?)', 
              [full_name, pincode, email, address, payment_mode], 
              (error, results, fields) => {
    if (error) {
      console.error('Error inserting data into payment_form table: ' + error.stack);
      res.status(500).send('Error inserting data into payment_form table');
      return;
    }
    console.log('Data inserted into payment_form table.');
    res.status(200).send('Data inserted into payment_form table');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
