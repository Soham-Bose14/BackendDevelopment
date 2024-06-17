const mysql = require('mysql');
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "soham",
  database: "library_management"
});

con.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      process.exit(1); // Exit the application with an error code
    }
    console.log("Connected to MySQL!");
  });

  // Test the connection by querying the database
//Select all books
con.query('SELECT * FROM AVAILABLE_BOOKS', (err, results) => {
    if (err) {
      return console.log('Error executing test query:', err);
    }
    return console.log('Test query result:', results);
  });

module.exports = con;