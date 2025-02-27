# Use Node.js as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the app files
COPY . .

# Build the React app
RUN npm run build

# Install Nginx (web server)
RUN apk add --no-cache nginx

# Remove default Nginx web files and copy our built app
RUN rm -rf /usr/share/nginx/html/* && \
    cp -r build/* /usr/share/nginx/html/

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for web traffic
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
