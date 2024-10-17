CREATE TABLE passageiros(
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    senha TEXT NOT NULL,
    cpf TEXT NOT NULL,
    logradouro TEXT NOT NULL,
    destino TEXT NOT NULL,
    retorno TIME NOT NULL,
    telefone TEXT NOT NULL,
    linha INTEGER NOT NULL
 );