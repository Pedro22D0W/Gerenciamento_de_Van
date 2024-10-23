CREATE TABLE admins(
    id SERIAL PRIMARY KEY,
    email TEXT NOT NULL,
    senha TEXT NOT NULL,
    role TEXT NOT NULL
 );

