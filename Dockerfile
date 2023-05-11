FROM node:20-alpine3.17

WORKDIR /usr/local/app

COPY ["package.json", "package-lock.json", "./"]
RUN npm install --production

COPY build build

EXPOSE 3000

CMD ["node", "build/index.js"]
