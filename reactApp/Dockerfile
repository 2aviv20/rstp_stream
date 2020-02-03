FROM node:12.14.1-stretch-slim
MAINTAINER aviv ben hamo 

RUN mkdir -p /source 
COPY ./ /source
WORKDIR ./source
RUN npm install
RUN npm run build
CMD [ "node", "server.js" ]


