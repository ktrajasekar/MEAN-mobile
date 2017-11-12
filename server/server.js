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
      db.collection("feedbackdata").insertOne(customersData, function (err, res) {
        if (err) throw err;
        console.log("one Instered Created");
        db.close();
      });
    });
    res.send('Success');
  });
});
