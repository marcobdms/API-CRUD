// db.js
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'marco',
  database: 'mydb11'
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to the database: ' + error.stack);
    return;
  }

  console.log('Connection Succesfully!');
});

module.exports = connection;
