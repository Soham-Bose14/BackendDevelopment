const dbModel = require('./dbInteractor');
const { response } = require('./soham');
const util = require('./utility');

const controller = {};

controller.getPrimeCustomers = async(req, res, championType)=>{
    try{
        const filters = requestDataParser(req, true);
        let primeCustomersObtained = await dbModel.getPrimeCustomers(championType);
        let primeCustomers = [];
        for(primeCustomer of primeCustomersObtained){
            let pcObj = {};
            pcObj.primeCustomerID = util.encrypt(primeCustomer.Customer_ID.toString());
            pcObj.Name = primeCustomer.Name;
            pcObj.DateOfSubscription = primeCustomer.Date_Of_Subscription;
            primeCustomers.push(pcObj);
        }
        if(primeCustomers.length > 0){
            res.status(200).json({
                responseStatus:"Ok",
                primeCustomers:primeCustomers
            });
        }
        else{
            res.status(200).json({
                responseStatus:"Ok",
                message:"Oops! No record found",
                primeCustomers:[]
            });
        }
    }
    catch(err){
        console.log(err);
    }
};

controller.getReferredSupChamps = async(req, res)=>{
    try{
        let obtainedSupChamps = await dbModel.getReferredSupChamps();
        let refSupChamps = [];
        for(supChamp of obtainedSupChamps){
            let obj = {};
            obj.supChampID = util.encrypt(supChamp.Super_Champion_ID.toString());
            obj.supChampName = supChamp.Super_Champion_Name;
            obj.subscriptionDate = supChamp.Susbcription_Date;
            obj.Commission = supChamp.Commission;
            refSupChamps.push(obj);
        }
        if(refSupChamps.length > 0){
            res.status(200).json({
                responseStatus:"Ok",
                ReferredSuperChampions:refSupChamps
            });
        }
        else{
            res.status(200).json({
                responseStatus:"Ok",
                message:"Oops! No record found",
                ReferredSuperChampions:[]
            });
        }
    }
    catch(err){
        console.log(err);
    }
};


controller.getSellerSubscription = async(req, res)=>{
    try{
        let obtainedSellerSubscritpions = await dbModel.getSellerSusbcription();
        let sellerSubscriptions = [];
        for(sellerSub of obtainedSellerSubscritpions){
            let sellerObj = {};
            sellerObj.championType = sellerSub.Champion_Type;
            sellerObj.championID = util.encrypt(sellerSub.Champion_ID.toString());
            sellerObj.sellerID = util.encrypt(sellerSub.Seller_ID.toString());
            sellerObj.subscriptionEndDate = util.encrypt(sellerSub.Subscription_End_Date.toString());
            sellerSubscriptions.push(sellerObj);
        }
        if(sellerSubscriptions.length > 0){
            res.status(200).json({
                responseStatus:"Ok",
                SellerSubscriptions:sellerSubscriptions
            });
        }
        else{
            res.status(200).json({
                responseStatus:"Ok",
                message:"Sorry! No record was found",
                SellerSubscriptions:[]
            });
        }
    }
    catch(err){
        console.log(err);
    }
};


controller.getSellerOffersBySupChamps = async(req, res)=>{
    try{
        let obtainedSellerOffers = await dbModel.getSellerOffersBySupChamps();
        let sellerOffers = [];
        for(sellerOffer of obtainedSellerOffers){
            sellerObj = {};
            sellerObj.championID = util.encrypt(sellerOffer.Champion_ID.toString());
            sellerObj.sellerID = util.encrypt(sellerOffer.Seller_ID.toString());
            sellerObj.offerName = sellerOffer.Offer_Name;
            sellerObj.offerValidity = sellerOffer.Offer_Validity;
            sellerObj.offerType = sellerOffer.Offer_Type;
            sellerOffers.push(sellerObj);
        }
        if(sellerOffers.length > 0){
            res.status(200).json({
                responseStatus:"Ok",
                SellerOffers:sellerOffers
            });
        }
        else{
            res.status(200).json({
                responseStatus:"Ok",
                message:"Sorry! Couldn't find any record",
                SellerOffers:[]
            });
        }
    }
    catch(err){
        console.log(err);
    }
};


controller.getEnrolledChampions = async(req, res)=>{
    try{
        let obtainedChampions = await dbModel.getEnrolledChampions();
        let enrolledChampions = [];
        for(champ of obtainedChampions){
            champObj = {};
            champObj.superChampionID = util.encrypt(champ.Super_Champion_ID.toString());
            champObj.championID = util.encrypt(champ.Champion_ID.toString());
            champObj.subscriptionEndDate = util.encrypt(champ.Subscription_End_Date);
            champObj.targetsAchieved = util.encrypt(champ.Targets_Achieved.toString());
            champObj.targetBalance = util.encrypt(champ.Target_Balance.toString());
            enrolledChampions.push(champObj);
        }
        if(enrolledChampions.length > 0){
            res.status(200).json({
                responseStatus:"Ok",
                Enrolled_Champions:enrolledChampions
            });
        }
        else{
            res.status(200).json({
                responseStatus:"Ok",
                message:"Sorry boss! Couldn't find any records",
                Enrolled_Champions:[]
            });
        }
    }
    catch(err){
        console.log(err);
    }
};


controller.getReferredSellers = async(req, res)=>{
    try{
        let obtainedSellers = await dbModel.getReferredSellers();
        let referredSellers = [];
        for(seller of obtainedSellers){
            sellerObj = {};
            sellerObj.championID = util.encrypt(seller.Champion_ID.toString());
            sellerObj.sellerID = util.encrypt(seller.Seller_ID.toString());
            sellerObj.referredSellerID = util.encrypt(seller.Referred_Seller_ID.toString());
            sellerObj.categoryType = util.encrypt(seller.Category_Type.toString());
            sellerObj.subscriptionEndDate = util.encrypt(seller.Subscription_End_Date.toString());
            referredSellers.push(sellerObj);
        }
        if(referredSellers.length > 0){
            res.status(200).json({
                responseStatus:"Ok",
                ReferredSellers:referredSellers
            });
        }
        else{
            res.status(200).json({
                responseStatus:"Ok",
                message:"Oops! No records found",
                ReferredSellers:[]
            });
        }
    }
    catch(err){
        console.log(err);
    }
};


module.exports = controller;