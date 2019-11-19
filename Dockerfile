FROM node:13.1.0

WORKDIR /usr/src/app/server

COPY server/package*.json ./

RUN npm install && npm install mongoose -g 

WORKDIR /usr/src/app/server/client

COPY server/client/package*.json ./

RUN npm install

WORKDIR /usr/src/app

COPY . .

EXPOSE 3000

WORKDIR /usr/src/app/server

CMD ["npm", "start"]