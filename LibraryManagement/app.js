const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
app.use(express.json());
const port = 8000;


const options = {
  hostname: 'localhost',
  path: '/posts',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};


const getPosts = () => {
  let data = '';

  const request = http.request(options, (response) => {
    response.setEncoding('utf8');
    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      console.log(data);
    });
  });

  request.on('error', (error) => {
    console.error(error);
  });

  request.end();
};

getPosts();

const mysql = require('mysql');
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "soham",
  database: "library_management"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

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

//Add a new book
app.post("/available_books", (req, res)=>{
  let post = {Book_ID: available_books.length+1, BookName: "${req.params.BookName}", BookType: "${req.params.BookType}", Author: "${req.params.Author}", RentPerDay: "${req.params.RentPerDay}"};   //req.params;
  let sql = "INSERT INTO available_books SET ?";
  let query = con.query(sql, post, (err)=>{
    if(err){
      throw err;
    }
    res.send("New book added.");
  });
});

//Select a book based on author
app.get("/available_books/:Author", (req, res)=>{
  let sql = `SELECT * FROM available_books where Author = ${req.params.Author}`;
  let query = con.query(sql, (err)=>{
    if(err){
      throw err;
    };
  });
});

//Update a book's details
app.patch("/updateBook/:BookName", (req, res)=>{
  let newAuthor = "Ruskin Bond"
  let sql = `UPDATE available_books SET Author = ${newAuthor} where BookName = ${req.params.BookName}`;
  let query = con.query(sql, (err)=>{
    if(err){
      throw err;
    }
    res.send("Book details updated.")
  });
});

//Delete a book
app.delete("/deleteBook/:BookName", (req, res)=>{
  let sql = `DELETE FROM available_books WHERE BookName = ${req.params.BookName}`;
  let query = con.query(sql, (err)=>{
    if(err){
      throw err;
    }
    res.send("Book deleted.");
  });
});

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));  //For serving static files
app.use(express.urlencoded());



//START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started succesfully on port ${port}`);
});
