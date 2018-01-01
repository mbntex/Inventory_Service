DROP DATABASE inventoryService; /*for testing only*/
CREATE DATABASE inventoryService;

USE inventoryService;

-- CREATE TABLE country (
--   country_id                        INT           NOT NULL AUTO_INCREMENT,
--   country                           VARCHAR(28),
--   PRIMARY KEY (country_id)
-- );


-- CREATE TABLE city (
--   city_id                           INT             NOT NULL AUTO_INCREMENT,
--   city                              VARCHAR(28),
--   PRIMARY KEY (city_id)
-- );


CREATE TABLE users (
  -- user_id                           INT             NOT NULL AUTO_INCREMENT,
  user_id                           INT             NOT NULL,
  PRIMARY KEY (user_id)
  -- UNIQUE (user_id)
);

CREATE TABLE listings (
  listing_uuid                       INT            NOT NULL,
  address                            VARCHAR(65),
  listing_price                      INT,
  number_of_rooms                    INT,
  photo_accuracy_rating              INT        DEFAULT NULL,
  country_id                         VARCHAR(50),
  city_id                            VARCHAR(45),    
  user_id                            INT,
  PRIMARY KEY (listing_uuid),
  -- FOREIGN KEY (city_id) REFERENCES city(city_id),
  -- FOREIGN KEY (country_id) REFERENCES country(country_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);



CREATE TABLE photos (
  photo_id                          INT              NOT NULL AUTO_INCREMENT,
  photo                             VARCHAR(100),
  listing_uuid                      INT,
  PRIMARY KEY (photo_id),
  FOREIGN KEY (listing_uuid) REFERENCES listings(listing_uuid)
);



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
  FOREIGN KEY (listing_uuid) REFERENCES listings(listing_uuid),
  -- FOREIGN KEY (city_id) REFERENCES city(city_id),
  -- FOREIGN KEY (country_id) REFERENCES country(country_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);



CREATE TABLE total_inventory (
  listing_uuid                           INT     NOT NULL,
  -- D2018_01_01                           INT     DEFAULT NULL,
  D2018_01_01 INT DEFAULT NULL,
  D2018_01_02 INT DEFAULT NULL,
  D2018_01_03 INT DEFAULT NULL,
  D2018_01_04 INT DEFAULT NULL,
  D2018_01_05 INT DEFAULT NULL,
  D2018_01_06 INT DEFAULT NULL,
  D2018_01_07 INT DEFAULT NULL,
  D2018_01_08 INT DEFAULT NULL,
  D2018_01_09 INT DEFAULT NULL,
  D2018_01_10 INT DEFAULT NULL,
  D2018_01_11 INT DEFAULT NULL,
  D2018_01_12 INT DEFAULT NULL,
  D2018_01_13 INT DEFAULT NULL,
  D2018_01_14 INT DEFAULT NULL,
  D2018_01_15 INT DEFAULT NULL,
  D2018_01_16 INT DEFAULT NULL,
  D2018_01_17 INT DEFAULT NULL,
  D2018_01_18 INT DEFAULT NULL,
  D2018_01_19 INT DEFAULT NULL,
  D2018_01_20 INT DEFAULT NULL,
  D2018_01_21 INT DEFAULT NULL,
  D2018_01_22 INT DEFAULT NULL,
  D2018_01_23 INT DEFAULT NULL,
  D2018_01_24 INT DEFAULT NULL,
  D2018_01_25 INT DEFAULT NULL,
  D2018_01_26 INT DEFAULT NULL,
  D2018_01_27 INT DEFAULT NULL
  -- -- NOTE COMMA!!!!!!

  -- D2018_01_28 INT DEFAULT NULL,
  -- D2018_01_29 INT DEFAULT NULL,
  -- D2018_01_30 INT DEFAULT NULL,
  -- D2018_01_31 INT DEFAULT NULL,
  -- D2018_02_01 INT DEFAULT NULL,
  -- D2018_02_02 INT DEFAULT NULL,
  -- D2018_02_03 INT DEFAULT NULL,
  -- D2018_02_04 INT DEFAULT NULL,
  -- D2018_02_05 INT DEFAULT NULL,
  -- D2018_02_06 INT DEFAULT NULL,
  -- D2018_02_07 INT DEFAULT NULL,
  -- D2018_02_08 INT DEFAULT NULL,
  -- D2018_02_09 INT DEFAULT NULL,
  -- D2018_02_10 INT DEFAULT NULL,
  -- D2018_02_11 INT DEFAULT NULL,
  -- D2018_02_12 INT DEFAULT NULL,
  -- D2018_02_13 INT DEFAULT NULL,
  -- D2018_02_14 INT DEFAULT NULL,
  -- D2018_02_15 INT DEFAULT NULL,
  -- D2018_02_16 INT DEFAULT NULL,
  -- D2018_02_17 INT DEFAULT NULL,
  -- D2018_02_18 INT DEFAULT NULL,
  -- D2018_02_19 INT DEFAULT NULL,
  -- D2018_02_20 INT DEFAULT NULL,
  -- D2018_02_21 INT DEFAULT NULL,
  -- D2018_02_22 INT DEFAULT NULL,
  -- D2018_02_23 INT DEFAULT NULL,
  -- D2018_02_24 INT DEFAULT NULL,
  -- D2018_02_25 INT DEFAULT NULL,
  -- D2018_02_26 INT DEFAULT NULL,
  -- D2018_02_27 INT DEFAULT NULL,
  -- D2018_02_28 INT DEFAULT NULL,
  -- D2018_03_01 INT DEFAULT NULL,
  -- D2018_03_02 INT DEFAULT NULL,
  -- D2018_03_03 INT DEFAULT NULL,
  -- D2018_03_04 INT DEFAULT NULL,
  -- D2018_03_05 INT DEFAULT NULL,
  -- D2018_03_06 INT DEFAULT NULL,
  -- D2018_03_07 INT DEFAULT NULL,
  -- D2018_03_08 INT DEFAULT NULL,
  -- D2018_03_09 INT DEFAULT NULL,
  -- D2018_03_10 INT DEFAULT NULL,
  -- D2018_03_11 INT DEFAULT NULL,
  -- D2018_03_12 INT DEFAULT NULL,
  -- D2018_03_13 INT DEFAULT NULL,
  -- D2018_03_14 INT DEFAULT NULL,
  -- D2018_03_15 INT DEFAULT NULL,
  -- D2018_03_16 INT DEFAULT NULL,
  -- D2018_03_17 INT DEFAULT NULL,
  -- D2018_03_18 INT DEFAULT NULL,
  -- D2018_03_19 INT DEFAULT NULL,
  -- D2018_03_20 INT DEFAULT NULL,
  -- D2018_03_21 INT DEFAULT NULL,
  -- D2018_03_22 INT DEFAULT NULL,
  -- D2018_03_23 INT DEFAULT NULL,
  -- D2018_03_24 INT DEFAULT NULL,
  -- D2018_03_25 INT DEFAULT NULL,
  -- D2018_03_26 INT DEFAULT NULL,
  -- D2018_03_27 INT DEFAULT NULL,
  -- D2018_03_28 INT DEFAULT NULL,
  -- D2018_03_29 INT DEFAULT NULL,
  -- D2018_03_30 INT DEFAULT NULL,
  -- D2018_03_31 INT DEFAULT NULL,
  -- D2018_04_01 INT DEFAULT NULL,
  -- D2018_04_02 INT DEFAULT NULL,
  -- D2018_04_03 INT DEFAULT NULL,
  -- D2018_04_04 INT DEFAULT NULL,
  -- D2018_04_05 INT DEFAULT NULL,
  -- D2018_04_06 INT DEFAULT NULL,
  -- D2018_04_07 INT DEFAULT NULL,
  -- D2018_04_08 INT DEFAULT NULL,
  -- D2018_04_09 INT DEFAULT NULL,
  -- D2018_04_10 INT DEFAULT NULL,
  -- D2018_04_11 INT DEFAULT NULL,
  -- D2018_04_12 INT DEFAULT NULL,
  -- D2018_04_13 INT DEFAULT NULL,
  -- D2018_04_14 INT DEFAULT NULL,
  -- D2018_04_15 INT DEFAULT NULL,
  -- D2018_04_16 INT DEFAULT NULL,
  -- D2018_04_17 INT DEFAULT NULL,
  -- D2018_04_18 INT DEFAULT NULL,
  -- D2018_04_19 INT DEFAULT NULL,
  -- D2018_04_20 INT DEFAULT NULL,
  -- D2018_04_21 INT DEFAULT NULL,
  -- D2018_04_22 INT DEFAULT NULL,
  -- D2018_04_23 INT DEFAULT NULL,
  -- D2018_04_24 INT DEFAULT NULL,
  -- D2018_04_25 INT DEFAULT NULL,
  -- D2018_04_26 INT DEFAULT NULL,
  -- D2018_04_27 INT DEFAULT NULL,
  -- D2018_04_28 INT DEFAULT NULL,
  -- D2018_04_29 INT DEFAULT NULL,
  -- D2018_04_30 INT DEFAULT NULL,
  -- D2018_05_01 INT DEFAULT NULL,
  -- D2018_05_02 INT DEFAULT NULL,
  -- D2018_05_03 INT DEFAULT NULL,
  -- D2018_05_04 INT DEFAULT NULL,
  -- D2018_05_05 INT DEFAULT NULL,
  -- D2018_05_06 INT DEFAULT NULL,
  -- D2018_05_07 INT DEFAULT NULL,
  -- D2018_05_08 INT DEFAULT NULL,
  -- D2018_05_09 INT DEFAULT NULL,
  -- D2018_05_10 INT DEFAULT NULL,
  -- D2018_05_11 INT DEFAULT NULL,
  -- D2018_05_12 INT DEFAULT NULL,
  -- D2018_05_13 INT DEFAULT NULL,
  -- D2018_05_14 INT DEFAULT NULL,
  -- D2018_05_15 INT DEFAULT NULL,
  -- D2018_05_16 INT DEFAULT NULL,
  -- D2018_05_17 INT DEFAULT NULL,
  -- D2018_05_18 INT DEFAULT NULL,
  -- D2018_05_19 INT DEFAULT NULL,
  -- D2018_05_20 INT DEFAULT NULL,
  -- D2018_05_21 INT DEFAULT NULL,
  -- D2018_05_22 INT DEFAULT NULL,
  -- D2018_05_23 INT DEFAULT NULL,
  -- D2018_05_24 INT DEFAULT NULL,
  -- D2018_05_25 INT DEFAULT NULL,
  -- D2018_05_26 INT DEFAULT NULL,
  -- D2018_05_27 INT DEFAULT NULL,
  -- D2018_05_28 INT DEFAULT NULL,
  -- D2018_05_29 INT DEFAULT NULL,
  -- D2018_05_30 INT DEFAULT NULL,
  -- D2018_05_31 INT DEFAULT NULL,
  -- D2018_06_01 INT DEFAULT NULL,
  -- D2018_06_02 INT DEFAULT NULL,
  -- D2018_06_03 INT DEFAULT NULL,
  -- D2018_06_04 INT DEFAULT NULL,
  -- D2018_06_05 INT DEFAULT NULL,
  -- D2018_06_06 INT DEFAULT NULL,
  -- D2018_06_07 INT DEFAULT NULL,
  -- D2018_06_08 INT DEFAULT NULL,
  -- D2018_06_09 INT DEFAULT NULL,
  -- D2018_06_10 INT DEFAULT NULL,
  -- D2018_06_11 INT DEFAULT NULL,
  -- D2018_06_12 INT DEFAULT NULL,
  -- D2018_06_13 INT DEFAULT NULL,
  -- D2018_06_14 INT DEFAULT NULL,
  -- D2018_06_15 INT DEFAULT NULL,
  -- D2018_06_16 INT DEFAULT NULL,
  -- D2018_06_17 INT DEFAULT NULL,
  -- D2018_06_18 INT DEFAULT NULL,
  -- D2018_06_19 INT DEFAULT NULL,
  -- D2018_06_20 INT DEFAULT NULL,
  -- D2018_06_21 INT DEFAULT NULL,
  -- D2018_06_22 INT DEFAULT NULL,
  -- D2018_06_23 INT DEFAULT NULL,
  -- D2018_06_24 INT DEFAULT NULL,
  -- D2018_06_25 INT DEFAULT NULL,
  -- D2018_06_26 INT DEFAULT NULL,
  -- D2018_06_27 INT DEFAULT NULL,
  -- D2018_06_28 INT DEFAULT NULL,
  -- D2018_06_29 INT DEFAULT NULL,
  -- D2018_06_30 INT DEFAULT NULL,
  -- D2018_07_01 INT DEFAULT NULL,
  -- D2018_07_02 INT DEFAULT NULL,
  -- D2018_07_03 INT DEFAULT NULL,
  -- D2018_07_04 INT DEFAULT NULL,
  -- D2018_07_05 INT DEFAULT NULL,
  -- D2018_07_06 INT DEFAULT NULL,
  -- D2018_07_07 INT DEFAULT NULL,
  -- D2018_07_08 INT DEFAULT NULL,
  -- D2018_07_09 INT DEFAULT NULL,
  -- D2018_07_10 INT DEFAULT NULL,
  -- D2018_07_11 INT DEFAULT NULL,
  -- D2018_07_12 INT DEFAULT NULL,
  -- D2018_07_13 INT DEFAULT NULL,
  -- D2018_07_14 INT DEFAULT NULL,
  -- D2018_07_15 INT DEFAULT NULL,
  -- D2018_07_16 INT DEFAULT NULL,
  -- D2018_07_17 INT DEFAULT NULL,
  -- D2018_07_18 INT DEFAULT NULL,
  -- D2018_07_19 INT DEFAULT NULL,
  -- D2018_07_20 INT DEFAULT NULL,
  -- D2018_07_21 INT DEFAULT NULL,
  -- D2018_07_22 INT DEFAULT NULL,
  -- D2018_07_23 INT DEFAULT NULL,
  -- D2018_07_24 INT DEFAULT NULL,
  -- D2018_07_25 INT DEFAULT NULL,
  -- D2018_07_26 INT DEFAULT NULL,
  -- D2018_07_27 INT DEFAULT NULL,
  -- D2018_07_28 INT DEFAULT NULL,
  -- D2018_07_29 INT DEFAULT NULL,
  -- D2018_07_30 INT DEFAULT NULL,
  -- D2018_07_31 INT DEFAULT NULL,
  -- D2018_08_01 INT DEFAULT NULL,
  -- D2018_08_02 INT DEFAULT NULL,
  -- D2018_08_03 INT DEFAULT NULL,
  -- D2018_08_04 INT DEFAULT NULL,
  -- D2018_08_05 INT DEFAULT NULL,
  -- D2018_08_06 INT DEFAULT NULL,
  -- D2018_08_07 INT DEFAULT NULL,
  -- D2018_08_08 INT DEFAULT NULL,
  -- D2018_08_09 INT DEFAULT NULL,
  -- D2018_08_10 INT DEFAULT NULL,
  -- D2018_08_11 INT DEFAULT NULL,
  -- D2018_08_12 INT DEFAULT NULL,
  -- D2018_08_13 INT DEFAULT NULL,
  -- D2018_08_14 INT DEFAULT NULL,
  -- D2018_08_15 INT DEFAULT NULL,
  -- D2018_08_16 INT DEFAULT NULL,
  -- D2018_08_17 INT DEFAULT NULL,
  -- D2018_08_18 INT DEFAULT NULL,
  -- D2018_08_19 INT DEFAULT NULL,
  -- D2018_08_20 INT DEFAULT NULL,
  -- D2018_08_21 INT DEFAULT NULL,
  -- D2018_08_22 INT DEFAULT NULL,
  -- D2018_08_23 INT DEFAULT NULL,
  -- D2018_08_24 INT DEFAULT NULL,
  -- D2018_08_25 INT DEFAULT NULL,
  -- D2018_08_26 INT DEFAULT NULL,
  -- D2018_08_27 INT DEFAULT NULL,
  -- D2018_08_28 INT DEFAULT NULL,
  -- D2018_08_29 INT DEFAULT NULL,
  -- D2018_08_30 INT DEFAULT NULL,
  -- D2018_08_31 INT DEFAULT NULL,
  -- D2018_09_01 INT DEFAULT NULL,
  -- D2018_09_02 INT DEFAULT NULL,
  -- D2018_09_03 INT DEFAULT NULL,
  -- D2018_09_04 INT DEFAULT NULL,
  -- D2018_09_05 INT DEFAULT NULL,
  -- D2018_09_06 INT DEFAULT NULL,
  -- D2018_09_07 INT DEFAULT NULL,
  -- D2018_09_08 INT DEFAULT NULL,
  -- D2018_09_09 INT DEFAULT NULL,
  -- D2018_09_10 INT DEFAULT NULL,
  -- D2018_09_11 INT DEFAULT NULL,
  -- D2018_09_12 INT DEFAULT NULL,
  -- D2018_09_13 INT DEFAULT NULL,
  -- D2018_09_14 INT DEFAULT NULL,
  -- D2018_09_15 INT DEFAULT NULL,
  -- D2018_09_16 INT DEFAULT NULL,
  -- D2018_09_17 INT DEFAULT NULL,
  -- D2018_09_18 INT DEFAULT NULL,
  -- D2018_09_19 INT DEFAULT NULL,
  -- D2018_09_20 INT DEFAULT NULL,
  -- D2018_09_21 INT DEFAULT NULL,
  -- D2018_09_22 INT DEFAULT NULL,
  -- D2018_09_23 INT DEFAULT NULL,
  -- D2018_09_24 INT DEFAULT NULL,
  -- D2018_09_25 INT DEFAULT NULL,
  -- D2018_09_26 INT DEFAULT NULL,
  -- D2018_09_27 INT DEFAULT NULL,
  -- D2018_09_28 INT DEFAULT NULL,
  -- D2018_09_29 INT DEFAULT NULL,
  -- D2018_09_30 INT DEFAULT NULL,
  -- D2018_10_01 INT DEFAULT NULL,
  -- D2018_10_02 INT DEFAULT NULL,
  -- D2018_10_03 INT DEFAULT NULL,
  -- D2018_10_04 INT DEFAULT NULL,
  -- D2018_10_05 INT DEFAULT NULL,
  -- D2018_10_06 INT DEFAULT NULL,
  -- D2018_10_07 INT DEFAULT NULL,
  -- D2018_10_08 INT DEFAULT NULL,
  -- D2018_10_09 INT DEFAULT NULL,
  -- D2018_10_10 INT DEFAULT NULL,
  -- D2018_10_11 INT DEFAULT NULL,
  -- D2018_10_12 INT DEFAULT NULL,
  -- D2018_10_13 INT DEFAULT NULL,
  -- D2018_10_14 INT DEFAULT NULL,
  -- D2018_10_15 INT DEFAULT NULL,
  -- D2018_10_16 INT DEFAULT NULL,
  -- D2018_10_17 INT DEFAULT NULL,
  -- D2018_10_18 INT DEFAULT NULL,
  -- D2018_10_19 INT DEFAULT NULL,
  -- D2018_10_20 INT DEFAULT NULL,
  -- D2018_10_21 INT DEFAULT NULL,
  -- D2018_10_22 INT DEFAULT NULL,
  -- D2018_10_23 INT DEFAULT NULL,
  -- D2018_10_24 INT DEFAULT NULL,
  -- D2018_10_25 INT DEFAULT NULL,
  -- D2018_10_26 INT DEFAULT NULL,
  -- D2018_10_27 INT DEFAULT NULL,
  -- D2018_10_28 INT DEFAULT NULL,
  -- D2018_10_29 INT DEFAULT NULL,
  -- D2018_10_30 INT DEFAULT NULL,
  -- D2018_10_31 INT DEFAULT NULL,
  -- D2018_11_01 INT DEFAULT NULL,
  -- D2018_11_02 INT DEFAULT NULL,
  -- D2018_11_03 INT DEFAULT NULL,
  -- D2018_11_04 INT DEFAULT NULL,
  -- D2018_11_05 INT DEFAULT NULL,
  -- D2018_11_06 INT DEFAULT NULL,
  -- D2018_11_07 INT DEFAULT NULL,
  -- D2018_11_08 INT DEFAULT NULL,
  -- D2018_11_09 INT DEFAULT NULL,
  -- D2018_11_10 INT DEFAULT NULL,
  -- D2018_11_11 INT DEFAULT NULL,
  -- D2018_11_12 INT DEFAULT NULL,
  -- D2018_11_13 INT DEFAULT NULL,
  -- D2018_11_14 INT DEFAULT NULL,
  -- D2018_11_15 INT DEFAULT NULL,
  -- D2018_11_16 INT DEFAULT NULL,
  -- D2018_11_17 INT DEFAULT NULL,
  -- D2018_11_18 INT DEFAULT NULL,
  -- D2018_11_19 INT DEFAULT NULL,
  -- D2018_11_20 INT DEFAULT NULL,
  -- D2018_11_21 INT DEFAULT NULL,
  -- D2018_11_22 INT DEFAULT NULL,
  -- D2018_11_23 INT DEFAULT NULL,
  -- D2018_11_24 INT DEFAULT NULL,
  -- D2018_11_25 INT DEFAULT NULL,
  -- D2018_11_26 INT DEFAULT NULL,
  -- D2018_11_27 INT DEFAULT NULL,
  -- D2018_11_28 INT DEFAULT NULL,
  -- D2018_11_29 INT DEFAULT NULL,
  -- D2018_11_30 INT DEFAULT NULL,
  -- D2018_12_01 INT DEFAULT NULL,
  -- D2018_12_02 INT DEFAULT NULL,
  -- D2018_12_03 INT DEFAULT NULL,
  -- D2018_12_04 INT DEFAULT NULL,
  -- D2018_12_05 INT DEFAULT NULL,
  -- D2018_12_06 INT DEFAULT NULL,
  -- D2018_12_07 INT DEFAULT NULL,
  -- D2018_12_08 INT DEFAULT NULL,
  -- D2018_12_09 INT DEFAULT NULL,
  -- D2018_12_10 INT DEFAULT NULL,
  -- D2018_12_11 INT DEFAULT NULL,
  -- D2018_12_12 INT DEFAULT NULL,
  -- D2018_12_13 INT DEFAULT NULL,
  -- D2018_12_14 INT DEFAULT NULL,
  -- D2018_12_15 INT DEFAULT NULL,
  -- D2018_12_16 INT DEFAULT NULL,
  -- D2018_12_17 INT DEFAULT NULL,
  -- D2018_12_18 INT DEFAULT NULL,
  -- D2018_12_19 INT DEFAULT NULL,
  -- D2018_12_20 INT DEFAULT NULL,
  -- D2018_12_21 INT DEFAULT NULL,
  -- D2018_12_22 INT DEFAULT NULL,
  -- D2018_12_23 INT DEFAULT NULL,
  -- D2018_12_24 INT DEFAULT NULL,
  -- D2018_12_25 INT DEFAULT NULL,
  -- D2018_12_26 INT DEFAULT NULL,
  -- D2018_12_27 INT DEFAULT NULL,
  -- D2018_12_28 INT DEFAULT NULL,
  -- D2018_12_29 INT DEFAULT NULL,
  -- D2018_12_30 INT DEFAULT NULL,
  -- D2018_12_31 INT DEFAULT NULL,
  -- D2019_01_01 INT DEFAULT NULL,
  -- -- FOREIGN KEY (listing_uuid) REFERENCES listings(listing_uuid)
);


-- -- -- DATA INSERTION BELOW
-- INSERT INTO country (country) VALUES ('USA');
-- INSERT INTO country (country) VALUES ('GER');
-- INSERT INTO country (country) VALUES ('THA');
-- INSERT INTO country (country) VALUES ('GRE');
-- INSERT INTO country (country) VALUES ('MEX');

-- INSERT INTO city (city) VALUES ('San Francisco');
-- INSERT INTO city (city) VALUES ('Los Angeles');
-- INSERT INTO city (city) VALUES ('Washington D.C.');
-- INSERT INTO city (city) VALUES ('Mexico City');
-- INSERT INTO city (city) VALUES ('Mexico City');
-- INSERT INTO city (city) VALUES ('Athens');
-- INSERT INTO city (city) VALUES ('Berlin');
-- INSERT INTO city (city) VALUES ('Hamburg');


-- -- -- UNCOMMENT BELOW FOR RECENT TESTS
-- INSERT INTO users (user_id) VALUES (111);
-- INSERT INTO users (user_id) VALUES (222);
-- INSERT INTO users (user_id) VALUES (333);
-- INSERT INTO users (user_id) VALUES (444);
-- INSERT INTO users (user_id) VALUES (555);
-- INSERT INTO users (user_id) VALUES (666);
-- INSERT INTO users (user_id) VALUES (777);
-- INSERT INTO users (user_id) VALUES (888);
-- INSERT INTO users (user_id) VALUES (999);


-- INSERT INTO listings (listing_uuid, address,          listing_price, number_of_rooms, photo_accuracy_rating, country_id, city_id,             user_id) 
-- VALUES               (100001,       '123 Oak Rd.',    101,           2,               3,                      'USA',     'San Francisco',      444),
--                      (100002,       '124 Elm Rd.',    200,           3,               null,                   'USA',     'New York',           999),
--                      (100003,       '124 Pine Ln.',   80,            3,               5,                      'USA',     'Denver',             111),
--                      (100004,       '8 Bird Ln.',     100,           4,               4,                      'USA',     'Dallas',             111),
--                      (100005,       '3 Sand St.',     180,           3,               5,                      'USA',     'Seatlle',            111);
  



-- INSERT INTO bookings (booking_uuid, booking_created_at,           booking_start, booking_end,      booking_length, booking_cost_per_night, booking_total_cost, listing_uuid, photo_accuracy_rating, user_id)
-- VALUES               (2222222,      '2018-01-01 07:01:01',        '2018-02-01',   '2018-02-07',    6,                  101,                606,                100002,        4,                   555),                      
--                      (2222221,      '2018-01-02 07:01:01',        '2018-02-09',   '2018-02-12',    3,                  98,                 294,                100002,        5,                   888),   
--                      (2222223,      '2018-01-04 07:01:01',        '2018-02-13',   '2018-02-14',    1,                  101,                101,                100004,        2,                   222),   
--                      (2222224,      '2018-01-03 07:01:01',        '2018-01-28',   '2018-02-07',    10,                 110,                1100,               100001,        NULL,                333);  


-- INSERT INTO photos (listing_uuid, photo) 
-- VALUES      (100001, 'http://sadfasdfsdsa/asdfsdafsdsfd.com'),
--             (100001, 'http://sadfasdfsdsa/sdfvvfg gf.com'),
--             (100002, 'http://sadfasdfsdsa/asdfsdafsdsfd.com'),
--             (100001, 'http://sadfasdfsdsa/vsfg4vbgd.com');



-- INSERT INTO total_inventory (listing_uuid) 
-- VALUES       (100001),
--              (100002),
--              (100003),
--              (100004),
--              (100005);



-- -- -- Notes NOT TEST DATA
-- LOAD DATA LOCAL INFILE '../createdata/useridsData.csv' INTO TABLE users
--  FIELDS TERMINATED BY ','
--  -- enclosed by '"'
--  -- lines terminated by '\n'
--  (user_id);

-- LOAD DATA LOCAL INFILE '../createdata/useridsData.csv' INTO TABLE users
--  FIELDS TERMINATED BY ','
--  (user_id);


-- mysql -u tester -p --local-infile inventoryService;
-- -- -- // Add users
-- -- -- // Add listing items
-- -- -- // Add photos
-- -- -- // Add add bookings which also take up inventory

-- -- -- // Add new listings (for existing users) and photos
-- -- -- // Add new bookings to inventory (also send to booking service)

-- -- -- sudo mysql -p
-- --load with this -- sudo mysql -p < /Users/macbookpro/projects/hrsf84-thesis/inventoryservice/database.sql
-- --access with tester and this -- mysql -u myuser -p --local-infile inventoryService;

-- GO TO CREATE DATA

-- mysql -u tester -p --local-infile inventoryService;
-- use inventoryService;
-- LOAD DATA LOCAL INFILE '../createdata/useridsData.txt' REPLACE INTO TABLE users lines terminated by '|\n';
-- -- LOAD DATA LOCAL INFILE '../createdata/listingsData.txt' REPLACE INTO TABLE listings FIELDS TERMINATED BY ',' lines terminated by '|\n';
-- -- LOAD DATA LOCAL INFILE '../createdata/bookingsData.txt' REPLACE INTO TABLE bookings FIELDS TERMINATED BY ',' lines terminated by '|\n';


-- LOAD DATA LOCAL INFILE '../createdata/listingsData.txt' REPLACE INTO TABLE listings FIELDS TERMINATED BY ',' lines terminated by '|\n'
-- (listing_uuid, address, listing_price, number_of_rooms, @vphoto_accuracy_rating, country_id, city_id, user_id)
-- SET photo_accuracy_rating = nullif(@vphoto_accuracy_rating,'');

-- set  foreign_key_checks=0;

-- LOAD DATA LOCAL INFILE '../createdata/bookingsData.txt' REPLACE INTO TABLE bookings FIELDS TERMINATED BY ',' lines terminated by '|\n'
-- (booking_uuid, booking_created_at, booking_start, booking_end, booking_length, booking_cost_per_night, booking_total_cost, listing_uuid, @vphoto_accuracy_rating, user_id)
-- SET photo_accuracy_rating = nullif(@vphoto_accuracy_rating,'');





-- DELIMITER $$
-- CREATE PROCEDURE prepare_data()
-- BEGIN
--   DECLARE i INT DEFAULT 100;

--   WHILE i < 100000 DO
--     INSERT INTO users (user_id) VALUES (i);
--     SET i = i + 1;
--   END WHILE;

-- END$$
-- DELIMITER ;

-- -- SELECT name, address, FLOOR(RAND() * 401) + 100 AS `random_number` 
-- -- FROM users




-- CALL prepare_data();



