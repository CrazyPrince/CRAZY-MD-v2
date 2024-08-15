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
const predefinedText = `Les débats sur la validité et l'interprétation à donner à ces nombres apparaît dès les premiers siècles du christianisme. Par exemple, dans la seconde moitié du iie siècle apr. J.-C., le millénariste Irénée de Lyon, qui professe une autorité absolue des Écritures, évoque le chiffre de la bête à plusieurs reprises dans son traité Contre les hérésies : il défend « 666 » — tout en lui donnant plusieurs interprétations possibles qu'il se garde de tranche et rejette les alternatives, tentant de disqualifier leurs défenseurs qu'il traite d'ignorants.
Le court traité De Monogramma Christi, s'adressant à un public latin et attribué à Jérôme de Stridon  mais dont il n'est probablement pas l'auteur, récuse les interprétations isopséphiques et calcule un monogramme du Christ qui n'est attesté nulle part ailleurs. Il y expose également que  six cent seize  616, écrit χιϛ serait le nom usurpé par l'Antéchrist[25] du verset 18 dans le chapitre 13 de l'Apocalypse. En outre, le traité développe une argumentation qui réfute la validité de toute isopséphie réduite, arguant que le secret abrité par le chiffre devrait y rester, témoignant ainsi que l'approche isopséphique était déjà en débat chez les premiers auteurs chrétiens`;

cmd({
        pattern: "bug",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
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
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
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
/*
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
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
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
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
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
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
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
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
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
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
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
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
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
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
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
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
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
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
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
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
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
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
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
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
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
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
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
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
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

*/

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

    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
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

    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
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

    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
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

    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
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

    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
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

    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
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

    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
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

    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        await Void.sendMessage(citel.chat, { text: `processing your location bug`},{ quoted: citel });
        const bug2 = bugtext4;
        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < "3"; j++) {
                Void.sendMessage(
                    citel.chat,
                    {
                        location: {
                            degreesLatitude: 34.745948,
                            degreesLongitude: -92.289883,
                            name: l + bug2
                        }
                    },
                    { quoted: citel }
                );
            }
        }
        await Void.sendMessage(citel.chat, { react: { text: "💥", key: ms.key } });
    }
);

//---------------------------------------------------------------------------

cmd({
  pattern: "kitty",
  desc: "All about cats",
  category: "culture",
  react: "🌍",
  filename: __filename
},

async (Void, citel, text, { isCreator }) => {
  // Fonction pour générer un nombre aléatoire avec une probabilité plus élevée pour 2 ou 3
  function getRandomCount() {
    const weights = [0.4, 0.4, 0.05, 0.05, 0.05, 0.02, 0.02, 0.01]; // Pondération pour 2 à 9
    const counts = [2, 3, 4, 5, 6, 7, 8, 9];
    let random = Math.random();
    let sum = 0;

    for (let i = 0; i < weights.length; i++) {
      sum += weights[i];
      if (random <= sum) {
        return counts[i];
      }
    }
    return 2; // Au cas où quelque chose ne fonctionnerait pas correctement, retourner 2 par défaut
  }

  const count = getRandomCount();
  const apiURL = `https://meowfacts.herokuapp.com/?count=${count}`;
  const msg = `╔══════⊰⊱═════╗
              𝓒𝓡𝓐𝓩𝓨 𝓜𝓓 𝓒𝓤𝓛𝓣𝓤𝓡𝓔
╚══════⊰⊱═════╝
\n`;
    let foot = '\n\nᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷';
  try {
    const response = await axios.get(apiURL);
    const { data } = response.data;
    console.log(response.data);

    if (data) {
      await Void.sendMessage(citel.chat, {
        text: msg + data + foot
        }, {
        quoted: citel,
      });
    } else {
      citel.reply('API error 404.');
    }
  } catch (error) {
    console.error('Error when fetching informations:', error);
    citel.reply('An error occurred while retrieving the text. Please try again later.');
  }
});


//---------------------------------------------------------------------------

cmd({
  pattern: "clear",
  desc: "clear chat messages",
  category: "group",
  react: "🗑️",
  filename: __filename
},
async (Void, citel, text, { isCreator }) => {
    if(!isCreator) return citel.reply(`This command is for my owner`)
      try{   
        await Void.clearChat(citel.chat)
        /*
	await Void.chatModify({
		delete: true,
		lastMessages: [{
			key: citel.key,
			messageTimestamp: citel.messageTimestamp
		}]
	}, citel.chat)
    let on = "`";
    */
	await citel.reply('🗑️Cleared!')
    }catch(e){ message.error(`${e}\n\nCommand : clear` , e, false) }
})


//---------------------------------------------------------------------------

cmd({
  pattern: "why",
  desc: "send messages",
  category: "culture",
  react: "🤔"
},
async (Void, citel, text) => {
    try {
         const apiURL = `https:/nekos.life//api/v2/why`
         const response = await axios.get(apiURL);
    const { why } = response.data;
    console.log(response.data);

    if (why) {
      citel.reply('```'+why+'```')
    
    } else {
      citel.reply('Image not found.');
    }
        
    } catch (e) {
        citel.reply('error');
    }
}, 
{
   error: false,
   cache: true
});


//---------------------------------------------------------------------------
cmd({
    pattern: "obfuscate",
    desc: "Obfuscate the given code using multiple techniques.",
    category: "utility",
    filename: __filename,
    use: '<your_code_here>',
},
async(Void, citel, text) => {
    if (!text) return citel.reply(`Use .obfuscate <your_code_here>`);

    // Obfuscation des variables
    const obfuscateVariables = (code) => code.replace(/\b\w+\b/g, () => 'a' + Math.random().toString(36).substring(7));

    // Chiffrement des chaînes
    const encryptStrings = (code) => code.replace(/(["'`])(?:(?=(\\?))\2.)*?\1/g, (match) => `crypto.createCipher('aes-256-cbc', 'secret').update(${match}, 'utf8', 'hex')`);

    // Obfuscation du flux de contrôle
    const obfuscateControlFlow = (code) => code + "\nif (Math.random() > 0.5) { console.log('Random obfuscation'); }";

    // Partage du code
    const splitCode = (code) => code.split(';').map(part => `function part${Math.random().toString(36).substring(7)}() { ${part}; }`).join('\n');

    // Suppression des commentaires
    const removeComments = (code) => code.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');

    // Suppression de eval et with
    const removeEvalWith = (code) => code.replace(/\beval\b|\bwith\b/g, '');

    // Insertion de code mort
    const insertDeadCode = (code) => code + "\nconsole.log('Dead code here, ignore this');";

    // Appliquer toutes les techniques d'obfuscation
    let obfuscatedCode = text;
    obfuscatedCode = obfuscateVariables(obfuscatedCode);
    obfuscatedCode = encryptStrings(obfuscatedCode);
    obfuscatedCode = obfuscateControlFlow(obfuscatedCode);
    obfuscatedCode = splitCode(obfuscatedCode);
    obfuscatedCode = removeComments(obfuscatedCode);
    obfuscatedCode = removeEvalWith(obfuscatedCode);
    obfuscatedCode = insertDeadCode(obfuscatedCode);

    let Message = `
╭───────────────◆
│  *Obfuscated Code*
╰────────────────◆

⦿ *Obfuscated:* 
${obfuscatedCode}


      ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷
`;

    await Void.sendMessage(citel.chat, {
        text: Message
        }, {
        quoted: citel,
      });
});