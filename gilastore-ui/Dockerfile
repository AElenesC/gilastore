FROM node:18-alpine AS builder

WORKDIR /app

RUN apk add --no-cache openjdk21-jre bash

COPY package*.json ./
RUN npm install

COPY shadow-cljs.edn ./

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/public /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]