From node:alpine
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . . 
EXPOSE 8500
CMD ["npm","run","start"]