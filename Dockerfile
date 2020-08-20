FROM node:12
WORKDIR /app
COPY package*.json /app
RUN yarn
COPY . /app
CMD yarn run prod
EXPOSE 3000 9000
