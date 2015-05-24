FROM httpd:2.4

COPY config/httpd.conf /usr/local/apache2/conf/httpd.conf
COPY www /usr/local/apache2/htdocs/
COPY ./start.sh /front_end/start.sh

EXPOSE 3000

CMD /front_end/start.sh