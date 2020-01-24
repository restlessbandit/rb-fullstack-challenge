FROM node:11.2.0-alpine

WORKDIR /usr/src/app

RUN apk update && apk upgrade && \
  apk add --no-cache bash git openssh

COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["node", "build/server.js"]