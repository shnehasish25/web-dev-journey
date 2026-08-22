# Day 322: Clean build with .dockerignore
FROM node:20-alpine

WORKDIR /app

# Ensure clean environment
ENV NODE_ENV=production

COPY package*.json ./
RUN npm install --only=production

COPY . .

EXPOSE 5000

CMD ["node", "app.js"]
