require('newrelic');

// Add this to the VERY top of the first file loaded in your app
var apm = require('elastic-apm-node').start({
  // Set required app name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
  appName: 'InventoryService',
  // Use if APM Server requires a token
  secretToken: '',
  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: ''
})




var express = require('express');
var axios = require('axios');
const app = express();
var dB = require('./model.js');
// var axios = require('axios');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.send('Hello Michael, The Inventory Server Is Live');

});

app.post('/inventory/addUser', function(req, res){
  console.log('addUser Post received! BODY = ', req.body);
  // var userID = 999991113
  // res.send();
  var userID = req.body.userID;
  dB.addUserId(userID, ()=>{ res.send() });
});




app.post('/inventory/addListings', function(req, res){
  console.log('addListings Post received!BODY = ', req.body);
  // var obj = {listing_uuid: 10073333, address: '2993 Oak Rd.', listing_price: 101, number_of_rooms: 2, photo_accuracy_rating: 3, country_id: 'USA', city_id: 'San Francisco', user_id: 444};
  // res.send();
  var newListing = req.body;
  dB.addListing(newListing, ()=>{ res.send() });
});



app.post('/inventory/bookings', function(req, res){
  console.log('addBooking Post received! BODY = ', req.body);
  //axios
  //get object from johnny
  //update relevant bookings SET
  //when complete, notify cliff at events at /events/updated_bookings
  // dB.testSaveName(11223344, function() { console.log('Saved User ID!'); res.send('Saved User ID!')});

  console.log('bookings Post received! BODY = ', req.body);
  var newBooking = req.body;
  dB.addBooking(newBooking, ()=>{ res.send() });

  // var obj = {booking_uuid: 900019, booking_created_at: '2018-01-05 07:01:01', booking_start:'2018-01-05', booking_end: '2018-01-07', booking_length: 2, booking_cost_per_night: 78, booking_total_cost: 148, listing_uuid: 2, photo_accuracy_rating: 'NULL', user_id: 444 };
  // dB.addBooking(obj, ()=>{ res.send() });




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
  res.send('tested');

});

// axios.get('/test123')
// .then((res)=>{ res.send('GOTTEN!') })
// .catch((error)=> { console.log('ERROR') });



const server = app.listen(7331, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});












