# Use the official Node.js image as a base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application's source code to the container
COPY . .

# Build the application using Parcel
RUN npm run build

# Install a simple HTTP server to serve the static files
RUN npm install -g http-server

# Expose the port the app runs on
EXPOSE 8080

# Command to run the application
CMD ["http-server", "dist", "-p", "8080"]
