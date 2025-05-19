# # Use Node.js to build Angular
# FROM node:18 as build

# # Set working directory
# WORKDIR /app

# # Copy project files
# COPY . .

# # Install dependencies and build Angular project
# RUN npm install
# RUN npm run build -- --configuration production

# # Serve Angular with Nginx
# FROM nginx:alpine
# COPY --from=build /app/dist/kalles /usr/share/nginx/html

# EXPOSE 80


FROM node:18

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

EXPOSE 4200

CMD ["npm", "start"]
