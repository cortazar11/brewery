FROM node:14.14.0-alpine

# Add the following line 
ENV CI=true

WORKDIR /usr/app
COPY ./package.json ./
RUN npm install
COPY . .
CMD ["npm","start"]