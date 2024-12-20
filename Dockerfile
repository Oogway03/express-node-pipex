FROM node:latest

COPY . ./src

WORKDIR /src

RUN npm install

EXPOSE 5000

CMD ["node", "server.js"]