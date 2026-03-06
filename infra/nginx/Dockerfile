# Stage 1: Build the React Application
FROM node:20-alpine AS builder

WORKDIR /usr/src/app

# Copy package files (Context is project root)
COPY front/package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the frontend source
COPY front/ ./

# Build the project
RUN npm run build

# Stage 2: Serve via Nginx
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from builder stage
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

# Copy custom Nginx configuration
# Ensure the context path resolves correctly
COPY infra/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port (Documentation only)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
