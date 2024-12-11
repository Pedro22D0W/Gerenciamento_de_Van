FROM node:21 as builder
WORKDIR /app

######DESENVOLVIMENTO########

#COPY package*.json ./
#RUN npm install
#RUN npm install @angular/cli -g
#COPY . .
#EXPOSE 4200
#CMD ["ng", "build","--host", "0.0.0.0","--poll=2000","--disable-host-check"]

#########PRODUÇÃO##########
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist/proj_van/browser usr/share/nginx/html
COPY /nginx/nginx.conf /etc/nginx/nginx/conf
COPY /nginx/mime.types /etc/nginx/nginx/mime.types

EXPOSE 80

CMD ["nginx","-g","daemon off;"]
