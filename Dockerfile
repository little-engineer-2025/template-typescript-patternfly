# https://docs.docker.com/reference/dockerfile/
# https://www.docker.com/blog/how-to-dockerize-react-app/

# https://hub.docker.com/_/node/

###############################################################################
# Stage builder
###############################################################################
FROM docker.io/node:22-alpine AS builder

WORKDIR /app

# Prepare cache layer
COPY package* .
RUN npm install --frozen-lockfile && npm cache clean --force

# Build the application
COPY . .
RUN npm run build

###############################################################################
# Stage production
###############################################################################

# The final target will copy the resulting dist/ directory from the builder
# container to the target directory where the nginx, caddyserver or other
# http server will serve the files from
FROM docker.io/nginx:alpine AS production

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

