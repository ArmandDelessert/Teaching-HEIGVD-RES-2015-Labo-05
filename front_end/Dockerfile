FROM httpd

MAINTAINER Raphael Racine

COPY config/httpd.conf /usr/local/apache2/conf/httpd.conf
COPY start.sh /front_end/start.sh
COPY www/index.html /usr/local/apache2/htdocs/intex.html

EXPOSE 80

CMD /front_end/start.sh
