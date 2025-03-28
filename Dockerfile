FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN npx prisma generate

RUN npm run build

# Simply use npm start
CMD ["npm", "run", "start"]