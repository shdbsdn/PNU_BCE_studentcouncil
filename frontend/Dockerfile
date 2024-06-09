# frontend/Dockerfile
FROM node:14

WORKDIR /app

COPY package*.json /app/
RUN npm install

COPY . /app/

RUN npm run build

EXPOSE 5000

CMD ["npm", "run", "dev"]
