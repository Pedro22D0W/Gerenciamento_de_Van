CREATE TABLE passageiros(
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    senha TEXT NOT NULL,
    cpf TEXT NOT NULL,
    logradouro TEXT NOT NULL,
    retorno TIME NOT NULL,
    ida TIME NOT NULL,
    telefone TEXT NOT NULL,
    linha INTEGER NOT NULL,
    role INTEGER NOT NULL
 );