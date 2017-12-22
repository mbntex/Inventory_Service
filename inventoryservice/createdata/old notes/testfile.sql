DROP DATABASE testInv; /*for testing only*/
CREATE DATABASE testInv;


USE testInv;

CREATE TABLE test_total_inventory (
    
  listing_uuid                        INT NOT NULL AUTO_INCREMENT,
  D01012018                                INT,
  D01022018                                INT,
  D01032018                                INT,
  D01042018                                INT,
  D01052018                                INT,
  PRIMARY KEY (listing_uuid)
);



CREATE TABLE  testcountry (
countryID     INT           NOT NULL AUTO_INCREMENT,
country       VARCHAR(14),
PRIMARY KEY (countryID)
);

CREATE TABLE  testlisting (
listingID     INT             NOT NULL AUTO_INCREMENT,
address       VARCHAR(50),
country       INT,
PRIMARY KEY (listingID),
FOREIGN KEY (country) REFERENCES testcountry(countryID)
);

CREATE TABLE  testbooking (
bookingID           INT        NOT NULL AUTO_INCREMENT,
listingID           INT,
PRIMARY KEY (bookingID),
FOREIGN KEY (listingID) REFERENCES testlisting(listingID)
);



-- INSERT INTO test_total_inventory (listing_uuid, day1, day2, day3, day4, day5) VALUES (153453, 01012018, 01022018, 01032018, 01042018, 01052018);
INSERT INTO test_total_inventory (listing_uuid, D01012018, D01022018, D01032018, D01042018, D01052018) VALUES (153453, 021, 021,null,null, 568);
-- insert listing
INSERT INTO test_total_inventory (listing_uuid) VALUES (009000);
-- add bookings
UPDATE test_total_inventory SET D01042018 = 999 WHERE listing_uuid = 153453; 
UPDATE test_total_inventory SET D01052018 = 1000 WHERE listing_uuid = 153453; 
UPDATE test_total_inventory SET D01012018 = null, D01022018 = null WHERE listing_uuid = 153453;
UPDATE test_total_inventory SET D01012018 = null, D01022018 = null WHERE listing_uuid = 23456;
-- INSERT INTO test_total_inventory (D01022018) VALUES (1111);



INSERT INTO testcountry (country) VALUES ('USA');
INSERT INTO testcountry (country) VALUES ('GER');
INSERT INTO testcountry (country) VALUES ('THA');
INSERT INTO testcountry (country) VALUES ('GRE');
INSERT INTO testcountry (country) VALUES ('MEX');


-- INSERT INTO test_total_inventory (days_available, listing_uuid) VALUES ();




INSERT INTO testlisting (listingID, address, country) VALUES (1234, '123 Elm Rd.', 1);

INSERT INTO testbooking (listingID) VALUES (1234);


-- sudo mysql -p < /Users/macbookpro/projects/hrsf84-thesis/inventoryservice/testfile.sql
-- select * from testlisting, testbooking WHERE testlisting.address = "123 Elm Rd." AND country = 1;



-- INSERT INTO mooddata (ownerName, message, moodDataPositive, moodDataNeutral, moodDataNegative, moodLabel) VALUES ('Bill', 'Hey there man, how are you doing? What a great day!', 0.879456, 0.004546646, 0.46757, 'pos' );
-- INSERT INTO mooddata (ownerName, message, moodDataPositive, moodDataNeutral, moodDataNegative, moodLabel) VALUES ('Craig', 'I am super bummed about the weather.', 0.4743, 0.6236, 0.8454, 'neg' );
-- INSERT INTO mooddata (ownerName, message, moodDataPositive, moodDataNeutral, moodDataNegative, moodLabel) VALUES ('Bill', 'Well, we can do something fun I guesss.', 0.335, 0.734, 0.3467, 'neutral' );




