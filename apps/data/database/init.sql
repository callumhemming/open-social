CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    username TEXT,
    age INTEGER,
    isAlive BOOLEAN
);

INSERT INTO users(username, age, isAlive) 
VALUES
('Callum', 24, true),
('Ballum', 22, false),
('Sallum', 21, true),
( 'Jallum', 12, false),
('Dalum', 43, true),
('Fallum', 52, true),
('Kallum', 25, false),
( 'Jallum', 264, false),
( 'Mallum', 241, true),
( 'Hallum', 2124, true),
( 'Gallum', 214, false),
( 'Tallum', 34, true),
( 'Zallum', 64, false);