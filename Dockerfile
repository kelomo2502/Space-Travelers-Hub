# ===========================
# 1️⃣ Base stage for dependencies
# ===========================
FROM node:20-alpine AS deps

WORKDIR /app

# Install dependencies only (Leverage caching)
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# ===========================
# 2️⃣ Build stage
# ===========================
FROM node:20-alpine AS builder

WORKDIR /app

# Copy installed dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the app files
COPY . .

# Build the React app
RUN npm run build

# ===========================
# 3️⃣ Final stage (Serve with Nginx)
# ===========================
FROM nginx:1.25-alpine AS runner

WORKDIR /usr/share/nginx/html

# Remove default nginx static files
RUN rm -rf ./*

# Copy built React app from builder stage
COPY --from=builder /app/build .

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Use a non-root user for security
RUN chown -R nginx:nginx /usr/share/nginx/html

EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
