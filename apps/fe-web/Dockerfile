# BUILD STAGE
FROM node:16.14.0-alpine3.15 AS build

WORKDIR /app
COPY . .

RUN npm ci --ignore-scripts
RUN npm run nx-run -- fe-web:build:production --skip-nx-cache

# PROD STAGE
FROM node:16.14.0-alpine3.15 AS prod

ENV NODE_ENV production

RUN apk update && apk add dumb-init

WORKDIR /app
COPY --chown=node:node --from=build /app/dist/apps/fe-web /app
COPY --chown=node:node package-lock.json /app
RUN npm ci --ignore-scripts --include=dev

ENV PORT 8002
EXPOSE 8002
USER node
CMD ["dumb-init", "npm", "run", "start"]
