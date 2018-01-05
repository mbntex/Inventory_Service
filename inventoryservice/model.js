var fs = require('fs');


var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'tester',
  password : 'tester',
  database : 'inventoryService'
  ,multipleStatements: true
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
  //MAKES ARRAY OF DATES TO BOOK
  var dateListMaker = function (startDate, daysLong) {
    var dateHere = new Date(startDate);
    var daysToBookArray = [];
    for (var days = 0; days < daysLong; days++) {
      var dateString = JSON.stringify(dateHere).split('T')[0];
      var dateClean = dateString.split('-');
      var dateStringFinal = `${dateClean[0].substr(1, 5)}${dateClean[1]}${dateClean[2]}`;
      daysToBookArray.push(parseInt(dateStringFinal));
      dateHere.setDate(dateHere.getDate() + 1);
    }
    return daysToBookArray;
    //daysToBookArray98765555 =  [ 20180109, 20180110 ]
  };
  var daysToBookArrayUse = dateListMaker(obj.booking_start, obj.booking_length);

  //var bookingsStream = fs.createWriteStream("bookingbuffer.txt", {'flags': 'a', 'encoding': null, 'mode': 0666});
    fs.appendFile("bookingbuffer.txt", `${obj.booking_uuid},${obj.booking_created_at},${obj.booking_start},${obj.booking_end},${obj.booking_length},${obj.booking_cost_per_night},${obj.booking_total_cost},${obj.listing_uuid},${obj.photo_accuracy_rating},${obj.user_id}|\n` , (err) => {
      if (err) { console.log('ERROR APPENDING FILE to bookingbuffer!')}
      //console.log('The "data to append" was appended to bookingbuffer!');
    });
    fs.appendFile("daysbookingjoinbuffer.txt", `${obj.listing_uuid},${daysToBookArrayUse[0]}|\n${obj.listing_uuid},${daysToBookArrayUse[1]}|\n`, 
      (err) => {
      if (err) { console.log('ERROR APPENDING FILE to daysbookingjoinbuffer!')}
      // console.log('The "data to append" was appended to daysbookingjoinbuffer!');
      callback();
    });

}

var uploadTxtFile = function(file1, file2, callback) {

  connection.query(
  `START TRANSACTION;
  LOAD DATA LOCAL INFILE '/Users/macbookpro/projects/Inventory_Service/inventoryservice/daysbookingjoinbuffer.txt' REPLACE INTO TABLE totalInventoryJoin FIELDS TERMINATED BY ',' lines terminated by '|\n';
  LOAD DATA LOCAL INFILE '/Users/macbookpro/projects/Inventory_Service/inventoryservice/bookingbuffer.txt'         REPLACE INTO TABLE bookings           FIELDS TERMINATED BY ',' lines terminated by '|\n';
  COMMIT;`,
  function(err, row, fields) {
    if (err) { 
      console.log('ERROR UPLOADING TXT FILE TO DATABASE', err); 

    }
      // console.log('txt file data SAVED TO DATABASE123');
      fs.truncate('./bookingbuffer.txt', 0, function(){console.log('bookingbuffer.txt cleared for rewrite')});
      fs.truncate('./daysbookingjoinbuffer.txt', 0, function(){console.log('daysbookingjoinbuffer.txt cleared for rewrite')});

      // callback();  
    })

}




/*
//////RECEIVING
{"booking_uuid":"1",
"booking_created_at":"2018-01-01 8:01:01",
"booking_start":"2018-01-01",
"booking_end":"2018-01-03",
"booking_length":"2",
"booking_cost_per_night":"187",
"booking_total_cost":"374",
"listing_uuid":"1",
"photo_accuracy_rating":"3",
"user_id":"194756"
}


  ////////////FORMAT 1
    listing_uuid                         INT,
  date_id                              INT,


  //////////FORMAT 2
CREATE TABLE bookings (
  booking_uuid                      INT,
  booking_created_at                DATETIME,
  booking_start                     DATE,
  booking_end                       DATE,
  booking_length                    INT,
  booking_cost_per_night            INT,
  booking_total_cost                INT,
  listing_uuid                      INT,
  photo_accuracy_rating             INT,
  user_id                           INT,
  PRIMARY KEY (booking_uuid),

*/


//   // })
 
//   // var dateToBookArray = dateListMaker(obj.booking_start, obj.booking_length);

//   //MAKES ARRAY FOR SINGLE CONN.QUERY
//   var dateListMaker = function (startDate, daysLong) {
//     var dateHere = new Date(startDate);
//     var daysToBookArray = [];
//     for (var days = 0; days < daysLong; days++) {
//       var dateString = JSON.stringify(dateHere).split('T')[0];
//       var dateClean = dateString.split('-');
//       var dateStringFinal = `${dateClean[0].substr(1, 5)}${dateClean[1]}${dateClean[2]}`;
//       daysToBookArray.push(parseInt(dateStringFinal));
//       dateHere.setDate(dateHere.getDate() + 1);
//     }
//     console.log('daysToBookArray = ', daysToBookArray);
//     return daysToBookArray;
//     //daysToBookArray98765555 =  [ 20180109, 20180110 ]
//   };

//   var daysToBookArrayUse = dateListMaker(obj.booking_start, obj.booking_length);


//   //INTO BOOKINGS
//   connection.query(
//     // "INSERT INTO bookings (booking_uuid, booking_created_at,      booking_start,      booking_end,   booking_length, booking_cost_per_night, booking_total_cost, listing_uuid, photo_accuracy_rating, user_id) VALUES               (90000000,     '2018-01-17 07:01:01',  '2018-01-01',   '2018-01-03',       2,                  101,                606,                100002,        4,            555);",
//     `INSERT IGNORE INTO bookings (booking_uuid, booking_created_at,      booking_start,      booking_end,                                        booking_length,                booking_cost_per_night,                        booking_total_cost,                   listing_uuid, photo_accuracy_rating, user_id) 
//     VALUES               (${obj.booking_uuid},     '${obj.booking_created_at}',  '${obj.booking_start}',   '${obj.booking_end}',       ${obj.booking_length},            ${obj.booking_cost_per_night},                ${obj.booking_cost_per_night},                ${obj.listing_uuid},        ${obj.photo_accuracy_rating}, ${obj.user_id});`,

//     function(err, row, fields) {
//       if (err) { 
//         console.log('ERROR SAVING TO BOOKINGS TABLE'); 
//         //throw err;
//       }
//       console.log('booking SAVED, starting to add booking to bookings table');
//       // //TURN OFF CALLBACK HERE WHEN INV QUERY IS ACTIVE
//       // callback();
//     })




//   // //INTO INVENTORY JOIN BATCH 
//   // //INSERT INTO totalInventoryJoin (listing_uuid, date_id) VALUES (90000000, 20180101);   
//   var batchQuery = 'START TRANSACTION;';
//   for (var daysCount = 0; daysCount < daysToBookArrayUse.length; daysCount ++ ) {
//     batchQuery += `INSERT IGNORE INTO totalInventoryJoin (listing_uuid, date_id) VALUES (${obj.listing_uuid}, ${daysToBookArrayUse[daysCount]});`   
//   }
//   batchQuery += 'COMMIT;'
//   console.log('batchQuery12345 = ', batchQuery);

//     connection.query(
//       // `START TRANSACTION;
//       // INSERT IGNORE INTO totalInventoryJoin (listing_uuid, date_id) VALUES (${obj.listing_uuid}, ${daysToBookArrayUse[daysCount]});
//       // COMMIT;`
//       batchQuery,
//       function(err, row, fields) {
//         if (err) { 
//           console.log('ERROR SAVING TO INVENTORY CALENDAR'); 
//           // throw err;
//         }
//         console.log('booking SAVED to total inventory calendar');
//         callback(); 
//       }
//     )



//   // // //INTO INVENTORY JOIN  
//   // // //INSERT INTO totalInventoryJoin (listing_uuid, date_id) VALUES (90000000, 20180101);   
//   // for (var daysCount = 0; daysCount < daysToBookArrayUse.length; daysCount ++ ) {

//   //   connection.query(
//   //     `INSERT IGNORE INTO totalInventoryJoin (listing_uuid, date_id) VALUES (${obj.listing_uuid}, ${daysToBookArrayUse[daysCount]});`,   
//   // //   // "UPDATE total_inventory SET D2018_01_02 = 34666, D2018_01_03 = 34666 WHERE listing_uuid = 4;",
//   //     function(err, row, fields) {
//   //       if (err) { 
//   //         console.log('ERROR SAVING TO DATABASE'); 
//   //         // throw err;
//   //       }
//   //       console.log('booking SAVED to total inventory calendar');
//   //       callback(); 
//   //     }
//   //   )
//   // }
// }
  

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



//ISSUE HERE?
var reset = function (callback) {
  connection.query(
  'source /Users/macbookpro/projects/Inventory_Service/inventoryservice/database.sql;',
  function(err, row, fields) {
    if (err) { 
      console.log('ERROR RESETTING DATABASE'); 
      throw err;
    }
      console.log('reset database for testing');
      callback();  
    })
}


var readtest = function (callback) {
  var roll = 1 + (Math.floor(Math.random() * 5));
  connection.query(

    `select date_id from totalInventoryJoin where listing_uuid = ${roll};`,
    function (err, row, fields) {
      if (err) {
        console.log('ERROR READ TESTING');
      }
      console.log('READ TEST SUCESSFUL')
      // callback(row);
      callback();
    })
}



module.exports.connection = connection;
module.exports.addBooking = addBooking;
module.exports.addListing = addListing;
module.exports.addUserId = addUserId;
module.exports.uploadTxtFile = uploadTxtFile;
module.exports.reset = reset;
module.exports.readtest = readtest;

