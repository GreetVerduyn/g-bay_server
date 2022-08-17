create table scrum_project.users
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


