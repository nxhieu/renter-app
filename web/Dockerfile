FROM node:10.23.0-alpine
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . .
EXPOSE 8501
CMD ["npm","run","start"]
