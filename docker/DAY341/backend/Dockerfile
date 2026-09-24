# Hardened Node Backend
FROM node:20-alpine
WORKDIR /app
RUN apk add --no-cache curl
COPY package*.json ./
RUN npm install --only=production
COPY server.js .
USER node
EXPOSE 5000
CMD ["node", "server.js"]
