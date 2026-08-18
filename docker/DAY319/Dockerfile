# Day 319: Custom Nginx container with static HTML
FROM nginx:1.25-alpine

# Remove default nginx welcome page
RUN rm -rf /usr/share/nginx/html/*

# Copy our custom landing page
COPY index.html /usr/share/nginx/html/index.html

# Document container port
EXPOSE 80

# Nginx runs automatically as foreground process in the official image
CMD ["nginx", "-g", "daemon off;"]
