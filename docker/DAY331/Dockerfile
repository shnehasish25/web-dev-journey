# Day 331: Multi-Stage Build Dockerfile

# ==========================================
# Stage 1: Build & Dependency Resolution
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./
# Install ALL dependencies (including devDependencies)
RUN npm ci

COPY . .
# If using TypeScript or build tools, run build here:
# RUN npm run build

# ==========================================
# Stage 2: Lean Production Runtime
# ==========================================
FROM node:20-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

# Copy only production dependencies from builder stage
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Copy application code
COPY --from=builder /usr/src/app/server.js ./server.js

# Run as non-root user for security
USER node

EXPOSE 3000

CMD ["node", "server.js"]
