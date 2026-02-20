# Imagem base do nginx (leve e pronta pra servir arquivos estáticos)
FROM nginx:alpine

# Copia TODOS os arquivos da pasta atual pra pasta padrão do nginx
COPY . /usr/share/nginx/html

# O nginx já usa porta 80 por padrão, só estamos documentando
EXPOSE 80