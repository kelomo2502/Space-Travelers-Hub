# ===========================
# 1️⃣ Base stage for dependencies
# ===========================
FROM node:20-alpine AS deps

WORKDIR /app

# Install dependencies only (Leverage caching)
COPY package.json package-lock.json ./
RUN npm ci --frozen-lockfile --prefer-offline --no-audit

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

# Remove unnecessary files
RUN npm prune --production

# ===========================
# 3️⃣ Final stage (Serve with Nginx)
# ===========================
FROM nginx:1.25-alpine AS runner

# Copy built React app from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
