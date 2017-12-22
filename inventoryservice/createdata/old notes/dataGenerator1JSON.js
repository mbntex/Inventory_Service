var faker = require('faker');
// var uniqid = require('uniqid');
// var UUID = require('pure-uuid');
//var randomName = faker.name.findName(); // Rowan Nikolaus



var userIdGenerator = function(i) {
  // var randomName = faker.name.findName();
  // var uniqidMade = uniqid();
  // return uniqidMade;
    return i;
};






var listingsGenerator = function(j, userIdMax) {
  var currentListing = {};
  currentListing.listing_uuid = j;
  currentListing.address = faker.address.streetAddress(); 
  currentListing.listing_price = 25 + Math.floor(Math.random() * 125);
  currentListing.number_of_rooms = 1 + Math.floor(Math.random() * 4);
  var photoAccuracyCalc = Math.floor(Math.random() * 12);
  var photo_accuracy_rating = Math.floor(Math.random() * 6);
  if (photoAccuracyCalc < 4) {
    currentListing.photo_accuracy_rating = null; 
  } else {
    currentListing.photo_accuracy_rating = photo_accuracy_rating; 
  };
  currentListing.country_id = faker.address.country();
  currentListing.city_id = faker.address.city();
  currentListing.user_id = Math.floor(Math.random() * userIdMax);
  return JSON.stringify(currentListing);
};
//OUTPUT
//   {"listing_uuid":0,"address":"443 Nikolaus Gardens","listing_price":77,"number_of_rooms":2,"photo_accuracy_rating":null,"country_id":"Christmas Island","city_id":"Aileenstad","user_id":4},



var m = 1;
var d = 1;
var listinguuid;
 var bookingsGenerator = function(listingID, bookingID, userIdMax, makeNewReset) {
  //MAKE BOOKING OBJECT
  if (makeNewReset === true) { m = 1; d = 1;};
  for (m; m < 13; m++ ) {
  // if (m === 12 && d > 28) { m = 1; d = 1; break; }
    for (d; d < 30; d++) {
 // if (newListingTime === true) { m = 1; d = 1; break;}

      var currentBooking = {};
      currentBooking.listing_uuid = listingID;
      currentBooking.booking_uuid = bookingID;
      currentBooking.user_id = Math.floor(Math.random() * userIdMax);
      var photo_accuracy_rating = Math.floor(Math.random() * 6);
      var photoAccuracyCalc = Math.floor(Math.random() * 12);
      if (photoAccuracyCalc < 4) {
        currentBooking.photo_accuracy_rating = null; 
      } else {
        currentBooking.photo_accuracy_rating = photo_accuracy_rating; 
      };

      //MAKE BOOKING DATES AND INCREMENT
      //YYYY-MM-DD HH:MM:SS,
      MM = m;
      DD = d;
      if (MM < 10) { MM = '0' + MM };
      if (DD < 10) { DD = '0' + DD };
      var bookingDateStartRef = `2018-${MM}-${DD}`;
      currentBooking.booking_created_at = `2018-${MM}-${DD} 07:01:01`;
      currentBooking.booking_start_date = bookingDateStartRef;
      // var daysLong = Math.ceil(Math.random() * 5);
      var daysLong = 2;
      currentBooking.booking_length = daysLong;
      
      d += daysLong;
      DD = d;
      var bookingDateEndRef = `2018-${MM}-${DD}`; 
      currentBooking.booking_end_date = bookingDateEndRef;
      if (d > 28 && m !== 12) { d = 1; m ++;};
      if (d > 28 && m === 12) { break; };
      return JSON.stringify(currentBooking);
    }

    if (d > 28 && m === 12) { break; };
  }

};
//OUTPUT
//{"listing_uuid":2,"booking_uuid":2119,"user_id":2,"photo_accuracy_rating":1,"booking_created_at":"2018-09-17 07:01:01","booking_start_date":"2018-09-17","booking_length":2,"booking_end_date":"2018-09-19"},








module.exports.userIdGenerator = userIdGenerator;
module.exports.listingsGenerator = listingsGenerator;
module.exports.bookingsGenerator = bookingsGenerator;

