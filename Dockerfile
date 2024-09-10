FROM node:20-alpine AS builder
WORKDIR /opt/aws-sample
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20-alpine AS production
USER node
# RUN apk update
# RUN apk add --no-cache bash
WORKDIR /opt/aws-sample
COPY --chown=node:node package*.json ./
COPY --chown=node:node --from=builder /opt/aws-sample/dist ./dist
COPY --chown=node:node ./keys/* ./keys/
RUN npm ci --omit=dev
EXPOSE 4000
# TODO pm2
CMD ["npm", "run", "start"]