# Base image - with node version (alpine - lightweight version)
# For production use alpine version
FROM node:20.11.0-alpine 

# Put the file inside the container as per the path
WORKDIR /usr/src/app
COPY package*.json ./

# omit the dev dependencies
RUN npm ci --omit=dev
COPY ./src ./src

# docker instantiates the image
CMD npm start