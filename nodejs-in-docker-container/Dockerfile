# specify a base image
FROM node:14-alpine

WORKDIR /usr/app

# install some dependencies 
COPY ./package.json ./
RUN npm install
COPY ./ ./

# default command (startup command)
CMD ["npm", "start"] 