FROM node:12.14.1-stretch-slim
MAINTAINER aviv ben hamo 

RUN mkdir -p /source 
COPY ./ /source/nodeServer
WORKDIR /source/nodeServer
RUN npm install


CMD [ "node", "app.js" ]


