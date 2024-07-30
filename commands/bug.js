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
const predefinedText = "Les débats sur la validité et l'interprétation à donner à ces nombres apparaît dès les premiers siècles du christianisme. Par exemple, dans la seconde moitié du iie siècle apr. J.-C., le millénariste Irénée de Lyon, qui professe une autorité absolue des Écritures, évoque le chiffre de la bête à plusieurs reprises dans son traité Contre les hérésies[18] : il défend « 666 » — tout en lui donnant plusieurs interprétations possibles[19] qu'il se garde de trancher[20] — et rejette les alternatives, tentant de disqualifier leurs défenseurs qu'il traite d'ignorants[21].
Le court traité De Monogramma Christi[22], s'adressant à un public latin et attribué à Jérôme de Stridon — mais dont il n'est probablement pas l'auteur[21] —, récuse les interprétations isopséphiques[23] et calcule un monogramme du Christ qui n'est attesté nulle part ailleurs[24]. Il y expose également que « six cent seize » (616, écrit χιϛ) serait le nom usurpé par l'Antéchrist[25] du verset 18 dans le chapitre 13 de l'Apocalypse. En outre, le traité développe une argumentation qui réfute la validité de toute isopséphie réduite, arguant que le secret abrité par le chiffre devrait y rester, témoignant ainsi que l'approche isopséphique était déjà en débat chez les premiers auteurs chrétiens[21].";

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
                            name: "L̷͕̼͈̜̖̎́̿̿̓̇͒̎̀e̷̡̨̨̧̥̼̯̭͚̰͑͂͂͗̏͊͊͠s̴̠͙̱̗̍̇ ̶̙͖̠̫̭̬̝̹̻̇͂͒̏̎͊̈̊̚d̴͕̱̙͎͇͚̩͉̈̈́̒é̵̫͔̜̯͖́̍̓̇ͅb̷̡̙̺̪̝̥͍̩̲̑̆̽̈́̏̈́ͅa̷̘̳̣̣͈͎̓̑̒̈̔̑̍̊͠͠t̷̗̘̭͓̬̰̯̜̆̈̒̓̒͘s̸͙̪̐̄̿̎̈́̍̀ͅ ̶̡͓̥͖̥̻̰̮͒̍̏̾́̂͜͝s̵̯̄u̶̳̰̭̒͌̓̊̎͗͑r̷̰̜̰̈́̌̇̀̔̈́̉̋ ̶̡̣͙̞͈̗͎̗̰͊̄́͗l̶̨̻̩͍͕̘͙̦͕̆͛͠a̴̲͈̰̣̲͚̲̭͗̐ ̴̢̘̹̗̫̮̈̔ͅv̷̖̖̳͇̞̼̗̩͆͆̃͘͜ā̷̹͔̹̦̘̩̺͐͒̉̾͠l̶̠͑̊̀i̴͙̝̦̼̫͗̓̆͊͜͠͝d̸̡̛̼͖͖͖͑̆͆̈́̉͘̚͝ī̴̢̧͚̠̖̦͖̖̳̀̊́ţ̶̡̖͍̜̠̲̩̠͆̂̈͘é̴̢̟̳̤̺͍͉̱̦͍͊̈ ̷̡̡̤͕̰̺͙͍̰̯͐͒̓̎͛̈́͒͝e̶̛̞͓͕̹͆̊̀͌̎̋́̄͘͜t̵͉̾̉ ̴͕̽̓̌̌̋͠l̸̨̜͇̥̝̘̠͍̂͆͑̋̃͝'̷̘̱̰̉͌̔͊i̶̳̜̔͊̌͊͗̀́̍͘n̴̪͚̎͛̐̽͗̑̀t̶̺̤̔̐ĕ̶̡͉̘̙̯̜̤̳̼́́̏r̸͔̱̖̦͋͋͒̉̿p̷̢͙̙̯͈͔̈̆r̶͓͂é̸̜̻̳͓̞̏͆̓͊t̵̨̢̡̪̗̲̗̒̆͒͝a̶̼̱͎̒̆͂t̶̟̫͖̒́́͒͌̕i̵̛̤̣͈͎͊̒̍̈́̾͘͝o̵̼̲̪̲̬̥̽̾̽̿͒̄̾̋̊͝ǹ̴̡̠̿̿̈́̇̌̈́͝ͅ ̷͚͕͖̼͕͕̟̜͂͊̌̌͛̽͒̚͝à̵̧̠͙̥͚͚̞͍̱͕̃̀̋̔̏̃̀ ̵̡̲̺̘͌̌͝d̴͙̭̈̀̔͘ỏ̴̢̓n̶̨̛̛̩̱̹̋͐̂̈̈́̎͝n̸̳̹̺̮̳̩̳͓̬̟͐̑̿́ę̴̡͍̭̼̣̩͕͇̏̄̑̇͗̿̉̕r̸̭̤̥̮͖͈̀ ̷̧̧̡̛̫̞̫̪͎̭̮̈͑̾̆͒͠à̶̛̭̔̈́̑̾̾̃̈́͝ ̵̘̔̾̈̀͐c̶̬͎̲͕̗̍ȩ̷͍̱͚̞̲̓̈́̄̉̄s̵̜͓̗̙͌̆͂͗̎̌͆ ̵̳̈́̏͊n̵̛̪̘̙̆̆̓̈̿̑͋̚͝o̸̡͚̗̼̦͓̳͍͉͐͐̅̕͜͠m̵̮̗̼̼̟̯͖̘͊̈́́͒̀̀̂́͠b̷̻͙͎̬̻̰̒̒̑̃̄̿͛ṛ̸̝̲̫͚̹͂̿͋̃̐̊̒̓͝ė̷̢̠̯̄͗̓ṡ̶̜̳̪̈́͘ ̸͙̪̦͙͔̽͊̌͂̚ȧ̸̝̼̣͂̎̑p̸̹̘̰̲̼̟̞̪̀͆̚͜ṗ̶̢̫͚͍̬̣̝͝à̸̗̫͍͍̬̑̇͆̆̋̊͛͘̚r̸̛̫͆̀̂͂͊̔̃a̴̛͙̣͕̗̠͔͗̑͑͗̅̈́̕͝î̵̘̙̝͇̱̳̖̩̻̜̀̾̇̃͆̓̾̚ţ̶̢͉̤̳̭̗̰͉̑͂̓̈́̓̀̑̈̅͠ͅ ̶̨̨̤͎̯͒͛̍̌̄̎͛̈͠͝d̷̲͗̓͛͑̈́̍͋̃̚è̴̹̣̠͚͚͔́̏̅̎͐͛̒͜ś̸̡̛͎̠͎̠͕̹̜͐̆̽̈͘ ̸̢̙̳͙̣͖̦̓́l̶͕̩̅͂ḛ̸̟̯̊ṡ̶̺̠̳̯̫̒̈́͛͝͝͝ ̷̡̟̊̂p̸͔͖͇͗͝r̵̨̧̢̛̠̰͕͚̈́̀̅̂͒̐̚ͅę̸̹̼̠̣̼̓̏m̷̨̧̩͇̙̪̞̱͓͋̏̈́̇͝i̶̡̳͙͈͍̿̅͊̐͝ͅë̷͓͉̖̜́r̵͖̄͛͆̇̔̓̚͜s̵͈̤͒̉̊̇̋̈́ ̸̧̳̘̫̒̋͌͌̿̚̕͝͠s̴͙͉̘̳̑̃̔̋̚͘į̴̹̭̬̠̍̾̉̈́̉̃͊͛͘͜͝è̸̱͈͉͇͊̔͌̔̿͐́̌c̷̛͙̄̑͌̉̐̕l̷̢̼̩̙̙̮͇̏̈́́́̉̈́͠e̵̲̣̗̩̋̃̈̏͋̕ș̷̡͔̘̬̃͊̎̈́̈́̽̿̕ ̸̢̛͇̱̜̘͚̬̑̍͋̃̒̓͠ḋ̶̛̦͜u̷͔̺̦̫̒̍̈́͆͝ ̵̧̛̩͇͉̻͓̜̖̮̓͐̏́̎͐ͅĉ̷̜͚͇̏̉̅h̴̨̗́̑̏̚͝r̷͔͉͊î̶̱͔͙̫͎̩͎̳̠̓̉s̷̛̫̾͌̀̆t̷͇̗͔̙͈̻̣̝͂͜͜i̴̛͙̳͚͕̝̫͎̇a̷̡͇̭̜̭͕̒́͜n̸̡̦̱̪̺͙̞͛̑̑̑̇͊́̆̈́i̶͙̫̱̠̼͍͉̥̗̇̕͜ş̵̖̲̠̀͆̑̒͆́̄m̴̗͉̲̓̇́̂̽̋̀͜ȩ̴̡̞̘̦̙͇̣̟̒̎̅̍̃̕.̴͚̗̆͐̅̀̑ ̸̛̫̺͙͇P̴̧̧͎̤̹̆̅̈́̋̀̀͊͝͝ą̵̹̟̤̝̬̘́͘͠r̶̨̧̦̺̼̭̳̉͛ ̷̡̻̪̼̙̬̼͍͎̭̒̄̓̽̅͗͘͝͠e̴̺̞̤͉̓̂̆̾͂̒̊̽̄͂x̵̮͙̙̀̈́̄̔̃̋̊̀̕͝e̷̢̗͙̫̠̿̂̉́͋̋m̷̨̪̳͈̲̾͊͐̅̆̄̑͘p̶̏̍̓͘͜ļ̴̨͔̦̬̍͐̎͑̍̔̏̎̕͠ë̴̜̦̭̥̫̫͛͗,̷̫͕̫͚̰̙̪̰̥̦̾ ̷̘̱̘̼͑ḋ̸̘͑̽̄̐͘̕â̷̲̳̪̣͉̰̮̹̣n̵̘̯̙̼̏̒̅̀s̴͉̭̱̘̫͇̳̣̃͌͆͒̀̏̓̑̚ ̴̨͍̹̙̖̙̼̝̊̒̉͒̓̚͘ļ̷̠̈̈̀͝ͅa̸̙̿̂͌́̅̓ ̵̖̘̟̘͍̌͗̈͑̽͝s̵̭̻͇̟͉̀̐̈́̌̀͘͘͠ę̷̰͈͎̻̹̥̄͒̀̈́̂̈́c̴̱̻̓͋́̆̆̍̎́̚̕͜o̵͎͝ͅn̸̖̫̪͉̿͊̈́ḍ̴̂͌̌̋̒ȩ̷̢̢̮̤̞͎̳̱̹͌̌͆ ̸̮̩́̅͊̅͜m̶̢̯̙̱̲̼̣͍̈́̾̋̓̋̀̈͜o̸̧̬̯̤̙̥̝͇͕͍͗̽͛ḭ̶̢̡̺̄ͅt̶̨̨̗̩̯̯̞̲̰̙͑̓̀̕̚͝i̴̡̱͕̦̙̻͖͋̎̈́̈͂̏̕̚ͅé̷̬̱̑͜ ̸̧͉̰̠̤̻͉̫̋̌d̵̲̀̾̂̿͒̅̇̀͠u̵͎͍̗̿̇͒̿͐͝ ̸͇̗̻̮͓̲̺̻̫̀̌̈́̐͗̎̅̄͝i̷̭̦̗̪͋͐̑̏̓̇͆̉͘͜͝i̷̢̬͎͚̟̯͇̼̞̐e̷̢̬̪͒͂͂̔̾ ̶̧̬̈̒̽̈̀̎̑̈́́s̸̩̬̗̻̮̰͓̀̓̋̾ḯ̷̢̡̤̙͇̺̠͙̽̉͆ͅè̶̢͎͈͓̝̟͓̖̿̾̑̔̓̃̈́̚͝ͅć̵̨̛̛̥͔̞͚̪̥̆͂͑̂̇̈́ͅļ̵̣̪̀̏͒͜ë̴͚͕̖̰̬̤͈̘̤́̐̈́̆̉̈́̕ ̴̢̼͍̰̙͈̫̤̣͊̀̎̍̔̀͘a̸̧̺͇͓̐̂p̶̧͇͚̠͇͖̳̥̄̀̆̃̇̂̃͊͜͝͝ř̸̼̠̞̟̽͋͝.̷̭̗̝̮̮̼̭̮̬̃̂̃̾̓͛̍̉̂͝ ̶̛͙̲͉̭͉̙̳͎̅̉̂̆J̷̢̼͔̭̹̮̤̣́́́̋̔̃.̶̛̣̖͖͐̀̇̈̂̔-̵̧͈͚̻̥͖̀͑͒̈́͌̉͂ͅC̶̨̢̘͓̙̣̪̘̼͎̔̀̈́͘.̷̥͙͈͔̱̬̘͎̟̯͑̑͂͝,̶̨͎̗̭̜͙̠̣̹̀̓̏̉̆͋͊͊͗ ̵̨̲̟̱̤̦̝͈͆͗͗̓̿̀̌́́̕ļ̸̠̹̽̽̈́̆̋͐̃̉̚͝ͅȩ̵̛̹͉̤͍̜͗̍̓́̈́̌̓͋ ̸̧̨̙̼̻̱͍̫́͜m̶̥͇̼̩͌͗̉̄̚i̵̢̪̮͖͍̤̠̹̊̔̊̅̽̏̚͠ͅl̶̬̿́̋̋̎̂l̴̨̝̳̖̯̮͕̬̭̺̆́͂̌̈́̽̏̈́ȩ̸̛̪̫̳̬̹́͛̀̑̿͒͐̎͘ṅ̶̤͇̳͙͎͜a̷̧̮̜̤̝͈̻̘̓͗̆̈́̀͒̀̆̀͘r̶̨̻͛ì̶̛̤̂̊́̔̃͌̀̌ș̴̳͚͋̓ẗ̶̤͛̉͆ę̷̗̻̜̦͓̲̰̘̈́̂̿̎͝͝ͅ ̶̧̘̘͇̜̯̇̽͋͠ͅͅḬ̸́ṛ̴̛͈̘̈́̍̊͆̒͋͆̀͠é̴̼̫͚̳́͂̎n̸̢͍̥͖̯̩̬̱̈́́͜é̴͔̟̞͎̇̏̓̔̓̓̌̏̓e̵͖͙̙̝̟̜̓͛̉ ̸̘̾̀͝d̸̢̛͖̮̩͌͐̄͊̏͋e̷̟͊̍͆̍͗̍͘͝ ̴̨̛̫̫̭̼̭̈́̃́̈́́̅͘͜͝͝L̴̛̫͖̫̬̏͒͛̏ͅý̶̢̧̥̳̟̬͖̻͕͙̏͑͗͘͠͝͝͝ŏ̶̥͆̿̂̍n̵̡͔̱̰̄͆͂͌̃͐̚,̴̢̜̰̩͎͕̫͉̀ͅ ̸͇̥̙̼̭̝̜̞̗̇̈́͝ͅq̸̨̧̛̝͓̞͌̓̿u̶͈̪̭̞̟̬̺͋̚i̸̛͇̼̙̲̦̮̳̙̣͊̃͠ ̶̛͕̮͙͚͚͕͙̔͗͂̎̊̐́̆͘͜p̴̛̛͍͔̳̦͆̅̓͂̚͝r̷̡̧̛͇̰͇͎͊͌̋̓̕ǫ̸̨͙͉͈͍̗̥̹͑͗̍f̵̜͍̗̱̲̠̹̌̾̇̚͘͠ȅ̶̢͚̪͇̊͑͑̇̏̾͝ͅs̸̢̛͙̩͍̝̖̯̠̅̎̈́̈́̊̎̽s̷̡̖͌́̕ȩ̴̨̯͕̝͐̐̏͐͂́͆͆̚͜ͅ ̴̨̢͎̪͖̻͓̮̀̃̑̇̃͗͘͜ͅu̷͉̤̳̜̹͈̮̟̱̓̑́͜n̴̨͔̣͔͚̠͚̰͇̐̋̑̇̈͐͘͠è̵̢̹͓̱̮̦̲̪̓͘ ̶̠̣͇̟̱̹̥̓͝͠͝ā̷͕͎͋̅̄̓͘ǘ̷͍̏t̷̢̜͕̺͕̜̭̞̳̄̂ŏ̶̧̖̓̽r̸̨̛̯̩̘̣̉̀̐̒̍̃̍̂̚i̷̢̢̭̪̼̖͑͛̈͗̐̾̑t̸̛͍̯͉̜͈̲͙͙͖͓̓̃é̴̱̅̅͑̐̌̀͊̓͝ ̵̫͉̮̘̳̻̘̽̾̂̄̈́̀̕͝͝a̷͈͚̲͇̩̥͎̣̪͐̅͌́̐̀̈͝b̷̢̘̬̂̌̈́͐͠ṣ̸̞̘̆́̾͗ỏ̴̢͎̹͔̲̘͙͍̚l̴̨̞̰͕̘̪̗̈́̎̒̋̏ů̶͔̯̬̞͇̞̼̱͛̈́̎̋͝ë̴͇͎̲͎̪́́͆͐̔͆̑̒͠ ̶͓̮͒̈́̋͂̍͘̚d̵̞̞̹̳̗̯̮̖͇̃̌͗̃ͅȇ̸͖̳̘̤̋̿̑̿̉̕͠s̵̢̘̪͖̦̲͐̀́̏̑̄͑̎ ̸̢̪̘̘̣͔̉̅́́É̶͈̰̭̣͙͚̄̅͊̐͒͂͂͜c̷͓̹̗͎̟̫̹̙̍̓͗̃͝͠r̷̢̞͓̦̂i̵͔̘̯͊ẗ̴̡̛̼̤̫̣̘͈̼́̒̄̈͊̚u̶̢̙̞̮̎̂́͒̀̚͜͝ŕ̴̢̫̬͇̭̎̌́̃̈́e̷̡̨͇͙̣͔̝̺̅͐͊͒̆ş̷̺͔͇̱̝͇͔̼͆̉̈́̓̽̄͆́͜,̵̛̘̺̞̹̽̈́͛͗̈͜ ̸̢̻̜̱̩͚̻͉̦͌͂̋̿͆̄̒͋̍͠é̶͕̺̣̺̊͌̂̔ͅv̸̹̟́̒̽̽̕o̸̢̩͈̮̞̫͎͉̫̓͂̎̒͘͠q̷̯̭̲̤̭̫̹͓̦͉̈̓̄͝ṳ̵̳̯̲̙͎̤̭̯̈́́͝e̵͖̥͖̤̟̦͌̋̈́́͗́́̚͠ ̷͕̇͌͛̇̆̓̚͘͝l̸̡̯͚̻̖̳̩̃̿͑̍̚e̸͉̜̩̩̺͍̪͊̍́̀͘ ̷̞̬̳̼͓̙̯̭̼͋̅̿̀̈́̾͝͠c̸̢͉̩̯̱̻̼͕̜͚̅̍̐͋̌̀h̸̬͇͉̀̀̎̅̽̆͠i̴̛̤͋̍͐͆͊̂̌̓f̵̽̿̈́͊ͅf̷̛͖́̅̒͐̆́̽̍ŗ̸̱͎̦̲̰͖̦͎͕̈́͗̓̓̓̿̄̃̈̕e̴̞̙͈͋̀̅̄͂̆̍̿́̽ ̸̱̓͗̀̎d̴̹̻̮̞̃̈́̆͋͜e̸̲̭̽̅͋̂̂̽̐͝͝ͅ ̸̧͚̬̭̾̏̆̈́́̄l̵͈̫̹̘̯̖̝̘̠̩͝ä̷̛̦́̅̍͂͝͠ ̴̥͛͊̽͑͂͌͋͒͠b̸̛̫̞̠̗̝̪͎̮͇͐̃̂̍̃͌́̇̓ê̶̡̥̊͘ţ̸̖̩͙͚̹͔̤̉̄̌̉͐̈́̃͌̄̕e̵̫̻̰̱̯̙̘͎̯̅ͅ ̸͚̲̼̹͇͉͑̎́̄̾̊͂̃͘͠à̸̱̦̬͚̺͖͚̈́̀̇͊̓̀̓̇̂͘ ̵̤͌̅̋̾̐̆͠p̴̛̝͍͚͎̳̮̪̊̂ͅľ̵̺̦͙͔͎̱͎͖̳̒͆͗͆͜ú̵̠͕̳͎̟̜͍̻̲̃̔̀͂̚s̷̩̗̅i̸̜̍̑͑́̊̾̽̈͘ȩ̶͕̟̻̯̩͇̬͚̉̈́̿̚ų̶̢̝̝͖̥͇͒͒͆̀͝ͅr̴͇̪̦̘̬̙̱͛̾̊̌̅͑͊̕͝s̵̺̪̪͍͎͙̦̽̇̑̎̚̚̕͘ ̶̡͎̗̺̟̌͆̋͆͘͘ř̷̦̥̥͙̼̦̗̱̦͓͗͂̉̈́̈́̏e̵͉̬͓̟͎̗͍̪͍͆̋p̶̧̚ŗ̶̢̟̹͖͈͎̞͌̇i̷̳͓̗̹̗̜̅̕s̷͍͈̩̟͔̜̬̼͗͒̄e̵̼̻̗̝͔̫̰͚̮̟̽̽̿̅̍͛͝s̵̜̤͍̾̈́̍̄̽͠ ̶̡̡͇̺̼͉̻̔̀̉̊̑̏̂̀̚͠d̸̢̳͓̰̮̯̦̟̆͗̀͆̾̂̑̉̚͠ͅä̸̛̝̺̙͖̙͒͌͌̋̀͛̏͋ṉ̸͊̂̃̀̂͐̅͒ș̵̮͍̗͈̀̀̃ ̴͇̼̮͕̩̲̓͂̂̚ś̵̺̘̑̉͌̈̅̓͝͠ǫ̴̺͈͆̎͌̉̿͂̃͒͝ń̴̛̥̼̱̰͙̄̈́̎ͅ ̷̧̣̀̚͝t̸̜̹͍̗̝́̈́̓́͘̕̚̕r̴͔͇̳̮̜̼̫͓͑͒̀̐͆̆̽͘ͅa̸̧͑̅͐i̸̡͉̞̫̱̔̓̄̍̚t̸̗̥̜̯̦͎̏̉́̎̈́̈͗é̷̞̺͙̞̻̰̞̮̜̈́̀͂̔̿͝͝ ̵̨̥̞̞̭̀̊Ç̵̨̹̄́͛͊͌̓͊̉͘o̵̡̨͔͇̜̮̦̖̤͛̓̐̀̊̈̚n̷̩̦̈t̸͇̠̬̓r̵̩̦͇͓͎̮̳̺̼̤̽̾̑̿͂͆͂̇e̷̼͎̬͙͂̓̃ ̸̣̮̭̝͊́̽̿͐͒͘ĺ̴̼̤̐̌̃̔̽ͅe̴̡͖̺͜͝ͅs̷̝̈́̂͋͂̇̚͜ ̸͉̄̆͋͂͌͛h̵̼̗̠̠̜̦̼̤̟̯͘͝é̴͓̹͓̇͝r̸̡̺̣̤̯͔̱̘̈̑é̴̜̹͍̐̓̾̌͆̌͋̃̔s̵̪̞͔̤̗̫̖͍̣̝̑̃͊̀́̐͠i̶̩͗́̏̍̅͂̾ë̴̫̱̲́̔̑̿͐̕͝ṡ̵̡̘̹͇̻̞͙͚̒̓̑͗͝[̸̘̖̝̘͓̠͕̰͓̳̐̅̐1̸̛̰͎̙̽8̴̛̖͈͙̭̘̔͂̓͋͊̆͒͘]̶̣̦̞̐̇͗̃͌̇̏ ̴̢͉̞̭̱͚͓̟̰̔̄̾͆́̎̍͝:̴̡̲̦̘͇̜͖͍̱̠́̉̐ ̵͔̟̹̍ỉ̵̧̗̟̪̠̽̒l̸̠̲̖͓̼̎̽̍ ̴̭̲̘̗͙͖̺͙̜̽̿ḑ̷̞͔̜͆̏̀̕͠é̵̳̰̩̥̮̰̯̦͂̄̏̀͆f̴̛̜̫̠̻̱̘͚̻̈̀̓́̆̓͝͝e̴̡̤̘̺̻̮͛̇͋̑̃͠n̶̡̨̼̜̭̲̱̯̜͐͆̒́́͐̿̚͜d̸̞̑̀͑͝͝ ̶̘̰̬̿̎̌̈́̾̑͘͝͠͝ͅ«̶͇̦̮̑̇͠ ̸̨̧̛̦̹̝̗͛̄̈͆͊͂̐̊͝6̸̧̛̛̙̪̬̼̪̗̖̐̌̑͋̀̚6̵̛̗̪͚̼͋̀̇̍̅6̴̼̲͖͔̼̗̝̂̓̈ ̶̧̛̠̞̖̫͕̖̟̊̀͜͜»̸͍̳͑͂͑͑̇̂͐ ̸̡̧̦̙̭̳̓̐̓̆͑̔̕̕͝͠—̸͉͔͎̠͚̰̭̙̓́̐̂͋͐̐̿͝ ̷̛͎̎͑̓͋̀̚̚t̵̪͆̓̉̋̿̒̄ő̷̻̘̯͔̜̲͝ȗ̵͙̫͓̭͊́t̶̞̘̝̱̭̦͙̼͔̎̓ ̵̨̥̄̽͑͛̐͒͒͌̀͘ẻ̷̝͎̲͐n̷̜͙̺̦̮̯̝̮͍̗͗̕ ̸̡̐̀̐̿̒͛̾̐̕͠l̴̘͚̤̟͇̠͕̻̥̉͑̌̃̎͝͠͝u̵͚̹͈̓͋͑͂̕i̸̻̺̼̞͇͚̝̇̎̾͗͘ͅ ̴̗͙̲̺͍̟̠͈̆́̐̍̒̈͂d̸̟͉̼̦̼̺̀̂́̓̄̚ͅo̶̝͚͚̥̪̍̐̓̚n̵͓͙͗ń̸̛̦͇͉̣̬̳͓͕̫̰̔̑́ä̵̱͙̥̩͛̾̈̚n̸̗̝̩̤͎̜͌̚͝t̶̨̞̻̗̱̑͂̈͋͜ ̶͈̊̑p̷̻͖̜̻̞͚̦̉͝l̶̡̧̧̥̣̤̦̼̼̘̔̀̂̿́̅̅ū̴̮̦͈̩̦̖̂̈́s̷͍͕̖̱̘̐̄̃̊̾ỉ̷̛͔̠͚̜̲̝̬̺́͑͝é̴̡̹̳̱̩̤̜̲͆̈̅ụ̷̢͍̖̺̖͈͌̍̓̊̊̕͜͝͝ṛ̶̪̭̦̓̄̽͠s̶̢͂̎͒ ̴̨̨̨̘̪̘̰̯̤̂͋̔͋̓͝ĭ̴̢̧͖̺͈̠̗̔͊̈́̈̊̚n̸̞̪̲͛͂̔̊̂t̵̢͍͇̠̼̥̙̗̋̒̽ẽ̶̢͚̜͖͎͍͖̗̪̘̿̔̈̈́̍͑͘r̸̢̡͍̦͇͉̠̻̈́p̸̢͍͙̦̝̣̑̇͛r̶͓̞̘͍̫̓̂̀͂́é̵̡̈t̶͕͉͆ă̸̢̞̺̏́ţ̷̛͉̹̺̬̹̼̫͇̳̓̆́̌̉͋͘͝į̸̢̨̺͎̩̪̹̔̒̃̇͒͑̾͠͝ǫ̸̤̘̰̖̹̱̦̥̏̆̂n̸͔͇͍͎̘̘̊͠s̷̥͕̙̲̟͍̃͝͠ ̴̡̻̦̜̥̪̉̉̒̔̅́̉̿̚p̶̦̯̙͖̮̦̠̣̓̆̕͝ó̴̖͑̿̅͗͋͑̀͘͝ş̵̹̮̮̬̟̝̔̔̅͛̆̀̚̕ś̵̩̬̰̞i̶̯͈̮̪͎̙͑̄̈͂̇b̷̲̫̠̩͎͙́̈́͐̇̉̓͒l̵̰̱͖̎̇̅͐̓̋̈́͘e̷̟̳̠̩̣͊̅͗s̴͕̆̌͝͠[̷̫̹̜̰̥̩͓̑͋̍̏͜͝1̸̨̩̄̈́̈͌͌̃͠͝ͅ9̶̢̧̗͈͓̥͆́͑̃̓̀͐͊͂̍]̶̦̿͋̈́͒̍̽̀ ̵̨͉͉̭̬̳̱̅͘q̴̨́̓̌̔ǘ̸̳͙̗̪̂̏̀́̑̍̚̚'̴̠̞̘͚̤̰͆͘͜i̸̛̺̞̹̼̰͊̄̈̾̀̒̎l̴̢̛̥͈̈́͑̍̅̿ͅ ̷̤̮̹̂̿͛́͒͝s̵̥͚̫͉͈͉̺͕̅̾ę̵̙̜̍̓̓̽̐́͒͝ ̶̯͖͍̺̻̙̎͐̐͌͠g̶̟̾̀͌̌̍̿á̴̢̦͈͉̱̯̺̓̀r̶̛̹̙̱̥̾̑͗͑̽͜d̸̡̧͉̩̗̳̘̟̒̃͐̏͛̅̀̕͠ě̷̡͙̫̤̘̐̏̌̾̉̕ ̶̡̭̣̖͔̰̘̜͈̻̽͝d̶̨̼͍̟̘̮̟̉́̈́͒͝ͅȩ̶͚̫͔̥̫̘͉̐͠ ̶͔̺̣͎͕̯͇̟̠͊͋̍ţ̷̛̘̭̝͇͕̊̾͒̾̋͐͗ŗ̸̗̉̃́̆̂á̸̗͇̺̠͙̯͂̓̈̽͛̑͐̓̚n̸̲̖̬͈͍̥̺̄͑́̋͗͊͗̏c̵͚͖̗̤̤͇͍̳͗͊͌ḥ̵̛̪͎̗̖̓̀̔͒͒̍͜e̵͕̓̅r̶͚͇̙̪̫̹̬̱͂̀̀̍̄͋̂͑̀̚[̷̢̬͇̳̻͎͙̗̆́2̶̼͕͖̈́̂̅̐͑͠0̴̢̘͉̳̋̈̊͠]̷̛̟̲͕̯̘͉̎̋̀̊ ̸̢͕̖̺͚̪͋̋̈́̕—̶͎̪̪̪̼̱̓̃̈́̑͘͘͝ ̶̧̙̗̘͒̂ḙ̸̢̨̘͕͔͆͛̊̋t̸̢̡̯͍͍̖̠͓̪͗̍̋̀̂͑̓͂́͘ ̵̢̠̜̙̖̱͐̽͋r̵̦̮͚͎̆̊̂ḗ̶̢̛̝̝͖̟͚͗̆j̶͔̝͖͂̈́̔͌̓́̈́e̴͍̥͈̎̏̈́̈̔̏̈́̍̚t̵̩̤͂̑͌͂̀͒̈́̊͝͠t̴̻͎̠͚͋͛ͅe̷̲̱̣͔̳̪͕̤͌̓ ̸̞͎͇͓̘̮̥̗͎̗̽̉̈̆̀̚̕͝l̵̹̺̫͖̱̠͎̈́̋̐̏̂̔̐͊̈͝ẹ̴̮͖̭̈͐̐̈̀͐̈̈͘͝s̶̻̖̞̺̳̮͕̈́̐̒̈́̂͐̓ ̶̧̻̼͖͉̤̇̀̈̆ȧ̵͙͈̹̆̎̆̔̐̆̃̚ͅl̶͎̟̘̟̩̙̥͇͚͙̂͑̓̈́́͆̈̕t̶̢̨͇̞̫͉̲̞͈̍́͒͂̿͐͂͊̊̾ȩ̵̩̫͔̜͎̞͉͉͝͝r̸̬̳̐́͗͑̑͐͜n̷̝͌̾́͑̇̌̈́̈͜ä̷̹͉̭̹̤̞̀͜͝͠t̶͔̪̥̦̤̗͖͙̼͆̒̚͜ī̶̩̘̾̇v̶̧͎̀̊̏̈́͂͝e̸̡̼̭͈̻̼̳͓̍̔̂̀͝s̸̱̤̞͙̹̈́̓̉͜,̶̝͕͙̬͓̙̪͓̀͐͜͝ͅ ̸̡͎̳̟̹͋̓̌̂̏͐̋̕͝t̷̛͓̘͚ͅe̷̲͔̳͈͇̞̮͆̂ͅn̸͕͓̘͍̣͙̤̯̍̅̈́̽̑͝͠ͅt̷̯͇̦͙͖͔͔̂̇͐͛̐̇͋̍̂͠ͅa̴̖̻̦̝̗̖̮̟͑̾͒͒͝͝ͅņ̴̧̱̥̬͙͚̌̋͜t̵̺̠̻̳̤̲̩̰̬̂̓̐ ̴̜͍͌̎͗̾̄̿d̶͉̖̰̰̳̬̠̂͘̕ĕ̸̺͆̈́ ̶̡̛̫̝̺͓ḑ̸̣̖͇̳̫̭̿̀͛̌̑͝ͅǐ̷̡̮̼̘͔̈̐͝͝s̷̢̪̪̯̥̙̯͌q̵̢̥͍̀̓̇̒̒̋͝ų̸͓̘̰͚̻̄̉̈́̈́͐͆a̵̢͍̬̙̺̲̻̹̥̮̍̐͋͆̐͝l̴̥̬̹̀̊̓ȋ̸̛̺f̷̮̄̀́ǐ̷̞̗̭̺̙̬͎̼̜̈́́ͅẻ̷̦̣̙̪͂͗͋̉̽̎͝r̷̥̔͠ ̵̹̱͂͒͝ļ̷̦̤̤̮̤̭̠͉̠̈́͝ȇ̷͚̒̍̋̂̇̀̌ų̸̡̨̤̱̮̫̱̌͌̇͆̔͋̂͒̕͘ͅr̶̢̧̞̺̬̆s̷̗̼̲̦͚͚̻̩̮͙̏̄̑̇̈̀̒͘ ̸̼̜͎͕̬͖͓͛̿̂̆̓̾̀̄͋͊d̶̨̛͓͉̻͉͎̳̟̉̒̒̇̔́̅̚͝é̷̱̻͛̏̍̾̊f̷̨̲͈͔͊͐͑͛̉ȩ̵̥͉͖̞̻̱̒̽̾̈́̃̍͜n̵̗̭̺͋̽̈̈̃s̵̞̮̟̜͈͂̊̎̅͒e̷̱͎̙̋̑̀̏̏̌̽́͑͝u̸̜̻̭̪̫̪̮͇̖̱̽͠r̷̲̓̈̐̓̎͂̎s̷̢͈͉͈̯͉̲̳̖̱͗͒̐̄͊̄̊̏͘̚ ̸̝̹̘̮̟͕͗ͅq̴̣͍̭̈̚ͅú̸̧͎̭̖͈̲̠̮̩̀̊̈'̸̨̝̟̹̀į̷͇͓̟͍̅͜l̴̡͍͕̦̪͚̞͖̏̾̇̍̈́͠ ̶̛̙̪̱͓̪̮̤͓̿͑́̈́͊͋͝͝t̵̰͕̻̲̩̯̝̫̂̊́͒̒͑̇́̿͊r̵̢̹͉̎͆̒͗̈́̄̓͐̾̃a̵͙̒̎̃̀̽̓͒̽̉͠ȉ̴̲̖͇̟̣̩̯̠̍̌̾̕͝ţ̷̩̂͋̃́͠͠ę̶͉̯͚͈͌͗̾̿͑͒ ̶̡̪̤͙͔̜̭͙͚̌̈͋d̷̯̞͆͋̌̑̄̈́̕'̵͕̏̔ị̷̛͈̤̰́̐̈́̿́̍̋g̸̥̼͍̬͖̼̗͉̍̄̿̈́̀̃̊̃͝n̷͙̬̉̏͗̊̚͝͠͝o̵̗͇̎̊̾̉̕ŕ̸̛͇̙͖̪̪̼̗̆̈́̋̌ä̸̛̞̥͎́̄̒̎̽̿̀n̴̛͙̙̻͙͑̒̈̆t̶̨̫̳̤̳̹̦̺̍̀͑̌̉͗s̶̡̛̄̑͑̀̌̿[̷͕̙̖͈̖͒̔̔̎̚͘͝2̷̧̮̯̼̲͓̦͓͆̌͊̔͘̕1̶̨̺̮̥̰̠͙̺̩̆̊͐̃̋͠ͅ]̵̞̐̓̿̿̇̈̈́͠͝.̵̪͓̼̒̇́̏̀̽͆̍̾̕
̸̧̛͇̤̎̀͋̊͒̒͂ͅL̷̛̛̰͚̒̊̽̿̀͠e̶̞̻̥͕͖̹̪̪̦͂̂̔̑̐̾͗̌͂̚ ̷̤̼̦̤̀̎̽̿͗̈́͒͑͠ͅc̴̡̨̻͙̬͚̮̦͔̱̐̆̀ô̶̩͈̖͕͉̰̂̑̔̚͜͝͝ǘ̷̮̰̺͕̱̤̫̌ŗ̸̯͇̩̥̫̈́ͅt̵̨̖̓̈̔̿̈́̀̿͗ ̸̛̞̮͉̳͆ţ̷͕̯̱͎͔̫͎̈́̔̋̉́̽r̵̡̛̊̈́̅̍̈́̇́̀ą̷̛͔̗̝̫̞̤̲̹̄͂̔͜͠î̵̢̭̆͌̌̅̒̉͆̒͝ţ̵̮̭̤̲͈̳̫̭̂̏́͗́̓̐͛̈́͘ͅé̵̹̻̥̏̓̊̓̕͠͠ ̷͓͓̮̺̝̙̾̈́́D̵̼̱̝̣̞͖̘̬͝e̷̢̼̦̭̱̐̑̐̈̓̂̇́̑ ̸̢̧̗͈̙͙̣͕̗̓̀͘ͅṀ̸̹̦̪̥̹o̵̡͎͔͍̻͈̦͔͇͋̏̓̊͂̒̿̈́n̴̡̮̈́̍́̓̕͠ơ̸̗͕̮̺̲̜̯͗̿̒̆͆̀̋̎͠g̶̺̜͌͛̆̇͠r̶̞͓̼̺͕̾å̴̯̰̲̱̺͖̳̽̀͐̓̔̓͂̋̕m̶̧̜̔̀́̋̀͝m̶̞̌͌̽̋͗̚̕͘͝a̸̦̅̈́̾͘̚͠͝ ̴̫̻̺͉͓͗̊͊́͗̾͠͝C̶̛͕̻̮͎͎̈́̓̓̐͒̑̾̀̕ȟ̶̻̫̞̻͉̑́̉̒̏̏̽͑ȓ̵̨̛̮̈́̊̃̈́̿̆́̕ǐ̶̡̮̗̜̽͐͂̀̅͑͜s̵̨̩̩͖͖̘̼̻̱͓̅͆̓͛̓͠t̷͚͉̜̺͚̊̀͑͘i̴̧̺̰̝̙̙̹̺̼̮͐̾̇̆̐͆̔͐̕[̵̖̜̳͔̀͊̆͗͛̎͒͑̎̿2̶͕̞͎̱̭̫̳̞͋͐̂̈͝͝2̴̧̜͎̩͖́̊͘ͅ]̷͓͍̼̤̬̻̺̱̅̎̈́̍͜,̷̦̙͈̞̦͇̖̜̎̅̾̚ ̴̨͙͙̥̙̄̄͗͆͑̓̔͌̋ͅs̵̜͙̘̅̃̏͆̂̄͛̕͝͝ͅ'̸͙̫̝̥̜̦̰̀̈́̾̌a̵̢̒̊̎̿͂d̷̪̰̐̾͌͗̓͜r̷̨̡̛̯͕̼̠̪̮̫̓͛͒͝ẹ̵̼̣̯̜̰̤̫̗̊̍͘s̸̥̫͍̗̪͒͊̊̿̃̓͌̎͋͜͠s̸̨̗̫̮̲̪̠͕̜̗͋̂̒͆͠ạ̴̍̇̀́̑̇͐̍̀̕n̸̢̹͉̞̩̝͒͐̔͐̄͆́͛̚ͅt̸̺̲͇̱̬̙̱̩̀͐̀͠ ̶͓͔̳̰̩̈̀͗̂ą̴̡̧̹͇̘̥͍̀̊̍̕ ̵̡̻̟̭͕͑̿̈͋͒ṵ̶͇͇̱̣͊̉̉n̴͔͋ ̴͎̥̘̯̿̾̓̾p̶̢̥̩̘̯͈̊̽̿̓̑̑̿͘͝͝u̵̧̲͇̤̰̓̀̑́̀̕͝͝b̴̢̗͇̣̯̹͙̙̱͂̓͊̒͝l̵̨͖̥̼̖̺̅̀̍͗͌̃̏͘͘ͅį̶̯̼̠͍̖̳͐͐̓̔̈̽̀͆͋c̵̡̖̔͘ ̶͓̋̓̉̔͌͠ĺ̷̨̗̜̳͕̞̥̦͜ả̵̧͉͕͇͇̗̆̓t̵̢̨̰͈̼̣͕̞͕̓̽̑͛̾̒̌̏̚į̶̥̻̯̗̐̉͝ṉ̷̪̜̱́͒͂͘̕ ̸̧͍̞͚̜͉̤̈́̈́̏e̷̼͉̎͊͌̈͐̋̀̒͂̆t̴͎̩͙̳͔̮͑̅̈́͋ ̷̧̙̗̳͉̼͇̆̉a̴̤͓͍̦̲͕̼̎̿̾̾̃̈́̉̚ţ̵̟̺̩͉̈́̀̍̄̇̕͠t̸͍̳͇͇͈̺̺̟̽̓͒͝r̵̞̽͐̏̿͑̽̽̈ĩ̸̛̪̪̦̯̟̤̥͇b̴̰̜͖̝̹̩̏̈́̿͊̋̏͐ŭ̴̢̧͓͖̱̌̑̋͘͜͝ͅé̶͙̿̅́͘̚̚ ̷̧̠̮̼̬̩̟̉̎à̸̭̭͇̆̔̄̈́̽̒̃̐͝ ̶̩̫͓̱̐̑̌̽͂͗͝͠J̴̪̫̱͚͓̟̔͛é̷̻̳̳̫̲̹̗͔̺̌̽͂̾͋̒͋͌̌͘r̴̲̗͓̗̻͚̻͖͐̄̈́̀̂́ǫ̷̛̹̟̝̘̥̤̖̂̎̊̔̊̈́̚̚͘m̴̢̧̢̮̼̰͙̽̐͒̀̂̓ḛ̶͚̩̜͕̬̪̮̽̄͒̈̌̓͝ͅͅ ̸̰̬̠͙̗̻̱̙͔̿̽̏̀͜d̶̯͙͋̔ȇ̷͓̥̝̯͎̖̗̇͋͊͜ ̶̧̟͕̜̗̳̳̦͙̖̿̑̓͌̆͑͊̚Ş̸̦̻̥̟͉͕̪͕͊̈́́̕t̸̻̭͋͋ȓ̷̢̫̪̙͎̠̹̓͛͜ỉ̶̘̠̣͎̺͉̚͜d̷̰̄̔̿͑ȏ̴̢͚͉͚̩̙̣͓̞́͐͝ń̴̤̭̯̠̑͒ ̶̢̢̧̠̝̿̊̋̉̇̿̈́̾̈́̈́—̷̛̯̩̌̀͗͐̚̚̚ ̴̡̙̲͕̗̫̻̝͊̾̈́̔̇̚m̵̨͋͋̂̿ã̴̼̦̻͕̥̘̯̘̺̈͑̆į̸̞̮̹̝͉̩̰͎̂̅š̴̮̲̭͉͕̲̟͈̮̒̿͋̎͒̚͝͝ ̶̗͍̬̬̟͕̙̘̯͂d̴̬͕͓̲̮͔̄͘ͅó̷̧̖̟̳̏̈́n̵͍̻̊͂̋̋̊̑t̵͚̜̰̞̄̿̑̃͜͝ͅ ̵̧̬́̃̽̽į̵̧̯̖̠̱͉̻͕͔͋͌l̴̝͖̿͠ ̶̛̥̱͕̯̗̲̝̰̉͒̈́̈́̋̓͊́̚n̴̨̮̜̭̦̔̌̐̎͆̎̓'̷̢͖̠̟͑̇̉͐̉́͛͌ẽ̵̲̜͙̭̼͕ͅs̴̡̬̥͕̞̆͋̈̿̇̕t̵͎̹̪̩̬̥͉͆̒̀͊̍̑́̔͝ ̶̡̻͓̭̼͎̗̩̼̞͛̀̓̉̓̒p̷͇͉̯̜̖̫̕r̵̛͍̱̯͙̰̙̹̝̟͉̎̏͌̐̅̀͠ò̵̥͙̬̐b̷̨̹̤͓̦͇̤͈̳͕̄̾͑ä̷̧̩̜͓͎͈͇̓̀͒͑͛͌͠b̴̛͉̥͖̖̜̓́͗̄͠l̸̡̡̹͚͉͉̱͔͍͂͋̑̒͂̔͘͝e̶̦͊͒ṁ̸͇̖̟̙̺͑͝e̵̢̲̩̰̥̠̽̍͒ņ̶̧̹̳̦̺͖̀̅̌͑̋͆̐͗t̶̰̮̩̲̦̃͊͗̇͛͛̾̆ ̴͍͇̙̀̄̋͘p̷̡̫͓̙̝̬̗̦͗ā̸̡̞̗̏͝ṡ̸̨̰͖̈̈́͗͠ ̵̡̨̡̙̼͓̮̩̲̳̾͒̓̎̋͊̎̒̌͊l̸͔̗̙̳̼͔̓̃́́͆͘ͅ'̶̢̮̍̔̇̃̄̈̕͠͠a̴̘͖͆̀̿̽̎̓̄̿͝ù̷̳̲̠͉͕̒̂̓͆́̓̔̕t̴͚̱̻͉̣̬̦̤̑͊́̃̀̃̀̓͜ͅȩ̸͔̞̩͚́û̴̡̡̼͔̘͖͖͇̍̋̌ř̶͔̱̟̱͕̟͇̼̜́͑͐̓͊̀̋͆[̶̧̣̪͖̱̤̾̃͝2̴̡̧̪̲͚͚͉̒́͐1̷̨̢͈̼͙͎̠͔̂͌̓͛]̶̱̫̱͆̇̀̄̀̍́̐ ̸̡̛͗̈̎́̏͛̈́̀͝—̷̧̩̣̰̇́̑̈́̈́̃͜,̷̱͆̾̾̉͒̽̓ ̵̢̡̛̩̦̩̻̉̈͂͋͆̂ͅr̴̛͉͖͐͒̊̍͗̉͗͠é̷̖͍̱̹̜̊͑̈́͜c̷̢͖̥͈̠̥̙̅͊̑͐̐̄͠͝u̷̢̫̫̭̦̙̙̍̈́̀͝ș̴̭̏̑͊͛̇̀͐ę̴̪̙̤̖̰͆̑͊̋̄͆̚͠ ̶͎̲̬̗͍̾͊̐ļ̵̙̙̗̙̪̝͍̖̠́ē̶̳̟̜͝s̷̡̮̠̲̠̲̹͖̳̍͛́̀̇̑̾͊͘͝ ̷̛̘̏͌̂̓̍̃̚͝͝i̸̦͚͇̟̣̭̽̀͋͛̚̕͝n̶̛̛̥̞͊͒̉͘t̴̨̥̭̹͙͂̀̇͊̓͗̈́͛̅ȩ̴̛̣͍̜̫̩̮͇̙̂͐͊̆̏͝r̴̦̥̪͂͌̔̈̿͛̀̈́̐p̴̼̩̮͎̤̏̌͆̃̒̚̕r̶̭͍̖̐͊̒̊̓̒̑͂͠�t̶̨͖̼̣͍̼͙̖̏̓á̸̡̡͕̟̜̥̮͎̐̌͛̈́t̶̢̠̥̩̬̳̫̋̍ḯ̸̩̙̱͇̲̥͔̙͛͗ô̴̹̰͇͙̺͙̳̘̤͇̈́͒͆ņ̷̣̱̩̞̺͇̈́͒̃͆̿̂͘͘̕͝ş̷̜͕͎̙̜̟̮́̆ ̷̗͚̪͍͑̔̌͋͋͐̅͝ĩ̸̞̦̣͕͋̂̀̃̈s̷̡̨̡̺̰͔̝̦̣̀̽ǫ̴̨̜̻͉̥̫̠̈́͂̾͋̇͑̍p̸̡̛̫̳̼̤̲̫͖͓̯͊̃̍̆̊̒ș̵͖̅é̸̝͓̹̔̾̀͑͒̈́̏͗͋̕p̷̜̠̳̮̙͓̜͉̼̻̿̀́͊̌̈́͘h̷̦̜̬̙͆͊͑̋i̶̢̦̻̘̞̖̩͓̔̒͐̊̾̂̋͋̚q̴͈̙͉́̽͒̕ư̷̡̮̪̦̭͍̈́͋̿͐ȩ̴̳͋͋̃͒̐̀̒͝s̸̲͓̗̻̯̟̼̈́̍[̷̙̈�3̸̢̡͓̗̩̫̐̈́́̄͗]̶̡̨̛̖͉̯̆̒̔̂̀̓̍̃͘ ̸̢̡͙̺̞̍̑͂ḙ̶̰́̆̚t̶̟͙̳͘ ̴͕͍͈͎̟̱͎͗̓̄́̀̓̽̍̐͂ç̸̫͖͖̱͋̕͜ͅą̶̭͖̭̝͚͗̓́́͘ͅ�c̶̣̰̾̓̉̍̽̿ủ̸̢̡͓̜̒̀̈́̾͊͊̈͐̅l̶̲̈́̊̊̐̓͒̀̄͝͝ę̸̳͔̹̮̺̞̼̿͒̐̍̕ͅ ̸̨͇̗̬͊̊̈́͆̚͜͜u̵̳̮̿͌̾ǹ̵̼͇̤͜ ̶̨̧̤̮̦͈͕̱̙̽̓̂̏̈́̀̃̕m̷̡̢̬̘͔̬̞̰̪̒̾͑͛ó̵̭̜͙̻̠̐̆̔̈́̉n̴̲͛͆̔̓̿̆ȍ̷͚͎̱̗͒̎͘͜ͅg̵̼̜̥̳̱̭̊͜ͅr̸̢̫̺̱͍̝̮̥̹͋̓͌͂̀̑͘å̵̪͂̿m̸͕̯̋̍̅͌̾̈́͠͝m̷̢̺̼̭̣̝̘̈͆͂͜ĕ̴̡͐͛͌͌̅̀̽͝ ̷̢̞̳̹̄̈͂̄͝d̶̥̟̜̼̀͊̍͌͗̐̌͆͜ủ̵͎̲̭̲̪͙̓̏̍̈́̓͂̑͂͘ ̸͖̼̦̌C̷̛̖̮̓͛͗̒̑̊͂̈́ḧ̵̫̙͈͚̹͉́́̑͝ͅr̴̻͕̯͈̚i̸̢̧̜̣̖̲̦̽̎s̷̖̰͎̝̲͇̈́̉t̸̙͕͚͌͒̈̈̽̊̕ ̵̡̼̳͇̫̙͔̾̉̓̎͜q̸̡̟͍̳͗͆̀͒͌͘̕ủ̵̡̹̱͙̥͈͉̪̿͛̄̅̊̏̃ị̸̭͉̱̳͈̼͙̻̏͂̀̽̚ ̴̠̳̮̗͎̪͍̌n̷͕̥̱̅́̋̓̕͝'̸̭̺̲͍̘͚̰̦̓̈͆̅͘͜é̵̢̫̔̈́͗̊̈̄͝š̶̨̮̖̫͓̈́̐̊̇̊̄̇͝͠t̸̛̠͓͍̜̰̜̒̉̈̈́ ̵̘̼̇̀͌͊͋̈́͗̄͛͌ͅą̵̺̣̾̏͝t̶̹̅̈́͐t̸͔̤͚͎̞̃̾̇̌̾̐̕̚̚͜e̶̖͕̹͎̜̅͌̃̆̒̊̕ş̴̨̪̤͙̺̙̺̊̌͜ť̸̡̘̤̣͚͆̉ȩ̷̭̭̪̳͓͈́̀̀̇ ̵̫̲͕̓͐͐̎̐̊ņ̴͈̯͇̹͎͑̉̊̀̕ͅư̴̭̫̩̦͓͍͎̮̬͂̓l̷͐̈́̄͗̄̀̆̍ͅl̸̗̖̓̓̽̔̄͝e̸̛̻͓̙̱̘̠̜̦͓͊̊́̈̾͂͘��ä̸̮̺͔̝͍̱͔̯͍́͂͑̇r̶̨̭̘̮̖̲̼̻̞͍̋̄̊̀͋̄̕t̴̺̾̃͆̒̋͋̀ ̸̤̺̣͚̂́̇͆̈́́̓̈̀͝á̸̡̻̈́̅͌̇́̚i̶̥̜̼̹̘̣͙̦̋͝l̸̨̧͓̯͕̐̄̃̓̈́̔̎͝l̶̡̟̟̹͍̳̙̝͂́̋͐͒̽ẽ̴̡̨͇̦̼̻̤u̷͈̲̞̅͒̌̒̋͆͊̌͠�s̴͒̀̈͜[̴̗͓̼̋͐̾̎̔̈̇͘2̶̧̲̼̙͍̻̘̀̂̄̓̂́̀͜͝4̸̤͙̹̦̣̦̮̇̈́̊̈́̀̔̐͌̿͝]̷̡̡͔̻̗̼̓͐̋̔͌̂̐͗̕.̶̢̛̻̬̰̟͋̉̅̈́̀͘͘͘ ̸̼̗̆͋͑́͐͝Į̷̬͚̫͍͝l̶̻͓͖̽́́͆̑̈́͑̌͘̕�y̵̛̥ ̴̗̦̲̖̮̟̱̯̏̊̈̇̓̚̕͜ȩ̵̘̪̗̰͍̫̲͉̼̾̽̉̃͛̽͘ẋ̸̝̓̆̋̑͒͜p̶̢̨̩͙͇͆͜ͅó̸̢́̂̈́̎͗s̸̻͊̉̿͐͊͑͆ȩ̵̲̖̰̾̒̐͂̃͜ ̸͇̬͙̪̰̇̓ͅé̵̛͕̜̹͈̺͎̝͆͗͘͝ͅ�a̶͈̬̹̝̺̙̠̋̈́̓̅͘̚̚l̷̫̮̥̫̹̹̮̔̓̚e̷͚̱̤̥̾̈́̇͐͂͐̅̂͊͝�e̵̢͕̘̙͔͑̊̕n̸͓̯͘ţ̵̳͍̝̰̲̯̯̌̋͑̒́͌̎̄ͅ ̸̣̥͙̻̰͔̙͓̋̉̓̇͘̚q̶̩̆ų̴͕̪͇̏͊̓̋̕͘e̶̖̙͓̭̫͔̅̐̉ ̶̛̛͍̩̠̎̄̐̾«̶̡̳̜͖̲̯̥̥̦̦̑͆͠͝ ̷͎̠͚̤̭̰̈́̉ş̵̤̺̲͕̪̤̈̋͐́̀̈́̽͐̌i̶̯̩͖̖̣̦̿̍͊̈́̈̅� ̵̧̱̘̰͈̂́̄͘͝c̴̞̅̿̉̐͝�n̵̲͙̐̅̅͝t̶̻̝̖͍͆̈́͑̉͝ ̵͉̣͓̈́͗̅ș̴̎̾͗̕e̷̢̱͉̘̼͓̣̼͙̬͒̀̓̈̏i̶̢̟͖̱͌z̵̭̟͖̦̽́͛̚ë̴̻̞͙̞̗̙͚́ͅ ̴̡̛͉̣̠̯͎́̾͊͌̈́»̵̡̩̖̮̗͎̰̑̌̕ͅ ̷̩̱͊́̌̕(̶̢̛̛̟̻͍̭̻̆́͂͒̒̕͜͠6̴̧͓̮̜̜̯̗̆̌̆̓̚1̵͖̟̬̟̗̲͈̺͉͚̑̎̑̈́̅́̇6̵̲̳̭̞͕̮͒ͅ,̴̢̈́̄͒̏͛̈́̀͗̈́͠ ̴͈̠͔͓̩̦̉é̵̛̮̮̠͓̺͙̣̘̘̏̈͛̈̇c̸̨͙̺͙̞̀̍̇͘͝r̴̳̳͓͍̰̻̔̾͋͒̍͝i̷̧̬̐̀̿t̷̓͌̈́͘͜͝͠ ̸̛̝̺̯͆́͝χ̶̫̺̊̂͂̿̋̋̅̄̚͝ι̵̨̛͈̝͋̌̉̓͑ϛ̴̛̳͔͂̓̃͌̏̃)̵̨̰̻̹̭̥̫͈̂̓̆̋ ̵̡͙̝̖̞̯̖͖̆̾̓̍̓s̷̝̭̘̝͙̄̓̇͠͝ë̵̡̤̳̜̙̞̞͇́͝ŗ̷̼̯̱̝̓̓̇̑́͜a̸͓̙̳̬͖̖̘̠͋͜͠i̷͉̅́̎̄̇͠ẗ̸͔́�l̸̛͕̣̼̟̦̻̦̜͓̾̊ė̵̛̼̺̥̠̝̜̇̊͌̊͝ ̶͔͍̯̻͈̦̃ń̶̝͚o̸̲̫̙̲̊̒� ̵̮̼̼̳͚̤̓̎̋̿͑́̾̀ͅǘ̵̡̬̹́̍͂͛̍ś̸̟̜̗̉̏̔u̵̬͎̖̥͖͕͐́̈́͒͂͝ŕ̷͎̻̭̈̆́̃̄́p̵̢͖̯̰̭̲̔̏̅͒̏͗̓͝ȩ̷͙̫̗̭̘̘̬͖́͊̕͝ ̶̧͇̺͙̺̰̜̻̍̎̒̈́̑͆ͅͅp̵̡̨͎͈̥͇͓͇̉̎a̸̼̤̞̬̹̰̝̿̑́͊̏̓͑̈́̚r̵͍͊̅ ̵̫̱̭͔̊̎̋͛͛̑̎̎̈́͠l̸͙̀̍̐͗͌͝'̵̨̛̳͇̠͓̟̰̞͚̇͂͂̊͘͠ͅA̷̢̢̦̬̩̺̖͂̚n̷͈̪̞̭͓͈̩̣̣̂͗̀́t̴̟̼͉̝̩̎̎͠é̴̲͐͌̉̆͋̅͂̀̈́c̶͔̝̞͔̭̣̅̿̕h̴̟͙͔̝͑̓͜r̷̭͍͕̜͖̿i̶̠͚͇͑̇̀̊̍̚͝ș̶͍͐̅̋̃̇͂͊̚̚t̴̗͇̂̏̋̋͂[̵̙͒́̇̐2̶͍̰̾́̒̓̋͝5̷͖͚̦̹̏͐̆͘]̸̺̻̦̻͖͓̩̑̑͗̒̿̆͒̈́͝ ̸̹̹͋̀̋̍̈͘ḋ̷̨̧̢̹͇̜̖̝̈̏̒͘u̶̧͎͋͊́͛̎͝ ̸͇͋͘v̵̛̛͚͖̦̞̥͔͍̤̠̀͊͊̃̉̕e̷̟͇̬͚̝̪̣̩͓͗̾̅̚r̸̛̮͚͖̘͖͑̐̉̾̂̿̓͝͝ş̸̠̤͛̾̀͜͝e̶̛͕̱͚̍͊͑̃̕̕͝t̴͔̺͇̜̖̗̜̱̳͇̏̈́͒̈̎͘ ̵̳̙̳͙̹̣̝̉͗̓͝͝1̸̢̦̼̮̿ͅ8̴̫̯͖̦̥̭̲̘̥͑̐̿̉ ̵̡̥͖͌̈́́̕͝d̷̨̡͖̣̠͎͇͘�ň̴͓s̸̯̰͕̩̫̘̆͑͂͒̈́͆̀̕͘ ̷̛̛̩̲̤͈͖̲̅̓̏̄̒͌l̴̰̬̫̪̺̼̬̝̱̺̑̋̓̍̌̍e̷̡̬̯̘̦̙̅̄̓̉̈́̕͠ ̵̢̻̘͗́̈́̈̉̊͘c̶̟̤̫͈͌̍͑͋̄̂̈́̃̓͘ͅḩ̶̯̀̕ä̸̝̣̈̀͂̔͝͝͝͝p̴̯͖̝̄͆̇̉̎̌̑͝ȋ̸̫͈̋ţ̸̠̪͎̯̙̣̒̔͛̽́̌͆ͅr̷̘̪̾͐̀͊̆̍͐̃͌ͅe̶̫̺̤͙̱̼͈̿̀̀͘ ̸̼̘͉̠͕͍̳̠͍̽͒̓̀͊̓̆͘1̴͚͓̭͉̎̀̀� ̴̨̨̧̠̟̝͇̥͕̟͝͠d̵̫͚̯̃̊͆̑̆̋̍͘e̵̱̹̓̂̓̈́̒̐̃̀ ̶̨̫̹̣̩̪̭̖̈̆̏͛̈́̏̏͜͠l̷̦̽͆̔'̸̢̜̞̂͜�ṗ̶̩͕̦͕̻̬̘͋̿o̴̢̳̜͘ç̴̺̻̼̳̠͙̮͑̋̍̾̌̊͠ͅa̸̞͒̚̚͠�ÿ̶̨̢̙͓̺̒̅̍͗̑̀̇̔̕ͅp̷̰̲̹̹͓̙͑͂͊̓̚s̴͙͙̘̙̳̞͖̟̙̒̉͒̅ͅe̵̠͚̎́̏͋͂̍̀͆.̶̠͙̭̎ ̵̼͚̟̤̅̄̇͠E̸̫̹͔̥͌̏̉̿͒̔͘̚n̷̰̱̻̦̟̦̻͓̑̊ͅ ̵̧̤̯͖͓͓͆̓̚͜ǫ̴̞̦̟̣̰̝̟͌͜͠ŭ̴̧̢̲͔̝̣̰͙͉̗͛̿͛͝ţ̶̛̟̬̮̪̏͋̈́̿͆͊̀ṛ̶̢̲̞̐͒̊̌̔̏̇ě̸͙͍͍̍̽̑͋̈́͝,̶͙̺͇̌̓͝�l̶̞̙̥̯̪̅̇̇̆͊͂͗̎͘͜ͅȅ̴͚͖̏͊̊̏͛̉͘͝ ̶̞͈̻͎͒̌̈́ẗ̴̺͙̱̖͍͔̻͓͍́ͅr̵̜̳̠͒̓̀͆̏͛͒͘͝͝�i̴̡͔̮̞̔̈̾̾̄̚͘̚ͅţ̵̤̙͙̳̬̀̓͗̿͗̄͘ẹ̶͖̪̫̬̠́̔̈́̃́̓̕̕ ̶̼͍͔̹͕͕͓͇̪̐̓̕ḑ̷̡̨̨̹̻̟̮̮̏ȩ̴̤̥̪͉́̊̿̆̈̕͝v̵̡̞͚̠̰̟̝̫͙̏͊ě̵̹̝̙̹̪͙̅̿ļ̵̲̗̲͇̩̬͔̦̍͌̌̔̐̕͜o̶̢̺̜̳͐̈̄̒͊̚ͅp̷̮̖̖̗̹̫̰̽͜͠p̸̢͈̞͓͎̹͙̺̥̑͊ȩ̸̨̩̬̠͐̅̍̑͆ ̶̟͉̆̊͘͜�n̶̬̯͉̰͎͉̤̽̿́͜e̷̹̤̒̆̽̒̎͑ ̵̟̈́̈̒̅͊̈͝a̶̯̯͕̺̩̙̍r̷̡̨̦̰͕̤͖̺̾͂̀̈́͘g̴͙͙̣̫͔͌̈́́͌̄̀̐͋͛͝ù̴͕̥̳̩̞̮̹͔̈́̇ͅḿ̷̨̻̼̪̟̫̘̞̯͇̐̐͝ȩ̵͎̘̖̙̗̉̓̉̓̂͂̃́̾n̵̡̢̛̼͇̮͑̇̔ţ̵̢̮̣͇̮̙͕͕͠ȁ̵̳̜̒̒͊̅̽͒̅̓̕t̵̛̼̻̜̦͉͉̓̔̒̏͠i̸̧̤̪̾̽͌̇̕ö̶̭͈̗̥͉̣̠́̋͊́̋̒̾̿̈́ͅn̴͈̺͗̄̎͑͒̿̀̌̾͝ ̷̛̮̜̊̂̿q̶̧̻̜̲͕̙̠̪̦͂͒�ï̶̲̩̺̩̳ ̷̡̂̀͊̇̋̊r̷̡̤͚̦͖͍͎̒̓̇͌̓̇̔́͠é̴͔̣̝͕͎̬̍͐f̵͍̞̝͎̪̆͗͆̎́̀̋̐̾ứ̸̢̉̈́̔͌̓t̴̙͙̗͎̟̂́̑̒̋̽͠e̴̡͔̰̘̪͕̠͖̎͝ ̵̦̀̔̈́̎͗̐͜l̶͕̮̱͖̓͗͒̂̿̒̈́̆͝a̵̰̤̝̪̯̮̹͋̓̏̓̃͑͐̐̕ ̶̘̓̃̾̇̏́̋͊̑͠v̴̪̟̎̊͗̏̎̏̿͐͊͊à̸̛̹͕̦̼̝͓̽̆̀̒̈́̿͜l̸̘̯̹͇̄i̴̢̺͎̖͔͍̯̒ͅd̸̻̖͔̱̥̙̙̩̙̣̒̀̈́i̸̫͍͖̩̠̮̊͂̋͒͝ţ̵̨̲̹̾̌̋͂̈́̀̐̄̓ẹ̷͎́̐͛̒̋̀̕͘͠�ḏ̷̤̗́̑ͅe̴̦̟̬̾͝ ̴̢̟̖͖͓́̈́̄̆̚ţ̴͚͈͕̪̫̪̌͜ố̵̳̼͐u̴̥͇̞͒̎̚t̶̢͔̞̜̻͕̗̲̚e̵̦͊ ̶̢̪͕̫̬̼̠̼͖̓̉̏͌į̵̤͓͛͊͂̍͆͐s̷̙͉̫̟̙͚̊̾ͅo̵̡̰̪̯͛̈́́̄̈́̀̇̈̏͝p̸̧͎̜̱̊s̴̲̱̭̠̯̹͋̓̎é̷̝͚̻̺̝̤̠͚̫̖̄p̸̘͔͎̑h̵̛̙̗̪̉̂̾͊̕ĭ̸̡̨̠̙̺͙̖̩̚͜͠ȩ̶̟̦̝͓̹͎̥̓̒̎ ̸̢͈̯͕̮̆͝r̷̡̡͕̝̹̗͍̽̂̀͜ͅȩ̶̲͈̥́͂̊d̵̛̲͈̐͐̂̿͌͘ũ̷̡̡̘̦̦͇͎̙͕͖̈́̄i̵̢̨͕̻̒͂̈́̚t̷̼́̃̕̚͝͝͝ḙ̸͔͓̪̋̇͂̃͛̏͊̚͜,̴̩̯͍̖͕̹͕̤̳͊͂̐̈́̉̐ ̵͕̤͔͉͙͓̃̈́̌ȃ̵̺̦̗̪͓̲͙͓̬̤̂ŗ̵̙̠̻̞̳̦͋͛̾͜͜g̴̺͔̐̒̽̀̿͆͒̂̚͝ų̸̪̞̺͉̫͎͔̘̎͘͠a̷͖̦̻̣̣̥̽̀͗̀n̷̢̧̳̞͖͒̓ẗ̷̨̢̛͔̖̹̹̜́̾̆̀́͘͘͠ ̷̨̹͎̎̈͗̂͐̒͌q̷̡̦͇̟͙͇͈̞̏̒̾u̵̡̨̥̺̩̮̔̑̍́̆͑̊͘͠ͅě̴̡̢̜̟̰͈̠̰̯̈́ͅ ̸̞̱̖͙͈̍͊̋l̶̛̪̖̯̜̫̺̥̄͒̇͜͠͝e̶̙͌̍̇͒̊̂͘ ̸̡͖̥͔̞͈̜̐̀̔͐ŝ̷͕̗̙͖̹̈̄̐̚̚ͅe̶̫̲͉̳͗̊͜ċ̴̝̻̆͊̒͘ŕ̸̢͙͔͎͇̥̈́̄͌̓̽̆͛͘ḛ̷̎̄̐̃̄t̴̠̹̥͇͋͒͋̉̑ ̸̧̣̯̣͚̈́̌a̶̧̧̢͖͇̝̣̼̍̒̏́̕b̴̢̨̛̗̙̪̯͐̀ŗ̷͎̟̺̜͕̫͔́̐̾̒͗̽̚͠͝i̴̢̨͕͎̮͕̗͙̱̎t̴͎̖̗͇̫͇̥̖͎͊̄͆̂̐̚̚͝é̷̢̺̦̺̮̜̈́͆̌͑̓̉́̓͗͝ͅ ̸̺̗̜̫̰͙͔̮͊̔͘ͅp̸̜̲̺͎̜̙̓̆̿̀͛͒̅͝a̴̮͙̟̭͎͐ŗ̶̲̺͎̦͓̣̫̿͂͝ͅ ̶̛̪̝͚̝̦̠̈́l̷͇̲͆̔ͅȩ̷̛̯̥͓̝̳͗̅́͠͠ ̴̧̨̖͍̦̬̖̞̫͍͗̇͆̐̚̚c̷̥͓͕͐͗́͌̏͒h̷̹͉̜̜̝̹̣͙͎͋̚͝i̴͓̳͕̬͒f̵̜̜̟̫̎̌̈̓̈́̒̇͠͠f̷̳̟̔̏ṟ̴̨̲̝̟̩͕̾́͐̈͗̀͗̆̕e̵̳̰̘̥͕̺̎̍ ̷̨̼̮̺̙̱͕̗͆̓͂͜ͅd̵̡̡̨̛͎̯͇͉́͋̇e̴̛͙̅̉̌͌ͅv̶̼̩̘̲̮̭̋́̏̌̋ȓ̴̤͔̜̄̾��t̶̺̣̹̞̜̙̯͇́̏̄̒͐̂̽ͅ ̶̺́̀̈́y̸̨͎̣͈̙̌̆̍͐͂̉̿͂̅͘͜ ̴͕̞̜͇͎͓̗͆͐r̶̡̬̞̅̑̉̅̔̄͘̕͝͠ę̵͈͐̏͋̓͛͂̿̚͜͝s̵̡̝̺̹̬̩̹̦͓͆ṭ̵̱͍̍̎̎̽e̷̢̧̗͉̞͛ŕ̶̡̘͇̙̓͗̚� ̷̨̖́̀͂̑ț̷̡͚͚̮̓̎̋́̀͛͘é̶̢̽̅̈́̽�ö̷̧̲͖̱̳̩͎̯̺́ͅi̵͓͔̘̳̎̀̀̀͋̕̕ġ̷̨̨̙̩̭̉̇͆̄͐́̂͘n̷̨͕͓͔̱͙͝ͅͅả̷̹̪͙̮͚̯̦͎ǹ̴̡̠̗̝̩̘̪̦̊͆̆̃̐̋͠͠t̴̙̺̝͇̭͌̀̌̉̓͐̽ ̷̧̟̭̬͔̈́̈́̃̀̓̓̍͘͝͝á̵͉́̾̇̉̉́̽̐͝i̶̡̢̮̪̤̩̖̖̿̐̐̈́̍̒̌͛̍�s̵̖͓̜̗̹̬̫̻͜͜͝i̷͙̣̩̓̍̉̿̀̀͊̈́͜ͅ ̸̢̧̰̮̯̬̳̩͍́̈̚q̸̥͍̯̘̖͍̾̽u̶̖͎̳͙̥͔̫̬͊� ̸̢̥͓̰̖̪̓̔͗̂̿͌̃͘͜ͅl̴̡̢̛̩̮͍̈́̃̃̿̒͌͆̉͜ͅ'̴̢̬̖̤̟̬̘̀̃ȃ̵̧̘̱̲͍̯͜ͅp̴̠̲̲̫̌̆͜ṕ̸̧̞͇̰͚͓̀͒ŗ̷̱͍̄̃̐͂̋̅̕̕͠ͅo̵̲̘̝̤͙͗̈́̄͛͒̐̕͜c̵̯͍͖͇͈̻̜̐h̸̙̽͐̈ẻ̶̘̰̼̩̿̀̿̇̅̽͌͠͝ ̶̣̤̌̆̓̀̾̊̿̌̕i̸̧̾͠ş̴̱̺̮̣̦̱̝̈́̚͝ǫ̶͇̹͕͎͆̉̍͜p̵̥͔̳̳̤̰̩̌̇͗̃̋̇͆̌͠͝s̶̨̡͉̳̙͚̟̋͜é̸̢̜̝̰͍̻̍̐̽̿̔p̶͉̩̘͉̳͚̿̽͛̋͝͝h̵͓͍̓̔͝i̷̢̙̎̒̽̌̅̑͌̑͘̚q̵̨̣̰̞͉̠̤͇̻̈́̀͆͜ű̸̫̟̻̑e̵̞̻̯͆̈́͝͠ ̶̫̻͌̄̚é̶̛͙̃̈́t̵͉̒̓̒̒̄͝͠a̵̢̝̺̟̦̭͈̠͊͌̽̆̊͠ͅi̶̡̛͎̬̬̻̥̗̖͆̽̽ť̶̬̇̊ ̵̨̢̨̥͈͈͓̞̩͓̄ḑ̷̺̀̃̌͗̄͂̅�j̶̜̞̗̖͇̯̯̣̀̍̿̊̿̆̏͂̓à̶̻͖͔̠͕͕̗̿̅̚ ̵̧̛̳̘̼͈̫̼̪̒̉͜͝ę̵̾̊͝ņ̷̱͈̫̜̯̐͒ ̴̛̗͖̲̹̯̬̀̌̅̌͆̑́̚͠ḏ̷̺̳̇̇̇̈́͋͗̕ę̷̤̝͍̭̱̩̥́̎̀̒̒͆b̷̢̡̦̪͎̫̤̗̞͓̌̄̔ä̵̠̠̜́̆̔͗͝ẗ̸̢̟̪͕͙̱̩̲́̆̄̓̾͑ ̷̨̺͈̀̿̀͆̈́͠ç̴̼̮͙̗͉̮͍͒̓ͅḧ̸̨̤͔͍̪̩̤́͑͌̔̓͛̀ͅ�ž̵̼͕̤͑̅ ̷̞̰̠̤̹̠̈́̅͊̈̄̈̄l̵͎̗̣͙̱̯̥̳͐̓͂̋̐̓̕͝ẹ̴̭̤̤̇� ̵̧̺̯̻̝̝̩̜̀͛̇̄̌̽́̽͝p̸̝̅̌r̴̛̳̬̎͗͂̿̐̐̽͘͜ě̸̥̱̖̉͠m̶̨̛̹͓̹̥͓̼̳̊̄͌̋̂͗͛͜�e̸̠̦̱͎̩̋͊͌͆̀́͘͠r̸̖̲̺̤̒̉̌̋̎͋̕ͅs̶̟̤̱̹̗̀ ̴̨͍͍̻̘͖̭̗̱̟͗̂a̴̡͉̰͙̮͊̑̉͆̃͗�ţ̴͇̬̖͈̊̅̚̚͠e̴͈̤̥͒̌̿̊͘ų̸̬̬̝̟̗̘̙̣̺̌̓̉͑̚ȓ̴̹̭̝̤̅̀̇͝ͅs̷̢̡̥̟̰̹͔̒ͅ ̸̼̯͂̅̑̔̚c̸̱̯͎̣̭̃͜h̵̹͇̬̀̔̊r̸̛̤̮̦͂͒̐͊é̴̪̞̠̞͉̌̊̓ͅţ̸͎̳̰̟͓̍̀̋̾͒̈́͆̚̚͝ị̷̼̯͖͖̘̱̮̌̋̆̐̄̊̔̊e̷͎͙̜̲̗̭̋͒͝n̵̠͕͔̳͌s̸͙̦͎̿̃͆͂̇̔[̵̪͂2̴̧̰̜͇̝͑́͊̈́͜͝͝ͅ1̶̣̹̣͎̲̈]̷̨̥͓͓͖̩͈̠̠̠̇̈́̿́.̶̤̞̣̤̠̯̺̳͂̐̓͜
D̴̨͍̬̗̯̲̂̂͠į̸̺̳̭͖͗̈͗̌̀f̶̻̘͉̘̼̙͗̚f̴̧̜̩̳͙̭͓̮̭̔̇̑ȩ̴̰̤̞͔̞̠́̈̀̍ͅr̶̡̯̳̩͉̝͋́́́̓̇͜ẹ̶̻̰̪̞̙̼̅ṉ̷̹͚̠̟̈́̆̈́̈͂̌͠ͅt̷̞̩̜͇̂́̌̍͑é̴̡̡̛̮̪͔͙̮̦̈̕̕͠ͅs̵̞̫̠̝͇̿̿͛̄̓̈́̚͘ ̶̰̥̲̹̽̈͒̓̎̃é̶̡͓̜̺̻̯͖̳̣̗̊̆̇͋̕͘c̵̨̗̤̬͇̙͇̜͊r̶̨̠̣̻͔͓͙̲͇͂̂͑̽ͅī̸̛̪̩͖̳̭̙͎͆̃͛͒́̓̚ṱ̸̛͍̙͗ư̶͕͗̒ŕ̴̢̤̦̳̐̊̑e̶̝̜̰͔̯̣̺̒̾̑̓̀̏̀s̶̲͇͔͒̓
̴̳̽͑̌̈́͆̂̂͋̕m̴͎̩̹̟̱̦̬̥͍̈́̈̌͆̓͆͗ͅơ̸̧͇͗̌̌̀͑͆͛͝ͅd̸̤͕̟̘̖͈̪̍̾̕̕̚i̴̯̋f̷͕̙͓̖̫̱͎̣̯͔̔͌̐̽͝ĩ̸̢̦̰̫͍̈͌͆̈̾e̷̻̖̞̫̽̐͂r̷̛̥̱̎̏̂͆͜
̸̨̨̫̣̀̑̋̓̀͐͐̾̀͜͝ͅL̸͕̟͕͖͍̰̫̥̈̇e̸̛͇̣̿͆͆́͒̃̏̏̇ ̸̨̞̖̣̣̱̣͓̊n̶͉̬͚̤̩̊̎͋̇̏͝o̴̢̦̱̼̱̭̭̎̇͐̏̈́͋̾́m̵̢̛̪̍ḅ̷̓̑̽̃̾͂̀̕͠͝r̷̛̗͖͎͓͙̮͔͖͜e̸͇͍̳̒̿͒́͋͊ ̸̧̱͔̓̒͒͌͐̐̀̈́̅̿a̸͎͔͈̣̹̻͚̐̔̄̎̇͜͠s̸̛̩̭͖͙̯͔̩͛̃̄̄s̶̮̩̬̲̻͉̉o̸̮̐́͋̇̔̆̈́̈́͘c̸̫̼̙̟̱̳̀̀͘i̷̧̥͇̯͍̝̼͋̈́͒̈́̈́̎͝ͅé̴̢̢͓̰͈̦͛̔̉̀̌ͅ ̸̢̢̪̝̪̺͇̌͜à̷̧̪͇̼͚̥̏̌̓̾͐̏̀͜ ̸̪̝͍͛̔l̷̢̜̝̭̗̺̣̼͌̆̓̆̈̐̀̒̉͜ǎ̷͍͈͖͕͓̗̰̖̤͋͛͋̑͗ ̸̢͕̯͍̹̾̀̏̿B̸͉̰͒ê̷̢̦̭̯͛̈̎͊̓͒̄͜t̶̨̡̛̠̲̱̹̰̺̃̊͗͛̾̉͜ě̴̢̢̠͔̣͋͐ ̵̢͈͉̲̭̩̮͙̺͖͝è̷̢̡̨͖̪̼̲̉̌͒ͅs̵̡̕t̴̘̭̮͔̬̋̑̓̉̾͠ ̴̡͉̩̫͎̹̮̭͆̽̀̈͆̑͒é̴̜͕͚̬̬̌͊͐̄͒́̋̚c̸̢͉̦͍͉̾͛͋̌̽̀̌́r̸̞̖͙̲̻̫̈́́͜i̶̟̱̤͆̎̏͑͒̔̓ț̴̮̭͕͎̪̭̣̑̄̈́̚ ̴̨̭̮͐̆͐̂̍͒̓͘̕͝d̴͙̽e̶̫͔͍͖̣̤̦͙̲̩͗̑̑͐̐̒͑͘̚ ̷̺̟̙̪̮͈͚͇͎̽d̷̛͍̤̠̹͉̒͗̑͑̾̎̚͘͝ị̵̭̽̈́͗͐̂̂̽̌̃f̵̛͉͔̃̉̋͐̽̐͝f̴͔̤̱̍͐ḙ̵̯̯̤͍́͊̈́̏̊̾̉͜ŕ̴̗͇͉̬͚̜̀͝ĕ̶̦̙̔̾̃̔̕̚n̴̛͎͙̓̑́̔́͘̕̕͝ṯ̶̡̧̛͔͈̰̟̎̿̿͐͒̈́͛͠e̶̛̪͉͑͋̎̓̏̃̆̚s̸̢̥̤͈͍͎͙̭͇͓͗́̈́͝ ̴̖̗̭̅̍̔̒͋̓͠f̸̠̯͎̲̭͔̃̅̈́̈́͘̚͜͠ȧ̷̫̱̌͋͆̌̌̎̚͝ç̵͇̭̼̀ỏ̵͖̤̊ņ̵̢̛̛̪͈̤̤̪̹̫̾̋͗͑̈͆̀s̶̛̞̜̀̑̾̎̋̄͗͝ ̴̢̧̳̩̠̞̃̅̃s̷̗̳̦̭̦̙̬̺̰͑͋̾̋͛̒̈ṳ̸͙͔͇̉̓̈̉͗̀͑̎ͅỉ̴̧̭͉̼̳͚̞͖̹̿̀͆̓̑̆̑̀͝v̴̧̱̗͈̗̣̳͖͌̎̌̈́̏a̴̜̭͊͂͗ņ̴̗̭̼̜̟̭̩͓̀̈͂̈̾́͂̃͝t̸̝̝͔̟̗̹̱̩̼́́̇̑͂̄̒̀̏͘ ̵̛͇̬̎̈l̸̨̡̢̥̜͕̇̎́̽̈́͠e̴̻̖͚̞̭̣̜̲̟̟͊̓̈͑̔̐̕s̴̳̱̪̰̩͑̐̿ ̸̨̱̜̤̜͆m̵͍̝͚͉̱̳͖͌͒͛͒̑͂̏̕a̴̛̛͔̟̽͘̚͝ņ̴̥͚̹͙͙̼̱̣̓̐́̀̈̏̈́u̷̹͐̈̇̊̈́̎͠ș̶͎̖̥̅̉c̸̗̲͍͍̥͂r̶̨̘͍̳͖̦̲͉͎͌̒̎̔́͒̊̇͘͝i̶̧̡͇̘̩͐̅̂͌̈́t̸̨̳̗̳̘̼̑̎͜s̶̢̡̯̦̟̗̪̖̰̀̾̃̈̈́̀̏̕͝.̵̡͓̻̟̭̪̙͈͚̒̓̌̿̃̎̉̾͂̃͜ ̸̛̤̅͂̇̃͆̅̋̾D̵͈̙̹̭͙͛̔̓̋̀͂͗̉̑͝ả̸̢̢͖͔̟͙͚͑̇̓̃͜͝n̵̬͉̟͖̝͚̉̐̏̋͐s̵͖̭̠̬̆͋͋̂ ̷̳͍̭̜͎̹̬̮̉̅͊̈́͑̆͜͠ļ̴̟̤̮͉̤̘̞͇̀̀͗̈́̋̽e̵̡̥̦͛͋̈́͌s̵̢̨͍̙̟̳̩̭̈́ ̵̨̡̮̠̔ḿ̴̧̨̜̞͎͈̠͇̓͒̈́̉a̵̖͚̳̜̥͉̼͂̽̿̔̿̀̔̅̕͘n̷͉̘̱̙̹̭̞̱̉̌̒̚ư̴̻̦͖͖̼̹̓͗̈́̄͒͘s̸̨̭̫͍͓̋̄̑͌̑̀͊͜͜c̶̟̋͂̿̄̊͂̑̎̚r̵̰̜͚̜̙̈̈́ḭ̷͎̦͍̈́́́͐̚ͅt̷̟͇͙̝̜̲̘̱̗̻̾s̸̙̈́͑̓͆̓̇̾̿͠ ̸͙͙͎̼̥̋̈̂̚͠g̴͙̟̠̖͔̝̼͑͂̓̍̎̐̃̕r̴̲̠̼̈́̄̈́̄̌͗̓́̿͘e̴̜̥̭̞͈͕͒ç̴̱͎̜̠̑͑̍͂̊̀̕͝͝s̵̨̫̦͎̖̺̰̦̥̎̃̌́̈͆̾̎͆,̷̻͉̱̭͋͋̌ͅ ̶͕͆͌̓̍̈́̾͋̍̑l̵̲͕͆e̸̢̛̛͈̞̖̩͖̭̤̎̅̈̉̉̚ ̷̯͉̦̝͋͂͒̏̎̚̕ņ̴͖͓̦͙͈̝͈̺̳͛͝ö̶̗̜̬̍̈́̀͝m̴͎͈͕̘̫̦̯̬̺̑̽̊͛̍͜b̴̰͇͎̉̉̽̄͋͌͘r̷͇͎̮̒̀̽́̒̊͜͝ȩ̵̢̯̭͚̓ ̴̨̯͉̘̺̟͖͉͊̈̿͋̚ͅͅ«̶͇͙̘̩̘́̏̿̏͌̏̚̚͘ͅ ̶̡͎͕͔̙͖̠̼͗͋͂̿ἑ̴̼̩̗̋̐̕ξ̴̢̠̗̥̘͒͌̾̌̾̅̀͊̊α̵̢̟͉̻̬̗̈́̉̆͑̌͂̂̂κ̶̨͙̈́̈̇͐̒ό̷̱̫͎͔̞̘̘̐̉́̓͗̚͝σ̸̨̢̪̪̜̘̪̙͕͕͗̑̈͗̏̍͂̚ι̸̮̩̜̳̥̮͉̫͔̣̊͑̋̂̽ο̴̣̩̲̩̯̺̣̾̽̿͝͠ͅϊ̵̦̝̻̳̱̦̈̍̔̒͠ͅ ̸͓͕̩̤̏̆ἑ̴̧̗̺͙̭̫̲͕̾̉ξ̴̢̛̤̖͍̭̘̜̼̈́̒̎̔̽͂̚ή̸̹̗̽́̇̓̋͜͠͠κ̴̟͎̘͛̌̀͐ο̷̢̦͚͖̝̚ν̸͓̙͑̑̃̀̾̈́̓̕͝͠τ̷̨̜̟̲̼̤͚̟̝̀̒̄̽̀̀͗̉ά̵̨̜̟͖̹̙̲̻̄̆̓̃͠ ̸̟̲̤͙͍̬̞͈̃̏̇̽̒̋̂̕͜ἕ̵̧̹̹͔̏͆̀̎͋͂͠ξ̴̡͇̀̈́̏͗̾̕͘̚ ̵̧̩̼̭̯̼̺̠̐̈̈́́̅͋̀̈́̕͠»̵̨̞̻̥͓̀͑͐̂̑͛̂͛́͝ ̷̤͕̤͑͛̑̒ȩ̶̛͕̬̖̳͈̀͐ͅs̵͕̈́̚t̷̢̢͚̬͙̺̆̆̐̽͝ ̶͉͕̜̎̾̓ș̵̭̲̙̥͌͛͠ṑ̷̠̪͍̻̮̥̩͊̈́͌̀ư̴̰̟͕̓͛̾̇̕͜͠v̶̲͈̪̝̜̞̖̉̓̇̏̾̈͠ͅȅ̶̜̪̞̖̖̃͌̈́̇̀͛͒̚͜ͅņ̵̨͉̪͇̝̝̦̈́̑͋͒͛̈́̈́̉͘t̷̩͕͚̺̺̂̊̚ ̴̡̲̙͖̜̐͒͒ŕ̶̛̲̣̖̠̇̆͒ë̶͇̘́̆̿͑͊̏̅͑͌̒ͅǹ̴̢̧̝̥̞̜̪̰͊̀͜d̶͈̹͇̮̰̈́̾͋̑̕ͅu̷̧̙̣̼͓̫͒͋̈́̐ ̷̜̀͑͗̉̉͛̒̉͌̚d̷̢̫̩͙̯̻̲͊̿̋̎͐̿̿̕͜à̵̢̲̼̱̲̹̙̙͌n̴̞̻̺̼͉̺̪̠̝͊̒̏͜s̸̼̜̈́̆͌̈́̀́̕͜ ̶͙̙̉̐̾̽ľ̵̪̓̒̉̏͌̃͝a̵̢̠̥̟̯̟̒͐̋̂͗͋̏̃ ̶̹̱̘̂̀̈̂̚f̶̛̞͙̞͌̏́̎̒́̄o̶̗̝̎̉͆͐̌̍̾͝ŗ̴̗̠͐͆͆̋͊́m̶͍̟̱̼̿̂͋̃͂͒̎̃̾̚e̴̜̮̼̬͉̻̔͝ ̵̝̦́̾̕n̶̼̜̈́͒̀͐̈́̿̕ͅǔ̶̺͓̅́͜m̷̩͚͐̇̏͒͋͑͜͝ẹ̷̢̱̯͓͖̖́̒̉̏̑̓̄͜r̷̹͔̪̩̣͂̏́̽ỉ̷̺͕͚͓́͌̈̃͆̈̕q̷̢̢̳̰͕̰̩̣̀̑͛̈́͂̈͠ǔ̴̧̩̪͙̺̗̠̦̫̋̍̒̈́̀̋͘ė̸̳̠̣̭̙͈̼̳̄̏̊͝ ̸̨̦̫̲͔̾̊͂̄̈́̉̀̚͠«̴͖͒́́ ̴̨͓͚̩̒̂̓̃͛͗χ̴̨̭̟͎͙̭̖̺͖̔́̃̈́͒̾̐ξ̴̨̛̘͓̋̈ς̴͚̋̈́̋̀ ̸̨̛̝̳̲́̄̆̑»̴̨̺̞̫̞́̇̈̔͌͊̈̂͛̀.̷̛̳͎̙̼̇̓͛̉͘ ̷̡̠͔̅̂̿̉͒͑̊̈́͜Ų̶̾̍̊̌̐͑̕̚n̷̺̤͕̠̈́̋̊̔ ̴̡̰̫̳͚̝̗̹̩̄͐̂̓̕͘f̶̡̩̗̘̬̹̥̗͐̎͊́̀̽̎͘͘͘r̸̢̟͖̭͕̖̙̰̽̔̽̏̇͑͘͜a̶͚̥͍̦͕͕̍̀̂́̎̈́͝ͅg̶̰̹͚̜̞̃̈́̓m̴̧̜̂̒̈́͐̽̇̂e̴̢̧̫̼͈̩̫̬̤̼͋͛̑̀n̵̛̻͇̉͐t̸͚͉̱̰͍̆̀̌̿̉̉ ̴̦̲͚͈̩̻̱͎̀̔ͅp̷̡̭̪̘̙̫͎̓̈́̉̍r̸̨̛͈͙̲͍̯̼̐̎͑͋̃̓͠͝ͅo̵̡̠̟̙̙̹̘̭̊̈̉͒̓̆̚v̶̢̜̳͓̞̹̫͗͊́͜e̷̙̲̩̬̾͜͠n̴̠͖̰͇̹̠̱̟͒̏́̍̐̋̇̂̓͠a̴͎̝̬͔̪̟̦̔̐͒͛̈̕͜͝n̵̢͈̘̳̊̾t̸̡̻̞̐͜ ̶̪̅̊d̵͎́̅̊̈͘͝û̴̧͓̭͖̰̘̮̿̉ ̵̢̤͇̏̒ṡ̷̢̪̞̙͕͚͇̞̬͋͊̌̂̉ị̶̛̪̗̣͉̣̮̘̤̋́̋̑ț̶̀͒̕͝͝ę̵̮̞͇͍͐̍̎̇̈́̆̈̀͊̾ ̶͕̹̙̗̘̣͚͍̻̎̄̈Ơ̴̡̜̠̯̠̪̣̫̾͐̈́͝͝x̷̧̹̝͙̮̠̤̀̿͊̍͆ͅy̴̨̨̢̺̞̲̭̜͌́͐̋͒͑̅r̶͖̥͈͓̭̭̰̣̥͑̚ḧ̷̜͇́̎̉̇́̿y̷̘̏̒̐̾̀͌̿̆̕͝n̸͖̩̣̳͚͈͚̂̉͘͠c̵̬͍͈̩̤̗̞͚̻̖̊̃̉̅́̍̈́͘͝h̶̡̡͚̠̜͖̪̰͍͐̄̌͋u̶̧̢̧̱͕̲̤͎̹͛̉͆s̵̨̳̹͓̲͎̐̇̈̆̃̾́͝ͅ ̵̭̯͙̱͐d̸̜͇̜̘̗̹̝̑̾ǫ̷̣̮̪̲̦̪̗̓̓ͅn̵̨͚̿̐͐̀͐̎̇̊͒͝ņ̸̜̞̲͙̬̅̈́͌͗̈́̑͝è̸̢̧͓͚̖͎̩͎̆̇̽̑̏͐͘,̶̧̖͇̈́͗͆̑̒͋͂ ̷͙̖͎̙̩̥̄p̴̰̩͍͎̜̆̊ã̸̡͖̦̼̘͍͉r̷͖͍̦̹͖͙͜͝ ̶̤̼̞̩̋͒̚ę̸̛̥̙̼̞͍͖͚͎̫̐͑̋̀͝x̷̦̓̆̀̏̅̆̑̑͘ȩ̵͓̟͉̤̲̩̊̈́͌̈́͜ṃ̵̛͚̖̣̲̹͂̑̌̍̏̄̾͝p̷̠̬̩̰͍͖̫̑ͅl̸̳͎͐̐̉̂̇ẻ̶͈̥̲̔̔̔̕͜,̷̨̞̫͖̟̜̹̮̥͛͑̓̅͝͠ ̵̛̛̮̟̺͐̍͆̋͗͠ͅṵ̶̱͚̘͊͊̐̔͒̇̓̚̕ń̶̢̧̛̰͔̳̻͕̣̓͛̑̽̕e̴͕̣̭̲̤͚̙̔̇̓̾̏ ̸̘̗͓̱͖̬͓͓̌͐͊̎͑́͝v̶̗̲͓͔͇̓̽̇͐͘ë̸̞̼̀̈́̊͊̕͠r̷̢̢̜̰̳̩̥̼̹̎̏̎͑s̸̼̹̮̣̑̅̈̌͌̑͆̽̓͠į̸̪̝͎̯͙͐̀o̸̫̪̫͗̐̿͒n̸̡̝̝̞͖͑͗͝͝ ̶͇̀͌̒̅̄̿̑̕̕͝d̸͚͉̠̯͂i̸̞̹̎f̷͓̙̼͇͎͉̺͗̿͛͆͐͠f̷̯̯͒͐̅͋̅͑̉͗́̌ͅͅé̸̼̳̻̬̼͈̀r̶̟̩͊͗͝ͅe̶͓̞͚̩͉̹̖̜̿n̵̨̨̨̯͓̗̤̤͕̠̂ẗ̵̝̩͓̥̠̎̉̃̀̕e̵̖̪̠̖̘̝͈̔̄́͛ ̴̨̧̥̙̲͕͈͖͋:̸̹̱̗̗̳̥͉̗̈́͛̃̽̆̍͐̆͒͠ ̶̨̨̢̢̘̤̰͔̲̼͒̍̾«̸̞̙̃͗͌ ̷̡̬̙̠͖̬͖͙͉̔͑̆̂͝6̸͓̐͋̄͗̈́̓͘͘̕͝1̸̢͓̥̳̜̥̐̂̚6̷̨̢̳̦̟̈͂̈́̐̀́́ͅ ̷̛̘̬͖̜̤͎̞͉̱͍̆̀́̌̿̓̓̅̕»̶̡̻͉̬̲̮͇̫͔̈͌[̸̝̑̓́̂̇̀̒̏̉͘1̶̜̿̄̀͌͊̊̂̋͜͝3̵̪͔̰͙̉̈́̓͠ͅ]̸̨̢̧̪̲̱͓̞͇͖͊̋͠,̴͚̋͊̃̕͠ ̶͇̼̳̥̬̔̽̈͛̇͐̓ẹ̶͓̘̻̳̦̳́̋̽́̀̓͜͠c̷̨̛͙̦̭͔̹̤̟̥̑̀̈́͛͝͝r̵͔̈́ͅí̶͖͖͇̲̈́̿̓͛͝t̸͔̋̌̍̒̎͝ ̶̫̉͂́̊̄̉̉̃͜ͅ«̴̡̽̒̓̆́̅͌͆̚ ̷̪̕χ̴̨̡̛̛̥̠͕͙̘͕̖͂̌́̍̐̇̍͠ι̶̛̝͉͔̗̌̀̐̓̉͂̚͠ς̶͇͔͖̻̐͒̎̋̾̔̚͜͜ ̸͈̪̯͈̓̔͗̾͌͜͝»̴̧̼̼̻̰̥͎͌͋̆̃́̑͘ ̵̞̤̗̠̗̬͎̤̠͆̀̌ḑ̸̛͚̤͔̟͒̓̈́̇͐͝ͅǒ̷͇̂̽̂̋̀͗̔n̴̥̝͆̔̈t̵̠̣̘̂̈̄̈́͌͐̑ ̸̥̰̬͚̰̲͂̇̔l̷̢̼̣̮̣͑̉ë̵̥̗͇̲̜́ş̴̧̢̱͕̖͉͍̅̑̆̀̕͠ ̶̧̭̫̖̬̼͈̘̙͐͛͗̕á̸̬̣̙̪͔͈͓̜͖̄̅̅͛̕t̴̢͈̪͓̰͙̥̪̎͂̀̂̈́̈t̷̨͖̭̬̥̤̝̙̩͛͛͌͌̿̎̌̚͜͝ȩ̶̣̪͇͗̊̅s̷̡͔̝̥̫̱̥͈͉͗́̈̍͜͝t̸̡̫͚̟̖̤̼̖͉̐̀̈̏̋̒͌å̶̛̤̰̺̦̽̀͊͂͝t̴̛̳̰̱͔̻͆̾̀̓i̷̛͈̺͔̤̩͇̍͗̓̋̀͑̈́͝o̴͔̩̤͇̦̻̥̿̄͌̃̉̈́̔͛̕͘͜n̴̻͎͔͕͌̆̈͝s̴̯̰̲͖̉̈́͠ ̴̢̛͉̌̔̓͐̕ş̵̠͙̟͌̏̎͂͌̀͋̚̚o̷̝̰̹̳̲͚͓͛̉̈́ǹ̸̼̲̣̰̭͓̜̃̊̈́́͝t̸̛̤̟͓̫̼̼̓̆̀̄͛̓͑͘ ̸͔͓̹͖̠̝̍̚p̴͙̘̋̅̽̀̈́̒͐͑͘ļ̷̼̰̞̘̯̈́̂̃u̶͕̙͑̚s̸̨͔̜̥̝͍͚̝̫͓̽̆ ̵̨̧̣̖̖̖̙͖̣́͜a̸̹̜̽͑͋̒̋̂́̊n̴̞̼̎́̐͜č̵̝̝̱̼̱̳̹̚i̶̞͜͝ȩ̴̈́̑̏ǹ̸͉̩̟̞̲̺̇̅͋̓͝n̷̢̛̘̜͕͔͕͚̗̋̿͂̐̂ẻ̷̳̈́͊͛̎͊́͒̾s̴̜̻̣͙̦͛̔ ̴̛̺̤͖̰͖̖̥̣̌̆̓͝͝q̷̛̝̳͖̠͛u̴̜͊͗͊̏̈͌͑͛͘ë̶̡̦͎̬̤͎̘̺͎͓̒͑̍͑̄ ̴̲̥̫̈̅̈́͐͂͗̚«̷̱̻̀͐̔̽͊͗͠ ̶̛͙̩̟̞͖̫̥̙̪̄̈́͛̓̀̃͘͜6̴̞̺͙̯̣͕̰̱̩͓͂̂̿̽̉̀̀͒6̵̤̫̫̯̞̺̹̯̾̉̿͂́̇̀͐6̸̘̦̘̩͔͔͈̉͆̿ͅ ̵̹̠͈̔̅͒͐͋̆̈́̈͝»̴̛͓̣̞̗͆̌̀̀͑͊͘͜ ̷̨̫͖͖̣̻̜̆̃̿̇̒́̌͗ͅe̶̖̳̦̺̜̖͖͋̓́̍͐̏t̷̰͊ ̵̡̟̬̘̹̲̖͖̩̟̒̈̈̏̃̈́̚͘q̴̡͙̖̭̮̞̂̅̓̉͂ṵ̸̢̦̑̃̄ͅi̷̧̥̪̗̲͚͉̾͛̈́̏͐͊̀ ̶̝̤̾̏͂̌͒s̸̨̨̪̻̜̓͝͝ě̶̟̺͙̯m̶̝̿͋̒b̴̟̳̯̻̪̰̜̿͌͜l̴̛̲̐̇̔e̴̢̗̿̇̃̋̕͝ ̸̛̤͉̭͎̝͚͙̋̂̀͂͆͒́̉͘ǎ̸̱̳̯̬̓͊́̉́́̚͜v̵̤̳̓̉͒̎̊̀̾͘͜ỏ̶̢̡͉͙̥̯̙̗͐̍̈́͊i̴̫̣̜̝̠̰͕͑̑͝ŕ̴͎̳̐͒͘ ̴̻̬̫͖̖͔̘͇͑̉̓̉̚é̷̢̖̙̩͇͙̼͓̦͕̈́t̶̯̦́̆̑̀̽͑͂̓͘é̶̛̫͚̐͛̐́̓̅͗̏͘ ̵̧̥̺̣̦̲͈͊̃͌̎̍̎͆͘͠l̸̨̩̩̰͓̖̝̝̮͗̒a̸̢̢̰͍̓̓͂̂̆͌̍̏͘͠r̶̡̡͚͚͕̗͇̟̀g̷̡̛̠̖̻̤̲̖̮̀͌̎̽̓͋̊͘͠ͅȩ̵̧̡̟̝̜͎̇́͛͠͠m̷̢̯͔̖̣̮̣̮͉͛̍ę̵̼̜̮̱̼̩͇͌͌n̷̢̡͕̠̪̖͍͚̘̑̿͒͆̑̌͌t̸̯̺̼̻̺̻͉̲͐̓̑̑͜͜ ̶̨̻̯̬̣̥̣̮̗̺̈́̉͌̑̏̚͝͝r̸̨̧̢̖͕̝̆ͅé̶̡̘̖̦̰̻͈̲̫̒̓̂̈́̐͆̏͜p̴̻̙̝̲̘̗̎͊͊͗͒̍͋ȁ̷̢̧̡̯̳̙̏̂͛̎̕͠ǹ̷̻̟̮̖̫̳̝͂̎̔̔͛̔d̴͎͙͂ứ̷̜̪̬̉̍̔͊̈́́͘e̴͉̯͖̻̫̅̑͒ͅ[̴̧̺̦̗̗̰̪́͌̉̈͘͠͠1̴̼̥̞̝̰̭̱͒̆̈́̽4̸̗̹͑̔͋́̓̑ͅ]̷̢̣̯̥̭̯̎ ̵̞̫́̓̉̑̌͗̈͌é̶̼́͒̑̇́͌̿͜t̴̡̧̛̮̯̗̰̝̳́͌͑̓̐͠ ̴̡̺̈́͒̋ṗ̶̽̑̊͝͝ͅo̵̡͇̭̅ṹ̷̧̢̻͕̩̫̇̈̕r̴̠̈͊͆̓̽͂͝r̴̩̋̂̈̀̚̕a̵̧͚͓͔̞̟̳̞͒̋̍̐͑̆̾̈́ì̴͓̩̟̤͓̖̍̃̈̈́͊͌́͝t̵̖͋ ̷̞̹͚̺̺̤͔̭͑͑̔̀͜ą̸̡̧̥̪̲̝͈͇̔̉̅̈́̉̿̀͛͘͝v̵̧͍̝̞͆̑͌͂̿͂̃͗̊o̵̹͔͚̜̞̤͎̞̗͓͋̎͑̓̑͊̽̔i̵̧̨͍͍̻̮͖̽̂͂͊̕r̸̻̋̊́̓ ̸̤̙̙͇̦̩̼̅̄̏é̴͙̄̉̌̾̇ţ̷͕̼̜͌̿̔̾̓̃̕͘͝͝é̴̞̰̬̠͚͍͍̿̇̒̀̄̕͝ ̵͓̪͕̟̹̳̙͎̦̽̑͊͐͊̈́͜ṕ̵̛͓̝̰̺͂̇̃r̴̺̖͎̙̀́̏͑̓́̋o̴̯͙̟̬̼̠͊͗̊̂̏̄͘͜͝g̵̳͓̘͉͔̥͍̳͗̽͌͗̄̆͜͜r̶̖̝̜̞̞̉̐̈́͐̐͗̆̆̔̕ę̵̘͉̯̠̲̩͕͛̋͒̊ͅs̷̤̰͍͙̝̹̆̾͒̆͛̏̋̇́̉͜s̷̢̛͎̗̩̠̺̉͋̀͂͘ī̷̢͆͝v̷̪̯̝̩͂e̸̡̨̜͔̜͐̇̐̇́̆m̶̨͖̰̹̺̫̖̩̼͙̒̈̄͘ę̴̡̛̙̪͖̖͍n̴͓̹̫̳̥̈́ţ̷͓̙̮̼̹̑̀͝ ̶͍̗̓̋̓́̚r̴̡̻̺̦͛̋e̶̦̎̒̈́̌͗̈͠m̸͔̖͒͂͌̈͂̕̕p̵̢̡̦̰̳̰̥̗̜̳͗̀̚l̵̗̣̪̈̄a̷̭̺͑̾̆̊c̶̗̼̠̮̹̆͋̒é̸͕͓̫̜̯̪͍̘͎͆͌̎̈̀̑͝ ̶̧̩̟͔̜̹̫̀͑̐́͘̕̚͜͝p̸̧̪̩̞̱̩̩͙̤̄̈́ȧ̷̛̲͕͕̖́r̷̡̯̹̙̣̦̭̫̥̃̀̿̓͑̕ ̸̨̢̢̝̜͙̊͐̈̈͋̔̓̄͘͝ͅͅl̷͍̗̿̆̏͌̽̈̆́è̵̛̘̥͚̱̲͈͓͖̀ͅ ̸̗͎̟͕͖͎̼͚̗̟̉͋͒̀t̸̢̖͙̉̉̽̅͗̀̀̒̔͝ř̵͓̙̼̻͇̥̽̽́͛̀͝ͅĩ̴͖̫̦̻͍͔̟͋̂̾͛͆͘͠p̴̢̞͎̈̽̾̍̓̕l̷̛̛͕͇͍̹͍͍̻͒̈́̍̈́̌̇͐͝ě̴̫̣͐͜ ̴̟͕̤͉̭̈́͛͌͠͠6̵̰̤͚̩̗̣͖̰͂͘ ̸̛̝̥p̵̨̠̮͈̹̩̟̀̀̈́ͅl̷̯̥̫̦̪̜̔̏͌̾̽͂̔̅́̍u̷̡̠͒̅͑͝͠ͅs̸̯̯͓̮̤̼̉̊̅̓̏͌̀̑͘͠ ̷̨̢̮̝͖͈̲̑͂̋̈́̈́͋͘͜͝͝«̶̢̼̯̝̘̘̩̫̯̖́̏̓̏͂ ̵̨̤̝̘͇͚̇̊̄̈́̈́͒͊̕p̸̥̣͇͇̗̠̻̘̬̭̐͑̿̾̍͋̉e̷̢̛͍̰̭͊͌̈́͆̆̓̒͘͠r̷̢̙͕͙̣̝̟̮̝̀c̴̲͍̫͈̰͍̯͚̿̎͛̌̓̔͋̕͝u̸̘͔̠̭͚̰̩̺͕͊͋̑̓́͂̐̍ͅt̴̫̣̦̝̮̹͐̇̅̒̾͘a̸̢̗̫͉͈̝̟̹̤̲̓͌́́͒͘͝͝n̸̡̬͔̝̗̞̱͂̀̐̍͜͝t̸̬̯͖̣͉̥̜́͂̒͐͊͊͘͠ ̷̡̢̨̗̩̲͈̤̮͓̓͂̆̈́̾͋̈́»̷͉̠̞̮̬̍̐͝[̴̬́͐̈́̑̓̓̽̕̚̚1̷͔̻̞̲̭̥̀̀̓̒̇̔͑̀͘5̵̢̹̟͚̼͍̟͈̣̦͑̑̚]̶̡̰̥̱͍̗̥̹̀.̶͎͕̾̓̏͜͝ ̷̬̘̖̠͗̈́̌̿̓D̶̩̋̈́͌̅͝á̷̱̻̻̰͓̱̱̥̥͒̾̈́́̐͘̕ń̵͉̙s̷̱̤̭̬̰̾̏̒̽́͂̂̔ ̸̢̡̨̟̞̙̺͚͇͗̂̌̃̾͆̄̄͒̽ͅc̵͙̻̖͗̀͋̀̕̕͝e̷̢͍̋͛̍r̵̢̫̝̗̠̃̄̉̈̌͆́̈̐t̷̞̣̺͕̠̥͑͂å̴̫i̴̯̬̺̻̘̔͌̉̎̒̽͗n̶̮̹̙̩͓͎̅͊̃́͗s̴̮̤͓̟͖̙̪̘̳̄͒͗͘ ̴̗͗̽͂̿̀̆͐̕m̶̘̭̖͌̎͒̌̎͠a̸͍͂̉̑̄̉́͗͒̕̕n̵̨̰̳̰͕̰̖̺̙̰̉u̴̞͍̞̪͋̈́̉s̵̪͓̋̓̏́̂͑͂̚͝͠c̷̛͙͕͌̃̈͂͆̈́̕͜r̷̠̥̈́̿͝i̴̪̺̞̲͊̈́̀̏͐̔͛̽̏͝ţ̷̥̭̲̄̓͊͗͝͝s̴̖̦̮̘͕͋͒͌̌͜͝ ̵͓̼̖̲̫̬̬͚̀̎͆͊̐̂̎̐̕͠ͅǫ̷̯͔̱͍͈͙̥̳͆͜ȗ̷͙̤̭̭͉̼̄ͅ ̵̮̮̳̝̯̺͓̞̂̃͊ͅc̴͓̘̬̜͑̍̕ơ̵͍̗͊͝m̴̡͚̠͇̱̘̹͎͖̘̊m̷͔͕͙̳̣̱̟͚͒͗͛̅̈́́ͅȇ̷̠͓͙̇̑͊̀̏̐̓̇n̴̤̪̜̞̱̝̏͝ţ̶̧̬̙͚̱̤̾́̇̂̃̽ä̶̧̼̳͕́͑̈͗̃̚͜͝ḯ̸̙͌̾̀̈́̏͛̋͝͠r̵̝̟͈̫̙͖̅̾̊̌̀̍͠ḙ̴͎͋̇͜s̶̤̯̹͓͗̍͒͠͝ͅ ̴̲͓̳͈͇̼̖̱͖͊̿͒̎̽͝͝ą̵̡̤͙̮͉͇̪̖̱̇́̇̂̈͆͝n̶̤̂̌̀̓t̸͎̱͉͉̖̯̬͓̄̌̔͆į̵̰̞̫͖̫̊̑̈́͜q̶̘̌u̵̡̧̫̪̭̹̺͓͚͋͆̌̀̓̑̚͝e̷̜̟̔̊̐s̸̬̼̻͎̟̹̩̻̜͍͂̂̏̚,̴̧͔̗̺͍̬͎̽̂͛͠ ̷͔̱̜͛͂ő̸̡̹͇͖̱̹̍̈́̃̓̔̑̅̐͘n̵̛̩̮̙̲͒̓̌̅̎͝͝ ̶̡̡̲͚̟̺̀̀̉̑ṫ̸̨̬̟̫̦͕̭̀̋̈́̅̉̿ř̶̥͕̳̦̮́̇̑͘͠ͅỏ̸͈̼̦̙͇̪̼̏̀́̐̅̆̈͝ù̴̙̠̮͈̪͓͕̑̄͑̂̈́͜v̸̛̤͔̹̮̬̻̠͕̦͝e̴̛͖̠̓͂ ̷͇̘̙̔͌͌̽̇͝͠é̷̡͇̲͈̫͊͘͘͝g̴̻̖̹͎̓̽̀̆̀̇͠a̵̢̬͓̟̪͒͊̍̓̏͑l̷͙̖̟̋̆̒́̊̄͒͛̌̚e̷̗͕͉͐͐̋̋m̵̨͍̭̺͇̙̠̾͋ë̴̩̱͉̦́̐̈̑́͠ņ̴̬̬̟̬͔͉̫̍̇̂̆͐͑͊͠͝t̵̮̬̦̑̂͐͌̌͂͑̇͠ ̴͉̬̝̳̜͐́͘͜«̴̠̒̅̑̈́͊͋̀̅̈́̈́ ̷̱̖͔̼̪̱͊̽͆̈́̐̄̀̀͝6̶͉̟̬͈̬̦̮̻́͂̄̅̉͑̇̌́̚6̷͖͇͎̥̞̻̌̅̕ͅ5̴̦̙͊̏͑͝ ̶̧̡̛̭̗̦̥̜͙̤̣̿̾̽̅̅̋͑͑̕»̸̝͔͚̺͚͇̼͖́̆̀̋̏̈́͝͝[̵̠̤̯̥̬̞̦̜̓͗̚ͅ1̴̨͍͇͍̉͐̍̐̽̀͘6̶͉̖͑͘͠ͅ]̴͚̝̋̐̐͒͐͗ ̵̖̙̝͙̾͗́è̷͇͚͉̾̌͗̄̂͗t̶̡͔̲̙̮̪̀̈́̿͋̌́͋̏,̴͙̀̿̑͠ͅ ̶̯̣͒̀̐̈́̇̓͌̕d̴̡̤̘͓̠͉̄́͜â̷̢̛̪̼̬̺̋̊̂͛̏̚ṉ̴̨̲̖̙͚͇̰͆̒͒͛̕s̶̯̤̬̰̜̗͇̖͔̪͌̈̉̊́̔ ̵̢͙̬͍̹̰͔͚̫̈́d̴̗̤͚͓͚̜̺̹̖͒̇̀̾̌ȩ̶̬͎̮̐̂͜s̶̜͍̹̆ ̶̜̘̞̾v̴̝͇̣̪̈́̈́̈́̽͘e̸̤͕̰̹̝͇͉͙͌͋̃̽̀̑͆͜͠͝ṙ̸̛̹̪̪̳̘͎͙̰̂͑͛͆̏̏̓͂s̵̛͕̳̎̃̒̂͝i̸͖͈̗͚͓̋ͅơ̸͓̝̱̽͗͌͑̀͐͠͝ṉ̵̡̨̩̝̖̯̩͔̻̍̆̓̚͝ś̶̲͑̿ ̴̢̓̾͆͂̔̎̃̋͝ļ̷̨̛͚̝͍̝͇̱͚̌̆̊̔͜͝a̶͉͙̗̤͆͐̽̎̓ͅt̶̨̧̬̥̖̾͋͐ḯ̷̢̪̤̝̬͈̺̤̘̹͊͠n̴̮̈́͋̎̌͒̃̉̿͘e̸̱̼̭͍̫̘̩͚͓͒̌s̸̼̤̥͊̓͐̈́͗͌̅ ̴͖̣͖͙̯̃̐̇p̷̫̹͙͖̫̠̂̎̄̍̈́̋̕ĺ̸͕͙͉͖̦̉ͅù̸̡̧̻̠̜̮s̵͖̪̟͈͇͕͗̐̆̈́̚̕̚͝ ̴̝̖̠̗̲̬̼͈̲̆̀̈́̈̄́̓͑ṯ̵̫̞̞̟̯̱̗͙̼͆͗̿̒̆à̵̡̡̯̜̪̫̰̈r̷̻̣̎̈́̊̏͛̍͠d̸̨̈́͛̍̂͘͘i̴̟̠͍̳̤̰͌̂ͅͅv̵͍̑͂̊ȅ̷͎͖͙̚s̵̹̟̮̯͙̝͎͍̩̑͐̏͋̉͘͜,̸̼͍̰͇̙̽́̿̽̓͝͝ ̶̡̲̺͔͖͙̽͗̏̇̆o̷̢̺̪̳̤̻̳͂̑͑̿͋̅͠ǹ̴̨̬̬̙̭͖͈̥̩̓̈͘͝ ̶̰̣͉̮͔̣̟͚̈́͛͂̽͒̒͌͋̒͜ẗ̶̟̭́̆͌ͅr̸͖̤͕̾͐o̶̲̼͍͔͈̠̝̺̬̿ù̵͇̫̞̜̜̦̼͕v̸̛̹͓̙̹̭̍̇̓̀̎e̷̺̬̭̼̠̮̤̳̐͜ ̶̛̛̖̝́̄̽͂̏̽̕é̷̢͈̘̠̹̟͍̗͕̄ͅg̴̢̢̛͔̩͎̥͚̣̠͐̐͘a̷̢͕̝͇͍͔͈̻̹͓̋̊̎̋̍́́͒͂͝l̷̨͕̥͚̞̓e̸͔͇͆̏̀̃͊̒̑͝m̵̢͇̿͊̇̇̋̄̍̒́è̶̪͇̘̯̠͌̿n̴̨̨̞̹͚̳͈̞̓̂t̴͔͍̲̭͓͈̥̿ ̵̢̳̟͔͖͒̒͒«̷̫̥̟͈̰̟̽̓̉͒̈͒̿́͜͝ͅ ̴̞̹̉̿̑̇̏́̽̄͠6̶̧͓̱̇̓̉͂̌̋̉͝1̴̨̨̫̫̺̇̄͐̓̀̇͘7̶͕̦̙͖̔ ̸̜̑̍̌̃͛͋»̸̡̢̞͍̗̰͖̑͗,̷̪̝̐̋̏ ̴̛̪̞͔͈̙̝̀͆͛͋̑̔̍̈́͠ͅ«̸̣̞̹̳̞̲̟͇̫̀̑͂̄̃ ̸̨͚̻̬̜͙̯͑̀̽́6̷̢̬̙̟͎̯̞̹̳̗̃́̓̓͆͒͗̆4̷̞̪͚͍͇͓͍̞̠̽̏͋̊̉̈́͜͝6̶̧̱̦͍̩̫̝͒̊ͅ ̶͍̳͒̈́̃̚͜»̸̡̛ ̵̲͙̦̟͈͉̕ǫ̶̰͖̭̚ų̷̩͎̠̣̤̗̱͌̋ ̶̠̣̪̑͗̾̾̋̆̓̿̊ë̶͇̍̑̀͛̊̓́̀͊ņ̷̡̦͍͇̘͍̘͇̼͒͛̆̍̍̃̾͒̕͘c̵͉̝̫̱͎͎̼̝̕ȏ̶̡̯̲͖̬͙̾͆̚͜͝ͅr̷̨̼͓̻͎͚͒̐e̸̟̞͕͍͖͆͆̌͑̇̀̂̉,̵̡̹̟̩̘̼͕͇̖̀̓͜ ̷̧̨̣̟̬͐͌̈́͛̎͒̀͜͝͝ç̵̨̱͙̻̂̅̅h̷̝̮̙͉̔̆̄̇̒͜ẹ̷̛̙̓̿͒͝z̴̛̮̻̱̯̲̲̺̈́́̓ ̸̙̏C̴̣̱̘̞͖͋͊̀̕é̶̘̙̣͗̐́͆͌̃̀͜͠s̶̱̺̱͙̖̯̈́̌̈́̂̂ą̸̦͕̗̲̿̏͂̋͛̍͑̕͠ͅȋ̸̡̝͈̯͈̲͍̹̦̻̀̉͆̓̀̿̽͝͝r̵̡͓͉̰̮̄̿͗͐͝ȩ̵̛͎̦͚͚̠̤̓̌ ̸̨͇̗̦͕̆ͅd̷̠̜̖͍͔̝͇͕̅̉͊̄͗́͊͒̇͘'̸̲̗̫̬̝͉̈́̈͘A̷̩̗̦͔̲͈͚̍͊̏̀͗̅͑͝͝ͅr̸̞͎̹̩̲̞͗͋̏̊̇̌̕͜͝ͅl̸̡̧̝̼̪̩̞̤͝ę̶̳̳͙̿̊̈́́̊s̵͚̗̹͍͚̞̄̑͒̔͗͌̈́,̸̜̖̠̪̋̾̈́͊͘͠ ̴̣̤̳͔͓̩̼̫́̀̆«̵̨̻̜̘̲͓̖̖͕̅̾ ̴̰̰̜͔̟͎̪̓͋̎̅͠ͅ6̴̢̝͓͚͐̀̽̀̅͝9̷̨̢͈̠̲̱͗͒̆̂0̷̨̡̰̗̺͉̯̀̌̎͆̂͐̉ ̷̡̧̜̪̯̣͇̟̬̈́̎̒̒̌̈́̊͝»̶̟͍͙̙̎̉̒̔̎[̶͈͚̮̫̎̑̇͒͑̅͊̽̿1̷̧͉͓̮͇̬̾̋͛͜͠7̵̛͙̓̀͐͘]̴̞́͒͋̄.̴̬̝̹͌
A̶̲̰̰͚͊͆̾̉͐̊̍ȕ̴̡ẗ̶̹̖̰̲̠́́̓͊̕͝͝r̴͖̤̰̙̥͉̫̼̰̆͂͠ȩ̷̪̗̟̪͎͎͗̀̏̅̃͗̍̃̓s̶̢̨̜̦͖̩̦̀̃͠͝ ̵̨̧̺͔͚͖̼̩̜̙̌͑͛o̶̧͊͂͝c̴̡̨̠̟̣̜̀̈̀̀̔͠c̷͔̮̪̲͓̺̮̀̽́͊̈́̈̉̚ư̵̧͎͎̖̙̪̰̣̎̐ͅr̶̝̜̟̽̄͑̄͗͊̓͝r̵̪̜̉͋̏͋e̸̗͚̞͓͆̇͊̈̍n̴̼͍͍̋͒̆̎́͌͑̕͝c̴̰͈̊̊͂ȩ̸̡̡̪̲̦͗̚͜ͅs̵̢̫̣̅̈́̈́̊̎͑̒̇͠͠ ̶̢͖̭̲͔̜̳̘͗̔͌̆̽͝b̵͙̲̀̐̏̀̓̂̕͘͠i̵̿̒͂̒̏̽͒͝͝͠ͅb̸̘̬̈̀̕ļ̶͇͚̲͖̹̯̘̎̂̔̚͝͝í̵̡̥̯̭̤̦̣̽q̴̨̣̒̓͂ǘ̵͙̟̰͕͒̂͜ȩ̵̟͍̯͈̿̉̏͗͐̃̽͑ś̷̰̠̂̄͠ ̴̧̎̐ď̷͍̗͎͉̝͙͓̝̃̋̒́e̸̻̞͂͜͝ ̷̨̘̦͔̪̦̜͉̈́̅́́͌̀̿͌ċ̴̢̧͖̤͓̟̥̥͑̈́̋͂͋̆̅̍͘e̸̟̭̥̍̊̅͛̈́͛̓͐̑ͅ ̷͙͚̫̈̉̔̅͋̀͐̈́̿̚n̴̯͔̠͍̱͓̖̏o̷̧͎̞̺͚̝̩̫͎͗̓̌͂͐m̸͖̄̓̈́ͅͅb̴͓͍͚͙̀̀́̐r̸͕̙̣̲͔̽́ẽ̶͉̫͓̞͉̱͆̐ͅ
̴̢͉̺̼͓̻̈́̃̇̆͋̂̀̀̇ͅm̵̼̦̖̗̣̯̯̻̱̾̂̉̍̑͗̄͗̿̄ͅö̴̮̮͕̰̖̙̙̠́̑̈̈́͋͐̂͝d̷̛̥̯͓̟̯͆͝i̵̡͚͖̥̻̜̲̔͐̉̈́͑̕͘̕͜f̵̯̻̺̖̟̅i̵͓̫̬̦̗̅͛̿̎̾́͘͘͝ē̸̬̖͖̠͋̈r̴͉̗͚͚̟͌͌́̿͊̆̑͠
̶̨̥̬̙̝͇̼̞̿͛̈́̓̀ͅȈ̷̡͉̜̥̦͓̞̮̰͠ͅl̵͔͕̺̗͖͉͑̊̅́͒̆̒̌͊̄ ̶̘̙̼̘̘̙̓̂͐́̀͂̄͜ņ̶͉͍̱͎̹͖̰̿̇'̸̮̤͑̂̾̿̀̈́̚ȳ̴͕̫̺̱̻̭̬̪̮ ̵̻̅̐â̶̡̡͈̣͔̯̹͉̍̽͛͊̌̈́̇ ̴̦̱̜̬̪͕̤̮͔͂̿̋͂̓̋͜͝q̷͓̬̖̒̀̔̉u̴̢͓̳̫̤̘̲̹̠͂̍̀́̑̑͝ͅë̸͙͓̣͓̘́̍̈́̋̉͠ ̷͎̖̳̯́̌̓͛͛͗̓̈́͝d̵̹̰̻͎̈̀̋́̒̇e̵̢̤͌̔̀̆̀́̂ụ̴̺͙̭̌͛̐̍͘̕͜͠x̸͓͇̜̆͆͝ ̶̢́͐͐̌̚͝ó̷̢͇̲̹̫̝͜c̷͈͖͂̀̓̅̈́̑͋̀̔c̸͔͖̟̝͕̹̘̲̻̓̓͛̐̑̉ͅũ̷̡͔͋͗͊̓͝r̵̡̢̩̞̥͆r̷̝̲̹̃̿͒̐́̚͝e̶͓̒̿̿̓̋̈́͒̚͝n̷͍͚̣̬̳̦̙̝̾̎̐̓́̀̍̊͘͠c̶̖͔̭̻͓̘͚̎͗e̶̯̙̮̰̮̣͈̓̃́̚s̴̤̠͝ ̴̧̱̰̘̋̃́̕d̷͍͖̤̗͙̪͈̤̝͗̄̆̽ȩ̷̧̛̥̠̺̲̙̘̃͗͒̿̅̋̍̚ͅ ̸̛̻̤̞͖͓̐͒̆̿̾̕̕ͅĉ̴̡̩͓̹̯̣͎͍̟͇͂͑̎̒̏ē̸͈̘͋̀͋͝͝ ̴̟̊̒̉͊n̴̼͖͚̹̹͎̪̞͛̈̾̄ô̵̭͈͍̪̼͔͜m̷̪̿̍̆̈̿̃̍͒b̶̛̦̞͓͔̦̝͖̞̮͕̊͐͂͑̐̈́͐͂r̴̡̟̩͖̭̳͙̫̉̀̎́͝ē̵̛̞͔͑͑̌̽̾̾̄̓ ̵̨̩͍̬̾͊̌͛̿́d̵̢̹͕͔̲̳̱̳̝̾̿͐́ͅả̶͈͔̮̟́͊̾͋͊̕ṇ̷̦̲̜͍̖̗̤̘̽̉̐̇͂̓̒̒̓̕͜s̴͈̙̹̘͉͔͉͎̃̆͆͆́̈́̽͋ ̶̰̾̅͒̋̑͐͠l̷̢̘͓̺̹̟̘̰̙̈́͜ḛ̶̛͈͚̎͜s̶͔̯͚̪̘̬̍̂͜͝ ̵̛͚̌́́̕͘t̶̫͖͚̟͉͍̳̣̜̤͌̿e̷̯̝͓̙̣̟̻̬̹̙͗̍̾̏͘̕x̷̳̄̈͝ẗ̸̢͖̻̥͍̘̟́́͊̓e̷̟̟͔̭̬̙͌̿̄͝š̸̩̾́̎̉̚͠͝ ̶͖͔͔̻͛̈́̄͛̆d̸̡̝̠͈̣͙̖̰̒̓̍̔̆́͘̚͠e̶̡̙̲̞̰̚ ̴̱̦̒̿̾̾̇́̏̕͝l̸͇͍̽̉̈́̓͒'̴̡̧͔̥̤͔̓͋̌͆̈̊́̈A̶̤̦̻̿̂̽͘ṇ̸̨̟͚̮̠̲̓ç̴̣̺̼̪̾̈́̕ī̸̛̗̹̺̽͒̇̅̋͆̚ę̵͙̥̠̋̏̇͒͠n̷̢̧̫̫͉͍̬̐̇̉́́͝ ̵̛͓̘͔͈͕̳̼̪͓̣̆̐̈́͆̈͑Ţ̵̜̗̹͓̬̤̹̬̭̈́͛̿͋̐́̽͋͠ȩ̸̗̘̼̈̈́̌̀̀̊͋͒̿s̶̹̩͎̟̽̒͗͑́̃̕̚̕͝t̶̨̜̑͊́̕ȁ̴̢̱̙͚͝m̸̡̭̩͍͚̙̿̾̐͛͜e̷̢̧͔͕̤̺̦̽̎͜n̵̰̜̔́̒̌ţ̸̛̬͓̯̪͛̐̂̈͜͝͝ͅ ̴̘̙͖͉͈̠͂́̅͗̑͂̀:̸̦̺̲̮̦̻͍̝̙͗͠ ̴̞͉̫͍̇́̍̽ͅl̶̛̛̯͎͙̦̯̟͓̈́̊̎̇̂́͝͝é̶̢̡̤͈͙̜͉̮̠s̸̨̞͕̻͎̗̱̭̺͗̀͌̍͜ ̵̨̟̀͠͝6̵̡̤̜̙͖͓̦́͛̀̏̐̈́̕͝6̷̨̡̳̭̥̻͎̹͐͝6̸̳͊̉̈́ ̶̰͠f̶̢̞̻͎̫̃̽͗̌̈́̑͆̔̉i̶̙̗͇̙̍͛̈́l̵̢͔̺̱̲͎̖̪̣̅͊̿̊̉̇̊͐̕͝s̴̡͙͇̹̼̬̖̭̈́̑̈́̋̕͝ ̸̢̧̦͇̲̝̰͛̂̽̏̇̈͝d̵̙̹͔̒̈͐̌̽̏̊'̶̗̫̲̘̱̇̀́̊́͌͘͝͝͝Ą̶͎̠̠̦̟͌̂̋͒̅͠͠ď̷̻̿o̵̡̧̫̠̩͔̹̔̿̍̑̆́̆̔̈́̍ͅn̷̨̻̪̠̤̳̳͑i̷̢̯̼͓̺̥̓͐̉̈́͆̐̐̊q̷̡̨̢͍̪̫̮͍͇̒̎͂͐̄͐͆̏a̶͇͖̱͋͐̍̀̍̓̀̈́̂m̸̼̀̂͋͝͝ ̷͉̰͕̗͛̎͊̓̒q̷͎͑͋̈́̓̃̓͆͘ͅư̵̡̛̩͎͍̪̞̼͚̝͚̎͒̕i̴̡̛͈͕̩̝̲̤̯̩̘͋͆̀̔̌̍͐ ̴̡̰̞̞̹̗̬͂̀̌͐̽̃̄r̵̰͙͙̭̤̰̺͎̣̃͠ĕ̶̢̟̥̚͝v̸̪̳̜̞̝͖̗͇̋̀̈́į̷̨̯͕̥̺̹̱̏̊͐͐̎̈́́̈̕͜n̸̨̩̘̥͙̑̈́̏̎r̸̟̯̪̭̥̀̓̑͆̿̊e̶̢̙͉̟̘̖̠͇̍n̷͎̠̦͖͈̄̿̈t̶̨̬̫͇͓͙̞̬͔̻̆ ̶̧̘̠̳͖̺̣̱̅̌̂̓̉́̿͝à̷̧̤̗̳̥̞̱͔͚̜̽̀́̌͋͘͝ ̴̩͍̆͋́J̶͈͍̦̦̤̕͜ḛ̴́̒̇͌͝͠͝ŗ̶̣̱̱͉̆̔́̾̂͐̂͘͝u̵̯͈̯̔̔̎̋̏̈̇̊̈́s̷̛̛̳̺̈́̈́a̶̯͔͂̌ͅļ̵̦̻͔̼̣̀̈́̓̿̋͜é̷͉̏̆̏͝m̶̧̹̒̅̈́͛̀ ̶̢̺͖̮̲̼̞͑͊̾̈̕͝a̶̡̛͎̞͓̺̥̩̭͗͆̇͆̅̌̚̚͝v̶̨̧̛̭͔̪͇̪̤̭̎̓ȅ̵̲͑̍̆̿̚c̴͕̬͙͒́̂̀̂͠ ̸̛̭̦̑̓̆͗̀̆̀̈́͝ͅZ̵̯̉̊́͑̕͝͝o̷̢̭̻͎̽̌̏͒̓̆̓͊̊r̶̭͇͕̼̩̥̹̙̼̿̂͝o̵̥̿̈́͝b̶̢̢̰͚̾̔͐̈̽͛ą̷͎̯̭̭̳̣͇̩̿͆̓̿̆̕͝͝b̶̺͉̥͆̓̄̃͑̀̔ẹ̷͇̠͉̭̎͊͒͌͂̓͌̚͠l̸̢̤͖̬̪͋̓̽̄̕[̷̤͖͖͂̋́̈́̀̈́͋͠ͅ1̷̼͍͉̫͎̻͚͐0̸̩̟͇̙̫̎̓̒̆]̷̱̗͎͚̉̑̇̏̂ ̴̨̡͉̲̩͕̼̬̎ę̸̈́̆̈̈́̈́͆͌͝ͅt̶̡̢͈͚̗̯̪̫͉̤̐̆̈̀̆͑̕,̶̨͚̘̪͉͎̝̿̌̔̑͗̅̏̀̆ ̸̛̠̦̓̐̽̕d̸̜̋͋͌̂͆̀̀͋̕͠a̸̧̢̰͚͐̃̀̄̾́͂̃̔͜ṅ̸̞̟̗̙͚̝̯̹̳́̈́̆̋s̸̡͓̏̔̈͋͠ ̸̦̻͓̲̲̔̿̒̈́̎͘͜l̷̫̱͇̼̅͂͠ě̴̠̩̜̻̖̝̜̫̰̀͗͆͌́͘ ̴̻͊͌Ṗ̶̛̻̄̀̌r̵̛̥͖̝̐̔͆̓̈̍̄ẹ̴̛͕͋̑̂̑̍̀͜m̴̛͈̱̳̯̿̆̓͛̅̈́͌͘͜ì̶̠̖̣͚̈́̾̓̋̈́̆̊e̸̫̊̚r̵̨̧̨̖͈̦̊̀̇͆̍ ̶̫̳͊̀̓̑͠L̴͙̗̪͉͎̳̭̻̔͋̈̈́͋͒͊͊̓͑i̷̱̼̗̎̊̄̍̆́̉̕͝ͅv̵̻̗̥͖͕̽̇̕ͅr̷̻̜͙̯͔̅͂̄̑͌̑̀̒́͒e̵̛̳̼̟̬̻̟̱̫̼̗̾͂͂͋̀͗ ̸̜̦͈̜̻͕͖͖̝́̓̇̌̊̈̕ͅd̷͉̗̗̺̘̉͌e̸̠̣̥̠̙̖̯̤͒͠ͅͅş̴̧̺̘̞̝̭̤͆̀͂̍̈́̚ ̷̜̟̠̟͛R̸̞͖̥̣̠̆̋ͅo̷͈̰̮̝̳̼͈͐̾̑̚ȉ̷̭͕̫̬̝̬͖̳̠̋͋̆̍͛̚͘͝s̸̹͉̅̾̇̎͋̕͜[̸̨̜̻͚̋̂͋́́͌̆͘͠1̷̨̻̪̙̺̣̩͑̽̈̊̓̀̐͊̕͜1̵̧̜̝̝̩͕̣̔̆̈́̊͝]̴̡̙̗̿̒̀̈́,̷̨̤̻͉̙̥̜̫͓͓͆́́̆ ̷͉̇̈̎̓̎̿͘l̵̛̞͈͙̹͍͐̇̓̈́͒͘ȩ̷̪̣̹̘̝͙̯̠́́͗͆̂̋̈̒͆̚ ̶̜͙͎͕̐͂̀͂̐̽̕p̴̛̠̠͕̹͓̺̑̈́̕ò̶̧̨̲͍̹̩̖̥͝i̴͕̞̗̝͖̯̟̪̙͊̓̔̃̇͆͝͠d̴͇̣̘̜͖̠̪̻̞͈́̌͊̽̎͠s̷͎̬͚̅̎ ̴̙̣͙͈̣̟̑d̷̪̜͚̜̯͇̩̲̈́͋͒̎e̷̢̛̟̭͕͎̪̹̗̾͒͂̊͐̑̋̕ ̸̨̙̙̥̜͕̯͉̓̍̔̊̐̀͜ĺ̶̲̩̀̈̀̕̕͝'̴̻̩̳̦͔̹͉̯̏̅ơ̴̡̳͔̖̠̦͍͗̄r̵͇͙̳̓͊̽͒̈́̄͒͌͂͠ ̴̢̞͚̣̝̻̙͋ë̶͓̫̦̗͕̤̼̞́̇̃͊̋͜͝͝ͅn̴̹̟̱̜̻̠̺͗́̀̽̎̈̆̇ ̸͈̖̬̯͎̬̤̇͊̓̕̕͜͝ţ̷̨̨͚̣͕̺̦͜͠ą̵̢̝̦͇̣̱̤̠̦̐̑ḻ̸̩̮͍̻̳̟̯͉̥̾̾̔̉̚̕ë̵̠̹̲́̾́́́̊n̴̙̥̋͗̃́͑̕t̷̨̘̠͖͖̠̂̾͋́̃ͅs̸̝̻̺͍̫̾̾̊̒͝ ̴͔͕͇̟̰͑̀̎q̸̢̤̣̱͊̌̑̐́͠ǔ̶̝͔̬̀́͂i̸̡̟̤̺̯͌ ̷̧͖̖͓̗̤̣̟͉͚͆̐̆͂̍̐̈́̀p̸̣̈́́͐̽̀a̶̧̢̨̧̧̧͛̀͒̿̈͊͠r̵͉͓̟͌̒̊̐̕v̷̰͖̫̪͛̄̌͛̾͊̕e̵̯͎̞͠n̸̦̝͑̔͆ą̴͇͎̌̅̀͋̒̈́i̶̛̮̻̼͈̦͖͉͋̑̓̍̋̐͠t̷̳͇͔̮̺̗̺̋ ̶̗͕͔̭̈́̽͌͗͝ạ̵͚̻̯͉̺̀̔͆̍͒͜͜͜ ̶̘͍̖̥͚̘̪̜̱̍̓̉͂S̴̳̰̈́̔͂͗̌͑̀̀ä̶̹̖́̐̑ĺ̶̬͓̭̙̣̰͓͍͇̻͑͝o̵͈̻̕m̷̛̘͇͙̾̆̇́͗͘ͅơ̶̩͓̦̋͗̆͊̽͘n̶̢̙̫̈́̃́̎̂̈́͘͘͝ ̵̰̘̣̇͂ḛ̴̢̡̮̟͚̥̳̮̮͌n̸̗̹̓ ̶̛͙̱͖̋̋̐͂̾ư̷̡̨̛̳̤̻̮̝͉͌̋̇̽̂͗n̶̲̙̰͊͋̐ͅḙ̵͍̞̣̃̓̑͜͠ ̴͍̲̥̺̐̋́̍́̿̓̆̑s̴̜͖̓͊́͐̿͒͂́̂͠e̴̛̻̙͔̿̀̃͐͒̌͆̈́ͅü̵̧͉̤̳̜̥̖̲̗̔͌͜͝ļ̷̨̧̛̼̲͕̞̻͈́̃̿͜e̷̮̻̓̊̂̔̂͜ ̶̮̤̓̎̈́̃̿͗̉̎̑̒a̶̳͐̓̈̐͛̌͘n̷̺͌́̅͌͒̀̉͝n̶̖̺͍͚͉̻̾́̾ͅḛ̷́̅̀̊ė̸̟̯͚̳̫̦̗̥̬́͑͑͐̚̚̕͝,̷͇͖̪̪̤̩̣̾̓̈́͘͝ ̸̨̧̭̪̳̝̜͉̐ͅṳ̷́͂n̸̢͍̝̙͇̖͇̲̞͍̎͑̈͌̓̀̇͝ ̶̧̢̞̭̟͇́̆̿̓͛é̴̤̬́̒̍͂̋p̸͖̟̈̈͘i̸̙̩̯̤̳͗͂͐̽s̵̛̙̩̉́̓̌͒̕ơ̴̥̇̈̍̿͂̾̀̀̎d̸̢̠̘̯̹̩͚̦͑ę̴͍̥̦̤̯̭̮̇͆̆̎͑̅̏͌̚͝ ̷̧̧̫̲̮̫̽̽͘d̶͚̩̜̟̘͎̉̈́̀́ó̵͔͎̞̫̫̫̘̜̏͘ǹ̴̢̲̜̍́͆̉̾͗̚t̶̛̰͚̹̼͊̊̅̍̅̃͒ ̴̡̛̭̯͙̠̻͑̔̓̅̓̚̕ç̶̢̙͓̻̟̻͉͈̗̀̈̔͆e̷̡̜͛ř̶̗̯̑̀̃̿̈̔̕͝t̷̨̜͕͕̿͆͛̆́͛̕a̷̡̲̩̣̣̲̳̯̘͛̔͠ỉ̸̘̟̺͕̘̳̖̤͆̔n̷̤͒ͅe̷̛̝͎̟͈̝͍̹̼̤͗̆̓͜͝s̴̻̜̣̭̣̞̈́͊̾̏ ̴̖̙̖͉̬̮͚̤̹͘͜h̵͚̾̽̊́̾͑̏̈́͝ͅẏ̸̗͉̣̗̺̣͛̋͌ͅp̷̹͇͍̲͓̑́̄́̎̃͌̄͘͠o̷̰̮͉̮͔͉͓̻̽ţ̷̦̭͉̈́̈̈́͛͋͋h̵̥̚͝è̷̼͓͉̟̹̬̞̊̂̈́s̶͇͖̜̰̼̠̀̂̈́́͜ḙ̵̭̻̤̪͕̘̥̞̓͐̓ŝ̷̛͔̣͇̱̦̣́͛̓̈́͒͊͝ ̷̟͓̝̱̩̈́̏̔̿͛́̎̔͋́ͅͅṙ̸̢̳̜͙͔͎͇ȩ̷̣͔̟̦̗̤͙́̂̏̂̔́̃͂͋͘͠c̷̱̀̍͑̏̔̈́̅͘̚̕ë̵̡̬̰̗̳̘́̆͂̈́n̶̮͚͚̞͐̐͠t̵̢̢̡͚͙̭̩̽̿̍͌̒̕e̴̢̛̩̤̥̫͗̇̐̒̄̚͠͝ͅs̴̬̩̟̏̏́̿ ̷̰̇̏̕ḑ̷̦̹̤̎͆ę̴̖̥͇̥̪͇̼̥́̏̐͑͠ͅc̴̝̻̻͒̈́̅̍̏͊̑̌̕è̷̼̦̯͇̫̭̣̿́͗̾̈́͐͒l̸̨̗̞̝̯̭̩͉̥͈̓̉͒̆̀ë̷͉̻̰̞̼͚̎̈́n̷͕̩̈́̍͝t̸̻͙͔̦͈͌̑͆̐ ̶̖͍͓̣̇̏̄͗̈́̓̕͝u̸̦̞̬̟̝̒͛͜n̵̢͍̱̘̉̈́͑̓͝e̶͔͍̥͚̳̤̙͈͉͒̕͝͠ ̷̨̜̹̮͉̪̪̅̒̈́̂͗̓̑ī̴̼̖͙̩͓̉͂̋͐͑͝ṋ̵̰̫̮͍̗̱͐̈́̊̓͗̕f̴̻̻͇̻̩̹͕͎̌͊̾l̸̫͔̖̲̄̆̂̂ŭ̴̼̰̝̱̬̰͔̝́̽̈́͜͠ȅ̴̡̢͍̳̟̯̈́͐͝͠n̸̢̘̫͉̥͙̬͑̈́́̚ć̸̰̘͉̑̑̀̊͊̉e̴̛̗̿͐̇͛͊͊̊̍͛ ̴̳̖̹̟̀͂̽͌̑̋̔̈̚s̸͖̲̍u̸͓̹̫͒̃̀̌͑̏́̈́̍̑ṛ̷̢̨̙̣̣́͗̑͊̉̓͌̆͝ͅ ̷̦̭̫̣̹͊̄̒́͝l̵̨̢͍̝̱͈̼̱͋͊ȅ̵̥̮̃̀̋͐͝ ̶͚͇̬͓̝̭̮͈̮̈̿̋̎ṱ̷̛͉̪̦̏̈́͋̑̀͝e̵̩̙̙̯͉̝̙̤̔̓͛̆̓͊͜͠ͅx̴̨̨̛͙̜̙͈̙ͅͅt̴̳̳̫̦͎̍͗̿̃͝͝e̸̡̢̯̺̙̥̭̙̜̤̍̓̔̎͗͠ ̵̧̒͋ḑ̶̙͉̱̞̠̳̭̌̓̀̕ë̶̤́ ̷̻͆̿̈́̎́͘̚͘l̵̞͇̝̪̜̗͕͌̒͗̾̈́͑̏̚͘̕'̸̞̫̤̒̀̀̾̂̌͗͝͠Á̶̘͖̟̟͉̫̬̒̍̊̿̅͘͝͠ͅp̶̙̗͙̗͋͜͝ǫ̷̫͇͚̥̠̳͖̯͆̅ͅc̶̝̥̦͖̱͆̿͊͒̂͝â̷̡̯̤͇̻͖͕̼l̴̟͈͎̺̉͆̎̊̽͂̽́͌̚ͅy̶̨̜͕͍̬̼̪̺͕̫͗̓̂͆̈́̀̕p̵̤͙̳̹̘̜͚̌̆͛̀̾͒̇s̵̨̮̝̙̮͔͗ẹ̵̹̭̲̻̘͓̒̏̓́͆̎ ̷̲̼͎̙̻̉̎̔̑̌́͘d̷̡̡̢̳̖̼̻̎͗͌̕e̴̠̻̟͆͋͒̑̃̕ ̴̢͖̭̞̖͇̱͜͝ͅĴ̶̘̺̮̥̖̼̀̈́̽̕͠ě̷̛͈̙̘̺̯̳̦̏̂͊̓̃̎̕ä̷̬͙̝͕͓́͋͒͑͑̂̍͋͘̚͜n̵͉̩͖͑̑̐̀̈́̈́͋̄̏[̶̢̩͇̥͗̆̄́̅̕1̸̝̗̥̥̜͂̋͗͘2̴̳̖̺̂͋]̷͓̇̽̈P̵̭̲̖̳̫̻͉̭̹̅͐̍ͅā̶̩̩̒͆͛͐͂͠r̴̗̻̪͎͚̙̳̅̆̅̑̍̍ ̴͕́̑͌̾͌̀̾͂͝͠ļ̷͖͔̜̗̑͋̄̐͆̌̚a̸̮̰͌̐̆͛̅͊͒͝ ̸̧̘̣̗̺̟̜͍̜̖͐̊̅͘͝ṡ̴̫͍̪̟̮͛̍̊̓͋͝ụ̴̰͔̞͖͕̖̂̆̂͆͂̊̕͜͝í̵͉͕͉̬̠̺̥̜̽̂͑̄͆͝t̶͙͉̳̉̃̄̚ē̴̝͕̟̤̮̬̲͆̈̓̈̑̈́̿́̚,̴̹̙̼͂͂̍̓͑͘ ̸̛̝̩̘̳̉͂̈́̾̈́͌̊͂̊l̷̺͔͊á̷̗̘͔̣̠̯̐́̐̎ͅ ̷̧̨̧͇̲̝̦͚̘͇̀͂̈́̆«̶̢̢̨̢͔̦͇̱̝͔̿̈̂̍̅̽͝ ̴̮͑̈́͒̈̐̔̎͝m̴̝̾̅̿͛̓̓̚̕͝ȃ̵̢̖̲̲̤͖͚ŗ̵̯͚̯̪͕̒̑̿q̶͓͖̘̂̊̅̐͛͆͠ư̶̧̰̳̱͎͓̇͗ę̶͉͔̪̣̹̘͖̰́͑̌̈́̐̓͝͝ ̸̨̛̳͉͇̬̃̿̿͊̓̓̏»̷̢͈͔̯͉̫͍̣͎̘͌̃́͑̈́͂̌͋̚͝ ̶̧̧̬͎̱̖̹̯̣̄́̑̋(̵̢̢̨̧̬̱͖͔̞̠͆̌̽͂̅e̶̞̲̟͍̯͍̽́̃̍̄ṉ̵͈̘̹̹͔̫̇ͅ ̴̪͔̯̹͐̋g̷̛̤͆͊̽͛̋̍̏r̵̲̺͕̬̲̄̈̎̊́͐̕e̸̤͖̺̤̬̜͇̠͔̦̾̌̌̈c̵̞̱̗͚̳͍̫͇̉͆̓́̑̉͘͜͜ ̸̫͎͎̤̺̹̄̄̈́́̆̀͊͒̎̓:̶͕̺̰̺̫̭̽̂̓͌ ̶̢̯̼͖͔͉̄̂͘͝͝ͅͅχ̴͕̫̟̯̜̉̌͛̀̏̚͜ά̶̦̤̥͕͓͛ρ̴̡̛̙͇̪̭̯̻͔̗́̊̀̈̕͠ἀ̶̮̘͚̗̰̞͛̑̓̑γ̶̦̭̅́͗͋́͗̓͛̉μ̴̮̳̭̼̱͉͗̔͋̈̂̊̈́ͅα̴̡̱̮͙̃̌ ̵͉͗̑͗̍-̸̢̱̮̤͉͖̮̃͆̑̌̽̒̊͜͜͝ ̶͉̑̈́̽̍͌̑̓̾c̴̢̦͎̺̝̞̤̼͒̽͗͂̀͒̃͜ͅḫ̷͈̱̫̖̯̥̦̑̏̽͂͘͠a̸̱̋̿̉̔̈̈́̕r̶̩͋́̈͊̾̃̆̀͑a̸̪̺̠̥̮̳̜̓̅̓̎̈́̈́̅ͅǵ̴̱̑̅m̶̘̯̑̓͛̈̔à̴͚̫̮̻̝̈́̎͜)̴̨̥̥̐̂̌͗́̈̓͘͝ ̵̺͚̣͕̉̄̂̋̇͂̀ę̶̡̛͙̻̫̝͓̥̓̎̀̇͋̂͝š̴͕̥̱̥̹̽̅͂͒̎̓̚͜͝ẗ̷̗̤̪̣̩̎̋̈́͊͘͘ ̴̝͙̬̪̩̰͍̾̃̈́̑͐̚͝e̵̺̞̬̥̽͛̒͛̈́̾̄̎̚ṋ̴̡̢̨͎̺̪͔͖͎̿́͆̽̓̄č̶̭͓̫͇͚͙̻̩̯̟̈́̐̎͂o̷͉̣̩̊̈̃r̶̡̧̺͔͕̹̂̓̍͑͋͛͊̒̿͝ȩ̴̮͓̞̜̃͆̒̀̉̈́͠ ̵̛̘͔̣̥͈̏̔̏̀̔͘͝͝͝é̸̛̛͍̩̲͍̈́͑̓͒́͒͌̕v̷̢̘̠͚͔̘̩͗̾̽̇̒̕͝͠o̸̯̦͠q̶̡̄̆u̶̢̡̙̟̻̤̙̪̒͒̿̌͜ͅé̵͖̞̜̻͎̈́͋̿̾̓̕ë̵̳͈̠̠̻̺͎́͊̎̈̐̃̀̕͝ ̶͙̜̖̍à̷̡̛̪̱̪̺͔̄̒̾̈́̌̏͂̕ ̶̡̡͖͚͚̼͉͈̇̆͘͜c̵̡̛̭͎̣̬͇̲̀͂̒͆̈́̑̑͜͝į̷̳̼̰͙̦̬̰̗̥͌͆̈́̐̔͝ń̵̨̨̧̜̖̯̘͇̰̲̒͂̓͒͒q̵̨͖̬̥̞̻͔̂̈͝͠ ̴̡̠͚̾̈́͐̑̊̋͗r̷̗̻͌̆́̈́e̷͙̓p̴͉͖̟̫̫̖̫̱͖̂͑͘r̷̤̟̣͕̲̩̔͑̍̋͑̍̿̆͠i̸̳̙͎̰̙̫̪͓͑̏̔̇̿̐͘͜s̶̡̈ę̴̩̩̩̰̻̙̤̻͊̑̂s̸̝͕̙͙̯͇̪̎͑̂̽͑͝,̷̛̟̺̹̓̏̀̚ ̷̯̝̦̰̲͈̐̆̓͑ͅm̴̨̨̤͉͉̫͍̎͂ͅa̵̡̜̦̤̅͝͠͝i̵̭͚͈̪͙͉̺̕s̴͙̐͛̇̉͋̇̔̇̿ ̷̦̖̐̀͌͒̚͘͠s̸͇͕͚̥̖̝̭̳̙͎̄̊̔̈̈͠a̴̬̻̞̤͎̟͕̭̟̣̍̆n̶̜̥̪̭̿̀̓̇̀̎̐̕ş̴̘͈͔͒͌͝ ̵̭̀̌͛̄́̓͠a̶̡̢̞̟͔̺̣̥̬͋̂͛̈́͊ͅù̷̮̣͛̀̊͆̃͆͝ț̸̛̠̻̦̖͗̋̽̅̄r̷̩͈̤̦̀̀̂͑̾́͗̐̀̚e̶̞̖̽͌͋͝ ̶̝̦̜̏͆͝p̴̡̩̰̮̜̜̲̲̍̀̅̈́r̸̙̖̥̗̍͌͂é̶̞̘̽͂͋c̵̥̉͆́̕ï̵̡̺͇̳͓͉̻͊͊̾̽̃͜͠s̶͔͇̱̪͎͎̯̫̉̓̏i̴͈̳̾͛́̅̽̐͛̈́̀͋o̵̗͚͇̭̳̣̖̘͠͝n̸͎̋͛̏͛͛̊͗͋ ̴̺̪̱̥̟͈̾̆̒̈́:̵̻̰̻̼͂̊ ̸̙͎̜̖̹̹̤̱͌̿̅͝u̴̖͗͌ǹ̶̡̨̢͎̺̭͉̣̠̅͒̏̍͌̅̏͜ ̷̹͓̺̗̓̋̃̓͛̓̃͘͝ä̴̺̻͉̝̜̬̽͐̅͌̀́n̸̳̪͇̥̭̼̩̙̜͒͐ͅg̷̛̻̯̠̰͎̞͚̰̳͊̈͠è̶̼̞͎̀͆͐̆ ̴͔͍͚͚̮̥̾̕͠ͅp̴̞̹̤͇͉̟̿ṙ̴̛͚̭͖̏̾̾̋̆͌͠ͅő̶̬̺̗̦͉̯̬͐̌͝m̶̨̻͍̭̘͎̭̞͐̅̓̇͒͊͊͗͆̚e̶̙̯͂͘t̸̮̬̆̔ ̷̢̧̬̖̘͕͈̅ả̴̤̮̱̣̣̤̀̎̎͂̎ư̷̛̬̘̝͈̄̈̄̀x̸̨̬͈̽̽͋̑͝ ̶̧̧̱̼̼̬̈́̀̈́̀͛͐̒̑p̵͓̮̺͗̓̈́̾̅̉͝o̶̥̬̯͚͖̮̝̮͌̓̽͐̾̓̂̊͘̚ŕ̴̨͇̠̼̘͖͙̿̌̐̔͋͐̓̐͜͝t̶̬̭͕̜͇̪͚̐̈́̋͌̑̾͌̊͌͝e̶̢̜̞͖͓͙̗̼̳͊̚u̸̯͉̖͇͋̇͊̆̾͝͠͠r̸͙̞̱̮̹̆̃s̴͉̝̝̙̗̎̀͒͠ ̴͈̠̙̬̺̳̆d̴͇̥̺̦̏̀̈́ͅe̷̘͖̯͉͗͌̉ ̷̠̌̐̉̈́͗̏̚͝͠l̷̜̭̬̳͔̥̱̲̅̑͋̂͘̚͝͝ä̸̡̢̛̠̥̠̙͔̈͋̾̽͐̊̀̂ ̷̨̤̘̠̭͈̖̦̮̜̒͋̄̈́͋̔̈́͘ṃ̴̠̟̲̭̰̲̭̘̗͗̉͝à̶̡̜͎͚̩̦͕̝̳͋̽̐̽͘͝r̸̡̞͋͋̾̓̃̓͝q̵̡̰͖̟̫̭͉̹͍͎̍̌̃̆̈́̍̅ȗ̴̧̝̾̌̊̇͝͝͝͝ë̵͚̟̝̭̫́̓̓͊͝ ̸̛̛͔̰̹̌̃͑q̸̺̻̼̹̞̿̈͐̕û̴̥͇͓̅͂͠'̵̱͔̫̘̟͈͒̂͋̔͒̅̅̆͠i̸̡͙̯̬̤͎͔̮̝̤̅͒̄̐l̸̢̯̟̙̂̃̍̿̕s̵̰̘͕̹̩̱̫͕̪̜̉̐̽̍̎̄̈ ̵̧̢̫̫̞̜͖̌̀͛b̴̪̈́ơ̷̰͚̅͑̆̓̑i̶̱̠͆̎͋̉͆̅͒̉̓̕r̴̥̭̻̥̭͇̙̠̫̩͒̉͗́͒͒̈́͝o̴͕̟͍̹̖̰̮̾͜ͅn̶̤̠̗̬̐̎̈̈̓͋́̓̕͘t̶̢͓̱̣̙̊̐̐̽̏͒̂̏͘͝ ̵̨̠̞̪͝«̵̛̱̠̭̦̦̤̙̿̓̈́ͅͅͅ ̴̞̰̗̳̾̓̾̑́l̷̛̳͉̯̗̹̹̤̼̫͊ȩ̵̣͔͇̜̥̣̳̃̊͑͂̐͝ ̴̧̡͓̈́̈͌͊͊́v̷̙̯̥̈î̸̡̨̧̮̱͛̚̕͝n̵̡͕̦̙̱͎̒̈́̀̋̋̈́̄ ̷̧̺̬̐̏̊̈́d̷̡̞̳̼̲͗͋̀̌̎ē̶̢͙̏͛̽̚ ̴̗̬͔͈͚͈͗̿͘ḻ̶̛͓̩̱̟̜͋̉̽͑͘͜͜ầ̵̰̠̬̰̏̽̑̆̓̚͝ ̷̨̧̛̖̤̬̦̰̲͙f̴̡̦̰̩̙̭̝́̀͆ụ̸͉͍̘̯̞̥͌͜ŗ̴̡̩͍̻̭̓͆̿͂̀̈́̾͘͜͝ͅḛ̷̡̺̼͍͑̈̏͘̕̚͠u̴̡̪͈̦͉̟̎̓r̸̢͐̐́͛̃̚ ̷̪̼̝̫̬̫͔̳̲͑̎̽́̄͆̉͜d̷̝̘̖́̀̓̎̊̀͑̚͜e̵͕̣͚͚̲̔͊͑͜ͅ ̸̡̺͇͍̖̭̫̆̉̏̚D̴̫͙̆͜ḭ̴̌̎ḙ̵̹͚̈́͛̉́̐̑̍͝u̴̦̮̦̤̅̔̓̓̅̊̎̈́͘͘ ̸̢̣̈̍́͆͝»̷̧͍̺̳͖́̂͗̃̀͠ ̴̳͓͇̞̲͓̭͙́̑͒̃͘̚ͅ(̵̢̠̩̫͙̹̘̲̹̫̈́̀̆̐̍̎͆́̃͝1̶̡̼̘̥͎͓̝̃̿͝4̸͓͚̙̽͆̐͐̍:̵̼̀͆̄́9̵͍̲̌̏̏͊̏͑)̴̍͒̓͛̉ͅ ̶̡̹͓̲̳̂̇́̓̚̕͠͠ͅ;̸̤̼̮͎̗̣͌ ̷̨͎̤̲̠̥͖͓̌̉̏̑̓͊̓̓̅͝q̵̜̤͋̍͗͠ú̷̲͓̔̍̂̊ī̵̱͚̖c̵͔̘͉̻̅̇͛͗̀́̀̀́̂o̵͎̺̺̞͓̠̯̩̹͚͂͆́͘n̷̡̰̩̙̄̕͜͝q̴̛̦̱͈̫̟͔̖̐̽͑͝͝u̸͉͕̠͕̟̺̺̖̍ë̷̪͕̦̎̄̃͐̎ ̵̗̽̉́͆̍͊̀͂͠ȧ̸̟̠̱̙͑̚ ̴̡̢̺̗̞̙̺̌͐̉̈́͛̿̽̅̚͠â̷̛͇̗͖̬̘͖̣̫͚͂̊͆̓̊c̵̢̟͊͒́c̸̣̫̉͌͆̆e̶͍̪̻͇̤͌̋̿̓̍̋͋̆͠ͅp̸̨̭̫̰̹͖͉̪̽ͅt̸̡̤̳͕̣̬̼̔̉̀͂̓é̷͈͔͕͚̮́͋͋̾̎̕ ̸͍̻̠̂̐͛͋͆͒̒̚͠͝ḷ̴̛̞̹̺́̌̄̑͠ḁ̶̪͗̎ ̸̗̻̦̔̋̈́͒͋̑̇̚m̵̗̖̟̲̌̎̎͆̽̈́̐͘a̸̦̜̩͇͍̜͚̋̀͗͌̓̈́̂̀͂̓r̸͚̓̋́̇́̇͛̈́͝q̵̱͈̱̙̪͓͐́͘͠ư̷̳̿̌́͗̓̇͊é̵̡̦̣̟̝͒̈ ̸̖̥̆̿͂̋̂̑̃̏̓͠«̴̲̹̞̙͑̏͝ ̵̳̱̈́̎́̃̊̀͛͝ņ̵̓̾͐ͅĕ̵͖̌̊̌̏̌̆̌͝ ̴̨̨̧̨̛̻̻̈́c̴̢̨͕̲͔̙̥̻̱͊̓̅͆̉͐͋͝o̵̧̻̮̩͙̓͒͑͐̃̐̍́̆͝n̷̨̥͙̼̖̣̠͖͖̙̋̐̍̊̿͑͠n̴̲̱͚͐͜a̷̧̢̮̪̙̟̙̎̒͊̑̂̀̚͠î̶̺̯̳̜̜̥͒̓̒̏̃̎͛̎̌t̵̖̗̻͈̳͔̱̖̿͛̿̌ȓ̴̭̘̫͍̝̗̙͍̑͑̌a̷̼̲͓̘͗͑̃͐̕ ̴̡̫̮̞̗̈́́̉̾̓̈́̎͋͂a̴͖̦̣̼̋͆̑̏͛̿͆̒̄̕ͅṷ̵̡̗̣̰̠̖̃̍̿̃̎̈̈́c̵̫̤̳̤͒̅͌̑̋̈́̄̒͝ù̷̦̺̜̮̥͇̅̈́́͐n̶̪̠̈́̓̆̌̇̾̄͊̕͝ͅ ̷̨̩͓̩̗̰͉͓͕̍̿̈́́̈́̽̄́͝͝ŕ̷͉̠̯̣̫̏͑͂̂̾͝e̴͈̬͐̿̌͂̓̔͂ṗ̵͙̫͖̱͆̔͘ǫ̷͉̫͉̝͋̚͝ş̸͔͕̹̘̻̰̠̾̅͂͌́͌̓ ̷̙̳̣͖̫̪̍̽̈́̽̆̆̏͜͝͠»̴̛̗̜̏̌͐̌̌͠ ̴̨̧͇̼̯͙͕̞̞͙͊̒͌͋(̴̡͉̥̼̹̞̀̃̉̀̕1̵̛̗̤͛̿̀4̸̘͓̪̼̖̲͈̺̖̠̄͛̀:̸̢̲̙͍̦͉͙͔̖̑̇͐̔̏̅͒̋1̷̪̲̊̈́̏͆͌͘1̵̡̛̦̞̺̘͓̋̍̃͝)̷̪͍̳̖̥̩̬̞̱̇̕͜͠,̵͈̗̯̠̦̄͌̂̒̈́̄͒̔͜ͅͅ ̷̛̗̱̜̭̭̮̽̎́̈́̀̔͝ś̸̡͙̖̫͕͔̟͚̈́̅̈́̾͊̽̕ͅͅę̵̛̤͕̪̳̠̃̐̂́ ̵͕̮̫͇̝̤̋͜ͅť̴͈͙͎̰̥̔̕͠r̶̡̛͕̠̩̝̆̕͠ŏ̸̯̎̈̓̀̀̈́́͘̕ư̶̱̍͐̿v̴̪̙͗̓̀͂ȩ̶̮̩͚̟̠̳̥̔̓͛͐̀ ̴̨̠͉̗̅̍͛͋f̵̦̟̲̲̆͛̅̈́̓͌̕ŗ̶̱͉̻̜̲̤̃̽̀̓́́̆͝ą̵̤͉͉̭̪̣͝p̶̨͓͍̱͍̜̠̺͍̀̏͑̀̓̂͜͝p̵̢͕̣͋̄̓̽͂́̚é̴͈̟̋͋̊̇̌̍͊͛͆͝ ̸͉̙̳̀̽͠d̸̮̘͉̪̈̑͊̇́̊̽͒̕'̸̧̳̰̗͙̉́̌͂ư̶̠͆̅͋̂̔́̂̾̃ņ̴̛̺̩̠̟̳̥̬̳͉͌̓̍̕͠͝ ̵̙̫̤̗̙͎̀͊̃«̵͚̮̮͎̉̽̈̾̅̓̃̈́̚͝ ̴̤̒u̸̡̯̖͙̦͍̘̱̽̓̈́l̵͙̀̍̔̂̿͒̃͜͝c̸͎͚̮̣͎̬͚̞͇̦̓̒͋̌̕è̶͎̹̀͌͂͒r̴̢̦̰͕̭̱͊e̴̡̼̽̑̕ͅ ̵̬̲̣̦̠̝͎̑́͌̑̓̇͂̓̈́͛͜m̵̧̹͎̭̫̻͚̖͕̑ȁ̷͖̖̺̠̐͠l̶̓̈́͜ǐ̵̜̭̼̀̋̒͝ṇ̴̨̢̱̻̰̰̭͆̌͐̿͘ͅ ̶̪͎̖̤͙̯̮̈́̕e̵̝̬̪̣̙̥̫̞̅̔͝ͅt̸̰͖̪͍̣̩̖̞͈͗̊̓͒̐͘͝ͅ ̶̪͔͋d̵̺̩̦̏̇͗̈́̋͋̐̀̏̂o̵̰͈̖̯̥͎͎͔̯̍ų̴̰̺̠͇̣̩̠̦͒l̵̨͕̯͉̮̜̞̠̩̅͐̂ͅô̵̧̜̔̽̒͒̅͊̓̆u̵̦̼͇̿̀̔̄͛̚r̷̨̡͚͍̫̤͕̒̄̂̓̐̂ẽ̴̙ũ̵̻̜͍͚̥͔͐̿̾̋͑͌̎x̵͍̻͖̾̇̅̅͆̄̃͛͠͝ ̶̳͌͒͠»̶̡̛͔̻̭̻̲̦̮̌̽̽́̽͋̂̕ ̴̜͓̊͛̓(̵̻͈͚̯͚̌͌̂͌̉̿̍̾1̵̨͓͖͖͇̟̯̯̾͝6̴̨̙̪̮̪̦͓̥̇̈́͋:̸̙͖̬̟̉͑2̵̬͎̰̘̟́̔͒͗̾̑͋̂̚͝)̴̡̡͇͔͔̣̤̩͗͂͑͌̍̆̾̈,̶̭͚̰̤̞͛̿͛̐͆̅́̀͌͐ ̶̝͚̺͌̓̀͌̃̅ę̶̪͖̹̬͙̪͖̫́̽̃͌̈́͝͝ư̷̧̤͎͒̈́̋͝x̸̗̟̲̗̗̐̒͋͆ ̸̮́̋́̓̉̄̇͋̚q̴͓̯͎͎̍̂̌ủ̷̟̉̏̈́͌́̒͝ỉ̵̬͖̣͎̼̦̫̩͆̊̀͜ͅ ̷̡̝͔̰͚̙̺̥̫̜̃̍̕̚a̷̪̥͔̠̝̥̍̔̂̈́̈́͐̂̓̄̂v̴̯̼̽̌̅͗̓̚͘a̶̘͕͕̼̜̒͒ì̶̤͖ē̶̹̍̀͆̈̈̉͘n̴̡̹̗̼͓̞̟̥̙͐̿͗͛̓̌̄̾̕͝t̶̢͔͓͈̺̓͊̿̈́̋̊̍̉̕ ̶̧̩̼̺̼̰̈̅̅̓͘͝é̵͍̬̂́̾͂ẗ̶̤̙̻́̒̑̇̊̑̈́͘̚͝é̷͉̭̣̹̦̱̱̓̏͘ ̵̭͛͂͆ť̶̨͈͚̫͖̠̬́͘r̸̨̯͍̝͓͙̰͓͎̉̓̄o̸̘̤̙͈͕̫̱͎̰͑m̸̨͉̦̭͈̤̖̭̿̈̎̿ͅp̵͕̿é̷͈̦̮̠͖̉̈́̿̎͋͂̕͝ͅͅś̶̨̻̤̲̖̘ ̴̢̣͔̤̰̖̘̗̽̓͋̔͗̐͛̇̀̕p̴̻̲͕̯̰̻̝̠̏̇̈̅̈̍͋ͅă̸͉̰͎̬̥͈͘r̷̨̨̞̠̼̫͚̘͓͊͊ ̴͙̌̉̈́̾̅l̸̹̙̟̰̮̯͚̗͍͒̅̏̐͊̂́e̷̬̹̳͔̖̘͕̼͒̈́͐̽̑͗͌͊͘̕ͅs̶̞͚̞̤̣̑̔ ̸̼̫͓̩̯̳̪̼̀͊͑̏̃̈͝s̴͖͙̰̹̣͓͚̰̈̉̾̍̀i̷̢̛͍̖̩̱̺̯̲͎͈̐͌͊̽̅̈̚͝g̷̛̼͍̳̻͔̿̄͝ͅņ̷̢̛͓̭̙̖̝͙̀̀̑̌̑̈́͛ẻ̴̜̭͇̈́̉̀̓s̷̡͚̝͈͎̣͈͖͈̩̏ ̵̨̧̙͚̦̭̦̝́̑̽̾d̸̅͜u̴͍͇̾̏̏ ̵̛̛̘̻͇͍̠͕͊̄́̒̍̚͝f̴͙̻͎̜̘̎͆̃̆̎̓̕ả̸̡̜͔͇̤̯̖̣͈͂͋͌̅͘͜ū̴̧̦͉̟͓̍͘x̷̨̛̛̲͖̦̭͓̬̜͐̆̄̽̋̿̚͝ ̸̬̘̖͔̲̦̻̦̠̓̿͌̅̆́̔̓ͅp̶̤̖̂̕͝r̷̘̊̈́̎͌̀̾́͘̕ȏ̶̜͍̹p̷͎̝̠̦̫̗͗̓ͅh̶̢̖͚̭͚͙̙̙̜̐͜è̶͉͈̉̎ẗ̷͕̻̼̣́̇ẽ̵̥̀̎͐̃͗͗̽̕ ̷̣̞̥̠̻͚͉̪̞͊͛̀͐͗̀̈́̒͠(̶̱͎̫̜̠̎1̸̱̤̣̩̟͇̲̼̚͜͝ͅ9̵̢̛̳̪̦̠̟̩̳̙̝̾͗̈͑͐̚:̵̜͍̰͎͓͌̔̐̒͆̏͠2̴̡̠̜̪̖̦͚͋͋̇̓͐͒̌͘͜͝0̸̢̢͚̫͙̫̺̼̉́̆͑̾͐)̶̟͔̠̩̙͉̔̓.̷͙̝̞͖̬̭̠͈̲̣̂̊̔͗̒̈́͌͘ ̵͓̦̜͍̤̝̘̥̊̃͜ͅE̶̗͕̍́ṋ̷̢̱̻̩̭͊̎̀̋̿̀̿̚͝f̵̨͎̮͔̯̦͕͚̣̹̈́͘ĩ̶̤̭̭͉̝̃̽̀̌̈̀͒̕n̵͇̩͔̗̖̝̯̑̅̒̈́͌,̷̢̡̰̂̓͘ ̶̢̧̧̢̹̠͈̻̪̓ê̶̫̗̱͚͘l̴̘̱͇̙̟̖̻̔̆̃̒̌͌̉l̸̨̡̳̤̹͖̰̏̅̂̓̚͝e̶̳̖̭͉̲̗̋̃̿̽́̚ ̷̛̺̞̣͈̰͈̽ȩ̷̛̠͙̃s̴̢͉̬̠͍̠̱̈́̉͋͊̓ţ̴̡̢̼͖̰̞͕̌̆̈́̀̂ ̷̢̧̡̞̱̲͓̟̳̖̿̉̀é̸̺͙͔̌v̵̮̻̈́͊͂̏̌̌̏̔̇ȯ̷̡̙̜̺̲͇͓͙̠̥̈́͒͋̈̆̕q̷̹̬͜͝ư̴̥̥͉̪̰̼̯̐̒̃̈́̋͆͜͝͠é̴̡̯̠̩̃̋́ẻ̴̡̛̼̰̥̖͇̌́̕ ̶̙̍̐n̶̡͔̹̦̖̥̤̈́̀̀̅̆é̴̢̲̼̮̲̝̑̎͗͑̚͘ͅg̸̡̳̜̲̤̭̰̽͐a̸̮̫̣͋̀͂̈̏́t̷̛̰͎̬̞͚̜͛̍̍͊̈́͛͜i̸̠̲͎̼̰͉͐́͌̀̎͜v̸̨͎̺͈͉̳͓̪̹̑̉̑̿e̸̠̯͉̺̭̻̬͖̎ṁ̷̡̹̜̰̖͇̰͙̍̿̒̚e̷̛͎̫͙̐̋̊̑̐͗̈́̇̕n̵͙͇̺̰͌͂ṭ̷̨̻͓̈́̌̀̍͘ ̸̛̩̥̗̘̩̖̻̞̋͊͑̄́͗̚͜:̶̢̛͈̲͉̮̅̆̎́̐͛̈́̏͠ ̷̢̡̘̦͎̯͚̹̈́͋̀͛͋́͊͝c̴̛̱̲̹̠̣̰͓̻̟̘͌́̈́̎́̽̍͝e̴̡̬̼̻̝͉̟̎̀͒͋ū̸̱̰̠̭̱͍̰̽̽̉̇̓̒̒̀ẍ̷͕́ ̵̘̞̽̑̔̊͛̋͑͑́͘q̸̢͉͓͎̰̹̥̯̓̌̌u̸̼͔̦̗̠̙̼̱̯̿͛͊͑͛͜͠͝i̵̛̘̩̗̎̽̏̊̓̾̏̚ͅ ̶̳̍͋̽̓̒̈́̆̐͝n̶̲̯̻̖͉̈́̈́̇̉̔'̵̧̥͔̀o̸̪̻̻͖͚̽̔̀̍ͅṉ̵̀̽̿̔̕t̸̥̜͎̦̾ ̵̮̜̿̓̃̄̽̑̌̚͝p̴̛̜̳̣͉̬̲͛́̔̚ã̷̤̝̩̩̩̓̐̌ͅͅs̵̨̜͍͊ ̶̢̗̜͖̮͓͙̲̺̅̑̇̐́ȑ̸͉̹e̶̙̻͎̞̭̝̬͚̾ç̵̫̖̀́͊̌̓ṵ̸̡͔́̒̓͗̋͜͝ ̶͕̙̺̈́͗͂̿̉̀͌͘ļ̴̡̰͎̻͍̫̦̟̋̓̋̑̕͘ͅą̵̱̩̩͒̋̀̄ ̴̳͎̬̻̥̙̐͊̔̆̃̇̃̿ͅm̷̡͖͍̻͐̃͜a̵̖̺̫̻̭͆̈́̄͗̀̄́͋̈́̐r̸̛̗̩͕̘̩̩̙̅͐q̵̢͓̞̬͓͖̙̺͐̑͑̍͒̓̚ű̶̢̻̬̜͚̙̲͍͓̘͊͆̈̑͌̌͊͘ę̵̬̦̮̲̘͕̔̇͒̃̔̓́̅,̵̼̱͎͈̪̳̻̪̬̎ ̸̩̲̯̣̱̇͊́̒̋̽̄̇̚l̸̨̛͕̞̞̭̻̭̈̔̂̎̎͂͜e̴̬̋͊͊s̸͇̼̹͙̍͗̑͆͆ ̷̞͙̦̪͉̠͚͓̙̀̌ḿ̴̻̬͚̓̑â̸̧͙͇̮̣͔͚̠͌̊̄̚r̶̥̣͕̆̓͛͐̕͠ͅt̴̰̲̏̌̏̀̃͑͆̒͘̚y̵̨̨̜̱̝̻̟̹̳̪͂r̸̜̽̄͛̊͠s̴̜̪̦͖̳̙͈̽̏͑̑̀̂̈́̕͘ ̶̳̤̟̖̯̜̠̌̀̄́̈̎͜e̶̫̜̜̟̮̫̲̻̎̋̍t̴͈̀ ̸̢̣͎́̾̍̽̆͐̿͂̕l̴̨̪͈̣̣̤͗́͝e̴̩̾̐͐̋̂̇̌̂͠s̴͖̏̃͗̇͂̏͌̽͠ ̷͉͇̋̑̾̾̀͗̌̏̎ͅé̵̝͔͎͚͇̹̅̃̀̌̈́͛̚͘͠l̴̰̬̿̏͂͆͘ů̷͕̟̳͎̞̫́̀̇̿͝ͅš̴͉̦͎̭͕̿,̵̗͈̼͖̳͓̻̃̇̾͠ ̷͍̀̒͊͒̓̃̋v̷̢̭̖͛̀̑͝i̷̛̦̲̓̍̃͐̌͗̌̏ṽ̷̖̯̙̥̒̕ͅę̶̘̞̄̄͠͝n̴̢̨͎͓̏̔̆́͝͝t̶͍͖̻̤̎̏ ̸̩͆͠e̷̻̥͛̽͝t̶̩̄̾̑̒͆̆͌̈͝͠ ̵̨̼̞̻̰͍̮̠̑͛͐ŕ̵̨̥̠̰̦͚̞̹̤̯ȩ̶̹̮̘̹̙̯̼̳̯̀̀̃̀ģ̶̢͎͚̹͓̩̻͓̓̔̒̾n̶͉̅̌̈͌ȅ̷͎̀͐̈̒͂̂̕͠n̷͎̿̈́̿́̅̀͆̏̕t̸̨̯̻̣̣͙̳̜̰̓̈́͆̓͆͒̚͠ ̷̝͒̆̓͐̅̔̒͠ä̶̢̬͔͇́̑̌͋̆̈̊͆̈ͅv̸͕̮̥͔͉̀̔̎ę̷͙͎͈̞͖̤̾͐̊͒͑̑͝c̷̻͛̈́̑̿̀ ̴͖͉̯͍̫̖͌̋̓̌͝ľ̵͇͐͆͛͐̔̄͋͝͝e̴̡̛͙̩̦̣̝̜̍̔̅̒ ̸̢̂C̵̪̩̈́̋́ḥ̷̢̘̹͙̭̫̻̦̣͛r̸̺̳̟̈́ỉ̶̡̡̡̪̗͈́͗̈̅̚s̸̥͕̬͓̋͛̈́̈́̔̓̀̕t̴̢̫̘͉̬͚̖̖́̄̈́̅̄̐̿͑̂͘ ̶̯͔͇̰̞̖͐̆͂̈́͠p̷̹̹̙̮̺̺̄͝͠e̶̬͕̫̿͛ņ̸̛̮̝̳̳͇̖̖͙̓̿̿̇͝͝d̸̡͇̦̘̤̜̩̫̯͛̈́̔̓̈̉̆̕̕a̵̢̡̛̫͇̜̿̀͌͛͝ṅ̴̛̖̦̻̟̘͙̓̏̌̈́͆̚̕ţ̶̙̟̞̜̜̺̹̳̄̒̚͠ ̵̡͕̉m̴̥͚͉̀̿̈͛́̓̌i̵͎̹̻͖̣͛͂̂̋̄͐l̷̡͍̺͈̔̐̈͝ļ̷̨͖̓̈̿͘͝ė̷̩̗̯͉̫̺̻̜̀̈́̈́̓̎̇̋͐͝ ̷̧̧̛̻̜̭̣̭̝̏͛̎͂̂́ͅã̴̬̀̓́̚̚̚͝n̵̨̨̻̦̩̼̲̻̮̪͑̓̓̈́̆͝s̷̨̧͕͎͎̮̮̪̹̓̑̈́̍͠ ̸̧̧̨̦̟̜̖͖̦̤̾̓̅̅̌̋͗͠(̶̛̖̣͔͖͎͎̫͗̀̈́̊ͅ2̵̨̃̿̔0̷̧̲͎̟̪̝̭̳̞̓̔:̵̩͂̃͋͘4̶̢̘̰̱̹͍̻̠͈͊̋ͅ)̷̲͖͚̞̣̩̏͆̔͠[̵̛͚̥̳̺̼̰̬̞̦͐̒ͅ9̸̢̹̤͉̼͊̆̍͘͘͝]̴͔͔̘͎̔̅̈́̀͗̽̉.̶̢̢̢͕̲̫̘̬͙̲̅̋«̶̗̲͚͚͚͖̻̝͔̮̏͌̑͂̒͝ ̶̖̘̦̲̤̖̬̔̌̅̍̿̋̏̎͜1̸̡̭̩̱̖̦̯̋̋̏̓̾̒͋̔̅͜͠5̶̨̲̹̘̳̰͈̬̗͌̑̕ ̵̛͓̜͕͈̥̮͕̉́͒̂̓̀͘͝[̶̨̢̦̞́͊̏I̴̼͈̤̯͖̓̐͂̓̄̌̂̚͝ͅl̷͇͈͉̞̻̐̿̒̍̋̓̾̚ ̷̣̻̊̊͒́̎̊͛̒͠f̸̹̾̾̄̑͊̈́u̷̳͕̣̝̍̅̐̉̃̐͆̑̕͠t̵̛̼͗̑͝]̴̲̌́ ̸̢̧̧̦̣̗̮̣͔̽̇̋̏͊͗̅̌̔͜ḿ̷̻̖̎͌̔͛̓̆͛̿͝ê̷̛̘͕̐̊̒̒̾̋m̶̲̣̒̾̈́͛e̷̛͕̪̙̪̰̖ͅ ̷̜̩̦̪̐͒̏̋̒͒͝d̸̯̭̤̯̗͉̝͔͂̂̂̂̅̊ͅo̸̻̙̭̗̳͙͗̌̾̀̏̅̇n̶̹̎̄́͋́n̸͖̝̯̳̝̂̈́̕͝ę̶̜͚́̑̊̄̈́̆̔̿̅̕͘ ̷̨̼̳̺̰̞̈̅̋͗̕ͅ[̷̯̤̎̃͌̇̕ą̷̨̥͍͎̳͍̩͕̀͐̀̇͐̾̓̕ ̴̫̮̮̭̲̥̳͋̐͊̎́́͗͝l̶̤͖̺͇͍̗͙͇͋͗͘a̵̠̻͓͎͛̃͂́͛̌͜͝͝͝ ̷̡̘̜͙̖̜̊̀̊̽̐͂̕s̷̗̠̻̘̥̯͇̰̗̓̈́̋͆̑̈́̈́͂͐e̵̳̠̤͈̲͍͛č̶̨̥̔̑̀̍̌͆̈̋̎͜ơ̶͚͚̥̹̿̒̄ṇ̶̫͖̱̻̺̥̰̲̹̄͗̀̉̃̾d̷̳͎͓̞̖̠̺̞͛̎̾̚͝ͅe̸͕͍̰̟͓̮̦̻̠̊͋̓̊͒͑̊̅͘ ̴͙̋̍͐͜ḃ̷̢̧̲̰̪̖̞̙͇̋͌ê̵̡̳͚̗͈̗̍̽̋̿͊͒͐͜ť̴̛̤̬̭̠̎̈́̇̕͜͝ȅ̷͉̣̲̭̫̉̂̉̏̉̔͂͜ͅ]̵̡̤̯̠͎̦͆͆̓̓́͜ ̵̢͔̭̎́̔̉̇͌̿͌͘̕d̵̡̠̠̻̩̤̰̫̩̍̏͑̎̃̍̀̓̕’̷̢̗̺̳̖̺͍̩͇̊̉̏̑a̸̒̀̽͜n̶̹͈̯̻͎͛̃̈́̓̀̚͜ì̸̥͊̀̀̕͝m̶̢̩̘̤̲͔͕͒̋̈́̃͒̐͘͠ͅe̵̛̗͇͚̟̯͋̽̀́̾̋̕̕r̷͚̟̬̖͈̺͋͘͜͝ ̸̺͇̤̱̦̮̽̽l̵̪͖͕͓̄̌́̀́̍̍̇̂͝’̶̲̟̙͎̞̻͉͊̈́́̅͒̆͂͆̿̂ͅi̶̡͚̙̘̫͖̙̰̘͛̍̌̋͜m̷̱̜͊͊͌̆̿ȧ̷̡͕́̈́̌͂̆͠g̷̛̛̹̟̬͙̈́̋̑̌̇̕e̴͎̋͌̓́̂́̀ ̴̧̞̥̙͔͈̠̱̮̓̐̇d̴̙̥̞̙̎̂̇̉̑̈̿̒̌̉ę̷̫̺̲́̈́͗͒̂̄̕͘͝ͅ ̴̥̲͈̄̑̆̈́͌͛͜ͅl̶̡̢͍͎̞͇̎͋̈́̐̀́̉̕à̴̭̿͛͗̇̓ ̵͔͖̖̀̇ͅ[̷̮̭̔̇͗̈́̎̇̈́͝ṕ̵̢͙̩̝͙̻̥̱͓̭͝ŗ̸̧̛̜͈̠̳̙̤́̊͆̐͝ë̶̯͚́̊̓́m̵̺̪̣̦̲̃̓̆͋i̴̧͌̉̾́̇è̷̟̺͓̮̦͔̝͍͈͍̍̽̄̾̐̏r̶͙͐̑͊̎̐͑̈́̊͛͗e̵̛̪͋̉̈́̾]̶̛͇̬͈̼̰͉̭͕̥̔ ̵̯̖̭̉͑͐̃͗̃͐̈́̏̕b̴̨̨̡̻̞͓̯̯̦̹̾͆̿͐̂̏͑ề̶̡̧̗̞̼̦̺̱̂͒̌͑̔͌͋̚͜ͅṯ̷͔̉̑͆͝e̷̬̹͍̖̭̯͕̎͑̌̈́̈́̆̊̉,̴͇̜̋͊̇̓̉͝͝͝ ̷̭̺͚̽̔̔̅́͆͂͑ȩ̸̢̛̖̯̙̯̙̣͌͗͛̒̓͆̕ẗ̶̥̼͍̳̦͎͍̭̞̳̍̿͊͗̽͝͝ ̵̖̰̭͕͉̙̝̟͐̓̚͜ļ̷͔̉’̸͍͓̼̮͔̲͙̜̀̽̎̓̽̂̿̕͘í̴̢̒̀̔́̑̀m̵̖͓̜͓̜͘ä̵̮̖̈́͒̈̿g̵̱̮͙̏̈͊͒͌e̴̲̼̤͛͐͗̑̊́̾͛̚̕͜ ̶̟̠̏́͋͋̾̈́͂s̷̡̡̫̟͈̭̦̭̈́̇̅͒̓̈́̓̚ę̷̼̩͚͉̗̝́̅̉̆̏̌͑̿̉͘ ̷̢̛̘̦̪̗̲̕͝m̶̡̪̞̘̼̩̘̈́͌̊̏̉ͅį̷̛̘͇̦̝̄̑͊t̸̖̘͈̃̾̿̇̈́͠ͅ ̴̢̨̦̩̗̜͗ͅą̵̤͕̙̬̼̤̺̼̀̆͛̕ͅ ̸̢̧̜̼̝̙̖̞͑́̃̒̇́̓̚p̷̧͓͖͙̥̦̥̪̽̎̿̀̿̚̚͠a̸̧͕̰̫͚̗͋̄̃r̸̯̘̋̓l̸͇̥̉̏́̈͝ę̸͇̟̞̭̪͙͔̲̿̈́̕͠ṙ̵͉̲̹̳̞̝̺̞̈͗̐͆̾ͅ ̶̦͕͓̣̈́e̴̞̪̯͔̊̂̀̾̒͜͝ṱ̵̰̭̲̫̦͇̀̔̾̑͌̔͝ ̴̳̪̫͈̞̪̬̀ḙ̵̏ḷ̷̢̔͗͊͌̉̅̚͘l̵̡̳̘͓̞͚͉̳̪̪̓̾̃̉̇̉͐̉̊e̶̗̣͓̝̠̗̱͍̰͒̂̈́͐̇͋̚͜ ̷̨̲̺͙̉̊̅͂̽̚f̴̝̟̘̼̼̙̰̗͚̌̈͘͝͝a̷̤̟̩̺̱͎͎̽́͐̚ḭ̴̧̺̤͎͔͍̭̙̊̾͊̀̊͊͘͜s̶̡̬̪̩͍͕̞̖͈̀̈́̓̍̉̽̉͘ȃ̵̞ì̵̧̼̈ṯ̶̨̘͓͔͉͗̔̎̕ ̷̧͎̼̤̫̱̻̦̈́͌m̴͓͔͈̜̳̝̈́͆̊̍́̐́ò̵̭̣̯͓͎̽̈́̑͆̈́̇͜ủ̶͔̐́́͘r̸̩͙̖̠͎̪͓̰͗̈́̓̑i̶̡̻̤̥̪̖͍̦̭͆̐̈̇̿̔̄ͅr̸̫̟̜̲̭̉͛̾̽̆ ̸̗̼̹͚̏͗͑̔̂̎̊́͘c̵͉͚̣̰͉͐̒͌́́ë̵̳̟̙̜͇̺͔̝́̆̐̋̔͜ų̴̤͍͇͇͓͎̬̪́x̷̞̲̖̰͖̺̮͆̽̍́̐̈́̿̕͘͠ͅ ̶̭͙̟̻̭̘̫̫̉͒͂̓̐͂̽̐͘ͅq̴̼͚̫̓u̴̺̠̭͔͊͌̀́̾͗̈́͜ͅḯ̵̪̦̮̅̅̀̀͒͑̏̈ ̵̡̦̯̓́̅̃͠r̴̡̡̢̟̭̙̜̱̞̖̉̉͊̄̽͛̔e̶̛̟̪̯̬̙͇̳͂̽̓̈̒f̵̛̛̗̦̞͊̈́͒̌̆͝ü̴̲̰͈͔̟̔̈̓͛̈́͐̾̎̚͜s̵̘̪̫̠͚̮͚͔̔̈́͆̃̃͋̕͜a̷͚̅̂̃į̸̖͉̬͕̠͖̄̈̾ͅe̷̜͉̯̜͈̮̔ň̶̝͍̟͙͎̰͓͋̇t̸̯̰̘̮̅͆̌̾͗ ̷̱̙͗̄d̴͖̖͌ͅě̶̥͚͖̫̠͍͉̯͂͐̋̽ ̶̟̤̼͔̘̅͑̌̉̆̈́͝͠ḻ̷̒̈́͒̆͆̐’̷̱̮̮͓͓͓̖̗̙̜̽̅͒͛́́͝͠a̷̬͈̣̮̞̯̻̙̫͛̉͌̏̍̂d̷̬̫̻͐̎̄̀̎͜ơ̶̢̟̼̲̤̻͔͓̹̑̀̀̊̃͛̀ͅr̴̨̛͖̥̺̩̝̦̣̄̈́͂̌͑̓ͅͅȅ̸͚͊͛̐͆͛̈́r̶͕̹̠͖͉͗̀͂͗͊̒.̸̧͍̪̘̼̩̺̝̾̀ ̶͇͉̣̋̾ͅ1̸̡̨͈͚̫̤̈́̀͗͜͠͝͠6̴̨̢͔̳̳̖̟̹̇̈́̑̉͘̕̚ ̶̬̻̟͖̝̼̣̹̭̏͛͝ͅË̴̘̜͙͎͉͔̖̰̥́́͊͝͝l̴̼̅̾̌̿̉̉͝l̵̨̮̮̱̼̄̃ë̴̛̫͈́̀̈̚͠ ̴̨̫̖̹͂̒̀ã̷̡̛̝͇̦̲m̶̬̰͘͜e̸̛̜͎͎̤̭̰͙͈̰̿̋̓̂̂̅͂ṋ̶̰͎̜̃̂͑́̔̊̆̚ͅa̸̡̦̩̟͈̟͎̿̈̈́̆̆ ̸̥̠̙̳͈̺̂̈́̕ͅṭ̵̡̬̆o̷̧̡̱͓͒͋̊͒ü̵̹̰͛͂͂̋̐̚͠ş̸̢̤͕̩̬͔͐͒ ̸͖̖̺̍͛l̷̢̟͎̬͈͔̐e̷͕̯͒̈́̃͊͂̆̈͘s̵͇̼̟͉͇̯̦̲̿̄̈̈́̔͆̈́͗͛̕ ̷̝̣̩̫͖̯̳̮̩̼̐̄h̴̠͕̳̳̣̩̟̬̝͊̄̏́͌̅̌̏͝o̴̺͇̭͇̜͍̲̻̊͊̊̈́͛͑̂̋̄͠m̸͕͎͎̙̠̠̋̈́̇̀̇m̴̢̢̛̗͇̺̤̞̲̳͉̈̇̔̚ě̸̻͗͗̈́̿ŝ̶̲̰̬͂̂͜,̶͍̏̈́̽͊ ̷̧̗̓͗̋̈́̈́̄̽͝g̸̗̺͍̩͌̌̒̌͋̀̈é̸̩̬̭̭͂̒̀͗͠n̸̖̝͚͚͂̒͒͂̋̒͑̍̊͘s̴̡̧̳̖̩͇͖̮̦̋͗̎̈́̊ ̴̢̟͕̹̬̆̈́̀̉̔̕d̷̯̬̺͍̦́́̄̄̓̂͊ṷ̴̭̺̠̬̜̇̐ ̴͚̬̂͒͌̋̈́̏̽̚̕͠p̸̥̝̬̱̬̖̝͖̙͋̍̀͌̑̊̅̀͂͜e̶̱̞͓̦͇̠͓͛̇̓͑̇̔͌͂ͅu̵̯͗p̶̢̫̳̠͓̱̜̑̿͜l̴̻̩̝͔͚̯̣̂͂͘̕ͅe̸̻̦͍̩͎̘͉̹͍̲̋̽ ̴̭͇͖̼̦͚̱͋͛́̅̏̚͘è̴̖͔͎t̵̨͉͙̰̎̑̎̾̚͘͘ ̸̢͙̰͓̟̦̣̼̤̣̎̏͆͑̓̕͠͠g̸̘̰̰̫͖̰͖͗̈́͒̐̕r̸̤̩̖̥͈̦͆̈́̊́̍̈́͠͝͝a̸̧͇̼͈͎̣̔n̶̡̛̤̜̭̤̥̊͊͗͂͋̏̕͝d̴̩͚̳̀̈́͋̑́ͅṡ̸͉͉͚͙̃̎̾̋̀̃̕͜͝ ̴̲̗̫̣̟̊̀̎͊̉͊͛̓̂͐p̷͙̂̾é̶̢͖͔̲̟̫͖̩̼̌̕r̷̲̝͎̥͇̳̿́̉͆̓͝s̸̡̘͔͉̔̄̓̿̐̆͆̽͝ͅo̴̧̝͕̪̱̹̥͋͋̈́̄̈́̇̆̎͆͋n̸͇̮̼̎̿̃̐̈́̄͘̕ń̸̗̜̪̝͎̺̳͖̤̍̆̒́ą̷͈̯͚̲̥͉͖̈͊͆́͌͑̿g̴̢̩̦͓̣̼̮̭͂͑̑̕ę̴̤̣̦̰̗͆̃̐͐̎͘ͅs̸̨̛̼̬͓̣̬̮̭͓͚̊̾̀,̸͓̻̦̑͂͘ ̶̞͖̘̱̲͚̪̩̣͆̈͗̎̓͘r̵̼̥͔͆i̶̖̞̬͕̘̟̓͐̿̀͂͠c̷̗̄̉̃̿̅̏̆͘h̵̢͎̦̦͙͕̅͂̆͒̉͝ę̴̢̛̟̬͉͍̪́́̎̋̕s̴͚̠̺̆̇̑̈́̌ ̷̨̤̬͍͊̃̃e̷̛͉̜͂͑̉̿͛͜t̴̡̮̖̦̗̗͎̼̯͋͒͊̑̉̓ ̶̛͙͋̊̎́p̶̛̩̠̯̬͉͒̾̾̉̑̇͐̓a̸̦͍̘͈̯͍̥̼͗̈̓ü̴̻͓̙̦̤͚̂͛͜v̴̘̩͑̏͂̓͐̅͐̓̀͒r̸̛͕̙̻͕͖̘̟̲̃̐ḙ̵̣̈́̈̏͐s̷̥̜̈́͑̅̽̓̊̏͗̈́,̵̙̼̊̈̀͌͂̓͆̒̕͠ ̷̻͖̼̥̜̏̑̐̂̀̈͗͝h̶̖̲͖̳̱͇̠̏̈́o̶̧͚̯̰͉̝͍̭̪̓̓̉̋̅́͘͝m̵̙̪͔̥̬͈͕̽̂͆͊͆͐m̴̢̜͔̰̥̥͚̾̄̓͊͛̒͐̚͜ë̵̢̢̡̥̬̦͍̹̼́̌̎̂ͅş̴͇̖̣̣͈̩̽͒̆͋͂͝ͅ ̸̳̯̯͓̳̻͙̤̱̒͗̌̓̐̈́́ļ̶͖̰̣̬͌̀̍͂̅̈́̅̈i̸͙̗͒͜͜ḅ̷̖͓͚̦͇͆͑̋̀͊͂͋͑͘͝r̷͕̻̳̬̬̖̰̀̈́̾̉̇͑̃̈́͘͜͝ͅe̵̯̘͔̹͖̓̓̊̃͠s̶̨͉̬̒̔̆̓̄̇̓̆ ̶͙̾̈́̾̈́͐̓͋͠é̵̗͂̎̈́̽͘t̶̨̆̿̈͐̎̆̊͝ ̴̢̢̛̞̟̀̈́͆̕ė̶͔͎͐͆̍͝ͅs̶̳͖͔̼̦̿̎̕͝ͅĉ̸̗̞̀̈́̀͂̔ͅľ̶͎ȧ̸̯̞͍̝̬͖̳ͅv̷͇̳́̑̾ḗ̴̛̬̈́͝s̴̪̝̹͓̩̽͜,̶͎̠͔̪̮̽̈́̍̆̒ ̶̯̹̺̾̂́̽͑͘̕ḁ̸̀͆̓́̇̃̇ ̴̝͐͛̊͛̅͊̇̉͗͠s̵̡̝̥͇͚͉̼̥̔̌͌͌̾̿́͒͠é̵͉͕̃̽̚͝͝ ̵̛̻̝̎̏̓̎̐̂̕͝f̸̨̛͈̤̯̫̮̤̫͕̌̉́̉͛͘͘ͅå̷͓̯̹̻ĭ̷̛̝̥̽̓͑͗͋̕͝r̶̢̛͇̘̱̹͕̦͉͒̑̒̾̂͒̈͛͂͜ē̷͚͇̰̲̅̊̈ ̵̧̣̪͖̥̖͐̾̋̈̓̒̃̈́͜m̷̨̼͍͓͔̄̄͘̕͝͠ȧ̷̢̛̼̦̠̖̱͚̣̃̄̽̂͠r̶͖̣͔͂͂̌̾͆̄̈́̾͘q̵͉͓͈̖̟̥̀̈́͒̿͑́̓ü̴̡̥̝̜̻̔̏̔̓̀͆̕͝e̶̡̡͔̜͔̙͚̲̹̋̓͗͂̋̊̕r̴̪̥͍̙̗͙͓̯̃͋͝ ̸̳͇̫̫̻̮̲͓̀̂̉͒͑ͅd̷̥̐̇͋̄͋͂̚’̷͍̦̳͙͔̈́̈́̈u̴͚̤͖̝̼͉͐̓̆̓̆͗͛̅n̸̺͊̎̐͒̾̓̿̉͝ͅ ̸̞̦̲̰͙͎̾́̒s̷̘̲̥̮͈̫̭̦̽ǐ̶̡̧͎͖̼͍̭̜ͅg̴̨̳̝̗͕̯̹̰͂͌͌̃̈́̚n̷͇͂̑͂̈́̏̈̓̊͘ẻ̸̥̙̞̭͎̯͎͑̃̓ ̷̢̥͕̰͚̤͛̑̚ş̴̛̫̤̣̆̓͊̏͆́u̶̥̭͓̯͇͍͋̈́̌̇̂̋́r̴̛̖̣̭͐͛̈̋̌̎͑̒ ̴̨͈͕̟̲̞̻̣̩̊̀͆̈́̒͗́̕͜l̸̢̢̞̙͈̪̮̯̿̋͊̃ả̵̦̭͓͍̩̲̲̫͘ ̴̝͇̊̎͋̄m̷̖̠̥̆̑̒̅͂̆̊͠a̷̗͇̦̳̱̗̅̽̊͘i̷̢̞̣̥̓̀͛̀̉̄̑͐͝ń̵̛͍̹͈̯͖̫̞͜ ̶̝̠͎͎̥̲͕̈́͂̏̇̄d̸͔̮̘̤͙͛͂͝r̴͈͈̈̈́͋̌̋̎̈́ơ̵̮͉̯̤̖̝̩̜̐̅̊̀̃̈́̔i̴͕̍̽̓t̸̢̟̗͂̒e̴̬̳͕͈̮̯͈̹̓͂͒͐̿̚ ̵̹̗͈͆̏͗̊͜͝ỏ̵̡͇̗͔̖̱̂̅̀ú̴̙̄͐́̍͝ ̸͖̼̫̠̀s̴̨̥̺̮̪̓̈͌̚u̵̡͕͔͙̟͆͘͠r̵̡͔̻̫̫̮̹̙̃̒͘ ̴̡̟̟͕̻̠̟̂͗̇͜͝l̴̦͎̑̾̀̒͊͐ͅë̶͇͙̦̠̈̿̍̕ ̷̡̛̘̘̰̯͓̱̅̽͑̆̆̚͝f̵̡̜͚͔̹͇̱̮͓̃͑̇̚r̶͚̫̬͗ͅo̴͔̣̳̱̻̟͗̈́̈́̌̒̓͐͝ñ̵̨̜̝̯̰͔̙t̷̥͙̩́͊.̴̞̒͌͑̃̀̇ ̵̡̛̙̲̙͎̗̔̐̒̒̎̒̐̿͝1̵̨̡̛͈̫̩̹͊̎̿͝7̴̼̦͍̻̤͈̥̔̈͋͌̚͘͘ ̸̢̯̭͓͋̂̊͝E̸̹̻̒͘t̵̢̠͚̺̹̱̗̼̗̻̒̈̀̈́̓͘͘ ̷̢̢̯̠͎̤͕͂̋̍̏̆͛p̵̧̢͚͎̙̱̜̣͎̼̀̋̊̈́̚͘e̶̫͇̞͎̻͕͊͠ŕ̷͚̠̥̙̄́͂͆̏͜s̶̼̘͍̜̈́̐̈́̆̓̈́͠o̴̧̝̖͓̭͎̒̅̄̓̇̊̑̆͠͝ͅn̸͚̯͎̻̹̤̱͑̇͌̂̋̎̔͝ǹ̶̨͔͕̼̗̝̞̭̀̑e̸̡̛̜̲̐̿̅̑́ ̵͕̣̰̠̘͖̺͕̫̄͜n̶͚̊̌͝è̵̡̳̝̘̖̩ ̶͕̼͓̺͎͖̥̻̣̜͋͑̎̉͛̍͋́̿͝p̷̱͓̲͉͕̱̝͈̻̒ǫ̶̼̦͓̇͑̂͛̍͐̚u̵̠͈̩̗͚͉͉͉͑̃̃̈́́̓͗́̃͛v̶̫̓̏̊̆̓͘̕̚a̷̗̯̰̖̥̳͔̫̔͐̐i̴̧̡̘̬̠̣̺͆̃t̷̛̪͎̥̩͂̿̈́̅̃͐́̋ ̴̝͈̍͛̑̿̌͐̾͝͝a̷͔͒̿̅̓̑̀͛̃͌͘c̸̨̯̰̱̤͛̐ͅh̷͕̎͒̆̈́̅͐͛̈́̔̚e̴̞̥͍̱͗̐ţ̴̢̺̩̫̉̂͋̊̇̿͒͊̕ȩ̸̛̛̝̹̖̬̩̣̜͉̐͐̒̊̀͆͗͝ȓ̷̯̰̕͘ ̸̧͖̙̰͕̟̽͊̈́̈́̊͗́̓̑ơ̸̞̋̊̉̀̐u̷͈̪̭̯͚̙͈͖͗̽̆̑͒̑̑͆͘͜ͅ ̵̛̞̗͎͈̭̪̬̒̇͛̑v̴̨̢̨̡̘͙̙̪̘̍͛̈́͛̑͆̆̃́͜͝ȩ̸͓͉̻͙̀n̴̨͉̺͕͇̻͈̣̋͛̇̆̉́̓̌͝ͅd̷̡̘͍͎̘̿̏̽͌͂͝ŕ̴̘͔͈̘̙͕̌͋e̸̼̊́͑͒̉̇͝ ̴̙̣͖̬̱̟̖̪̫̅͛̾̔͝ş̷͉̫̗͈̫̃͠a̷̢̨̡̬͕̦̬̝͖̮͑̕n̷̰̭̘̥͙̞̼͎̽͆̂̄͜s̴͙̝͖͈̦̦̘̠̯̾͋́͂̾͜ ̸̢͍̩̬͍̞̤̩͉̼͊̓̾͆͝p̴̛̛̻̞͇̟͚͙͙̓̑͋̇̍͜ͅo̴̖͈̩̮͉̜͝r̶͖͉͖͖̠̍̌̀̍͛̓̚̕͜ţ̸̭̯͔̞̯͕͕͠ę̷̛͕̫̣͙̏̀͊͋̍͐͌̇r̸̡̺̆͌̀͋̿̕͝ ̴̡̠͚̰̺̀̔́̋̀̑͘͠c̷̢̨̖̱͚̔̿̅̒͗̐̇͛͘͘e̸̞̞̙̽͑̊̈̂̌́͝ ̶̛̭̙̖̬̱̗̗̆̀̿͋͌̀̾͊̌ͅs̶̨̢̫̱̤̖̲̻̩͌͑͆͌̕i̸̧̫̞̠̼͎͚̳̥͑͆̄͂̆̓̍̋͐g̴̢̛̟̯̭̬̦̜̖͆͒̕ͅn̷̩̘̪̩̞͍͚͙͎̳̏̈́̉͊̇̅͛̊e̴̯̦̘͛̽̈̎̂̈́̚ ̶̼̑̊:̷̗͙̺̹͙̫̰͓̓̒̈̍͌͝ ̷̢̦͔͓̳̈́́̽̽͛̓̃̽͘͝s̶̮̱̔́̒̈̓̈́͑̒ó̴̧̩̼̝̈́̏̑̊̔̿̀̏ị̶͇̳̯̦͇͎̥̲́̂͑̔̃͊̒̌̕̕ͅt̶̟͔̮̘͓̾͛̇̽͐̋̄̐ ̵̢̘̟̻͍͓̯͇͑͂͐̎͗͆̃͐l̴͙͖͉̇͒͛̏̓͘͝ē̴̛̹̫̘͙̙̬̱̦͓͛̒͐̄̎ ̶̢͙̳̟̯̠̺̅̋̀͊̒͘̚ņ̵̘̭̝͇̈́̒̿̐͛̀͐̕ỡ̸̧̖̹̤̳̲̱͉͋̃m̸̘͍͉̎̐̈́ ̸̩͇̦̯̤̞͇͇͍̌̒̈́̉̆͂̓̎ͅd̵̛̗̣̖͈̞̊̋͌̍̅ẻ̶͈̄̀̈́̊̽̇͝ ̵̯̪͓̉̋͛̅͛͒̍̾̕͝l̷̢̠͚͔̰̻̘͓̏̈͜a̶̘̜̖̰̿̈́͌̒͌̓́̚͠ ̵̧̼͔͍̼̪̈́͌b̶͖̫͓͝ê̴̯͙͓̙̽̐͘t̷̨̛͇̻̻͍̤̝͙̥̬́̄̂̅͛̐͑͘͘e̶̦͛̀̓̔̚,̶̨̮̹͎̤͙̠̳̹̗̌̈́̍̋̈́̍͐̌̐͠ ̷̢͈̼̜̋͑͆̄̈̇s̴͜͠õ̸̱͚̜̦̯͎̌̀͋̚ȉ̷̛̲͑̐̅̓̅̋͜t̸̡͉̪͈̼̫̫͓͖̮̅̇̀͂͆̌̅ ̵̡̞̳̼̣̤̜͍́̉̌͑͝l̷̹̮͚̞͎̦̝͔̅̀ͅe̷̟̬̩̙̊̔ ̴͙͉̫̮̠̦͚̊̍̅̽̈́͆̈́̃̚͠n̴̺̥͒ọ̷͓̱̉̚m̷̗͉̗̖̟̖̾b̵̙̰̰͕̹̹̫̜͋̈́̀̀̔r̷̛͓̭̂̀̉̓͌̎̑̎͝ę̸̢͓̺̺͈̼̑̕ ̵̡̧̘̞̺̯̰̗̤̆̓̎͋̈́͒̿c̴̢̨̩̹̣̱̲͉͚̃̂̀o̷̠̎̎͒̒͋̚͝ȑ̷̩̹̌͌̆́̇̎̀̚͝ŗ̷̣̹̗̺̗̲̓̈́̐̕͜e̵̻͗͒̊̋͆̾͠ś̶̡̠̰͚̙͕͗p̵̡̛̽͝͝ó̴̢̢̭̬͈͇̗͐̈́̔͘n̷̛̼̓̄̍͋͋̓͝ḓ̴̣̮̪̹̲͙̣͛̓̌̀a̸̻̯̬͇̭̳͑́́̀̕͝n̵̛͚̳̖͂͊̅̑͑̇͜͝͠t̷͓͚͔̉̇͆̉͗͠ ̷̧̡̛͎̙̞͎̅͊̌̚ͅà̷͙̦̤̣̘̰̣̀̀̃͗ ̴̧̫̩̼͚͇͍̺͈́́̐̚͘s̵̛̛͕̟͇͕͉͔̣͖̓̃͛͌o̴͎̳̼̝̎̓́̍̈́̾͘n̵̺̆̌̑͑̽̓̌̈́͂̕ ̶̡͍͉̏͒͑͌̌̽̓̌͒̒ṉ̴͌͗̋͐͗̚͝o̵̡̫̥̠͍͓̭̖̾̏͌̅̒̅̈́̅͘͝ͅm̷̬̮̺̽͋̋͆͝.̴̰̜͔̓̿̔ ̴̛͇̥̈́̊̓̅̈̔͐͘1̷̛̱8̸͉̭͚̄̏ ̷̡̛̞͉̙̫͔̭̋͗C̵̫͒̀͛͐̍̏͌'̴̛͖̙͈̭̋ë̸̛̲̱͓̼̩̤́̈́͗̆́̍̿̓͂ͅs̷͖̹̞̦͎̱̙̠̈́̑̈́͐̔̃̋̆̀̉ṯ̸̠̩̬̎ ̷̡̪̳̥͉̠̤̰̫͔̀̉̑ĭ̴̡̫̱̈́c̴̫͍̹͇̓̆̅̍͂͗̎i̶̡͉̜̤͓̠͔̒͛̽̿̀̄͜͜ ̶̮̩̟̞̠͍͍̈́͛̈ͅq̶͚̐u̶̡̢̢̻̫͖̱̥͑̃̄̈́͂͑͗͗͜͠'̷͖̞̀͌̐͐͋̈́ǐ̶͕̻̗̞͊̑͂́l̶̤̝̪͎͉̲̦̈́̂̍́ ̶͍̭̥̿͊͌̆͂̿̉̕f̷̡̧̝̦̖͇̤̙͍͐̅̂͊͘a̴̦͙̖̦͉̩̍͗͛̊̏̐͝u̶͓͙̪͓͎̪̮̭͊̓͆̊͠ͅt̴̫̣̒ ̸̦̟̼̦̤͊d̸̛̤͉̞̮͙̘̥̐̉̂̀́̓̀͜͠ė̷̝̥̮̞͖̝͕̌̈́͠ ̵̡͎̬̰̃̈̂ļ̸̬̺͕̗͛̍ä̴͍̟̹́̆ ̸̺̞̻̠̊̀̍͆͐́̇̎̚s̷̛͚̘̗̓̀͊̑a̶͕̭͈̠̣̻͑̃̍ğ̴̳̬̱͜ͅe̵̙͐̋͑͌͑s̴̨̹̞̰͍͎̩̉̀ͅs̴̝͈̀̉͋̆̆̋̕e̴͓̥̼̫̖̮̺̯͋̑̈́͐̏͝.̶͉̙̯͆̋́ ̵̨̩̲̪̟̲̙̼͕̯́͒͗̂̓̾̅Q̷̞̘̘̥̅̀͑̚͝ṵ̶̧͖̣̩͈̐̾̍̀̋̈͝ͅę̴̧̛̱̹̹̝͙̺̈̀̇͛͛̂͑̌͜͠ͅ ̷̛̹̼̙̻͔̖̀̉͆͛̉ç̷͍̪̝̾͘é̵̲̯͈̥̱̣̥͚̦͛͂̿̈͐͗̆͋͋l̴̰̯̍͒̏͜u̸̢͉̠̿͌̉͒ḯ̵̘̬͙̟̹͑͠ͅ ̸̧͙͙͔͍̯̪̲̾̓̒͛͆q̴̛͔̈́u̸̠̯̞͍̞͕̒͆̇i̵̺͈̪͖̠̱̹͈̤͐̓̐́̾̔͌͝͝ ̴̢̡̫̣̙͇͕͊̐̓̈́ḁ̵̠̳̼̤͈̜̺̊́̆́͑́̈͘ ̷̱̰̰͇̪͚̥̭͂̂̈̓͛̾̎͜͝͠d̵̨̛̜͉̣̝̝̥̆͘ȩ̶̨̱͙̦͙̔̔̃ ̸͇̖͒͒̄̉̇͠ļ̷̟̠̗̲̝̩̜̲͌̈͝'̶̡̗͚̱̳͗̀̀̔͗̏͂̉́̀ḭ̶̛̤̌͘n̸̡̜͎͙͕̺͒͋t̷̨̬̥̼̼̞̪̜͓̑́̎̋̚͜ę̶̩̲̟̘̥̐̆̋̐l̴̳̳̖̏̍̈́ĺ̸̢̜̉͠ị̶̲̀̆̔̉́̈́̍̇̚g̸̘̻̤̣͚̉̃ͅe̸̗͖̲͊̒̏̑͋̿̋̎͛̋͜n̶̺̱͖͔̣̠̭͆̃̍͂̔c̴̨͚̟͍̈́̓̚ê̷̬͓̇͊͗ ̵̖̳̣͚̊̈́̏͜͝͠d̶͖̠̭̼͔͚̹̱͙̲̐̆̑̾͊̔̓̏́͘ȩ̷̧̜̻̞͎͈́̔̓̃͌̓̀̂͂̑͝c̸̣̪͍͕̯̯̜̎̔́̊͑͜͝ͅḧ̴̨̦̥͎͇̦͎͚͉͎̔̔͑͘̕̚̕ị̵̫̲̆̉͗f̴̨̧̤͇̙̣͉͒̿ͅf̶̳̻͕̰͖̺̯̑́͐̂͜ŗ̴͉͈͚̞̟͖̈̃͒͆͆͗̽̂̐͝e̵̡̻̜̋̄ ̵̳͚̞̯͋̔̅̎ļ̷̠͔̦̠̳͕͔͚̏̈̂̀̋̓͐͝͠e̸̡͇͕̮̗̾̒͋̎̿̃͌̑͘͝ ̷̛̞͓͔̬̝̖͆͜n̴̡̛̪̩̻͇͖͓͎̔͒̆̒̇̿̋̈̒ͅo̸̩͚̘͇̼̣̯̗̠̔̐̎̆m̴̰̟͈̪̬̩̠̼̎̂͊̐̀̈́͊̿͜b̵̝̯̪̥̈́̌͠r̶̨̨̡̬͔̩͓̳͙̠̓͗̂ę̵͇̱̱̥̯͉̭͛̀͐̎͌̆̒̈͝͝ ̶̘̪̄̽̉̇̈̈́̓́̓͝d̶̡̡͍̲̭̪̩̝̀̈̌̍̈́̀͂͘̚e̶̩̳̟̩͈̤̋̒ ̷̡̢͉͈̲͙̮̬̒̐́l̸̡̲̮͓͑͊̀̿͑͋̉́͠͝a̴̟̟̗͆͊̀̓̕͜ ̴̗̫̜̻̫̪̔̌͛̏b̴̲̂ế̷͚͖t̷̲̉͗́̀͗̿̑e̷͕̝̩̤͇͐̾̚͝.̸̧̦̼̱͚̠̎̿͂̊̇͋͐͠ͅ ̴̲̗̯͚̳͔̼̒͒̆̐C̷̡̢̛̥̩̠͎̣̆̑͋͒̈́͐̚͠͝ͅḙ̷̗̭̹̯͔̃ ̴̗̠̳̜̟͚̣͖̑͐͑̌̌̾͆͌͘n̶̢͉̞̭̲̟̙̝̭̆̀͊͑͊ͅó̷̰̰͓͉͉̇̈́́̿͜ͅṁ̶̛͕̘̖͚̃̃̑̋b̴̫̥̘̥̭͚̒́̍̽̚ͅr̴̢̡̻͚̲͇̠̦̊̃͗ė̵̝͚ ̶̢̜̭̲͙̹͈͙͂̉̓̀ͅr̸̛͓͚͛ę̵͍̮̦̟͚̊̋̓̊͝p̷̡̛͉̰͖͕̲̪̱̺̔͆̾̂͝ͅṟ̵͉̩̈̎̌̏̍é̷̫̻̿̊͑̆s̵̢̢̛̮̑̈́̈́̎̆͘̚ȩ̴̱͕͔̰̙̪͓͑̐͑̽̓̍̇̈̏̇ṉ̸̨̅̅̀̑̆̂̇̎̈́t̴͖̉͛̐̀̍͗͝͝ȩ̴̖̣̦̈́̃̊̋̒ ̸̖̺͈̤͈̇̀͘̕͜͝l̵̫̙̭͖͕̿̆̂̉́͆̾ͅȩ̷̟̳̲̟̗̝̺̽͐̑̆̈̃̿̉͠ ̵̳͓̥͖͙͋̿̓̍͘ñ̷̩̼̱̳̩͇̤̅̽͜ỏ̸̜̤̈́m̷̯̥̅̈́̀͌̈́̎ͅ ̵̛͔̗̈́̂̀̇̃̉d̴͕͎̰̘̥̓͆̂̈́̀͜'̵̣̝̊u̴̲̕n̴̛̮͎̤̗̈̅̄̈́̅̉͋̈́̀ ̸̯̬̼̱͚͕̩̦̓̅̅͒̈́̈̄h̷̢̬͉̱́̀̈̈́̾o̴̢̟͗̚͠m̶̞̫̭̦̤͇͕̄m̵̙̘̼͙͉̊̑͂͆̍͛ͅȇ̸̡̧̝͈̂̋͘͝͝[̸̨̣͊́̂͗̓̾̈́̀7̶̧̢͖̟̳͈̮̮̰̚ͅ]̶̢̧̱̙̺͎̲̬̝̾̄̔̌̾̇͝͝ͅ,̶͓̈́̀̿̕ ̵̛̱̝̱̻̤͛́̈́c̶̢̭͓̮͓̙̩͙͉͗͗̍͐̓̕'̵̱̺̼͉̩̇̓̃̂͋͜ê̵̹̖̯̻͖̼͎̙͚͎͗́̌̒̒̒s̴̪̭̭̩̅͌͂̔̽� ̴̖̳̮̰͜͝:̴̙̱̉͑̀͂̒̿̑̚̚ ̷̨̢͎̠͕͓̀͗̒͛͐s̸̞͕̪̻͈̅͆̂̇̆̾̽͗ì̸̘͚̎͆̈́̀x̴̨̙͇̤̊̆̽͑̈́̒ͅ ̵̡̮̹̞̜͇̥͈͎̐͊̉̉́̋̚ç̵̢̻̘̲͈̙̯̪̻̄ę̵̖͚̙̠͍̈̑̾͝n̶̜͊͜t̴̡̢͖̫͚̟̠͙̉̃̓̽ ̵̧͔̰̠̲̮͕̠͒̒̒̾̎͒̍͜͝ś̵̛͖̪͕͕̙͙̌́́̅̅o̶͍̳͙̼̻̤̔̃̀̏͒̕ͅḯ̷̧͚̿̃̚͘͝x̴̨̺̫͖͕̘̜͎̓̄͐͝a̶̡̙̋͑̀͋̀͆̂̇̕n̸̨͔̤̜͔̠̻̬̮̈̓̀̓̓ţ̸̛̰̬͉̦̰̿̂̌̈́̐͐̐e̴̡̺͓̲̼̓͂-̴̫͎͎̽̓ṡ̷̠͑͛̍̎̈́͘͝͠i̴̧̢̘̣͇̳̹̦͘͜͝x̸̡̡̮͍̝͉̬̦͔̱̀̀̏̉̈́͝[̸̤̔�]̴̨̐̈͐̓͌.̷̪̯͔̓̏͋̄ ̴͚͑̄̀͌̿͑͆͑̿͛͜�Ļ̵̤̞͔̜͈̝̓̂̾̀̌e̵̞̻̒̇̑͗̚͠ṡ̶̨̝̭͓̻̗̋̀͌̎͒̉̒͗͝ ̶̺̻̩̈̅̃̿̀̒͛̏̚̚͜v̵̖̔̓͆̈́̐̒̄̿̓͛è̶̗̭͋̈́̚͠r̸̡̫̹̘̼̞̺̩͙͕͆̎̀͋̈̆̓͝s̶̞̩̗̅͌ͅȩ̸̧̞̭̻̞̞̣̬̒̊̀̔̍͗͗ẗ̵̼̓̽̇̇̓̇͠s̶͙͖͍̬͎̄͆̈́̅͂̃ ̶͔̻̼̜͓̤̱͎̃͊̄d̵͎̂̑é̸̡͚̬͈̲̙̤̔͋̀̅ ̵͈̪̖͗̊̑͗̚͝ͅl̸̛̛̞͗̈̔̅̆͆͗'̷̧̢̝̟͕̗̲́́̚͠Ä̵̱͎̖̑̄͒͆͘͜͝p̷̡̛̦̘̪͎͇̤͎͖̄̎͋͌̆̒ỏ̵͉͉̮̣̞͖̳̳͕͓̊c̴̨̞̭̩͉͓͎͎̽̋̚ͅą̴̬͚̯̇̍̄̿͌̇͊̉̕l̸̨̞̘̫͚̀̈́͑̑̎ͅỹ̸̨̨̱̪̘̘̬̎̀̐̏̂͜p̵̖͔̰͈̺͓̥̏͂̂͛͜͝s̵̗͗̆̈́̍e̴͇͈̒̋͋̏̈͌͆͗̓͜ ̴͓̞͊̈́͒̉d̸̢͇̙̑͋͐͑͐̚ḙ̸̢̨̹̺̳͒̉̎̃̑͋̉͝ ̶̧̡̬̼͍̲̟̔̚͠J̴̧̧̛̲̼̦̳̯̏̓͂̆̒̃͊͝ͅẹ̴̠̗̠̹̯̝͇̲̀͑̏̄a̸͓̝̤̹̜̣̞͑͑͌̀̒͂̕͜ṋ̷̢̡̬͉̮̱̘̋͒̿̈́͘͘͜ ̵̱̩̟͖̮͙̼̍̔̅̽̋̓͐̚͠͝c̷̗̱̳̮̅̈́̇͗̔̋̊̎ǫ̵̟̠̲̼͉͔̺̪͗͛n̶̡̛͙͇̙͙c̴̫̺͖̮̫͔̪̤̆̍͆͜ͅe̵̘̪͌̌̃̂̔́̿́ȑ̶̡̨͕͈̣̥͚͔̈́ṅ̴̤͚̗̖̀̿̑̇̔̈̓͝͝â̷̬̼̺̐̄̓̎͛̈́̚͘͝n̶̮̽̄̂̓̆t̷̢͓̥͖̻̹̰͈͘ ̶̫̗̗̥̌̄̈́̐̊̑͝l̶̤͕̤̦̬̂̈́͊ả̵̢̳̻̜̹͓̖̞͙͋͆̑͗͋̕ ̷̠͘B̶̛̭͉̫̦̫͎̙͆̀̓̍̍̐̒̕̚ê̴̦̗͓̼͎̜͍̭̽̾̕t̶͚͕̟̟̼̹̦͎͋̽͘͜ȅ̶̯͙̼͍̙̟̋͜ ̶̛̭͕͌̀̓͂̇͛̏͝͝ͅͅe̴̜͉͉̲̪̓͂̓̇̎̉̏̄̿͝t̴͖̿̎͂̎̈́̔͘͝ ̸͕͉̅̍̍̕s̸̗̙̻̿ǫ̴͓͖̠̱͙̬̰̫͇̔̎̓̈̎̉̀̈́̈́̀n̸̨̝͔͕̉̉̏̎́̐̀̐̀͝ ̵̡̡͈͉͙̻̽̕ͅͅ«̵̛̼̹̩̦̰͋͆̐̌̄̏̀̀ͅ ̸͚͈̰̙̠̌̐͗͊̄̄̉͊̒̆ͅņ̸̼͕̮͎̻͊ͅͅo̶̙͈͔̘̩̝͚͍̪͋̊m̸̭̰̭̻̬̹̲̎̈́̂̃͘ͅb̴̦̪̭̺̍̄̇̽̓̀̕͠͠r̶̡͈͓͔̀́e̴̝̘͚̥̤͗͋̈́͂ ̵͍̼̲͔̺̃͗͌̌̆͛̇͒̇»̴̢̲͖͔̰̭̗̝̺̈ ̸̦̯̑́̈́͒͂̑̈́̚͝o̴̫̥͇̥̖̼͇͙̮̒̒͆ͅư̸̱̓̏͗̄͒ ̵͔̞̓͊̋̉s̷̩̘̼̱̘̆̓͑͐̏ǫ̵̺̱͍̜͉̯̀̍̈́̓̌͝͝n̵̢͚̙̰̜̭̲̼̍͜ ̶̢̰͈̱̤̱̝͒̍̈̽̓͑̓͠ͅ«̶̯̠̖̘̫͙̠̂̏͗͠ ̴̺͊̄̔̈́c̴̹͇͉̭͙̬̋ḣ̷̨̜̭͕̰̤̖̞͖̯i̶̧̡͓̫͈͕̩͎̽̄̒͐̕f̴̩͎͐͐͌̒̀f̸̡̡̛̜͚̮̹̥͆̅̓̏͐̂̈́͊r̵̠̬̤̰̪̀̃̋̓͂͜ḙ̶̟̫̘͎́ ̷̛̫̝͎̪̩̜̞̻͉̯̉͊͆̈́̓́́͊̋»̴̨̘̠̆̀̕[̷̯̪̌̾̈̊ͅ4̴̜̃̅͝]̴̡̛̲̺͍͊͐̎̌͋͜ͅ ̶̩̩̦̬̜̝̼͓̋͛̐̈́̓̒̚͝f̴̧̻̺̰̝̹̯͇͔̍̎̀̚í̷̡̢̞̞̭̪̪̾̏̏́̀̑̃ͅg̸̡͖͎̓̓ų̷͔̣͙̳̰̬̮̙̌́̔ͅŕ̷̠͕͉̾͂͛͆̕̕e̴̡͑͗͛̂ņ̵̛̖̞̔͋̐̾̅t̶̺̗͙͎̦̝̲̙͎̿͆͝ ̸̡̼̻̰̗̺̩̌̓͒͋̌̾̈́̆̚d̵̰̓̒͑́͌̏̅̚ạ̸͕͍̻̤͍̅͂̏͌͜͠͝ñ̴̗̲̖̀́͊̐̀̈̈͠s̴̟͙̹̩͔͉̲͊̂͐̓́́͆̇̈́̕ͅ ̸̙͖̭̞̣̹̹̽l̵̡̧̡͕͖̥̬̖̐͒͆͜ę̶̢͕̦̤̊̾̑͗͘͝͝ ̸̯͙͎̣̜͕̽̋͗̐̀̑̒ͅͅͅc̷̳͍̲͕̈́͑͂̈́̀͝h̶̠̑͠a̸̱̖͎̥̣͖͑̀ṕ̴͉̎̀͛ȋ̴̹͇͇̬̫̝̯͖t̷̜̪̺̙̻̮͕͎̂̍̊̓͘͜ŗ̵̛̮̲̟̌́̾̈̎̉̈́ẹ̸͎͍̹̽̾͑̂ ̵̧̱̝̯̳͇̱̥̝͝1̷̛͇͓̱̽̉̕3̵͎̤̍̕,̸̰͉̝͎̅͛͋̐̌̾ ̶̡͎̗̣̼̯̥̗̎̄͒͑̃̕͝ͅv̵͎̝̾̿̇͋̽͑ẻ̸̖̳̫̜͉̻͓͖͇͝r̷̲̘̖͈̤̀̌͆̈̄s̸͚͉̦̞͇̭̜͑̽̍̎e̶͎̺̗͇̔̐͊̋̆̃͛t̸͓̗̃͑̉́̃͑̅͘s̴͖̪͋͛ ̵̫͙̒́͊͌̏̾̈1̵̨̛̺̰̯̗͈̫̀͋̑̏́͂͘1̷̙̭̙̣͉̼̞̻́̑̈-̵͖̅̃͆̀̕͠1̶̡̗͉̖̹̲̯͗̈́͗̎͊̓̈́̎͝8̸̝͎̮̍́̆̒̈̚͘͠.̴̟̏̒͑̎ ̵̧̪̱̞̪̦͑̑̇L̵̦̮̖̍͌̂͒̈́̽͠ḙ̵̠̲̱̫͗̈̈́̈́͛̇́͘͝͝s̵̡̢̡̡̠̥̲̹̳̣̔̆͛ ̷̛͓͔͍̪̯͉̯̘̬̎̍̒͝v̷̲̱̩̞̎̍̔͂̍̇̀͝ͅę̷̰̯͉͙͍̫̰̺͊̈́̏ͅr̸̢̛̺̝͕͉̗͖̘͔̹͋̀̇͒̓̋ș̵̛̱́̆̅͗͗̂͐͌͝ͅe̸̢̨̮̱̪̰͎̩̠̓́̔̏̀̈́ͅṫ̵̯s̴̺̞̱̩͌̔̆̅͊̍̎̅͜͝͠ ̵̡̧͔̫̰̰͙̘͚̟͌̄͂͂͐́͐͋1̸̡̟̭̭̰̜̞̹̑̏̊̉̋̚ͅ7̷͖̩͕̦̰̞̜̠̪͋́̃ ̷̹̺̉̋̈̾̔̊e̶̯͉̗͙͛̓͜ṭ̶͇̻̱͍͉̲͗̈́̉͌̈́̀͜͝ ̴̤̤̱͍̜̗̞̰̲̋̈́̕͜1̶̪͇̱͍̥̘̱̥̄̐͆͋́̆8̸͖̥͉̠̟̭̟̱͌̌̌̇̽͠,̸̧̪̞̠̽̀̈́̈́̒̽̈́ ̴͇̝͎̯̈́̓̊ę̵̛̞͚̬͕̮̎̊́͆̽̆͂̎͠ñ̶͕͌͝ ̴̼͇̥̣͚̗̰̥͚̎̈́́g̴͙͉̔̇͂̄̃̍͆̔r̷͔̜̖̐̔͗͗͗̒̓͑ḛ̵͇̬̺̄̑̃̉̔͋c̶̡̪͕̟̲͓͎͎̉̓̑̀̉̃̐̅̂ ̵̨̖̹̫̟̳̌a̶̠͙͒ͅͅn̸̘͙͓̲̗͇̺͒̐͗̂͛́̈́̔͜͠c̵̼̽̈́̀͝î̶̖̬̜̹̫̳͊̔ḛ̵͉̊̔̕ǹ̶̡̯̰̼̳͈́̋́̿͌̒̓̀,̷̢̬͙̮͚͑̐͒̏ͅ ̷̧̮̟͇̰͖̩͇̝̓s̸̨̛̗̘̱͋̈́̃̈̅̍̔ò̶̡̞̭̜͙̺̱͍͉̏͆́͛́̚ṇ̷̛̟̮̻͙̑̃̆̈́̋̈́͊̿̒ͅẗ̶̡͍̝̫̮͔̦̫̬́̈̋̆̄̈́̒̕̕ͅ ̶̢̬͕̳̗͕̞̼̣͗̀͂͌̓̇̀̏̚l̸̟͈̪͕͂̃̎̈́̇́̎ͅe̷̟̺̘͍̓̌̏̌̊̿̔͘͝s̸̨̡̛͎̱͉̠͙̩̹̱͒͒̓̍́ ̸̢̢̯̜̹͉̲̱̈́s̴̠̦̯͙̩̞̝̓͋̾́͗̈́̑̑͑͊u̵͇͊̓͒̍̇̔̉͒͘͜͝i̷̬̞̼̳̫̻͕̾́͑͋̿̃͗̕͜͠v̷̡͉̖̱̰̙̻͙̽̿̒̇̓̀̚ą̶̰͈̘̜͖̾ͅń̴̨̼͉̖̦̺̇̉̋̌t̶͇̭̀͂̾̏̒͌s̴̡̼͈̘̫͖̗̀̃̏ ̵̧̘͕̟̈́̏̀͂̓́̒̂͜͝:̵̢̼̮͒̿́̈́̉͆͘͠͠
« 17 καὶ ἵνα μή τις δύνηται ἀγοράσαι ἢ πωλῆσαι εἰ μὴ ὁ ἔχων τὸ χάραγμα, τὸ ὄνομα τοῦ θηρίου ἢ τὸν ἀριθμὸν τοῦ ὀνόματος αὐτοῦ. 18 ὧδε ἡ σοφία ἐστίν· ὁ ἔχων νοῦν ψηφισάτω τὸν ἀριθμὸν τοῦ θηρίου, ἀριθμὸς γὰρ ἀνθρώπου ἐστίν· καὶ ὁ ἀριθμὸς αὐτοῦ ἑξακόσιοι ἑξήκοντα ἕξ[5]. »"
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

