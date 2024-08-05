-- Create table statement
CREATE TABLE IF NOT EXISTS "USERS" (
    id INT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    phone_number VARCHAR(255)
);

-- Insert data

INSERT INTO "USERS" (id, first_name, last_name, email, phone_number)
VALUES (1, 'Marina', 'Smith', 'marina@wiline.com', '202-555-0105');

INSERT INTO "USERS" (id, first_name, last_name, email, phone_number)
VALUES (2, 'Kip', 'Johnson', 'kip@wiline.com', '202-555-0168');

INSERT INTO "USERS" (id, first_name, last_name, email, phone_number)
VALUES (3, 'Lorie', 'Brown', 'lorie@wiline.com', '202-555-0162');

INSERT INTO "USERS" (id, first_name, last_name, email, phone_number)
VALUES (4, 'Jasmin', 'Davis', 'jasmin@wiline.com', '202-555-0168');

INSERT INTO "USERS" (id, first_name, last_name, email, phone_number)
VALUES (5, 'Emma', 'Wilson', 'emma@wiline.com', '202-555-0187');

INSERT INTO "USERS" (id, first_name, last_name, email, phone_number)
VALUES (6, 'Elvia', 'Taylor', 'elvia@wiline.com', '202-555-0164');

INSERT INTO "USERS" (id, first_name, last_name, email, phone_number)
VALUES (7, 'Liliana', 'Anderson', 'liliana@wiline.com', '202-555-0161');

INSERT INTO "USERS" (id, first_name, last_name, email, phone_number)
VALUES (8, 'Florencio', 'Martinez', 'florencio@wiline.com', '202-555-0127');

INSERT INTO "USERS" (id, first_name, last_name, email, phone_number)
VALUES (9, 'Delores', 'Garcia', 'delores@wiline.com', '202-555-0143');