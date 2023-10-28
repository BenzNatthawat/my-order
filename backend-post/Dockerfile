# ### STAGE 1: Build ###
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run test

RUN npm run build


# ### STAGE 2: Run ###
FROM node:20-alpine as production

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install sequelize-cli

COPY . .

COPY --from=builder /app/dist ./dist
RUN chmod +x /app/docker/entrypoint.sh

CMD ["sh", "-c","--","echo 'started';while true; do sleep 1000; done"]

# CMD ["npm", "start:prod"]