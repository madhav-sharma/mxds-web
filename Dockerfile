FROM node:20-alpine as static_site

WORKDIR /app

COPY package.json ./
COPY tsconfig.json ./
COPY vite.config.js ./

COPY src ./src
COPY public ./public

RUN npm install
RUN npm run build
CMD npm run preview



