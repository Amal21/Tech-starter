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

# Build the app.
RUN yarn build

# Set environment variables
ENV PORT=3000

# Start the app.
CMD [ "yarn", "start" ]
