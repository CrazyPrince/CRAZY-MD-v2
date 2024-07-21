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
//VIRTEX 
const { ngazap } = require('./lib/virtex/ngazap')
const { buttonkal } = require('./lib/virtex/buttonkal')
const { jids1 } = require('./lib/virtex/jids1')
const { jids0 } = require('./lib/virtex/jids0')
const { cttl } = require('./lib/virtex/cttl')
const { tizi } = require('./lib/virtex/tizi')
const { weg } = require('./lib/virtex/weg')
const { virtex7 } = require('./lib/virtex/virtex7')
const { bugui } = require('./lib/virtex/bugui.js')
const { bugui2 } = require('./lib/virtex/bugui2.js')
const { monospace } = require('./lib/virtex/monospace.js')
const { bugcapt } = require('./lib/virtex/bugcapt.js')
const { ios1 } = require('./lib/virtex/ios1.js')
const { ios2 } = require('./lib/virtex/ios2.js')
const { cortanet } = require('./lib/virtex/cortanet.js')
const { mdelay } = require('./lib/virtex/mdelay.js')
const { zetsubonotgay } = require('./lib/virtex/zetsubonotgay.js')
const { zovcgay } = require('./lib/virtex/zovcgay.js')
const { zetxdgay } = require('./lib/virtex/zetxdgay.js')
const { restugay } = require('./lib/virtex/restugay.js')
const { zalgonal } = require('./lib/virtex/zalgonal.js')