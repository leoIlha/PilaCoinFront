# Use a imagem base do Node.js com a versão desejada
FROM node:18.13

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie apenas o arquivo package.json e package-lock.json para aproveitar o cache
COPY package*.json ./

# Instale as dependências
RUN npm install

# Instale o Angular CLI globalmente
RUN npm install -g @angular/cli

# Copie todo o conteúdo do diretório local para o diretório de trabalho no contêiner
COPY . .

# Construa a aplicação Angular
RUN ng build

# Etapa de produção para criar uma imagem menor
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html

# Exponha a porta em que a aplicação Angular será executada (verifique a configuração do Angular)
EXPOSE 80

# O comando CMD para iniciar o servidor nginx
CMD ["nginx", "-g", "daemon off;"]
