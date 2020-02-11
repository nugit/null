FROM node:12.10.0-slim
WORKDIR /workspace
COPY package.json ./
RUN yarn install
COPY . .
ENTRYPOINT ["yarn"]
