const express = require('express');
const app = express();
const http = require('http');
const con = require('./database');

app.use(express.json());
const port = 8000 || process.env.port;


const options = {
  hostname: 'localhost',
  port:8000, 
  path: '/',
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
  console.log(error);
});

request.end();
};

getPosts();

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));  //For serving static files
app.use(express.urlencoded());



//START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started succesfully on port ${port}`);
});
 module.exports = app;
