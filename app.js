const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
const app = express();
const port = 3000;

// Connection URL
// const url = 'mongodb://localhost:27017';

// Database Name
// const dbName = 'DropParty';

// Use connect method to connect to the server
// MongoClient.connect(url, function(err, client) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
 
//   const db = client.db(dbName);
 
//   client.close();
// });

app.get('/', (req, res) => res.send('Hello World!'));

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.use('/', router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));