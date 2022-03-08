FROM node:16.14.0-alpine3.15

ENV NODE_ENV production

RUN apk update && apk add dumb-init

WORKDIR /app
COPY --chown=node:node dist/apps/fe-web .
COPY --chown=node:node package-lock.json .
RUN npm ci --ignore-scripts --include=dev

ENV PORT 8002
EXPOSE 8002
USER node
CMD ["dumb-init", "npm", "run", "start"]
