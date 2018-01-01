'use strict';

module.exports = {
  generateRandomData, generateRandomDataListings
};

// Make sure to "npm install faker" first.
const Faker = require('faker');
var userIDCounter = 12000000;

function generateRandomData(userContext, events, done) {
  // generate data with Faker:
  // const name = `${Faker.name.firstName()} ${Faker.name.lastName()}`;
  // const email = Faker.internet.exampleEmail();
  // const password = Faker.internet.password();

  let userID = userIDCounter;
  userIDCounter ++;
  // add variables to virtual user's context:
  userContext.vars.userID = userID;
  // userContext.vars.email = email;
  // userContext.vars.password = password;
  // continue with executing the scenario:



  return done();
}






//REMEMBER TO SET TO CURRENTLY STORED MAXIMUMS FOR TESTING
var maxUserID = 2000;
//Hits this, but no higher
var maxListingID = 999;

var booking_uuidCounter = 1;
var listing_uuidCounter = 1;

var dateCounter = 0;
var m = 1;
var d = 1;
var bookingForThisListingCounter = 0;



function generateRandomDataListings(userContext, events, done) {

  // //Short Test 
  if (d === 19 ) { m++; d = 1; }
  if (m === 2 ) { m = 1; d = 1; listing_uuidCounter ++; }
  // if (d === 29 ) { m++; d = 1; }
  // if (m === 13 ) { m = 1; d = 1; listing_uuidCounter ++; }
  if (listing_uuidCounter === maxListingID +1) { listing_uuidCounter = 1; }

  let booking_uuid = booking_uuidCounter; 
  booking_uuidCounter ++;
  userContext.vars.booking_uuid = booking_uuid;

  let listing_uuid = listing_uuidCounter;
  
  userContext.vars.listing_uuid = listing_uuidCounter;

  let user_id = Math.floor(Math.random()*maxUserID);
  userContext.vars.user_id = user_id;

  let photo_accuracy_rating = Math.floor(Math.random() * 6);
  if (photo_accuracy_rating === 0 || photo_accuracy_rating === 1) {
    photo_accuracy_rating = 'NULL';
  }
  userContext.vars.photo_accuracy_rating = photo_accuracy_rating;

  let booking_length = 2;
  userContext.vars.booking_length = booking_length;

  let booking_cost_per_night = Math.ceil(50 + (Math.random() * 150));
  userContext.vars.booking_cost_per_night = booking_cost_per_night;

  let booking_total_cost = booking_cost_per_night * booking_length;
  userContext.vars.booking_total_cost = booking_total_cost;
//////////////////////DATES
 //MAKE BOOKING DATES AND INCREMENT
      //YYYY-MM-DD HH:MM:SS,
      let MM = m;
      let DD = d;
      if (MM < 10) { MM = '0' + MM }
      if (DD < 10) { DD = '0' + DD }
      let booking_start = `2018-${MM}-${DD}`;
      let booking_created_at = `2018-${MM}-${DD} 8:01:01`;
      d += 2;
      
      //needed?
      DD = d;
      if (DD < 10) { DD = '0' + DD }
      // MM = m;
      let booking_end = `2018-${MM}-${DD}`;

      userContext.vars.booking_start = booking_start;
      userContext.vars.booking_created_at = booking_created_at;
      userContext.vars.booking_end = booking_end;
///////////////////////////

 
// console.log(userContext.vars);
  return done();
}



// //169
// for (var i = 0; i < 9; i++) {
//   var userContext = {vars: {}};
//   generateRandomDataListings(userContext);
// }

















