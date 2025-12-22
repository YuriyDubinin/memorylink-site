FROM node:20

WORKDIR /src

COPY package.json package-lock.json /src/

RUN npm install

COPY . .

EXPOSE 8081

ENV PORT=8081

CMD ["npm", "run", "watch"]
