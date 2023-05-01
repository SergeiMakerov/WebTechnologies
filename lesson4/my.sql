
-- create
CREATE TABLE CLASSMATES (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  age TEXT NOT NULL,
  address TEXT NOT NULL
);

-- insert
INSERT INTO CLASSMATES (name, age, address) VALUES ('Clark','18','Moskow');
INSERT INTO CLASSMATES (name, age, address) VALUES ('Dave','29','Omsk');
INSERT INTO CLASSMATES (name, age, address) VALUES ('Mark','30','Moskow');
INSERT INTO CLASSMATES (name, age, address) VALUES ('Djoe','26','Moskow');
INSERT INTO CLASSMATES (name, age, address) VALUES ('Ava','31','Moskow');

-- fetch 
SELECT name AS имя 
FROM CLASSMATES 
WHERE address = 'Moskow' AND age > 17 AND age < 30;
