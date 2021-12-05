FROM node:alpine

#copy all files to app directory
COPY . .

#set work directory
WORKDIR /site

#install all node modules package
RUN npm install

#start server
CMD npm start