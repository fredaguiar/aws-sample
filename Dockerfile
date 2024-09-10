FROM node:20-alpine AS production
WORKDIR /opt/aws-sample
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
EXPOSE 4000
# TODO pm2
CMD ["npm", "run", "start"]
