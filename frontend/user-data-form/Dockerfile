# Use an official Node.js image as the base image
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to work directory
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of your app's source code
COPY . .

# Expose port 3000 to the outside once the container has launched
EXPOSE 3000

# Command to start the development server
CMD ["npm", "start"]
