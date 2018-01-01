var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'tester',
  password : 'tester',
  database : 'inventoryService'
  //,multipleStatements: true
});

connection.connect(function (err) {
  if (err) { console.log('DATABASE CONNECTION ERROR!', err); }
  console.log('connected as id ' + connection.threadId);
})



var addUserId = function (userID, callback) {
  //var userID = 999991117;
  connection.query(
  `INSERT IGNORE INTO users (user_id) VALUE ('${userID}');`,
  function(err, row, fields) {
    if (err) { 
      console.log('ERROR SAVING TO DATABASE'); 
      throw err;
    }
      console.log('user_id SAVED TO DATABASE');
      callback();  
    })
}


var addBooking = function (obj, callback) {
  // var obj = {booking_uuid: 56789, booking_created_at: '2018-02-17 07:01:01', booking_start:'2018-01-02', booking_end: '2018-06-18', booking_length: 2, booking_cost_per_night: 74, booking_total_cost: 148, listing_uuid: 100002, photo_accuracy_rating: 'NULL', user_id: 777 };
//   //var date45 = 'D2018_01_04';

//   //OLD WORKS ITERATIVE LIST MAKER
//   var dateListMaker = function (startDate, daysLong) {
//   var dateHere = new Date(startDate);
//   var daysToBookArray = [];
//   for (var days = 0; days < daysLong; days++) {
//     var dateString = JSON.stringify(dateHere).split('T')[0];
//     var dateClean = dateString.split('-');
//     var dateStringFinal = `D${dateClean[0].substr(1, 5)}_${dateClean[1]}_${dateClean[2]}`;
//     daysToBookArray.push(dateStringFinal);
//     dateHere.setDate(dateHere.getDate() + 1);
//   }
//   return daysToBookArray;
// };
// var dateToBookArray = dateListMaker(obj.booking_start, obj.booking_length);

  //MAKES ARRAY FOR SINGLE CONN.QUERY
  var dateListMaker = function (startDate, daysLong) {
    var dateHere = new Date(startDate);
    var daysToBookArray = [];
    for (var days = 0; days < daysLong; days++) {
      var dateString = JSON.stringify(dateHere).split('T')[0];
      var dateClean = dateString.split('-');
      var dateStringFinal = `D${dateClean[0].substr(1, 5)}_${dateClean[1]}_${dateClean[2]}`;
      daysToBookArray.push(dateStringFinal);
      dateHere.setDate(dateHere.getDate() + 1);
    }
    var ans = "UPDATE total_inventory SET ";
    var middle = `${daysToBookArray[0]} = ${obj.booking_uuid}`;
    for (var j = 1; j < daysLong; j++) { 
      middle += `, ${daysToBookArray[j]} = ${obj.booking_uuid}`;
    }
    ans += `${middle} WHERE listing_uuid = ${obj.listing_uuid};`; 
    return ans;
  };


  var dateListToBook = dateListMaker(obj.booking_start, obj.booking_length);






  connection.query(
    // "INSERT INTO bookings (booking_uuid, booking_created_at,      booking_start,      booking_end,   booking_length, booking_cost_per_night, booking_total_cost, listing_uuid, photo_accuracy_rating, user_id) VALUES               (90000000,     '2018-01-17 07:01:01',  '2018-02-01',   '2018-02-07',       6,                  101,                606,                100002,        4,            555);",
    `INSERT IGNORE INTO bookings (booking_uuid, booking_created_at,      booking_start,      booking_end,                                        booking_length,                booking_cost_per_night,                        booking_total_cost,                   listing_uuid, photo_accuracy_rating, user_id) 
    VALUES               (${obj.booking_uuid},     '${obj.booking_created_at}',  '${obj.booking_start}',   '${obj.booking_end}',       ${obj.booking_length},            ${obj.booking_cost_per_night},                ${obj.booking_cost_per_night},                ${obj.listing_uuid},        ${obj.photo_accuracy_rating}, ${obj.user_id});`,

    function(err, row, fields) {
      if (err) { 
        console.log('ERROR SAVING TO DATABASE'); 
        throw err;
      }
      console.log('booking SAVED, starting to add booking to inventory calendar');
    })



  
    connection.query(

    // var date    
    // "UPDATE total_inventory SET D2018_01_02 = 34666, D2018_01_03 = 34666 WHERE listing_uuid = 4;",
    
    dateListToBook,
      // `INSERT INTO bookings (booking_uuid, booking_created_at,      booking_start,      booking_end,                                        booking_length,                booking_cost_per_night,                        booking_total_cost,                   listing_uuid, photo_accuracy_rating, user_id) 
      // VALUES               (${obj.booking_uuid},     '${obj.booking_created_at}',  '${obj.booking_start}',   '${obj.booking_end}',       ${obj.booking_length},            ${obj.booking_cost_per_night},                ${obj.booking_cost_per_night},                ${obj.listing_uuid},        ${obj.photo_accuracy_rating}, ${obj.user_id});`,

      function(err, row, fields) {
        if (err) { 
          console.log('ERROR SAVING TO DATABASE'); 
          throw err;
        }
        console.log('booking SAVED to total inventory calendar');
        callback(); 
      })
  

  //  //OLD WORKS GOES WITH THE ABOVE ITERATIVE LIST MAKER
  // for (var i = 0; i < obj.booking_length; i++) {
  //   connection.query(

  //   // var date    
  //   // "UPDATE total_inventory SET D2018_01_02 = 34666, D2018_01_03 = 4567 WHERE listing_uuid = 10072222;",
    
  //   `UPDATE total_inventory
  //   SET ${dateToBookArray[i]} = ${obj.booking_uuid}
  //   WHERE listing_uuid = ${obj.listing_uuid};`,
  //     // `INSERT INTO bookings (booking_uuid, booking_created_at,      booking_start,      booking_end,                                        booking_length,                booking_cost_per_night,                        booking_total_cost,                   listing_uuid, photo_accuracy_rating, user_id) 
  //     // VALUES               (${obj.booking_uuid},     '${obj.booking_created_at}',  '${obj.booking_start}',   '${obj.booking_end}',       ${obj.booking_length},            ${obj.booking_cost_per_night},                ${obj.booking_cost_per_night},                ${obj.listing_uuid},        ${obj.photo_accuracy_rating}, ${obj.user_id});`,

  //     function(err, row, fields) {
  //       if (err) { 
  //         console.log('ERROR SAVING TO DATABASE'); 
  //         throw err;
  //       }
  //       console.log('booking SAVED to total inventory calendar');
  //       callback(); 
  //     })
  // }
}


var addListing = function (obj, callback) {
// var obj = {listing_uuid: 10072222, address: '2993 Oak Rd.', listing_price: 101, number_of_rooms: 2, photo_accuracy_rating: 3, country_id: 'USA', city_id: 'San Francisco', user_id: 444};
  connection.query(
  // "INSERT INTO listings (listing_uuid, address, listing_price, number_of_rooms, photo_accuracy_rating, country_id, city_id, user_id) VALUES (1007777777, '1993 Oak Rd.', 101, 2, 3, 'USA','San Francisco',444);",
    `INSERT IGNORE INTO listings (listing_uuid, address, listing_price, number_of_rooms, photo_accuracy_rating, country_id, city_id, user_id)
    VALUES               (${obj.listing_uuid},     '${obj.address}',  ${obj.listing_price},   ${obj.number_of_rooms},       ${obj.photo_accuracy_rating},            '${obj.country_id}',                '${obj.city_id}', ${obj.user_id});`,
    function(err, row, fields) {
      if (err) { 
        console.log('ERROR SAVING TO DATABASE'); 
        throw err;
      }
      console.log('user_id SAVED TO DATABASE adding to total_inventory');
    })
  connection.query(
  `INSERT IGNORE INTO total_inventory (listing_uuid) VALUES (${obj.listing_uuid});`,
  // `INSERT INTO total_inventory (listing_uuid) 
  // VALUES ${obj.listing_uuid}`
  function(err, row, fields) {
    if (err) { 
      console.log('ERROR SAVING TO DATABASE'); 
      throw err;
    }
    console.log('user_id SAVED TO DATABASE');
    callback(); 
  })
}




module.exports.connection = connection;
module.exports.addBooking = addBooking;
module.exports.addListing = addListing;
module.exports.addUserId = addUserId;

