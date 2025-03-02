# Use the official Nginx image as the base image
FROM nginx:latest

# Remove the default Nginx HTML files and copy your own website
COPY ./html /usr/share/nginx/html

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]