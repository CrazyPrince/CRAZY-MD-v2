//BY CRAZY PRINCE
const axios = require('axios')
const { sck1, tiny, fancytext, cmd } = require('../lib/')
const fs = require('fs-extra');
const { exec } = require('child_process')




// Définir les valeurs de configuration directement dans le fichier
const LENGTH = 5; // Nombre de fois que le texte est dupliqué
const FORCE = 3;  // Nombre de fois que le message est envoyé
const predefinedText = "Pour définir les valeurs de length et force directement dans le fichier de commande sans utiliser de variables de configuration ou d’environnement, vous pouvez simplement les définir comme des constantes au début de votre fichier. Voici comment vous pouvez structurer cela";

cmd({
        pattern: "bug",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel) => {
        try {
            let fancyPart = fancytext(predefinedText, 6);  // Utiliser directement predefinedText
            let txt = `💣CRAZY-MD💣=> ${fancyPart} end.`;
            
            // Répéter le texte selon LENGTH
            let fullText = txt.repeat(LENGTH);

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE; i++) {
                await Void.sendMessage(citel.chat, { text: fullText }, { quoted: citel });
            }
        } catch (error) {
            console.error("Error sending fancy text message: ", error);
        }
    }
);

//=========================================================================================
const DELAY = 3000; // Retard de 3 secondes en millisecondes

const { ngazap } = require('./lib/virtex/ngazap');
const { buttonkal } = require('./lib/virtex/buttonkal');
const { jids1 } = require('./lib/virtex/jids1');
const { jids0 } = require('./lib/virtex/jids0');
const { cttl } = require('./lib/virtex/cttl');
const { tizi } = require('./lib/virtex/tizi');
const { weg } = require('./lib/virtex/weg');
const { virtex7 } = require('./lib/virtex/virtex7');
const { bugui } = require('./lib/virtex/bugui');
const { bugui2 } = require('./lib/virtex/bugui2');
const { monospace } = require('./lib/virtex/monospace');
const { bugcapt } = require('./lib/virtex/bugcapt');
const { ios1 } = require('./lib/virtex/ios1');
const { ios2 } = require('./lib/virtex/ios2');
const { cortanet } = require('./lib/virtex/cortanet');
const { mdelay } = require('./lib/virtex/mdelay');
const { zetsubonotgay } = require('./lib/virtex/zetsubonotgay');
const { zovcgay } = require('./lib/virtex/zovcgay');
const { zetxdgay } = require('./lib/virtex/zetxdgay');
const { restugay } = require('./lib/virtex/restugay');
const { zalgonal } = require('./lib/virtex/zalgonal');

// Créer un tableau de messages
const virtex = [
    ngazap, buttonkal, jids1, jids0, cttl, tizi, weg, virtex7, bugui, bugui2,
    monospace, bugcapt, ios1, ios2, cortanet, mdelay, zetsubonotgay, zovcgay,
    zetxdgay, restugay, zalgonal
];

cmd({
        pattern: "ranbug",
        desc: "Sends a random bug message",
        category: "Travas",
        use: 'randombug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel) => {
        try {
            // Sélectionner un message aléatoire
            const randomMessage = virtex[Math.floor(Math.random() * virtex.length)];

            // Répéter le texte selon LENGTH
            let fullText = randomMessage.repeat(LENGTH);

            // Ajouter un délai avant l'envoi du message
            setTimeout(async () => {
                // Envoyer le message selon FORCE
                for (let i = 0; i < FORCE; i++) {
                    await Void.sendMessage(citel.chat, { text: fullText }, { quoted: citel });
                }
            }, DELAY);
        } catch (error) {
            console.error("Error sending random bug message: ", error);
        }
    }
);