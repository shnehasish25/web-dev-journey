# Day 321: Layer Cache Optimized Dockerfile
FROM node:20-alpine

WORKDIR /app

# Step 1: Copy ONLY dependency manifests to leverage Docker cache
COPY package*.json ./

# Step 2: Install dependencies (This layer is cached unless dependencies change!)
RUN npm ci --only=production

# Step 3: Copy source code (Only this step and below re-runs on source code edits)
COPY . .

EXPOSE 4000

CMD ["node", "server.js"]
