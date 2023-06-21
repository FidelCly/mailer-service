FROM node:latest
WORKDIR /mailer-service
COPY package.json ./
RUN npm install
COPY . ./
CMD npm run start:debug
EXPOSE 3000