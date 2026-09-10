# Day 332: Multi-Stage Dockerfile for React SPA
# Stage 1: Build static assets
FROM node:20-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# Mock build step creating dist directory
RUN mkdir -p dist && cp index.html dist/

# Stage 2: Serve with lightweight Nginx
FROM nginx:1.25-alpine AS production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
