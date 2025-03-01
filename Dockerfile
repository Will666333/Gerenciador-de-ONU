FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=minhasenha
ENV MYSQL_USER=meuusuario
ENV MYSQL_DATABASE=meubanco

EXPOSE 3306
