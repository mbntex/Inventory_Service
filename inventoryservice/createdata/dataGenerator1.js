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
//OUTPUT
//  0,





var listingsGenerator = function(j, userIdMax) {
  listing_uuid = j;
  address = faker.address.streetAddress(); 
  listing_price = 25 + Math.floor(Math.random() * 125);
  number_of_rooms = 1 + Math.floor(Math.random() * 4);
  var photoAccuracyCalc = Math.floor(Math.random() * 12);
  var photo_accuracy_rating = Math.floor(Math.random() * 6);
  if (photoAccuracyCalc < 4) {
    photo_accuracy_rating = ''; 
  } else {
    photo_accuracy_rating = photo_accuracy_rating; 
  };
  country_id = faker.address.country();
  city_id = faker.address.city();
  user_id = Math.ceil(Math.random() * (userIdMax -1));
  return listing_uuid +','+ address +','+ listing_price +','+ number_of_rooms +','+ photo_accuracy_rating +','+ country_id +','+ city_id +','+ user_id;
  //0,187 Kenyatta Springs,47,4,7,4,Cameroon,Miguelmouth,3|
  //listing_uuid | address | listing_price | number_of_rooms | photo_accuracy_rating | country_id | city_id | user_id |

};
//OUTPUT
//   {"listing_uuid":0,"address":"443 Nikolaus Gardens","listing_price":77,"number_of_rooms":2,"photo_accuracy_rating":null,"country_id":"Christmas Island","city_id":"Aileenstad","user_id":4},
//   
//   1,1506 Gleichner Meadows,148,4,5,Belgium,South Jewell,1|



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

      
      booking_uuid = bookingID;
      listing_uuid = listingID;
      user_id = Math.ceil(Math.random() * (userIdMax -1));
      var photo_accuracy_rating = Math.floor(Math.random() * 6);
      var photoAccuracyCalc = Math.floor(Math.random() * 12);
      if (photoAccuracyCalc < 4) {
        photo_accuracy_rating = ''; 
      } else {
        photo_accuracy_rating = photo_accuracy_rating; 
      };
      var booking_cost_per_night = 25 + Math.floor(Math.random() * 125);

      //MAKE BOOKING DATES AND INCREMENT
      //YYYY-MM-DD HH:MM:SS,
      MM = m;
      DD = d;
      if (MM < 10) { MM = '0' + MM };
      if (DD < 10) { DD = '0' + DD };
      var bookingDateStartRef = `2018-${MM}-${DD}`;
      booking_created_at = `2018-${MM}-${DD} 07:01:01`;
      booking_start_date = bookingDateStartRef;
      // var daysLong = Math.ceil(Math.random() * 5);
      var daysLong = 2;
      booking_length = daysLong;
      var booking_total_cost = booking_cost_per_night * booking_length;
      d += daysLong;
      DD = d;
      var bookingDateEndRef = `2018-${MM}-${DD}`; 
      booking_end_date = bookingDateEndRef;
      if (d > 24 && m === 2) { d = 1; m ++;};
      if (d > 28 && m !== 12) { d = 1; m ++;};
      if (d > 28 && m === 12) { break; };
      // return JSON.stringify(currentBooking);
      return booking_uuid +','+ booking_created_at +','+ booking_start_date +','+ booking_end_date +','+ booking_length +','+ booking_cost_per_night +','+ booking_total_cost +','+ listing_uuid +','+ photo_accuracy_rating +','+ user_id; 
    }

    if (d > 28 && m === 12) { break; };
  }

};
//OUTPUT
//   1004,2018-01-09 07:01:01,2018-01-09,2018-01-11,2,133,266,1,0,4,



var inventoryGenerator = function(listingID) {
  return listingID;
}








module.exports.userIdGenerator = userIdGenerator;
module.exports.listingsGenerator = listingsGenerator;
module.exports.bookingsGenerator = bookingsGenerator;
module.exports.inventoryGenerator = inventoryGenerator;
