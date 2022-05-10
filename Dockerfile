FROM node:latest as angular
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY ./dist ./dist
EXPOSE 3000
CMD npm start


