#!/bin/bash
docker run --rm \
    -it \
    -v .:/usr/share/nginx/html:ro \
    -v ./nginx.conf:/etc/nginx/conf.d/default.conf:ro \
    -p 80:80 \
    --name jflyn \
    nginx:1.27-alpine