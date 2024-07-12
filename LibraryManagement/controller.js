const { off } = require('./database');
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


controller.getEncashedOffers = async(req, res)=>{
    try{
        let obtainedOffers = await dbModel.getEncashedOffers();
        let encashedOffers = [];
        for(offer of obtainedOffers){
            offerObj = {};
            offerObj.champion_id = util.encrypt(offer.Champion_ID.toString());
            offerObj.offer_name = offer.Offer_Name;
            offerObj.offer_start_date = offer.Offer_Start_Date;
            offerObj.offer_type = offer.Offer_Type;
            encashedOffers.push(offerObj);
        }
        if(encashedOffers.length > 0){
            res.status(200).json({
                responseStatus:"Ok",
                encashedOffers:encashedOffers
            });
        }
        else{
            res.status(200).json({
                responseStatus:"Ok",
                message:"Oops! No records found",
                encashedOffers:[]
            });
        }
    }
    catch(err){
        console.log(err);
    }
};


controller.getOfferWiseReport = async(req, res)=>{
    try{
        let offerWiseResults = await dbModel.getOfferWiseReport();
        let offerWiseReport = [];
        for(result of offerWiseResults){
            let obj = {};
            obj.offer_name = result.Offer_Name;
            obj.likes = util.encrypt(result.Likes,toString());
            obj.ratings = util.encrypt(result.Ratings.toString());
            obj.offer_type = result.Offer_Type;
            offerWiseReport.push(obj);
        }
        if(offerWiseReport.length > 0){
            res.status(200).json({
                responseStatus:"Ok",
                offerWiseReport:offerWiseReport
            });
        }
        else{
            res.status(200).json({
                responseStatus:"Ok",
                message:"Oops!Couldn't find any records",
                offerWiseReport:[]
            });
        }
    }
    catch(err){
        console.log(err);
    }
};


controller.getOfferWalletReport = async(req, res)=>{
    try{
        let offerWalletResults = await dbModel.getOfferWalletReport();
        let offerWalletReport = [];
        for(result of offerWalletResults){
            let obj = {};
            obj.offer_name = result.Offer_Name;
            obj.offer_package_purchased = util.encrypt(result.Offer_Package_Purchased.toString());
            obj.balance_offers = util.encrypt(result.Balance_Offers.toString());
            obj.complementary_offers = util.encrypt(result.Complementary_Offers.toString());
            obj.offer_package_end_date = util.encrypt(result.Offer_Package_End_Date.toString());
            obj.offer_type = result.Offer_Type;
            offerWalletReport.push(obj);
        }
        if(offerWalletReport.length > 0){
            res.status(200).json({
                responseStatus:"Ok",
                offerWalletReport:offerWalletReport
            });
        }
        else{
            res.status(200).json({
                responseStatus:"Ok",
                message:"Oops! No records found",
                offerWalletReport:[]
            });
        }
    }
    catch(err){
        console.log(err);
    }
};


controller.getReferredChampions = async(req, res)=>{
    try{
        let referredChampionsObtained = await dbModel.getReferredChampions();
        let referredChampions = [];
        for(rc of referredChampions){
            let rcObj = {};
            rcObj.champion_id = util.encrypt(rc.Champion_ID.toString());
            rcObj.referred_champion_id = util.encrypt(rc.Referred_Champion_ID.toString());
            rcObj.champion_type = rc.Champion_Type;
            rcObj.targets_achieved = util.encrypt(rc.Targets_Achieved.toString());
            rcObj.target_balance = util.encrypt(rc.Target_Balance.toString());
            rcObj.subscription_end_date = util.encrypt(rc.Subscription_End_Date.toString());
            referredChampions.push(rcObj);
        }
        if(referredChampions.length > 0){
            res.status(200).json({
                responseStatus:"Ok",
                referredChampions:referredChampions
            });
        }
        else{
            res.status(200).json({
                responseStatus:"Ok",
                message:"Oops! No records found",
                referredChampions:[]
            });
        }
    }
    catch(err){
        console.log(err);
    }
};


controller.getSellerSubscriptionByChampion = async(req, res)=>{
    try{
        let sellersObtained = await dbModel.getSellerSubscriptionByChampion();
        let sellerList = [];
        for(seller of sellersObtained){
            let sellerObj = {};
            sellerObj.champion_id = util.encrypt(seller.Champion_ID.toString());
            sellerObj.seller_id = util.encrypt(seller.Seller_ID.toString());
            sellerObj.package_type = util.encrypt(seller.Package_Type.toString());
            sellerObj.category_type = seller.Category_Type;
            sellerObj.subscription_end_date = util.encrypt(seller.Subscription_End_Date.toString());
            sellerList.push(sellerObj);
        }
        if(sellerList.length > 0){
            res.status(200).json({
                responseStatus:"Ok",
                sellerList:sellerList
            });
        }
        else{
            res.status(200).json({
                responseStatus:"Ok",
                message:"Oops! No record found",
                sellerList:[]
            });
        }
    }
    catch(err){
        console.log(err);
    }
};


controller.getSellerOffersByChampion = async(req, res)=>{
    try{
        let obtainedSellerOffers = await dbModel.getSellerOffersByChampion();
        let sellerOffers = [];
        for(offer of obtainedSellerOffers){
            offerObj = {};
            offerObj.champion_id = util.encrypt(offer.Champion_ID.toString());
            offerObj.seller_id = util.encrypt(offer.Seller_ID.toString());
            offerObj.offer_type = offer.Offer_Type;
            offerObj.offer_uploads = util.encrypt(offer.Offer_Uploads.toString());
            offerObj.package_end_date = util.encrypt(offer.Package_End_Date.toString());
            sellerOffers.push(offerObj);
        }
        if(sellerOffers.length > 0){
            res.status(200).json({
                responseStatus:"Ok",
                sellerOffers:sellerOffers
            });
        }
        else{
            res.status(200).json({
                responseStatus:"Ok",
                message:"Oops! No record found",
                sellerOffers:[]
            });
        }
    }
    catch(err){
        console.log(err);
    }
};


module.exports = controller;
