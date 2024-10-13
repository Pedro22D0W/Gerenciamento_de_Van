CREATE TABLE admins(
    id SERIAL PRIMARY KEY,
    user_name TEXT NOT NULL,
    password TEXT NOT NULL,
    role INTEGER NOT NULL
 );

