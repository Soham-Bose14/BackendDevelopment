// const app = require('./soham');
// const con = require('./database');
// const token = require('./jwt');
// const bp = require('body-parser');

// app.use(bp.json());

// const userDetails = {
//   userID: 1,
//   userName: 'narendramodi',
//   password: 'modiagain'
// };

// //Opening home page

// app.get('/', (req, res) => {
//   const {name, pwsd} = req.body;

//   //Authenticate user details
//   if(name === req.username && pswd === req.password){
//     //Generate a new JWT token
//     const token = token(userDetails);
//     res.json({
//       success: true,
//       message: 'Authentication successful!',
//       token: token,
//     });
//   }
//   else{
//     res.json({
//       success: false,
//       message: 'Invalid Credentials'
//     });
//   }
//   res.send('Homepage');
// });

// //Add a new book
// app.post("/addBook", (req, res)=>{
//     let row_count = 0;
//     con.query('SELECT COUNT(*) AS row_count FROM available_books', (err, results) => {
//       if (err) {
//         return console.log('Error executing query:', err);
//       }
//       console.log('Row count:', results[0].row_count);
//     });
    
//     let post = {BookID: row_count+1, BookName: "${req.params.BookName}", Genre: "${req.params.Genre}", Author: "${req.params.Author}", RentPerDay: Int32Array.parse("${req.params.RentPerDay}")};   //req.params;
//     let sql = "INSERT INTO available_books SET ?";
//     let query = con.query(sql, post, (err)=>{
//       if(err){
//         throw err;
//       }
//       res.send("New book added.");
//     });
//   });
  
//   //Select a book based on author
//   app.get("/selectBooks/:Author", (req, res)=>{
//     let sql = `SELECT * FROM available_books where Author = ${req.params.Author}`;
//     let query = con.query(sql, (err)=>{
//       if(err){
//         throw err;
//       };
//     });
//   });
  
//   //Update a book's details
//   app.patch("/updateBook/:BookName", (req, res)=>{
//     let newAuthor = "Ruskin Bond"
//     let sql = `UPDATE available_books SET Author = ${newAuthor} where BookName = ${req.params.BookName}`;
//     let query = con.query(sql, (err)=>{
//       if(err){
//         throw err;
//       }
//       res.send("Book details updated.")
//     });
//   });
  
//   //Delete a book
//   app.delete("/deleteBook/:BookName", (req, res)=>{
//     let sql = `DELETE FROM available_books WHERE BookName = ${req.params.BookName}`;
//     let query = con.query(sql, (err)=>{
//       if(err){
//         throw err;
//       }
//       res.send("Book deleted.");
//     });
//   });
