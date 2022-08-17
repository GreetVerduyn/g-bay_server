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