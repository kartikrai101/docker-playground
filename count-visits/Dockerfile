# import a base image
FROM node:alpine

WORKDIR '/app'

# commands to run while creating container from the base image
COPY package.json .
RUN npm install
COPY . .


# startup command
CMD ["npm", "start"]