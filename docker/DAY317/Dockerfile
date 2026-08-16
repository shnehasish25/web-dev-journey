# Day 317: Minimal Alpine Linux container exploration
FROM alpine:3.19

# Set metadata label
LABEL maintainer="kushal.dev@outlook.in"
LABEL description="Minimal container architecture exploration"

# Install curl and bash for debugging
RUN apk update && apk add --no-cache curl bash

# Set working directory
WORKDIR /app

# Print welcome message
CMD ["echo", "Hello from lightweight Alpine Container in Bengaluru!"]
