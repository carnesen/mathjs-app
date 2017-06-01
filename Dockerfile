FROM node:8.0

ADD . /app

WORKDIR /app

RUN npm install --production

EXPOSE 8000

USER node

CMD ["./server.js"]
