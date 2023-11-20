# Estágio de Compilação
FROM node:18:13 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Estágio de Produção
FROM nginx:alpine
COPY --from=build /app/dist/frontend-master /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
