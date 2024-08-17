FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  webp && \
  apt-get upgrade -y && \
  npm install -g pm2 && \
  rm -rf /var/lib/apt/lists/*

RUN git clone https://github.com/CrazyPrince/CRAZY-MD-v2  /root/CrazyMd
WORKDIR /root/CrazyMd/

COPY package.json .
RUN npm install --legacy-peer-deps

RUN npm install -g npm@10.2.4

COPY . .

EXPOSE 5000

CMD ["pm2-runtime", "start", "lib/lib/client.js", "--deep-monitoring", "--name", "crazy", "--max-memory-restart", "490M"]