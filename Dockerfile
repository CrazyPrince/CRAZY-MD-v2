FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/CrazyPrince/CRAZY-MD-v2 /root/CrazyPrince
WORKDIR /root/CrazyPrince/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]