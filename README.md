# Sistema de Gerenciamento de Vans e Passageiros

Este projeto é um sistema de gerenciamento de vans e passageiros, composto por um front-end Angular, um back-end Spring Boot e um banco de dados PostgreSQL.


## Iniciando a Aplicação

Para iniciar o projeto, siga os passos abaixo:

1. Navegue até a raiz do projeto.

2. Execute o comando:
```sh
docker compose up --build
```

## Acessando banco de dados
1. Para acessar o banco de dados via terminal do docker, precisamos acessar o container da nossa database e ir em exec
2. Execute o comando:
```sh
psql -h localhost -p 5432 -U user -d transporte_vans_db
```
3. Comandos:
   - SELECT * FROM passageiros;
   - SELECT * FROM motoristas;


## Portas

- **Front-end Angular**: na porta [http://localhost:4200](http://localhost:4200)
- **Back-end SpringBoot**: na porta [http://localhost:8080](http://localhost:8080)
- **Banco de Dados PostgreSQL**: na porta [http://localhost:5432](http://localhost:5432)


