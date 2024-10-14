CREATE TABLE passageiros(
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    senha TEXT NOT NULL,
    cpf TEXT NOT NULL,
    telefone TEXT NOT NULL,
    linha INTEGER NOT NULL,
    role INTEGER NOT NULL
 );