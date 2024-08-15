FROM node:8-alpine

RUN apk update && apk upgrade && \
    apk add --no-cache \
    bash \
    git \
    python \
    make \
    g++


COPY . .

RUN npm install
EXPOSE 4000
CMD [ "npm","start"]