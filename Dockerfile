FROM node:latest
WORKDIR /organ-rebate-system
COPY package*.json /organ-rebate-system/
COPY tsconfig.json /organ-rebate-system/
RUN npm install
COPY . /organ-rebate-system
CMD ["npm", "start"]