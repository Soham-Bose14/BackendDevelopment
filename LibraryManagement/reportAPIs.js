const app = require('./soham');
const con = require('./database');
const token = require('./jwt');
const bp = require('body-parser');
const controller = require('./controller');

app.use(bp.json());

const userDetails = {
  userID: 1,
  userName: 'narendramodi',
  password: 'modiagain'
};

//API to get Prime Customers' (made by Super Champions) details
app.get("/getPrimeCustomersBySupChamps", (req, res)=>{
    const {name, pwsd} = req.body;

  //Authenticate user details
  if(name === req.username && pswd === req.password){
    //Generate a new JWT token
    const token = token(userDetails);
    res.json({
      success: true,
      message: 'Authentication successful!',
      token: token,
    });
  }
  else{
    res.json({
      success: false,
      message: 'Invalid Credentials'
    });
  }
  controller.getPrimeCustomers(5);
    
});

//API to get Referred Super Champion details
app.get("/getRefSupChamps", (req, res)=>{
    const {name, pwsd} = req.body;

  //Authenticate user details
  if(name === req.username && pswd === req.password){
    //Generate a new JWT token
    const token = token(userDetails);
    res.json({
      success: true,
      message: 'Authentication successful!',
      token: token,
    });
  }
  else{
    res.json({
      success: false,
      message: 'Invalid Credentials'
    });
  }
  controller.getReferredSupChamps();

});

//API to get Seller Subscription
app.get("/getSellerSubscription", (req, res)=>{
    const {name, pwsd} = req.body;

  //Authenticate user details
  if(name === req.username && pswd === req.password){
    //Generate a new JWT token
    const token = token(userDetails);
    res.json({
      success: true,
      message: 'Authentication successful!',
      token: token,
    });
  }
  else{
    res.json({
      success: false,
      message: 'Invalid Credentials'
    });
  }
   controller.getSellerSubscription();
   
});

//API to get Seller Offers By Super Champions
app.get("/getSellerOffersBySupChamps", (req, res)=>{
    const {name, pwsd} = req.body;

  //Authenticate user details
  if(name === req.username && pswd === req.password){
    //Generate a new JWT token
    const token = token(userDetails);
    res.json({
      success: true,
      message: 'Authentication successful!',
      token: token,
    });
  }
  else{
    res.json({
      success: false,
      message: 'Invalid Credentials'
    });
  }
  controller.getSellerOffersBySupChamps();
    
});

//API to get enrolled champions' list
app.get("/getEnrolledChampions", (req, res)=>{
    const {name, pwsd} = req.body;

  //Authenticate user details
  if(name === req.username && pswd === req.password){
    //Generate a new JWT token
    const token = token(userDetails);
    res.json({
      success: true,
      message: 'Authentication successful!',
      token: token,
    });
  }
  else{
    res.json({
      success: false,
      message: 'Invalid Credentials'
    });
  }
    controller.getEnrolledChampions();

});

//API to get Prime Customers By Sellers
app.get("/getPrimeCustomersBySellers", (req, res)=>{
  const {name, pwsd} = req.body;

  //Authenticate user details
  if(name === req.username && pswd === req.password){
    //Generate a new JWT token
    const token = token(userDetails);
    res.json({
      success: true,
      message: 'Authentication successful!',
      token: token,
    });
  }
  else{
    res.json({
      success: false,
      message: 'Invalid Credentials'
    });
  }
    let sql = `CALL getPrimeCustomersBySellers()`;
    let query = con.query(sql, (err, results)=>{
        if(err)
            return console.log(err);
        return console.log("Details of Prime Customers made by Sellers", results);
    });
    controller.getPrimeCustomers(0);
});

//API to get Referred Sellers
app.get("/getReferredSellers", (req, res)=>{
  const {name, pwsd} = req.body;

  //Authenticate user details
  if(name === req.username && pswd === req.password){
    //Generate a new JWT token
    const token = token(userDetails);
    res.json({
      success: true,
      message: 'Authentication successful!',
      token: token,
    });
  }
  else{
    res.json({
      success: false,
      message: 'Invalid Credentials'
    });
  }
    controller.getReferredSellers();
    
});

