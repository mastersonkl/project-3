DROP database if exists landlord_db;
create database landlord_db;
use landlord_db;
create table landlords (
id int auto_increment PRIMARY KEY, 
`name` varchar(30),
`address` varchar(60),
website varchar(500)
);
create table reviews (
id int auto_increment PRIMARY KEY, 
landlord_id int,
rating int,
rentAgain boolean,
review varchar(500),
images varchar(50),
foreign key landlord_id references landlords(id)
);
