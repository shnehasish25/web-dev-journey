# Day 320: Dockerfile for Node.js Express App
FROM node:20-alpine

# Set working directory inside container
WORKDIR /usr/src/app

# Copy package definitions first
COPY package*.json ./

# Install production dependencies
RUN npm install --only=production

# Copy application source code
COPY . .

# Inform Docker about port
EXPOSE 3000

# Exec array syntax for proper SIGTERM handling
CMD ["node", "server.js"]
