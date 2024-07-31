# Don't change this [ /CrazyPrince/ ] name!
# Change from below link, else bot wil not work!
FROM node:lts-buster

# Installer les dépendances système
RUN apt-get update && \
    apt-get install -y \
    libnss3 \
    ffmpeg \
    imagemagick \
    webp && \
    apt-get upgrade -y && \
    rm -rf /var/lib/apt/lists/*

# Copier le fichier package.json
COPY package.json .

# Installer les dépendances npm
RUN npm i && npm i -g pm2

# Copier les fichiers du projet
COPY . .

# Exposer le port
EXPOSE 3000

# Démarrer l'application avec PM2
CMD ["pm2", "start", "lib/client.js", "--deep-monitoring", "--attach", "--name", "crazy", "--max-memory-restart", "490M"]