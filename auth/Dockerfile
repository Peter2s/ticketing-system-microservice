FROM node:alpine
LABEL authors="petersalah"

WORKDIR /app
COPY package.json .
RUN npm install --omit=dev
COPY ./ ./
CMD ["npm","start"]