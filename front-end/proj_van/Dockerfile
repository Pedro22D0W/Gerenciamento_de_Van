# Etapa de construção (build) com Node.js
FROM node:18 as development

WORKDIR /app

# Instalar dependências
COPY package*.json ./
RUN npm install

# Copiar o código-fonte do aplicativo Angular
COPY . .

# Expor a porta usada pelo ng serve
EXPOSE 4200

# Comando para iniciar o servidor de desenvolvimento do Angular
CMD ["npm", "start"]