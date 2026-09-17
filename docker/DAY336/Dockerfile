# Day 336: Hardened Secure Dockerfile
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy dependency manifests
COPY --chown=node:node package*.json ./

# Install only production dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy application files with proper ownership
COPY --chown=node:node server.js ./

# Switch from root to non-root user!
USER node

EXPOSE 3000

CMD ["node", "server.js"]
