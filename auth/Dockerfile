FROM node:alpine
LABEL authors="petersalah"

WORKDIR /app
COPY package.json .
RUN npm install
COPY ./ ./
CMD ["npm","start"]