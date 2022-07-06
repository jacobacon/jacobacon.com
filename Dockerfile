FROM nginx

# Use the current directory as working dir
WORKDIR ./

#Copy the compiled resources to the image
COPY dist /usr/share/nginx/html

EXPOSE 8080