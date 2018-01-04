var mysql = require('mysql');
var expect = require('chai').expect;
var assert = require('assert');
var axios = require('axios');

describe('Tests Working & Server Up', function() {

  it('Tests Are Working1', function(done) {
    var one = 1;
    expect(one).to.equal(1);
    var array1 = [1, 2, 3, 4];
    expect(array1).to.include(2);
    done();
  });


  it('Test If Server Is Up', function(done) {
    
    axios.post('http://127.0.0.1:7331/inventory/addUser', {
    userID: 1
    })
    .then(function(response) {   
      expect(response.status).to.eql(200);
      done();
    })
    .catch(function (err) {
      console.log('TEST ERROR POSTING USER! ERROR = ', err)
    })
  });

});


describe('Check if mySQL Datbase Working', function() {
  

  // beforeEach(function(done) {
    var DBconnection = mysql.createConnection({
      host     : 'localhost',
      user     : 'tester',
      password : 'tester',
      database : 'inventoryService'
      //,multipleStatements: true
    });

    DBconnection.connect();
    // DBconnection.connect(function(err) { 
    //   if (err) { console.log('DATABASE TEST ACCESS CONNECTION ERROR!', err); }
    // });

  // });
    //    var tablename = "xyz";

    // //Empty the db table before each test so that multiple tests
    // //(or repeated runs of the tests) won't screw each other up: */
    // DBconnection.query('truncate ' + tablename, done);

    // afterEach(function() {
    //   DBconnection.end();
    // });

  it('There Should Be Data In The USERS Database At All For Tests', function(done) {
    DBconnection.query('SELECT * FROM users', function(err, results) {
      expect(results).to.not.have.lengthOf(0);
      done();
    });
  });


  it('The First UserID Should Be 0', function(done) {
    DBconnection.query('SELECT * FROM users', function(err, results) {
      expect(results[0]).to.eql({user_id:0});
      done();
    });
  });


  it('There Should Be A User Id 444 If Pre-Data Has Been Loaded', function(done) {
    DBconnection.query('SELECT * FROM users', function(err, results) {
      expect(results[444]).to.eql({user_id:444});
      done();
    });
  })


  it('There Should Be Data In The LISTINGS Table At All For Tests', function(done) {
    DBconnection.query('SELECT * FROM listings', function(err, results) {
      expect(results).to.not.have.lengthOf(0);
      done();
    });
  });

  it('There Should Be Data In The TOTAL_INVENTORY Table At All For Tests', function(done) {
    DBconnection.query('SELECT * FROM total_inventory', function(err, results) {
      expect(results).to.not.have.lengthOf(0);
      done();
    });
  });


  it('Testing Putting Data Into User Table', function(done) {
    axios.post('http://127.0.0.1:7331/inventory/addUser', {
    userID: 30000000
    })
    .then(function() {   
      DBconnection.query('SELECT * FROM users WHERE user_id = 30000000;', function(err, results) {
        expect(results[0]).to.eql({ user_id: 30000000 });
        done();
      });
    })
    .catch(function (err) {
      console.log('TEST ERROR POSTING USER! ERROR = ', err)
    })
  });


  it('Testing Puttng Data Into Listings Table', function(done) {
    axios.post('http://127.0.0.1:7331/inventory/addListings', {
    listing_uuid: 10073338, address: '2993 Oakmont Birch Rd.', listing_price: 50, number_of_rooms: 1, photo_accuracy_rating: 4, country_id: 'USA', city_id: 'San Francisco', user_id: 30000000
    })
    .then(function() {
      DBconnection.query('SELECT * FROM listings WHERE listing_uuid = 10073338;', function(err, results) {
        expect(results[0]).to.eql({     
          listing_uuid: 10073338, address: '2993 Oakmont Birch Rd.', listing_price: 50, number_of_rooms: 1, photo_accuracy_rating: 4, country_id: 'USA', city_id: 'San Francisco', user_id: 30000000
        });
        done();
      });
    })
    .catch(function (err) {
      console.log('TEST ERROR POSTING NEW LISTING! ERROR = ', err)
    })
  });


  it('Testing Puttng Data Into Total Inventory Table for listing_uuid', function(done) {
    axios.post('http://127.0.0.1:7331/inventory/addListings', {
    listing_uuid: 10073339, address: '1111 Elm Cir.', listing_price: 200, number_of_rooms: 2, photo_accuracy_rating: 5, country_id: 'USA', city_id: 'San Francisco', user_id: 30000000
    })
    .then(function() {
      DBconnection.query('SELECT * FROM total_inventory WHERE listing_uuid = 10073339;', function(err, results) {
        expect(results[0].listing_uuid).to.eql(10073339);
        done();
      });
    })
    .catch(function (err) {
      console.log('TEST ERROR POSTING NEW INVENTORY FOR UUID! ERROR = ', err)
    })
  });


  it('Testing Puttng Data Into Total Inventory Table for day with D2018_01_01', function(done) {
    axios.post('http://127.0.0.1:7331/inventory/addListings', {
    listing_uuid: 10073340, address: '1112 Elm Cir.', listing_price: 150, number_of_rooms: 1, photo_accuracy_rating: 5, country_id: 'USA', city_id: 'San Francisco', user_id: 30000000
    })
    .then(function() {
      DBconnection.query('SELECT * FROM total_inventory WHERE listing_uuid = 10073340;', function(err, results) {
        expect(results[0].D2018_01_01).to.eql(null);
        done();
      });
    })
    .catch(function (err) {
      console.log('TEST ERROR POSTING NEW INVENTORY FOR DAY! ERROR = ', err)
    })
  });


  it('Testing Putting Data Into Bookings Table', function(done) {
    axios.post('http://127.0.0.1:7331/inventory/bookings', {
    booking_uuid: 18000000, booking_created_at: '2018-02-17 07:01:01', booking_start:'2018-01-04', booking_end: '2018-01-06', booking_length: 2, booking_cost_per_night: 74, booking_total_cost: 148, listing_uuid: 10073340, photo_accuracy_rating: 'NULL', user_id: 30000000   
    })
    .then(function() {
      DBconnection.query('SELECT * FROM bookings WHERE booking_uuid = 18000000;', function(err, results) {
        expect(results[0].booking_uuid).to.eql(18000000);
        expect(results[0].booking_cost_per_night).to.eql(74);
        done();
      });
    })
    .catch(function (err) {
      console.log('TEST ERROR POSTING NEW BOOKING! ERROR = ', err)
    })
  });


  it('Testing Putting Data Into Bookings Appears In Total Inventory', function(done) {
    axios.post('http://127.0.0.1:7331/inventory/bookings', {
    booking_uuid: 18000001, booking_created_at: '2018-01-02 07:01:01', booking_start:'2018-01-04', booking_end: '2018-01-07', booking_length: 3, booking_cost_per_night: 74, booking_total_cost: 148, listing_uuid: 10073340, photo_accuracy_rating: 'NULL', user_id: 30000000   
    })
    .then(function() {
      DBconnection.query('SELECT * FROM total_inventory WHERE listing_uuid = 10073340;', function(err, results) {
        expect(results[0].D2018_01_04).to.eql(18000001);     
        done();
      });
    })
    .catch(function (err) {
      console.log('TEST ERROR POSTING NEW BOOKING INVENTORY DAY! ERROR = ', err)
    })
  });



  it('Testing Putting Data Into Bookings Appears FOR ALL DAYS in Total Inventory', function(done) {
    axios.post('http://127.0.0.1:7331/inventory/bookings', {
    booking_uuid: 18000001, booking_created_at: '2018-01-02 07:01:01', booking_start:'2018-01-04', booking_end: '2018-01-07', booking_length: 3, booking_cost_per_night: 74, booking_total_cost: 148, listing_uuid: 10073340, photo_accuracy_rating: 'NULL', user_id: 30000000   
    })
    .then(function() {
      DBconnection.query('SELECT * FROM total_inventory WHERE listing_uuid = 10073340;', function(err, results) {
        expect(results[0].D2018_01_04).to.eql(18000001);
        expect(results[0].D2018_01_05).to.eql(18000001); 
        expect(results[0].D2018_01_06).to.eql(18000001);     
        done();
      });
    })
    .catch(function (err) {
      console.log('TEST ERROR POSTING NEW BOOKING INVENTORY DAY! ERROR = ', err)
    })
  });


});



describe('Check If Endpoints Working', function() {
    it('/inventory/addUser Endpoint Working', function(done) {
    axios.post('http://127.0.0.1:7331/inventory/addUser', {
    userID: 30000000
    })
    .then(function(response) {  
      expect(response.status).to.eql(200);
      done();
    })
    .catch(function (err) {
      console.log('addUser ENDPOINT TEST ERROR = ', err)
    })
  });


  it('/inventory/addListings Endpoint Working', function(done) {
    axios.post('http://127.0.0.1:7331/inventory/addListings', {
    listing_uuid: 10073338, address: '2993 Oakmont Birch Rd.', listing_price: 50, number_of_rooms: 1, photo_accuracy_rating: 4, country_id: 'USA', city_id: 'San Francisco', user_id: 30000000
    })
    .then(function(response) {  
      expect(response.status).to.eql(200);
      done();
    })
    .catch(function (err) {
      console.log('addListings ENDPOINT TEST ERROR = ', err)
    })
  });


  it('/inventory/bookings Endpoint Working', function(done) {
    axios.post('http://127.0.0.1:7331/inventory/bookings', {
    booking_uuid: 18000001, booking_created_at: '2018-01-02 07:01:01', booking_start:'2018-01-04', booking_end: '2018-01-07', booking_length: 3, booking_cost_per_night: 74, booking_total_cost: 148, listing_uuid: 10073340, photo_accuracy_rating: 'NULL', user_id: 30000000   
    })
    .then(function(response) {  
      expect(response.status).to.eql(200);
      done();
    })
    .catch(function (err) {
      console.log('Bookings ENDPOINT TEST ERROR = ', err)
    })
  });
});





