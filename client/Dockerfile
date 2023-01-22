# Build app

FROM node:alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


# Run nginx

FROM nginx:1.19.0-alpine AS prod-stage

COPY --from=build /app/dist/ /usr/share/nginx/html
EXPOSE 8000
CMD ["nginx", "-g", "daemon off;"]
