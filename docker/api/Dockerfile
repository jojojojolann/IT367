FROM node:22-bookworm-slim
WORKDIR /usr/app
COPY package.json package-lock.json ./
RUN npm i --omit=dev
COPY ./api/*.js ./src/
ENTRYPOINT ["node"]
CMD ["src/index.js"]