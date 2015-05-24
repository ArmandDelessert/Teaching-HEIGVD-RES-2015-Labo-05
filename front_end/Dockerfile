FROM node

MAINTAINER Raphael Racine

COPY start.sh /front_end/start.sh
COPY www/index.html /var/www/index.html

RUN apt-get update && apt-get -y install apache2 && apt-get clean

EXPOSE 80

CMD /front_end/start.sh
