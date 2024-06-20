const app = require('./soham');
const con = require('./database');
const token = require('./jwt');
const bp = require('body-parser');

app.use(bp.json());

//API to get Champion Subscription Packages
app.get("/getChampionSubscriptionPackages", (req, res)=>{
    var cspID = 5; //User Input
    let sql = `CALL getChampionSubscriptionPackages(${cspID})`;
    let query = con.query(sql, (err, results)=>{
        if(err)
            return console.log(err);
        return console.log("Details of Champion Subscription Packages: ", results);   
    });
});

//API to get Champions' Verification
app.get("/getChampionsVerification", (req, res)=>{
    var champID = 1; //User Input
    let sql = `CALL getChampionsVerification(${champID})`;
    let query = con.query(sql, (err, results)=>{
        if(err)
            return console.log(err);
        return console.log("Champion Verification Details: ", results);
    });
});

//API to show end user
app.get("/getEndUser", (req, res)=>{
    var userID = 1; //User Input
    let sql = `CALL getEndUser(${userID})`;
    let query = con.query(sql, (err, results)=>{
        if(err)
            return console.log(err);
        return console.log("End User Details: ", results);
    });
});

//API to show Inv Stores
app.get("/getInvStores", (req, res)=>{
    var storeID = 3; //User Input
    let sql = `CALL getInvStores(${storeID})`;
    let query = con.query(sql, (err, results)=>{
        if(err)
            return console.log(err);
        return console.log("Inv Store Details: ", results);
    });
});

//API to Inv Unit Conversion
app.get("/getInvUnitConversion", (req, res)=>{
    var iuconvID = 7; //User Input
    let sql = `CALL getInvUnitConversion(${iuconvID})`;
    let query = con.query(sql, (err, results)=>{
        if(err)
            return console.log(err);
        return console.log("Results of unit conversion: ", results);
    });
});

//API to show an item's Bill Of Material
app.get("/getItemBOM", (req, res)=>{
    var mitemBomID = 3; //User Input
    let sql = `CALL getItemBOM(${mitemBomID})`;
    let query = con.query(sql, (err, results)=>{
        if(err)
            return console.log(err);
        return console.log("Bill Of Materials: ", results);
    });
});

//API to get Party details
app.get("/getParty", (req, res)=>{
    var partyID = 16; //User Input
    var partyType = 1; //User Input
    let sql = `CALL getParty(${partyID}, ${partyType})`;
    let query = con.query(sql, (err, results)=>{
        if(err)
            return console.log(err);
        return console.log("Party Details: ", results);
    });
});

//API to show Party Shipping Location
app.get("/getPartyShippingLocation", (req, res)=>{
    var mpslID = 2; //User Input
    let sql = `CALL getPartyShippingLocation(${mpslID})`;
    let query = con.query(sql, (err, results)=>{
        if(err)
            return console.log(err);
        return console.log("Party Shipping Location Details: ", results);
    });
});

//API to show User Group Priviledges
app.get("/getUserGroupPriviledges", (req, res)=>{
    var ugpmID = 6; //User Input
    let sql = `CALL getUserGroupPriviledges(${ugpmID})`;
    let query = con.query(sql, (err, results)=>{
        if(err)
            return console.log(err);
        return console.log("User Group Priviledges: ", results);
    });
});

//API to show User Priviledges
app.get("/getUserPriviledges", (req, res)=>{
    var upmodID = 21; //User Input
    let sql = `CALL getUserPriviledges(${upmodID})`;
    let query = con.query(sql, (err, results)=>{
        if(err)
            return console.log(err);
        return console.log("User Priviledges: ", results);
    });
});

//API to update Inv Store
app.put("/updateInvStore", (req, res)=>{
    var storeID = 0;
    con.query(`select count(*) from master_inv_store into storeID`, (err)=>{
        if(err)
            throw err;
    });
    storeID += 1;
    var storeName = "Cake Links"   //Get from user
    var storeCode = "C105"  //User input
    var mobile_1 = "7459275957" //User input
    let query = con.query(`CALL updateInvStore(${storeID}, ${storeName}, ${storeCode}, ${mobile_1})`, (err)=>{
        if(err)
            return console.log(error);
        return console.log("Inv Store Updated.");
    });
});

//API to update Party Master
app.put("/updatePartyMaster", (req, res)=>{
    var partyID = 0;
    con.query(`select count(*) from master_party into partyID`, (err)=>{
        if(err)
            throw err;
    });
    partyId += 1;
    var partyName = "Searce"; //User input
    var partyPrintName = "Searce Group"; //User input
    var add_1 = "South Delhi"; //User input
    var add_2 = "C.R. Park"; //User input
    var land_mark = "Kaali Mandir"; //User input
    let query = con.query(`CALL updatePartyMaster`, (err)=>{
        if(err)
            return console.log(err);
        return console.log("Party Master updated.");
    });
});

//API to update Vendor details
app.put("/updateVendor", (req, res)=>{
    var vendorID = 0;
    con.query(`select count(*) from co_master_vendors into vendorID`, (err)=>{
        if(err)
            throw err;
    });
    vendorID += 1;
    var companyName = "Seimans"; //User input
    var add1 = "203, Banerghatta Road"; //User input
    var add2 = "Bangalore, Karnataka"; //User input
    var land_mark = "Banerghatta National Park, Gate 4"; //User input
    let query = con.query(`CALL updateVendor(${vendorID}, ${add1}, ${add2}, ${land_mark})`, (err)=>{
        if(err)
            return console.log(err);
        return console.log("Vendor Master Updated.");
    });
});

//API to add a user priviledge
app.put("/addUserPriviledge", (req, res)=>{
    var upmodID = 0;
    con.query(`select count(*) from user_privileges_module into upmodID`, (err)=>{
        if(err)
            throw err;
    });
    upmodID += 1;
    var refID = req.params.ref_id;
    var allowedModuleCodes = req.params.allowed_module_codes;
    var entryBy = req.params.entry_by;
    var entryTime = req.params.entry_time;
    var updateBy = req.params.update_by;
    var updateTime = req.params.update_time;
    let query = con.query(`CALL addUserPriviledge(${upmodID}, ${refID}, ${allowedModuleCodes}, ${entryBy}, ${entryTime}, ${updateBy}, ${updateTime})`, (err)=>{
        if(err)
            return console.log(err);
        return console.log("New record inserted into User Priviledges.");
    });
});

//API to delete a city
app.delete("/deleteCity", (req, res)=>{
    var cityID = req.params.city_id;
    let query = con.query(`CALL deleteCity(${cityID})`, (err)=>{
        if(err)
            return console.log("Could not delete! ", err);
        return console.log("Deleted successfully.");
    });
});

//API to delete user group priviledge
app.delete("/deleteUserGroupPriviledge", (req, res)=>{
    var ugpmID = req.params.ugpm_id;
    let query = con.query(`CALL deleteUserGroupPriviledge(${ugpmID})`, (err)=>{
        if(err)
            return console.log("Could not delete! ", err);
        return console.log("Deleted successfully.");
    });
});

//API to delete Payment Gateway Option
app.delete("/delete_pg_option", (req, res)=>{
    var pgoID = req.params.pgo_id;
    let query = con.query(`CALL delete_pg_option(${pgoID})`, (err)=>{
        if(err)
            return console.log("Could not delete! ", err);
        return console.log("Deleted successfully.");
    });
});

