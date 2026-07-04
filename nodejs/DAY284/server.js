// Day 284: Dockerfile Concept
console.log("FROM node:18-alpine \n WORKDIR /app \n COPY package*.json ./ \n RUN npm ci \n COPY . . \n CMD ['node', 'server.js']");
