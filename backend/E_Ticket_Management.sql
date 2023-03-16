use mysql;

create database e_ticket;

use e_ticket;

create table login (
    id char(15),
    uname varchar(35) UNIQUE KEY,
    pwd char(60) NOT NULL,
    primary key(id)
);

create table passenger(
    p_uname varchar(35),
    p_id char(15) NOT NULL,
    p_name varchar(50) NOT NULL,
    p_email varchar(40) NOT NULL,
    p_no varchar(15),
    p_dob date NOT NULL,
    p_img mediumtext,
    primary key(p_uname),
    foreign key(p_id) references login(id),
    p_balance float(7,2) DEFAULT 0.00 check(p_balance<=10000.00 AND p_balance>=0.00)
);

create table conductor(
    c_uname varchar(35),
    c_id char(15) NOT NULL,
    c_name varchar(50) NOT NULL,
    c_email varchar(40) NOT NULL,
    c_no varchar(15),
    c_dob date NOT NULL,
    c_img mediumtext,
    primary key(c_uname),
    foreign key(c_id) references login(id)
);

create table admin(
    a_uname varchar(35),
    a_id char(15) NOT NULL,
    created_by char(15) NOT NULL,
    a_name varchar(50) NOT NULL,
    a_email varchar(40) NOT NULL,
    a_no varchar(15),
    a_dob date NOT NULL,
    a_img mediumtext,
    primary key(a_uname),
    foreign key(a_id) references login(id)
);

create table ticket(
    t_id char(15),
    p_id char(15) NOT NULL,
    start_loc varchar(50) NOT NULL,
    dest_loc varchar(50) NOT NULL,
    t_expires datetime NOT NULL,
    t_time datetime NOT NULL,
    primary key(t_id,p_id),
    foreign key(p_id) references login(id),
    t_fare float(4,2) CHECK(t_fare>0)
);

create table payment(
    pay_id char(15),
    pay_amount float(5,2) check (pay_amount>=20.00 and pay_amount<=500.00),
    p_id char(15) NOT NULL,
    c_id char(15) NOT NULL,
    pay_time datetime NOT NULL,
    primary key(pay_id,p_id)
);

create table station(
    st_id int(5),
    st_name varchar(50),
    st_lat float(10,8),
    st_long float(10,8),
    primary key(st_id)
);

INSERT INTO station VALUES 
(10257, 'Dabholi Gam BRTS', 21.2340434, 72.8098173),
(10258, 'Adajan Patiya BRTS', 21.199882,72.8037554);