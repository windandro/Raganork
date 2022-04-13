FROM fusuf/whatsasena:latest

RUN git clone https://github.com/byadems/Raganork /skl/Raganork
WORKDIR /skl/Raganork
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --ignore-engines

CMD ["node", "index.js"]
