# Etapa de construção (build) com Node.js
FROM node:21

WORKDIR /app

# Instalar dependências
COPY package*.json ./
RUN npm install
RUN npm install @angular/cli -g

# Copiar o código-fonte do aplicativo Angular
COPY . .

# Expor a porta usada pelo ng serve
EXPOSE 4200

# Comando para iniciar o servidor de desenvolvimento do Angular
CMD ["ng", "serve","--host", "0.0.0.0","--poll=2000","--disable-host-check"]