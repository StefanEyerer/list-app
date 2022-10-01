FROM node:18.10.0-alpine3.15

ENV NODE_ENV production

RUN apk update && apk add dumb-init

WORKDIR /app
COPY --chown=node:node dist/apps/web .
COPY --chown=node:node package-lock.json .
RUN npm ci --ignore-scripts --include=dev

ENV PORT 8002
EXPOSE 8002
USER node
ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["npm", "run", "start"]
