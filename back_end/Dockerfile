FROM node

MAINTAINER Raphael Racine

COPY file_system /back_end/

#RUN npm install -g pm2@0.12.9

WORKDIR /back_end/
#RUN npm install

RUN apt-get update && apt-get install -y python

EXPOSE 80

CMD /back_end/start.sh
