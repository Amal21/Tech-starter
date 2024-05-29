# Use the official Node.js image.
FROM node:18.16.1

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install dependencies using Yarn.
RUN yarn install

# Copy local code to the container image.
COPY . .

# Set environment variables
ENV PORT=3001

# Start the server.
CMD [ "yarn", "start" ]
