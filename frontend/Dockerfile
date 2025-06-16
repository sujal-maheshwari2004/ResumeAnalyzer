# Use the official Nginx image
FROM nginx:alpine

# Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy your frontend files to the container
COPY . /usr/share/nginx/html

# Expose port
EXPOSE 80
