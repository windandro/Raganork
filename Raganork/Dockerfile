FROM souravkl11/raganork:test

RUN git clone https://github.com/byadems/Raganork/ /skl/raganork
WORKDIR /skl/raganork 
ENV TZ = Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "raganork.js"]
