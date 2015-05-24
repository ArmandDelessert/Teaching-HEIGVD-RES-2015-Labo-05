FROM httpd:2.4

RUN apt-get update && apt-get install -y python
COPY www/ /usr/local/apache2/htdocs/
COPY start.sh /front_end/start.sh
COPY heartbeat.py /front_end/heartbeat.py

EXPOSE 80

CMD /front_end/start.sh