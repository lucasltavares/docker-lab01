# Dockerfile

FROM node:latest

WORKDIR /var//services/inventory-service

COPY . .

ENV PORT=3000 

RUN npm install

EXPOSE $PORT

ENTRYPOINT ["node", "app.js"]
