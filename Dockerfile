FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY . .

CMD [ "npm", "start" ]