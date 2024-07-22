FROM quay.io/CrazyPrince/crazymd
RUN git clone https://github.com/CrazyPrince/CRAZY-MD /root/CrazyPrince
WORKDIR /root/CrazyPrince/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
