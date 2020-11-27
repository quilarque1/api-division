FROM node:latest

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 7000

CMD ["node", "src/app.js"]