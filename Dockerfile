# Stage 1: Build React application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies first for better layer caching
COPY package.json package-lock.json ./
RUN npm ci --silent

# Copy source files
COPY . .

# Build application with verification
RUN npm run build && \
    # Verify critical build files exist
    [ -f build/index.html ] || (echo "Missing index.html" && exit 1) && \
    [ -d build/static ] || (echo "Missing static directory" && exit 1)

# Stage 2: Production server
FROM nginx:1.25-alpine

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Set permissions (nginx user in Alpine has uid 101)
RUN chown -R 101:101 /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html && \
    # Verify file copy succeeded
    [ -f /usr/share/nginx/html/index.html ] || (echo "Index.html missing after copy" && exit 1)

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
    CMD wget --quiet --tries=1 --spider http://localhost:80 || exit 1

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]