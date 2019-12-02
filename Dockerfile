FROM node:13.1.0

ENV COOKIE_KEY AS;FJKLAKWEJF()FDWAFE

ENV NODE_ENV production

ENV GOOGLE_CLIENT_ID 120570750996-blrmfol2bd5k8af2nmumohv7uvhgkggu.apps.googleusercontent.com

ENV GOOGLE_CLIENT_SECRET Y_n1UXqJwBK4BgFiTatILg7r

ENV MONGO_URI mongodb+srv://marissa:223WzMQDUqNyZbCZ@cluster0-p1220.mongodb.net/test?retryWrites=true&w=majority

WORKDIR /usr/src/app

COPY server/package*.json ./server/

RUN npm install --prefix server && npm install mongoose -g 

COPY server/client/package*.json ./server/client/

RUN npm install --prefix server/client

COPY . .

RUN npm run build --prefix server/client

WORKDIR /usr/src/app/server

CMD ["npm", "start"]