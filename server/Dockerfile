FROM node:14

WORKDIR /opt/

COPY ./package.json ./package-lock.json ./

ENV PATH /opt/node_modules/.bin:$PATH

RUN npm install

WORKDIR /opt/app

COPY ./ .

EXPOSE 3333

CMD ["npm", "start"]
