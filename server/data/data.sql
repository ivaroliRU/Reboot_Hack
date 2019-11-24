

CREATE TABLE team_member(
    ID varchar(100) not null,
    name varchar(100) not null,
    email varchar(100) not null,
    program varchar(100)  not null,
    school varchar(150) not null,
    shirt_size varchar(50) not null,
    allergies text,
    team boolean not null,
    confirmed boolean not null DEFAULT false,
    primary key (ID)
);

CREATE TABLE subscriptions(
    ID serial not null,
    email varchar(100) not null,
    primary key (ID)
);

--Example queries