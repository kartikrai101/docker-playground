# so, we have an express server that runs fine on its own and we just want to 
# make it run on a docker container on our device

#import the base image
FROM node:14-alpine

#specify a working directory
WORKDIR /usr/app

#command while creating docker container
COPY ./ ./
RUN npm install

# startup command
CMD ["npm", "start"]