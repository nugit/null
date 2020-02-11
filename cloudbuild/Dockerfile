FROM node:12.10.0-slim
COPY package.json ./
RUN yarn install
COPY . .
ENTRYPOINT ["yarn"]
