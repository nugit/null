FROM node:12.10.0-slim
WORKDIR /usr/src/app
COPY package.json ./
RUN yarn install
COPY . .
ENTRYPOINT ["yarn"]
