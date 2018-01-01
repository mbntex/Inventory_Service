var mysql = require('mysql');
var expect = require('chai').expect;
var assert = require('assert');

describe('Tests Working', function() {

  it('Tests Are Working', function(done) {
    var one = 1;
    expect(one).to.equal(1);
    done();
  });


  it('Tests Are Working', function(done) {
    var one = [1, 2, 3, 4];
    expect(one).to.include(2);
    done();
  });

});


describe('mySQL Datbase Working', function() {
  

  beforeEach(function(done) {
    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'tester',
      password : 'tester',
      database : 'inventoryService'
      //,multipleStatements: true
    });
    connection.connect(function(err) { 
      if (err) { console.log('DATABASE TEST ACCESS CONNECTION ERROR!', err); }
    });

    //    var tablename = "photos";

    // //Empty the db table before each test so that multiple tests
    // //(or repeated runs of the tests) won't screw each other up: */
    // connection.query('truncate ' + tablename, done);
  });

  // afterEach(function() {
  //   connection.end();
  // });

  //var queryString = 'SELECT * FROM users';
  //var queryArgs = [];

  connection.query('SELECT * FROM users', function(err, results) {
    expect(results).to.include(444);
    done();
  });


});


/*


// //////////////////////////////////
//You'll need to have MySQL running and your Node server running
// for these tests to pass. 

var mysql = require('mysql');
var request = require('request'); // You might need to npm install the request module!
var expect = require('chai').expect;

describe('Persistent Node Chat Server', function() {
  var dbConnection;

  beforeEach(function(done) {
    dbConnection = mysql.createConnection({
      user: 'root',
      password: '',
      database: 'chat'
    });
    dbConnection.connect();

       var tablename = ""; // TODO: fill this out

    //Empty the db table before each test so that multiple tests
    //(or repeated runs of the tests) won't screw each other up: 
    dbConnection.query('truncate ' + tablename, done);
  });

  afterEach(function() {
    dbConnection.end();
  });

  it('Should insert posted messages to the DB', function(done) {
    // Post the user to the chat server.
    request({
      method: 'POST',
      uri: 'http://127.0.0.1:3000/classes/users',
      json: { username: 'Valjean' }
    }, function () {
      // Post a message to the node chat server:
      request({
        method: 'POST',
        uri: 'http://127.0.0.1:3000/classes/messages',
        json: {
          username: 'Valjean',
          message: 'In mercy\'s name, three days is all I need.',
          roomname: 'Hello'
        }
      }, function () {
        // Now if we look in the database, we should find the
        // posted message there.

        // TODO: You might have to change this test to get all the data from
        // your message table, since this is schema-dependent.
        var queryString = 'SELECT * FROM messages';
        var queryArgs = [];

        dbConnection.query(queryString, queryArgs, function(err, results) {
          // Should have one result:
          expect(results.length).to.equal(1);

          // TODO: If you don't have a column named text, change this test.
          expect(results[0].text).to.equal('In mercy\'s name, three days is all I need.');

          done();
        });
      });
    });
  });

  it('Should output all messages from the DB', function(done) {
    // Let's insert a message into the db
       var queryString = "";
       var queryArgs = [];
    // TODO - The exact query string and query args to use
    // here depend on the schema you design, so I'll leave
    // them up to you.

    dbConnection.query(queryString, queryArgs, function(err) {
      if (err) { throw err; }

      // Now query the Node chat server and see if it returns
      // the message we just inserted:
      request('http://127.0.0.1:3000/classes/messages', function(error, response, body) {
        var messageLog = JSON.parse(body);
        expect(messageLog[0].text).to.equal('Men like you can never change!');
        expect(messageLog[0].roomname).to.equal('main');
        done();
      });
    });
  });
});


*/