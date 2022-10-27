FROM node:16-alpine3.15

WORKDIR /app

COPY ./package.json .

RUN npm i

COPY . .

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]
