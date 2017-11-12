const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
var cors = require('cors')

app.use(cors());

var url = 'mongodb://meanuser:Developer!123@ds257485.mlab.com:57485/mobilemean';

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));



app.listen(port, () => {
  console.log("listing in " + port);
  app.post('/saveform', (req, res) => {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var customersData = req.body;
      const collection = db.collection("feedbackdata");
      collection.insertOne(customersData, function (err, res) {
        if (err) throw err;
      collection.count(function(err, count) {
            console.log("count = %s", count);
          });
          collection.find().toArray(function(err, results) {
            console.log(JSON.stringify(results));
          });
        console.log("1 Data Insereted");
        db.close();
      });
    });
    res.send('Data Added in Database');
  });
});
