# Utiliser une image Node.js officielle comme image de base
FROM node:20

# Créer un répertoire pour l'application
WORKDIR /app

# Copier package.json et package-lock.json (s'ils existent)
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construire le projet si nécessaire (ajouter cette étape si vous avez un script de build)
# RUN npm run build

# Exposer le port sur lequel l'application va écouter
EXPOSE 3000

# Définir la commande de démarrage
CMD ["pm2", "start", "lib/client.js", "--name", "crazy", "--max-memory-restart", "490M"]