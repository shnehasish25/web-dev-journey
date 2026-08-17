# Day 318: Container lifecycle demo with ping loop
FROM alpine:3.19

RUN apk add --no-cache iputils

# Ping local loopback indefinitely so container stays alive as PID 1
CMD ["ping", "-c", "100", "127.0.0.1"]
