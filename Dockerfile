FROM node:14.17.0-alpine

LABEL maintainer="matheus-dr <matheus-dr@proton.me>"

WORKDIR /var/www/todo-api

COPY package.json ./
COPY prisma/schema.prisma ./prisma/schema.prisma

RUN npm i --legacy-peer-deps

COPY .eslintrc.js nest-cli.json tsconfig.json tsconfig.build.json ./
COPY .env ./.env

CMD ["npm", "run", "start:dev"]