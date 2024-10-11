FROM maven:3.8.3-openjdk-17

# Definir o diretório de trabalho no container
WORKDIR /app

# Copiar o código-fonte para o container
COPY . .

# Expor a porta 8080 para o Spring Boot
EXPOSE 8080

# Comando para rodar o Maven no modo de desenvolvimento
CMD ["mvn", "spring-boot:run"]