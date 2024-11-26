DATABSE FOR users
CREATE TABLE users(
	id serial primary key,
	email varchar(50) unique not null,
    password varchar(50) not null
)

DATABSE FOR JOBS
CREATE TABLE jobs(
	id serial primary key,
	publisher varchar(45),
	name varchar(45),
	phone varchar(45),
	email varchar(45),
	title varchar(100),
	applicants varchar(15),
	remote varchar(45),
	jobtype varchar(45),
	salary varchar(45),
	state text,
	city text,
	street text,
	description text,
	date date
)