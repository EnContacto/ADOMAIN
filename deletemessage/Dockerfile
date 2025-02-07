FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --only=production

COPY . /app

EXPOSE 3005 

CMD ["node", "index.js"]
