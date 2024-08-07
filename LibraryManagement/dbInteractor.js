const dbInteractor = {};
const con = require('./database');

dbInteractor.getPrimeCustomers = async(championType=6)=>{
    let sql = "";
    if(championType==5)
        sql += "CALL getPrimeCustomersBySupChamps()";
    else
        sql += "CALL getPrimeCustomersBySellers()";
    
    let result = {};
    try{
        result = await con.query(sql, filters);
        console.log(result[0]);
        return result[0];
    }
    catch(err){
        return console.log(err);
    }
};

dbInteractor.getReferredSupChamps = async()=>{
    let sql = `CALL getRefSupChamps()`;
    let results = {};
    try{
        results = await con.query(sql);
        console.log(results[0]);
        return results[0];
    }
    catch(err){
        return console.log(err);
    }
};


dbInteractor.getSellerSusbcription = async()=>{
    let sql = `CALL getSellerSubscription()`;
    let results = {};
    try{
        results = await con.query(sql);
        console.log(results[0]);
        return results[0];
    }
    catch(err){
        return console.log(err);
    }
};


dbInteractor.getSellerOffersBySupChamps = async()=>{
    let sql = `CALL getSellerOffersBySupChamps()`;
    let results = {};
    try{
        results = await con.query(sql);
        console.log(results[0]);
        return results[0];
    }
    catch(err){
        return console.log(err);
    }
};


dbInteractor.getEnrolledChampions = async()=>{
    let sql = `CALL getEnrolledChampions()`;
    let results = {};
    try{
        results = await con.query(sql);
        console.log(results[0]);
        return results[0];
    }
    catch(err){
        return console.log(err);
    }
};


dbInteractor.getReferredSellers = async()=>{
    let sql = `CALL getReferredSellers()`;
    let results = {};
    try{
        results = await con.query(sql);
        console.log(results[0]);
        return results[0];
    }
    catch(err){
        console.log(err);
    }
};


dbInteractor.getEncashedOffers = async()=>{
    let sql = `CALL getEncashedOffers()`;
    let results = {};
    try{
        results = await con.query(sql);
        console.log(results);
        return results[0];
    }
    catch(err){
        console.log(err);
    }
};


dbInteractor.getOfferWiseReport = async()=>{
    let sql = `CALL getOfferWiseReport()`;
    let results = {};
    try{
        results = await con.query(sql);
        console.log(results[0]);
        return results[0];
    }
    catch(err){
        console.log(err);
    }
};


dbInteractor.getOfferWalletReport = async()=>{
    let sql = `CALL getOfferWalletReport()`;
    let results = {};
    try{
        results = await con.query(sql);
        console.log(results[0]);
        return results[0];
    }
    catch(err){
        console.log(err);
    }
};


dbInteractor.getReferredChampions = async()=>{
    let sql = `CALL getReferredChampions()`;
    let results = {};
    try{
        results = await con.query(sql);
        console.log(results[0]);
        return results[0];
    }
    catch(err){
        console.log(err);
    }
};


dbInteractor.getSellerSubscriptionByChampion = async()=>{
    let sql = `CALL getSellerSubscriptionByChampion()`;
    let results = {};
    try{
        results = await con.query(sql);
        console.log(results[0]);
        return results[0];
    }
    catch(err){
        console.log(err);
    }
};


dbInteractor.getSellerOffersByChampion = async()=>{
    let sql = `CALL getSellerOfferByChampion()`;
    let results = {};
    try{
        results = await con.query(sql);
        console.log(results[0]);
        return results[0];
    }
    catch(err){
        console.log(err);
    }
};

module.exports = dbInteractor;
