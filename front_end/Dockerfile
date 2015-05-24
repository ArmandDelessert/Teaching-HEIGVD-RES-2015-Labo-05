FROM httpd

MAINTAINER Raphael Racine

COPY config/httpd.conf /usr/local/apache2/conf/httpd.conf
COPY start.sh /front_end/start.sh

EXPOSE 80

CMD /front_end/start.sh
