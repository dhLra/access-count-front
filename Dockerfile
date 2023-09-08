# Use uma imagem base que suporte Node.js
FROM node:18 AS build

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o resto dos arquivos do projeto
COPY . .

# Construa o projeto
RUN npm run build

# Use uma imagem leve para o ambiente de produção
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copie os arquivos de build do diretório de compilação do Vite
COPY --from=build /app/dist /usr/share/nginx/html

# O Nginx escuta a porta 80 por padrão
EXPOSE 8080

# Comando para iniciar o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
