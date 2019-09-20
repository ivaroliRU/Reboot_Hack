--Tables

CREATE TABLE team(
    ID serial not null,
    name varchar(100) not null,
    primary key (ID)
);

CREATE TABLE team_member(
    ID serial not null,
    name varchar(100) not null,
    email varchar(100) not null,
    primary key (ID)
);

CREATE TABLE isIn(
    memberId int not null,
    teamId int not null,
    primary key (memberId, teamId),
    FOREIGN KEY (memberId) REFERENCES team_member (id),
    FOREIGN KEY (teamId) REFERENCES team (id)
);

CREATE TABLE subscriptions(
    ID serial not null,
    email varchar(100) not null,
    primary key (ID)
);

--Example queries