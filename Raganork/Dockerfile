FROM souravkl11/raganork:test

RUN git clone https://github.com/byadems/Raganork/ /skl/raganork
WORKDIR /skl/raganork 
ENV TZ = Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --ignore-engines

CMD ["node", "raganork.js"]
