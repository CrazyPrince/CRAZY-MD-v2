
FROM quay.io/crazyprince/crazy-md-v2
RUN git clone https://github.com/CrazyPrince/CRAZY-MD-v2 /root/luv
RUN rm -rf /root/luv/.git
WORKDIR /root/luv
RUN npm install || yarn install
EXPOSE 8080
CMD ["npm","start" ] 
