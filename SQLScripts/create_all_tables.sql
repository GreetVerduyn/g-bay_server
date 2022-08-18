create table delivery_types
(
    id   int auto_increment
        primary key,
    type tinytext not null,
    constraint Delivery_Types_id_uindex
        unique (id)
);

create table products
(
    id          int auto_increment
        primary key,
    Title       tinytext     not null,
    Description varchar(250) not null,
    Price       float        not null,
    Price_old   float        not null,
    IMG_SRC     tinytext     not null,
    IMG_ALT     tinytext     not null,
    Category    tinytext     not null,
    constraint Products_id_uindex
        unique (id)
);

create table users
(
    ID                   int auto_increment
        primary key,
    Username             tinytext             not null,
    FirstName            tinytext             not null,
    LastName             tinytext             not null,
    Password             char(60)             not null,
    Email                tinytext             not null,
    GSM                  varchar(20)          not null,
    StreetName           tinytext             not null,
    HouseNumber_Plus_BOX tinytext             not null,
    city                 tinytext             not null,
    Postal_code          tinytext             not null,
    IsAdmin              tinyint(1) default 0 not null,
    constraint Users_ID_uindex
        unique (ID)
);

