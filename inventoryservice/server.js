var express = require('express');
const app = express();
var dB = require('./model.js');
// var axios = require('axios');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.send('Hello Michael');

});

app.post('/inventory/addUser', function(req, res){
  console.log('addUser Post received! BODY = ', req.body);
  dB.addUserId({}, ()=>{ res.send() });
});




app.post('/inventory/addListings', function(req, res){
  console.log('addListings Post received!BODY = ', req.body);
  dB.addListing({}, ()=>{ res.send() });
});



app.post('/inventory/bookings', function(req, res){
  console.log('addBooking Post received! BODY = ', req.body);
  //axios
  //get object from johnny
  //update relevant bookings SET
  //when complete, notify cliff at events at /events/updated_bookings
  // dB.testSaveName(11223344, function() { console.log('Saved User ID!'); res.send('Saved User ID!')});
  console.log('bookings Post received! BODY = ', req.body);
  dB.addBooking({}, ()=>{ res.send() });
});




app.post('/inventory/test', function(req, res){
  //axios
  //get object from johnny
  //update relevant bookings SET
  //when complete, notify cliff at events at /events/updated_bookings
  console.log('test Post received! BODY = ', req.body);
  res.send('Got it')
});


app.get('/inventory/new_listings_request', function(req, res){
  //axios
  //send new listings to client relevant searchinfo only to which endpoint? -- confirm this
  //when complete, notify cliff at events service at /events/new_listing  
});

//NEW LISTINGS ENDPOINT?



const server = app.listen(7331, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});












