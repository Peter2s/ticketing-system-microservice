FROM node:alpine
LABEL authors="Peter Salah"


WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENTRYPOINT ["npm","run" ,"dev"]