### STAGE 1: Build ###
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


### STAGE 2: Run ###
FROM nginx:1.25.3-alpine as production

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY . .

COPY --from=builder /app/dist/frontend-post /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]