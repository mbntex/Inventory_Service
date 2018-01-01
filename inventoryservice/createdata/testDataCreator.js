var fs = require('fs');
fs.truncate('./useridsData.txt', 0, function(){console.log('useridsData cleared for rewrite')});
fs.truncate('./listingsData.txt', 0, function(){console.log('listingsData cleared for rewrite')});
fs.truncate('./bookingsData.txt', 0, function(){console.log('bookingsData cleared for rewrite')});
fs.truncate('./inventoryidData.txt', 0, function(){console.log('inventoryidData cleared for rewrite')});

// you can either import your data generator or write it in this file
const sessionGenerator = require('./dataGenerator1.js');


var createThisManyListings = 1000;
var createThisManyUsers = ((createThisManyListings * 20) + 1);
var createThisManyBookings = createThisManyListings; 


var userIdStream = fs.createWriteStream("useridsData.txt", {'flags': 'a', 'encoding': null, 'mode': 0666});
console.log('\x1b[0m' + 'USERIDs start');
userIdStream.once('open', (fd) => {
  // this is setup to produce 2.5 mil lines, more than that in a single go slows my computer down but your mileage may vary. If you don't have a solid state drive... well this could take awhile
  // so just run this 4 times, it appends to the file if it exists, or creates a new one
    for (var i = 0; i < createThisManyUsers; i++) {

    // this is where the magic happens, run your function then append a new line
    // if it's JSON you need, then make sure your output has been through JSON.stringify()
      // the goal is just to have 10mil lines to represent records/docs for import.
      // wc -l <FILENAME> // In terminal this will give you the line count of the file
      userIdStream.write(sessionGenerator.userIdGenerator(i) + '|' + '\n');

      if (i % 100000 === 0) {
    // console log every 100k to show progress
        console.log(i);
      }
    }
  
    userIdStream.end();
    console.log('USERIDs done');
});



var listingsStream = fs.createWriteStream("listingsData.txt", {'flags': 'a', 'encoding': null, 'mode': 0666});
console.log('\x1b[0m' + ' LISTINGS start');
listingsStream.once('open', (fd) => {

    for (var i = 0; i < createThisManyListings; i++) {
      listingsStream.write(sessionGenerator.listingsGenerator(i, createThisManyUsers) +'|' + '\n');

      if (i % 100000 === 0) {
        console.log(i);
      }
    }
  
    listingsStream.end();
    console.log('LISTINGS done');
});


// var bookingsStream = fs.createWriteStream("bookingsData.txt", {'flags': 'a', 'encoding': null, 'mode': 0666});
// console.log('\x1b[0m' + 'BOOKINGS start');
// bookingsStream.once('open', (fd) => {

//     var bookingID;
//     for (var listingID = 0; listingID < createThisManyBookings; listingID++) {
//       var makeNewReset = false;
//       for (var bookingCount = 0; bookingCount < 164; bookingCount++) {
//         if (listingID % 100000 === 0) {
//           console.log(listingID);
//         }
//         bookingID = listingID * 1000 + bookingCount;
//         if (bookingCount === 163) { makeNewReset = true; }
//         bookingsStream.write(sessionGenerator.bookingsGenerator(listingID, bookingID, createThisManyUsers, makeNewReset) + '|' + '\n');
//       }
//     }
  
//     bookingsStream.end();
//     console.log('BOOKINGS done');
// });




var inventoryStream = fs.createWriteStream("inventoryidData.txt", {'flags': 'a', 'encoding': null, 'mode': 0666});
console.log('\x1b[0m' + 'INVENTORY start');
inventoryStream.once('open', (fd) => {

    var bookingID;
    for (var inventoryid = 0; inventoryid < createThisManyListings; inventoryid++) {
      // var makeNewReset = false;
      // for (var bookingCount = 0; bookingCount < 164; bookingCount++) {
      //   if (inventoryid % 100000 === 0) {
      //     console.log(inventoryid);
      //   }
      //   bookingID = inventoryid * 1000 + bookingCount;
      //   if (bookingCount === 163) { makeNewReset = true; }
        inventoryStream.write(sessionGenerator.inventoryGenerator(inventoryid) + '|' + '\n');

      // }
      
    }
  
    inventoryStream.end();
    console.log('INVENTORY done');
});







