const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

var url = ''; 

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.listen(port, () => {
  console.log("listing in " + port);
  app.post('/saveform', (req, res) => {
    var formdata = req.body;
    res.send('Success');
  });
});
