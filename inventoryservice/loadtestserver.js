var express = require('express');
var axios = require('axios');
const app = express();
var dB = require('./model.js');
// var axios = require('axios');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.send('Load Test Server Live');

});

axios.post('http://127.0.0.1:7331/inventory/addUser', {
  userID: 444
  })
  .then(function(response) {
    console.log('LOADTESTSERVER SUCCESSFULLY POSTED USER!')
  })
  .catch(function (error) {
    console.log('LOADTESTSERVER ERROR POSTING USER! ERROR = ', error.response)
  })




axios.post('http://127.0.0.1:7331/inventory/addListings', {
  listing_uuid: 10073337, address: '2993 Oakmont Snood Rd.', listing_price: 50, number_of_rooms: 1, photo_accuracy_rating: 4, country_id: 'USA', city_id: 'San Francisco', user_id: 444
  })
  .then(function(response) {
    console.log('LOADTESTSERVER SUCCESSFULLY POSTED NEW LISTING!')
  })
  .catch(function (error) {
    console.log('LOADTESTSERVER ERROR POSTING NEW LISTING! ERROR = ', error.response)
  })



axios.post('http://127.0.0.1:7331/inventory/bookings', {
  booking_uuid: 91020, booking_created_at: '2018-02-17 07:01:01', booking_start:'2018-01-04', booking_end: '2018-01-06', booking_length: 2, booking_cost_per_night: 74, booking_total_cost: 148, listing_uuid: 100004, photo_accuracy_rating: 'NULL', user_id: 777   
  })
  .then(function(response) {
    console.log('LOADTESTSERVER SUCCESSFULLY POSTED NEW BOOKING!')
  })
  .catch(function (error) {
    console.log('LOADTESTSERVER ERROR POSTING NEW BOOKING! ERROR = ', error.response)
  })






const server = app.listen(3001, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

