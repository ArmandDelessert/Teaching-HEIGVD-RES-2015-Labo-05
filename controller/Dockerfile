FROM debian
RUN apt-get update && apt-get install -y python

COPY heartbeat.py /controller/controller.py
COPY start.sh /controller/start.sh

CMD /controller/start.sh