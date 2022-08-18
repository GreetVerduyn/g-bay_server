create table delivery_types
(
    id   int auto_increment
        primary key,
    type tinytext not null,
    constraint Delivery_Types_id_uindex
        unique (id)
);