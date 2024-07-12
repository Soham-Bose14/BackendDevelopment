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
    controller.getPrimeCustomers(5);
  }
  else{
    res.json({
      success: false,
      message: 'Invalid Credentials'
    });
  }
    
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
    controller.getReferredSupChamps();
  }
  else{
    res.json({
      success: false,
      message: 'Invalid Credentials'
    });
  }

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
    controller.getSellerSubscription();
  }
  else{
    res.json({
      success: false,
      message: 'Invalid Credentials'
    });
  }
   
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
    controller.getSellerOffersBySupChamps();
  }
  else{
    res.json({
      success: false,
      message: 'Invalid Credentials'
    });
  }
    
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
    controller.getEnrolledChampions();
  }
  else{
    res.json({
      success: false,
      message: 'Invalid Credentials'
    });
  }

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
    controller.getPrimeCustomers(0);
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
    controller.getReferredSellers();
  }
  else{
    res.json({
      success: false,
      message: 'Invalid Credentials'
    });
  }
    
    
});

//API to get encashed offers
app.get("/getEncashedOffers", (req, res)=>{
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
    controller.getEncashedOffers();
  }
  else{
    res.json({
      success: false,
      message: 'Invalid Credentials'
    });
  }
});

//API to get Offer Wise Report
app.get("/getOfferWalletReport", (req, res)=>{
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
    controller.getOfferWiseReport();
  }
  else{
    res.json({
      success: false,
      message: 'Invalid Credentials'
    });
  }
});

//API to get Offer Wallet Report
app.get("/getOfferWiseReport", (req, res)=>{
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
    controller.getOfferWalletReport();
  }
  else{
    res.json({
      success: false,
      message: 'Invalid Credentials'
    });
  }
});


//API to get Prime Customers emrolled by Champions
app.get("/getPrimeCustomersByChampions", (req, res)=>{
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
    controller.getPrimeCustomers(6);
  }
  else{
    res.json({
      success: false,
      message: 'Invalid Credentials'
    });
  }
});

//API to get Referred Champions
app.get("/getReferredChampions", (req, res)=>{
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
    controller.getReferredChampions();
  }
  else{
    res.json({
      success: false,
      message: 'Invalid Credentials'
    });
  }
});

//API to get Seller Subscription
app.get("/getSellerSubscriptionByChampion", (req, res)=>{
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
    controller.getSellerSubscriptionByChampion();
  }
  else{
    res.json({
      success: false,
      message: 'Invalid Credentials'
    });
  }
});

//API to get Seller Offers By Champion
app.get("/getSellerOffersByChampion", (req, res)=>{
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
    controller.getSellerOffersByChampion();
  }
  else{
    res.json({
      success: false,
      message: 'Invalid Credentials'
    });
  }
});
