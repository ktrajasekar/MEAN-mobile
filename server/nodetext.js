var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/testdatabase";

MongoClient.connect(url, function(err,db){
    if(err) throw err;
    var customersData ={Name : "Rajasekar", Empid:"548754"};
    db.collection("customers").insertOne(customersData, function(err, res){
        if(err) throw err;
        console.log("one Instered Created");
        db.close(); 
    }); 
    
    });