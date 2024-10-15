CREATE TABLE motoristas(
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    senha TEXT NOT NULL,
    cnh TEXT NOT NULL,
    telefone TEXT NOT NULL,
    linha INTEGER NOT NULL
 );