FROM node:18.10.0-alpine3.15

ENV NODE_ENV production

RUN apk update && apk add dumb-init

WORKDIR /app
COPY --chown=node:node apps/api/prisma .
COPY --chown=node:node dist/apps/api .
COPY --chown=node:node package-lock.json .
RUN npm ci --ignore-scripts
RUN node ./node_modules/prisma generate

ENV PORT 8001
EXPOSE 8001
USER node
ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["node", "main.js"]
