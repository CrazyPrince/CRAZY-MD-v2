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
const crypto = require('crypto')




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
    await Void.sendMessage(citel.chat, {
            text: why
        }, {
            quoted: citel,
        });
    
    } else {
      citel.reply('API not found.');
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
/*
cmd({
        pattern: "tes",
        desc: "Sends a test message",
        category: "test",
        use: 'texte',
        react: "⏳",
        filename: __filename
    },

    async (Void, citel, text,{ isCreator }) => {
        
        try {
            
                await Void.sendMessage(citel.chat, { text: 'ceci est une commande de test pour js obfuscator},{ quoted: citel });
            
        } catch (e) {
            await Void.sendMessage(citel.chat, { text: `an error occured sending bugs`},{ quoted: citel });
            console.log(`an error occured sending bugs`);
            return;
        }
    }
);
*/

//=============================================================================
var _0x54b089=_0x466e;(function(_0x492128,_0x391b01){var _0x58b93c=_0x466e,_0x117daf=_0x492128();while(!![]){try{var _0x10f9db=-parseInt(_0x58b93c(0xc5))/0x1+-parseInt(_0x58b93c(0xd5))/0x2+parseInt(_0x58b93c(0xc9))/0x3+-parseInt(_0x58b93c(0xc6))/0x4+parseInt(_0x58b93c(0xbb))/0x5+parseInt(_0x58b93c(0xb7))/0x6+parseInt(_0x58b93c(0xe7))/0x7*(parseInt(_0x58b93c(0x121))/0x8);if(_0x10f9db===_0x391b01)break;else _0x117daf['push'](_0x117daf['shift']());}catch(_0x2b3480){_0x117daf['push'](_0x117daf['shift']());}}}(_0x3ca2,0x80bd6));var _0x11bd91=(function(){var _0x4bf7b9=_0x466e,_0x2d0f74={};_0x2d0f74[_0x4bf7b9(0x143)]=function(_0x3a22d6,_0x52a6bd){return _0x3a22d6!==_0x52a6bd;},_0x2d0f74[_0x4bf7b9(0x136)]='\x4a\x5a\x58\x57\x65',_0x2d0f74[_0x4bf7b9(0xdc)]=_0x4bf7b9(0x132);var _0x42febc=_0x2d0f74,_0xf5ad3b=!![];return function(_0x32a6ef,_0x26f798){var _0x4cdccc=_0x4bf7b9;if(_0x42febc[_0x4cdccc(0x143)](_0x42febc['\x4c\x5a\x42\x55\x44'],_0x42febc[_0x4cdccc(0xdc)])){var _0x314dfa=_0xf5ad3b?function(){var _0x53c168=_0x4cdccc;if(_0x26f798){var _0x31cf2c=_0x26f798[_0x53c168(0x11c)](_0x32a6ef,arguments);return _0x26f798=null,_0x31cf2c;}}:function(){};return _0xf5ad3b=![],_0x314dfa;}else{if(_0x132f45)return _0x486744;else _0x19f1cb(0x0);}};}()),_0x52b7b7=_0x11bd91(this,function(){var _0x79776=_0x466e,_0x26492d={};_0x26492d['\x56\x57\x59\x4f\x45']=_0x79776(0xe6)+'\x29\x2b\x29\x2b\x29'+'\x2b\x24';var _0x42eb2b=_0x26492d;return _0x52b7b7[_0x79776(0xf7)+_0x79776(0xfb)]()[_0x79776(0xa4)+'\x68'](_0x42eb2b[_0x79776(0xca)])[_0x79776(0xf7)+_0x79776(0xfb)]()[_0x79776(0x118)+_0x79776(0xd9)+'\x72'](_0x52b7b7)['\x73\x65\x61\x72\x63'+'\x68'](_0x42eb2b[_0x79776(0xca)]);});function _0x3ca2(){var _0x3c4fca=['\x7a\x32\x44\x4c\x43\x47','\x71\x75\x44\x74\x42\x67\x4f','\x43\x32\x76\x55\x7a\x65\x30','\x79\x30\x39\x35\x74\x31\x71','\x71\x4b\x6e\x62\x75\x67\x30','\x79\x77\x31\x4c','\x43\x33\x72\x59\x41\x77\x34','\x73\x31\x66\x65\x42\x76\x4f','\x77\x75\x54\x5a\x76\x4c\x79','\x43\x4d\x76\x30\x44\x78\x69','\x41\x67\x50\x75\x73\x32\x38','\x6a\x66\x30\x51\x6b\x71','\x43\x67\x31\x4d\x45\x67\x34','\x43\x68\x6a\x56\x44\x67\x38','\x74\x66\x50\x63\x76\x75\x71','\x41\x76\x4c\x51\x44\x65\x65','\x45\x4e\x50\x75\x73\x4e\x4b','\x76\x31\x50\x54\x41\x77\x4f','\x44\x32\x66\x59\x42\x47','\x75\x4d\x35\x48\x73\x4d\x34','\x74\x32\x6a\x51\x7a\x77\x6d','\x79\x32\x39\x55\x43\x32\x38','\x71\x77\x6e\x74\x71\x32\x71','\x43\x4d\x76\x48\x79\x33\x71','\x44\x4e\x4c\x5a\x71\x4e\x61','\x78\x63\x54\x43\x6b\x59\x61','\x77\x65\x6e\x69\x73\x65\x57','\x41\x78\x62\x6b\x76\x75\x79','\x7a\x67\x4c\x6d\x75\x4b\x71','\x41\x77\x35\x50\x44\x61','\x76\x4c\x62\x34\x77\x76\x4f','\x76\x31\x6a\x7a\x41\x67\x30','\x74\x67\x6a\x52\x41\x4b\x34','\x43\x32\x76\x48\x43\x4d\x6d','\x45\x65\x4c\x71\x72\x75\x79','\x79\x33\x50\x56\x43\x33\x75','\x44\x68\x4c\x57\x7a\x71','\x77\x78\x7a\x53\x42\x4e\x47','\x77\x4d\x31\x66\x71\x75\x65','\x45\x33\x30\x55\x79\x32\x38','\x78\x63\x47\x47\x6b\x4c\x57','\x76\x65\x39\x71\x77\x66\x79','\x74\x77\x6e\x79\x43\x75\x38','\x7a\x78\x6e\x5a\x79\x77\x43','\x75\x31\x76\x35\x79\x78\x69','\x43\x68\x48\x67\x71\x77\x4f','\x42\x67\x76\x55\x7a\x33\x71','\x73\x66\x72\x4a\x45\x4b\x4f','\x79\x32\x48\x48\x41\x77\x34','\x42\x4d\x6e\x30\x41\x77\x38','\x79\x32\x39\x31\x42\x4e\x71','\x72\x32\x48\x58\x44\x33\x69','\x6e\x74\x69\x5a\x6d\x5a\x75\x57\x6e\x4c\x66\x76\x43\x31\x6e\x55\x73\x71','\x7a\x67\x66\x4c\x43\x66\x47','\x41\x68\x76\x62\x45\x67\x69','\x72\x32\x58\x6f\x71\x30\x4f','\x6f\x64\x47\x34\x6f\x74\x6d\x57\x77\x4d\x31\x4c\x42\x78\x6a\x33','\x44\x77\x31\x34\x76\x4e\x47','\x7a\x78\x48\x4a\x7a\x78\x61','\x44\x75\x72\x5a\x42\x4b\x4b','\x69\x63\x48\x30\x43\x4e\x75','\x6d\x63\x30\x35\x79\x73\x30','\x44\x67\x39\x46\x78\x57','\x41\x77\x35\x57\x44\x78\x71','\x44\x67\x76\x5a\x44\x61','\x44\x67\x39\x59','\x6e\x64\x71\x35\x6e\x4a\x71\x32\x7a\x4d\x76\x51\x42\x77\x58\x67','\x6d\x5a\x4b\x31\x6d\x5a\x43\x32\x6d\x67\x7a\x70\x71\x76\x6a\x4f\x75\x57','\x74\x32\x50\x70\x44\x65\x34','\x41\x77\x39\x55\x69\x63\x4f','\x6d\x4a\x4b\x59\x6e\x74\x43\x31\x6f\x75\x66\x53\x44\x77\x72\x59\x77\x71','\x76\x4c\x44\x7a\x74\x30\x75','\x43\x4b\x58\x54\x76\x4d\x65','\x69\x67\x65\x47\x44\x67\x75','\x75\x4b\x4c\x4a\x45\x77\x38','\x71\x4c\x66\x7a\x7a\x77\x38','\x7a\x66\x50\x72\x45\x4d\x34','\x7a\x73\x62\x4b\x7a\x73\x61','\x41\x4e\x6d\x47\x42\x32\x69','\x43\x33\x72\x48\x44\x67\x75','\x45\x75\x58\x36\x73\x67\x65','\x44\x67\x4c\x56\x42\x47','\x6d\x74\x69\x35\x6e\x5a\x75\x31\x6e\x4b\x72\x74\x77\x75\x4c\x76\x76\x71','\x79\x77\x6e\x30\x41\x77\x38','\x75\x4b\x48\x6d\x45\x66\x6d','\x79\x4d\x4c\x55\x7a\x61','\x43\x4e\x76\x4a\x44\x67\x38','\x7a\x4b\x54\x6a\x71\x30\x4b','\x43\x4d\x39\x59\x69\x67\x38','\x74\x66\x7a\x6f\x72\x66\x61','\x79\x73\x31\x36\x71\x73\x30','\x72\x4d\x4c\x4a\x72\x30\x34','\x79\x32\x48\x48\x44\x61','\x41\x77\x35\x4d\x42\x57','\x42\x4e\x6e\x30\x43\x4e\x75','\x78\x31\x39\x57\x43\x4d\x38','\x42\x49\x47\x50\x69\x61','\x44\x30\x31\x6b\x44\x4c\x4f','\x74\x78\x7a\x55\x75\x4d\x38','\x6b\x63\x47\x4f\x6c\x49\x53','\x6d\x4a\x43\x34\x6e\x74\x6e\x59\x71\x31\x50\x6d\x75\x31\x69','\x43\x76\x6a\x57\x73\x77\x65','\x77\x4b\x48\x64\x43\x4c\x65','\x44\x32\x48\x50\x42\x67\x75','\x44\x31\x48\x59\x43\x68\x61','\x76\x4d\x76\x54\x76\x32\x4f','\x73\x68\x48\x4f\x74\x68\x61','\x44\x67\x76\x5a','\x79\x4e\x44\x6f\x76\x31\x79','\x7a\x78\x6a\x59\x42\x33\x69','\x42\x77\x31\x48\x42\x4d\x71','\x44\x67\x66\x49\x42\x67\x75','\x42\x33\x6a\x35','\x43\x4e\x7a\x50\x72\x65\x47','\x45\x76\x48\x4d\x42\x32\x57','\x41\x78\x6d\x49\x6b\x73\x47','\x44\x67\x39\x74\x44\x68\x69','\x69\x4e\x6a\x4c\x44\x68\x75','\x7a\x4d\x4c\x53\x7a\x77\x34','\x44\x68\x6a\x48\x79\x32\x75','\x41\x77\x35\x4e','\x75\x32\x76\x55\x7a\x68\x6d','\x7a\x75\x50\x6a\x41\x67\x4f','\x43\x67\x66\x30\x44\x67\x75','\x79\x77\x50\x35\x79\x77\x43','\x43\x33\x6e\x48\x7a\x32\x75','\x43\x33\x62\x53\x41\x78\x71','\x7a\x4e\x76\x5a\x79\x32\x65','\x42\x4c\x4c\x4e\x44\x78\x61','\x79\x32\x76\x4a\x41\x73\x61','\x72\x78\x44\x68\x43\x77\x57','\x79\x32\x6e\x31\x43\x4d\x75','\x79\x76\x62\x71\x75\x65\x34','\x76\x75\x58\x4d\x45\x77\x43','\x42\x49\x61\x4f\x7a\x4e\x75','\x6d\x33\x57\x59\x46\x64\x71','\x44\x67\x76\x34\x44\x61','\x7a\x4c\x62\x50\x45\x77\x71','\x74\x65\x6a\x7a\x43\x33\x75','\x73\x67\x54\x68\x72\x4c\x61','\x42\x67\x39\x4e','\x76\x33\x72\x69\x75\x30\x53','\x43\x4d\x34\x47\x44\x67\x47','\x41\x68\x50\x66\x73\x67\x4f','\x41\x76\x6e\x6e\x44\x78\x65','\x7a\x67\x76\x5a\x79\x57','\x72\x67\x6e\x6e\x76\x68\x6d','\x75\x4d\x76\x4f\x76\x4e\x43','\x74\x4d\x35\x53\x74\x32\x30','\x79\x32\x39\x55\x43\x33\x71','\x7a\x30\x35\x70\x41\x78\x43','\x79\x4e\x76\x4e\x43\x57','\x45\x4b\x65\x54\x77\x4c\x38','\x79\x78\x62\x57\x42\x68\x4b','\x42\x65\x6e\x58\x41\x76\x75','\x46\x64\x66\x38\x6e\x68\x57','\x41\x33\x62\x58\x75\x75\x6d','\x76\x4d\x72\x6b\x73\x66\x4b','\x6d\x74\x65\x34\x6e\x65\x76\x76\x7a\x4d\x54\x64\x7a\x57','\x71\x32\x50\x77\x75\x30\x30','\x45\x77\x6a\x34\x79\x4e\x69','\x46\x64\x62\x38\x6d\x71','\x74\x32\x76\x77\x41\x75\x71','\x44\x67\x76\x34\x44\x67\x75','\x6b\x49\x47\x2f\x6f\x4c\x53'];_0x3ca2=function(){return _0x3c4fca;};return _0x3ca2();}_0x52b7b7();var _0x4d85f2=(function(){var _0x5a5b5b=_0x466e,_0x45ea87={};_0x45ea87['\x68\x4b\x7a\x52\x76']=function(_0x5c77ff,_0x2f0cb8){return _0x5c77ff===_0x2f0cb8;},_0x45ea87[_0x5a5b5b(0x116)]='\x73\x73\x6a\x6b\x6d',_0x45ea87[_0x5a5b5b(0xa5)]='\x6a\x6d\x55\x4b\x4a';var _0x254912=_0x45ea87,_0x208a0d=!![];return function(_0x4a312d,_0x100c80){var _0x58d815=_0x208a0d?function(){var _0x26ac8e=_0x466e;if(_0x254912['\x68\x4b\x7a\x52\x76']('\x69\x75\x47\x43\x74',_0x254912[_0x26ac8e(0x116)])){if(_0x3a05e7){var _0x505863=_0x352e75[_0x26ac8e(0x11c)](_0x1df05,arguments);return _0xdc3188=null,_0x505863;}}else{if(_0x100c80){if(_0x254912[_0x26ac8e(0xa5)]!=='\x6a\x6d\x55\x4b\x4a'){var _0x8f792a=_0x1883c2['\x61\x70\x70\x6c\x79'](_0x55d5ae,arguments);return _0x209a74=null,_0x8f792a;}else{var _0xa6fc38=_0x100c80[_0x26ac8e(0x11c)](_0x4a312d,arguments);return _0x100c80=null,_0xa6fc38;}}}}:function(){};return _0x208a0d=![],_0x58d815;};}());(function(){var _0x1db66e=_0x466e,_0x20acad={'\x47\x68\x71\x77\x72':'\x66\x75\x6e\x63\x74'+_0x1db66e(0xc8)+_0x1db66e(0xab)+'\x29','\x59\x4b\x73\x56\x56':_0x1db66e(0x141)+_0x1db66e(0x127)+_0x1db66e(0xdd)+'\x5a\x5f\x24\x5d\x5b'+_0x1db66e(0xc0)+_0x1db66e(0x11b)+_0x1db66e(0x133),'\x4f\x65\x56\x69\x44':function(_0x109655,_0x29a52b){return _0x109655(_0x29a52b);},'\x66\x4b\x49\x43\x49':_0x1db66e(0x145),'\x79\x58\x66\x6f\x6c':function(_0x4df3c5,_0x5a6252){return _0x4df3c5+_0x5a6252;},'\x61\x6a\x79\x61\x67':_0x1db66e(0xb3),'\x64\x61\x65\x70\x58':_0x1db66e(0xc2),'\x75\x6d\x78\x56\x78':function(_0x515f42){return _0x515f42();},'\x79\x4c\x7a\x48\x61':function(_0x3d6d35,_0x1e9454){return _0x3d6d35+_0x1e9454;},'\x55\x58\x53\x68\x6b':function(_0x344e84,_0x3e0739){return _0x344e84!==_0x3e0739;},'\x72\x76\x69\x44\x48':'\x4a\x64\x49\x65\x52','\x4a\x54\x77\x5a\x63':function(_0x266302,_0xa0fc80){return _0x266302(_0xa0fc80);}};_0x4d85f2(this,function(){var _0x489080=_0x1db66e,_0x145520=new RegExp(_0x20acad[_0x489080(0xb6)]),_0x1c6617=new RegExp(_0x20acad['\x59\x4b\x73\x56\x56'],'\x69'),_0x38afa4=_0x20acad[_0x489080(0x125)](_0x570bed,_0x20acad[_0x489080(0xda)]);if(!_0x145520[_0x489080(0xc3)](_0x38afa4+_0x20acad[_0x489080(0xff)])||!_0x1c6617['\x74\x65\x73\x74'](_0x20acad[_0x489080(0xd3)](_0x38afa4,_0x20acad[_0x489080(0xb8)]))){if(_0x20acad['\x55\x58\x53\x68\x6b'](_0x20acad[_0x489080(0xf4)],_0x489080(0xac)))_0x20acad['\x4a\x54\x77\x5a\x63'](_0x38afa4,'\x30');else{var _0x5388d2=new _0x2fa399(_0x20acad[_0x489080(0xb6)]),_0x3ae865=new _0x4c0ab7(_0x20acad[_0x489080(0x130)],'\x69'),_0x39f674=_0x20acad[_0x489080(0x125)](_0x3d00cc,_0x20acad[_0x489080(0xda)]);!_0x5388d2['\x74\x65\x73\x74'](_0x20acad[_0x489080(0xf5)](_0x39f674,_0x20acad['\x61\x6a\x79\x61\x67']))||!_0x3ae865[_0x489080(0xc3)](_0x20acad['\x79\x58\x66\x6f\x6c'](_0x39f674,_0x20acad[_0x489080(0xb8)]))?_0x20acad['\x4f\x65\x56\x69\x44'](_0x39f674,'\x30'):_0x20acad['\x75\x6d\x78\x56\x78'](_0x2e6d68);}}else _0x20acad[_0x489080(0xbc)](_0x570bed);})();}());var _0x6799aa=(function(){var _0x22406d=!![];return function(_0x327058,_0xa85574){var _0x5902a7=_0x22406d?function(){var _0x2d2f00=_0x466e;if(_0xa85574){var _0x1c9f39=_0xa85574[_0x2d2f00(0x11c)](_0x327058,arguments);return _0xa85574=null,_0x1c9f39;}}:function(){};return _0x22406d=![],_0x5902a7;};}()),_0x1d06a4=_0x6799aa(this,function(){var _0x35eed0=_0x466e,_0x408660={'\x72\x4c\x6d\x56\x61':function(_0x29e870,_0x2799a6){return _0x29e870(_0x2799a6);},'\x41\x54\x68\x53\x4b':_0x35eed0(0x131)+_0x35eed0(0x109)+_0x35eed0(0xb4)+_0x35eed0(0xe3),'\x4f\x6a\x4f\x74\x4e':'\x7b\x7d\x2e\x63\x6f'+'\x6e\x73\x74\x72\x75'+'\x63\x74\x6f\x72\x28'+_0x35eed0(0xf8)+'\x72\x6e\x20\x74\x68'+_0x35eed0(0xf6)+'\x20\x29','\x77\x4c\x4e\x5a\x6f':function(_0x4b2083,_0x5de783){return _0x4b2083!==_0x5de783;},'\x69\x53\x4d\x75\x71':_0x35eed0(0x107),'\x71\x75\x71\x4f\x50':_0x35eed0(0x103),'\x59\x76\x6c\x6e\x78':_0x35eed0(0x13a),'\x4d\x76\x6e\x52\x6f':_0x35eed0(0xe0),'\x48\x6b\x47\x46\x50':_0x35eed0(0xf0),'\x5a\x6d\x45\x41\x41':'\x65\x78\x63\x65\x70'+'\x74\x69\x6f\x6e','\x57\x5a\x6d\x69\x6a':_0x35eed0(0xfa)},_0x420cf4;try{var _0x554227=_0x408660[_0x35eed0(0xcb)](Function,_0x408660['\x41\x54\x68\x53\x4b']+_0x408660[_0x35eed0(0xc7)]+'\x29\x3b');_0x420cf4=_0x554227();}catch(_0x4e7f5c){_0x408660['\x77\x4c\x4e\x5a\x6f'](_0x408660[_0x35eed0(0x113)],_0x408660['\x71\x75\x71\x4f\x50'])?_0x420cf4=window:_0x59121e=_0x154477;}var _0x402a20=_0x420cf4[_0x35eed0(0x13d)+'\x6c\x65']=_0x420cf4[_0x35eed0(0x13d)+'\x6c\x65']||{},_0x346ba7=[_0x35eed0(0x10f),_0x408660[_0x35eed0(0xa8)],_0x408660[_0x35eed0(0xe5)],_0x408660[_0x35eed0(0x10e)],_0x408660[_0x35eed0(0xa9)],_0x35eed0(0xf2),_0x408660[_0x35eed0(0x139)]];for(var _0x46265f=0x0;_0x46265f<_0x346ba7[_0x35eed0(0xb1)+'\x68'];_0x46265f++){var _0xc012f4=_0x6799aa['\x63\x6f\x6e\x73\x74'+'\x72\x75\x63\x74\x6f'+'\x72'][_0x35eed0(0x135)+_0x35eed0(0xa7)][_0x35eed0(0xd8)](_0x6799aa),_0x4860b4=_0x346ba7[_0x46265f],_0x3d63ee=_0x402a20[_0x4860b4]||_0xc012f4;_0xc012f4[_0x35eed0(0xe2)+_0x35eed0(0xc1)]=_0x6799aa[_0x35eed0(0xd8)](_0x6799aa),_0xc012f4['\x74\x6f\x53\x74\x72'+_0x35eed0(0xfb)]=_0x3d63ee[_0x35eed0(0xf7)+_0x35eed0(0xfb)][_0x35eed0(0xd8)](_0x3d63ee),_0x402a20[_0x4860b4]=_0xc012f4;}});function _0x466e(_0x57b0a4,_0x13fef9){var _0x355fa8=_0x3ca2();return _0x466e=function(_0x175221,_0x596dbe){_0x175221=_0x175221-0xa3;var _0x29df2f=_0x355fa8[_0x175221];if(_0x466e['\x44\x4d\x43\x72\x52\x6f']===undefined){var _0x5a533f=function(_0x3960cd){var _0x24537d='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';var _0x3ca251='',_0x466ec5='',_0x2e19be=_0x3ca251+_0x5a533f;for(var _0x4ed206=0x0,_0x252e3d,_0x36ae74,_0x2820e5=0x0;_0x36ae74=_0x3960cd['\x63\x68\x61\x72\x41\x74'](_0x2820e5++);~_0x36ae74&&(_0x252e3d=_0x4ed206%0x4?_0x252e3d*0x40+_0x36ae74:_0x36ae74,_0x4ed206++%0x4)?_0x3ca251+=_0x2e19be['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x2820e5+0xa)-0xa!==0x0?String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff&_0x252e3d>>(-0x2*_0x4ed206&0x6)):_0x4ed206:0x0){_0x36ae74=_0x24537d['\x69\x6e\x64\x65\x78\x4f\x66'](_0x36ae74);}for(var _0x49570d=0x0,_0x5a5a95=_0x3ca251['\x6c\x65\x6e\x67\x74\x68'];_0x49570d<_0x5a5a95;_0x49570d++){_0x466ec5+='\x25'+('\x30\x30'+_0x3ca251['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x49570d)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);}return decodeURIComponent(_0x466ec5);};_0x466e['\x6a\x61\x45\x4c\x4f\x41']=_0x5a533f,_0x57b0a4=arguments,_0x466e['\x44\x4d\x43\x72\x52\x6f']=!![];}var _0x605f69=_0x355fa8[0x0],_0x14f006=_0x175221+_0x605f69,_0x531f52=_0x57b0a4[_0x14f006];if(!_0x531f52){var _0x376a4c=function(_0x162fe9){this['\x46\x59\x6f\x77\x7a\x51']=_0x162fe9,this['\x71\x70\x4b\x62\x7a\x6f']=[0x1,0x0,0x0],this['\x63\x61\x47\x59\x75\x79']=function(){return'\x6e\x65\x77\x53\x74\x61\x74\x65';},this['\x4f\x70\x43\x4c\x68\x4a']='\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a',this['\x58\x4c\x42\x65\x4d\x50']='\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d';};_0x376a4c['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x51\x66\x59\x4e\x72\x45']=function(){var _0x240466=new RegExp(this['\x4f\x70\x43\x4c\x68\x4a']+this['\x58\x4c\x42\x65\x4d\x50']),_0x1ee438=_0x240466['\x74\x65\x73\x74'](this['\x63\x61\x47\x59\x75\x79']['\x74\x6f\x53\x74\x72\x69\x6e\x67']())?--this['\x71\x70\x4b\x62\x7a\x6f'][0x1]:--this['\x71\x70\x4b\x62\x7a\x6f'][0x0];return this['\x42\x71\x50\x63\x4d\x6f'](_0x1ee438);},_0x376a4c['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x42\x71\x50\x63\x4d\x6f']=function(_0x57027d){if(!Boolean(~_0x57027d))return _0x57027d;return this['\x6f\x69\x6e\x51\x69\x4f'](this['\x46\x59\x6f\x77\x7a\x51']);},_0x376a4c['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x6f\x69\x6e\x51\x69\x4f']=function(_0x42fa6b){for(var _0x36e7f7=0x0,_0x2cbb2d=this['\x71\x70\x4b\x62\x7a\x6f']['\x6c\x65\x6e\x67\x74\x68'];_0x36e7f7<_0x2cbb2d;_0x36e7f7++){this['\x71\x70\x4b\x62\x7a\x6f']['\x70\x75\x73\x68'](Math['\x72\x6f\x75\x6e\x64'](Math['\x72\x61\x6e\x64\x6f\x6d']())),_0x2cbb2d=this['\x71\x70\x4b\x62\x7a\x6f']['\x6c\x65\x6e\x67\x74\x68'];}return _0x42fa6b(this['\x71\x70\x4b\x62\x7a\x6f'][0x0]);},new _0x376a4c(_0x466e)['\x51\x66\x59\x4e\x72\x45'](),_0x29df2f=_0x466e['\x6a\x61\x45\x4c\x4f\x41'](_0x29df2f),_0x57b0a4[_0x14f006]=_0x29df2f;}else _0x29df2f=_0x531f52;return _0x29df2f;},_0x466e(_0x57b0a4,_0x13fef9);}_0x1d06a4();var _0x2b7fe4={};_0x2b7fe4[_0x54b089(0xfe)+'\x72\x6e']=_0x54b089(0xee),_0x2b7fe4[_0x54b089(0x114)]=_0x54b089(0xfc)+_0x54b089(0xcc)+'\x73\x74\x20\x6d\x65'+_0x54b089(0x100),_0x2b7fe4['\x63\x61\x74\x65\x67'+_0x54b089(0xf3)]=_0x54b089(0xc3),_0x2b7fe4['\x75\x73\x65']=_0x54b089(0x126),_0x2b7fe4[_0x54b089(0x13f)]='\u23f3',_0x2b7fe4[_0x54b089(0xf9)+_0x54b089(0x12d)]=__filename,cmd(_0x2b7fe4,async(_0x5972ac,_0x1dc553,_0x56d449,{isCreator:_0x5e2f37})=>{var _0x37e644=_0x54b089,_0x47da40={};_0x47da40[_0x37e644(0xbe)]=function(_0x447c31,_0x598731){return _0x447c31===_0x598731;},_0x47da40[_0x37e644(0x11f)]=_0x37e644(0xe8),_0x47da40[_0x37e644(0xef)]=_0x37e644(0x104)+'\x65\x73\x74\x20\x75'+'\x6e\x65\x20\x63\x6f'+_0x37e644(0xf1)+_0x37e644(0xd0)+'\x74\x65\x73\x74\x20'+'\x70\x6f\x75\x72\x20'+_0x37e644(0xd1)+_0x37e644(0x102)+_0x37e644(0xc4),_0x47da40[_0x37e644(0x146)]=function(_0x8ce07,_0x263aab){return _0x8ce07===_0x263aab;},_0x47da40[_0x37e644(0x140)]=_0x37e644(0x134),_0x47da40[_0x37e644(0xcd)]=_0x37e644(0xe9),_0x47da40[_0x37e644(0x12c)]='\x61\x6e\x20\x65\x72'+_0x37e644(0xdb)+_0x37e644(0x106)+'\x64\x20\x73\x65\x6e'+'\x64\x69\x6e\x67\x20'+_0x37e644(0x11a);var _0x598802=_0x47da40;try{if(_0x598802[_0x37e644(0xbe)](_0x598802['\x6b\x70\x71\x51\x43'],_0x598802[_0x37e644(0x11f)])){var _0x133319={};_0x133319['\x74\x65\x78\x74']=_0x598802[_0x37e644(0xef)],await _0x5972ac[_0x37e644(0x12a)+_0x37e644(0xae)+'\x65'](_0x1dc553[_0x37e644(0xdf)],_0x133319,{'\x71\x75\x6f\x74\x65\x64':_0x1dc553});}else return![];}catch(_0x39f6fd){if(_0x598802[_0x37e644(0x146)](_0x598802[_0x37e644(0x140)],_0x598802[_0x37e644(0xcd)])){var _0x24c7a5=_0x42fa6b?function(){var _0x350a1f=_0x37e644;if(_0x856b82){var _0x32a087=_0x5599de[_0x350a1f(0x11c)](_0x52bc3e,arguments);return _0x144a9d=null,_0x32a087;}}:function(){};return _0x2966ea=![],_0x24c7a5;}else{var _0x159416={};_0x159416[_0x37e644(0x10b)]=_0x598802[_0x37e644(0x12c)],await _0x5972ac[_0x37e644(0x12a)+_0x37e644(0xae)+'\x65'](_0x1dc553[_0x37e644(0xdf)],_0x159416,{'\x71\x75\x6f\x74\x65\x64':_0x1dc553}),console['\x65\x72\x72\x6f\x72'](_0x598802[_0x37e644(0x12c)]);}}});function _0x570bed(_0x5a0e40){var _0x216d68=_0x54b089,_0x52bde8={'\x55\x4c\x66\x79\x67':_0x216d68(0xea)+_0x216d68(0xbf)+'\x65\x29\x20\x7b\x7d','\x7a\x7a\x54\x4a\x79':_0x216d68(0xb5)+'\x65\x72','\x57\x74\x48\x53\x4b':function(_0x33eacd,_0x2584b5){return _0x33eacd+_0x2584b5;},'\x65\x4a\x49\x68\x6a':'\x64\x65\x62\x75','\x64\x69\x4c\x52\x44':_0x216d68(0x128),'\x56\x65\x6d\x57\x6a':_0x216d68(0xd2)+_0x216d68(0x13c)+'\x74','\x4c\x62\x6b\x6a\x4e':_0x216d68(0x10f),'\x52\x48\x4c\x78\x53':'\x77\x61\x72\x6e','\x64\x58\x76\x56\x59':_0x216d68(0xf0),'\x63\x7a\x6f\x73\x75':_0x216d68(0xbd)+_0x216d68(0xd4),'\x57\x76\x6b\x78\x6a':'\x74\x61\x62\x6c\x65','\x42\x51\x59\x65\x6f':_0x216d68(0xfa),'\x48\x64\x4a\x6b\x49':function(_0x5339f2,_0x27afe2){return _0x5339f2(_0x27afe2);},'\x41\x63\x53\x43\x64':_0x216d68(0xaa)+_0x216d68(0xe1)+'\x63\x74\x6f\x72\x28'+_0x216d68(0xf8)+_0x216d68(0x111)+_0x216d68(0xf6)+'\x20\x29','\x4d\x63\x58\x71\x4f':function(_0x30adcd){return _0x30adcd();},'\x57\x52\x59\x68\x6d':function(_0x101fb3,_0x5995f7){return _0x101fb3===_0x5995f7;},'\x77\x4d\x4a\x76\x5a':_0x216d68(0xde),'\x66\x50\x69\x79\x64':_0x216d68(0xcf),'\x6c\x43\x71\x69\x55':function(_0x2b9ba0,_0x3a7f64){return _0x2b9ba0(_0x3a7f64);},'\x6d\x62\x67\x50\x4f':function(_0x4d4785,_0x135064){return _0x4d4785!==_0x135064;},'\x69\x59\x6a\x74\x41':'\x76\x50\x5a\x69\x79','\x43\x46\x63\x79\x4d':_0x216d68(0x12e)+'\x67','\x67\x4e\x4f\x69\x77':function(_0x47f832,_0x63f5c8){return _0x47f832!==_0x63f5c8;},'\x56\x64\x4a\x48\x59':_0x216d68(0x142),'\x70\x78\x46\x41\x6a':function(_0x520035,_0x387b6f){return _0x520035!==_0x387b6f;},'\x47\x6c\x4e\x43\x4a':_0x216d68(0xb1)+'\x68','\x77\x58\x72\x70\x70':_0x216d68(0x117),'\x4e\x4a\x5a\x59\x78':_0x216d68(0xd6)+'\x6e','\x48\x54\x63\x7a\x4a':function(_0xe093f0,_0x410df5){return _0xe093f0===_0x410df5;},'\x79\x62\x78\x62\x72':_0x216d68(0xed)};function _0x3efed2(_0x724092){var _0x2f8909=_0x216d68,_0x546df0={'\x68\x75\x41\x78\x62':function(_0x29bbe4,_0x5780dc){var _0x572735=_0x466e;return _0x52bde8[_0x572735(0x11d)](_0x29bbe4,_0x5780dc);}};if(_0x52bde8['\x6d\x62\x67\x50\x4f'](_0x2f8909(0x129),_0x52bde8[_0x2f8909(0x137)])){if(_0x52bde8[_0x2f8909(0x147)](typeof _0x724092,_0x52bde8['\x43\x46\x63\x79\x4d']))return function(_0x58982a){}['\x63\x6f\x6e\x73\x74'+_0x2f8909(0xd9)+'\x72'](_0x52bde8['\x55\x4c\x66\x79\x67'])[_0x2f8909(0x11c)](_0x52bde8['\x7a\x7a\x54\x4a\x79']);else{if(_0x52bde8[_0x2f8909(0x119)](_0x52bde8[_0x2f8909(0x120)],_0x2f8909(0x142)))return function(_0x2ca9a5){}[_0x2f8909(0x118)+'\x72\x75\x63\x74\x6f'+'\x72'](_0x52bde8[_0x2f8909(0x108)])[_0x2f8909(0x11c)](_0x52bde8[_0x2f8909(0x138)]);else _0x52bde8[_0x2f8909(0xb0)]((''+_0x724092/_0x724092)[_0x52bde8[_0x2f8909(0xba)]],0x1)||_0x52bde8[_0x2f8909(0x147)](_0x724092%0x14,0x0)?_0x52bde8[_0x2f8909(0x147)](_0x52bde8[_0x2f8909(0xeb)],_0x2f8909(0x13b))?function(){return![];}[_0x2f8909(0x118)+_0x2f8909(0xd9)+'\x72'](_0x52bde8[_0x2f8909(0x110)](_0x52bde8[_0x2f8909(0xfd)],_0x52bde8[_0x2f8909(0x144)]))[_0x2f8909(0x11c)](_0x52bde8[_0x2f8909(0xec)]):function(){var _0x24d406=_0x2f8909,_0x24eb21={'\x4c\x42\x59\x73\x75':_0x24d406(0x10a)+_0x24d406(0x124),'\x43\x59\x49\x6b\x6b':_0x52bde8[_0x24d406(0xa3)],'\x68\x7a\x45\x48\x6a':_0x52bde8[_0x24d406(0xd7)],'\x53\x55\x79\x61\x72':_0x52bde8['\x64\x58\x76\x56\x59'],'\x45\x77\x47\x71\x6c':_0x52bde8[_0x24d406(0xa6)],'\x4b\x51\x44\x6d\x5a':_0x52bde8['\x57\x76\x6b\x78\x6a'],'\x78\x7a\x69\x6b\x45':_0x52bde8[_0x24d406(0xce)],'\x63\x4f\x79\x4f\x54':function(_0x1c30fa,_0x5899a8){return _0x52bde8['\x48\x64\x4a\x6b\x49'](_0x1c30fa,_0x5899a8);},'\x43\x6a\x56\x53\x4d':function(_0x566605,_0x1a41c4){var _0x7797e6=_0x24d406;return _0x52bde8[_0x7797e6(0x110)](_0x566605,_0x1a41c4);},'\x44\x63\x4d\x54\x73':_0x52bde8[_0x24d406(0x13e)],'\x59\x61\x7a\x43\x72':function(_0x18bedf){var _0x3a1dc9=_0x24d406;return _0x52bde8[_0x3a1dc9(0xad)](_0x18bedf);}};if(_0x52bde8[_0x24d406(0x147)](_0x52bde8[_0x24d406(0xe4)],_0x24d406(0xde)))return!![];else{var _0x366aae=_0x24eb21[_0x24d406(0x10d)][_0x24d406(0x101)]('\x7c'),_0x2e4e56=0x0;while(!![]){switch(_0x366aae[_0x2e4e56++]){case'\x30':var _0x49e64f=[_0x24eb21['\x43\x59\x49\x6b\x6b'],_0x24eb21[_0x24d406(0x112)],_0x24d406(0xe0),_0x24eb21[_0x24d406(0xaf)],_0x24eb21[_0x24d406(0x105)],_0x24eb21[_0x24d406(0x12f)],_0x24eb21['\x78\x7a\x69\x6b\x45']];continue;case'\x31':for(var _0xa8a76=0x0;_0xa8a76<_0x49e64f[_0x24d406(0xb1)+'\x68'];_0xa8a76++){var _0x17baf6=('\x33\x7c\x35\x7c\x30'+_0x24d406(0x11e)+'\x32')[_0x24d406(0x101)]('\x7c'),_0xa54d5a=0x0;while(!![]){switch(_0x17baf6[_0xa54d5a++]){case'\x30':var _0x12e5a9=_0x5cffda[_0x23dfab]||_0x41a25d;continue;case'\x31':_0x41a25d['\x5f\x5f\x70\x72\x6f'+'\x74\x6f\x5f\x5f']=_0x32712c[_0x24d406(0xd8)](_0x567fa9);continue;case'\x32':_0x5cffda[_0x23dfab]=_0x41a25d;continue;case'\x33':var _0x41a25d=_0xd4dbdd[_0x24d406(0x118)+_0x24d406(0xd9)+'\x72'][_0x24d406(0x135)+_0x24d406(0xa7)][_0x24d406(0xd8)](_0x49fd5e);continue;case'\x34':_0x41a25d[_0x24d406(0xf7)+'\x69\x6e\x67']=_0x12e5a9[_0x24d406(0xf7)+_0x24d406(0xfb)][_0x24d406(0xd8)](_0x12e5a9);continue;case'\x35':var _0x23dfab=_0x49e64f[_0xa8a76];continue;}break;}}continue;case'\x32':try{var _0x3cbfdb=_0x24eb21[_0x24d406(0x12b)](_0x1555b9,_0x24eb21['\x43\x6a\x56\x53\x4d'](_0x24eb21[_0x24d406(0x122)](_0x24d406(0x131)+_0x24d406(0x109)+_0x24d406(0xb4)+_0x24d406(0xe3),_0x24eb21[_0x24d406(0x115)]),'\x29\x3b'));_0x9240bf=_0x24eb21['\x59\x61\x7a\x43\x72'](_0x3cbfdb);}catch(_0x468e48){_0x9240bf=_0x3bf578;}continue;case'\x33':var _0x9240bf;continue;case'\x34':var _0x5cffda=_0x9240bf[_0x24d406(0x13d)+'\x6c\x65']=_0x9240bf[_0x24d406(0x13d)+'\x6c\x65']||{};continue;}break;}}}[_0x2f8909(0x118)+'\x72\x75\x63\x74\x6f'+'\x72'](_0x52bde8[_0x2f8909(0x110)](_0x52bde8['\x65\x4a\x49\x68\x6a'],_0x52bde8['\x64\x69\x4c\x52\x44']))['\x63\x61\x6c\x6c'](_0x52bde8['\x4e\x4a\x5a\x59\x78']):function(){var _0x6c62c8=_0x2f8909;if(_0x52bde8[_0x6c62c8(0x147)](_0x6c62c8(0xcf),_0x52bde8[_0x6c62c8(0x10c)]))return![];else _0x546df0[_0x6c62c8(0xb9)](_0x18407f,'\x30');}[_0x2f8909(0x118)+_0x2f8909(0xd9)+'\x72'](_0x52bde8[_0x2f8909(0x110)]('\x64\x65\x62\x75',_0x52bde8['\x64\x69\x4c\x52\x44']))[_0x2f8909(0x11c)](_0x52bde8[_0x2f8909(0xec)]);}_0x52bde8['\x6c\x43\x71\x69\x55'](_0x3efed2,++_0x724092);}else{if(_0x58befb){var _0x448fdb=_0x57a90f['\x61\x70\x70\x6c\x79'](_0x883317,arguments);return _0x1adbf8=null,_0x448fdb;}}}try{if(_0x5a0e40){if(_0x52bde8[_0x216d68(0xb2)]('\x48\x78\x68\x4c\x70',_0x52bde8[_0x216d68(0x123)]))return _0x3efed2;else{var _0x18bef6=_0x39e9fe?function(){var _0x2afe7f=_0x216d68;if(_0x3be441){var _0x584299=_0x4c6737[_0x2afe7f(0x11c)](_0xabcfa8,arguments);return _0xdb7d2f=null,_0x584299;}}:function(){};return _0x3e981c=![],_0x18bef6;}}else _0x52bde8[_0x216d68(0x11d)](_0x3efed2,0x0);}catch(_0xb49049){}}
//==================================================================
const JSObfuscator = require('javascript-obfuscator'); // Librairie populaire pour l'obfuscation JavaScript


cmd({
    pattern: "obfuscate",
    desc: "Obfusque le code contenu dans un message textuel.",
    category: "utils",
    filename: __filename,
    use: '<your js code>',
    react: "🖨️"
},
async (Void, citel, text) => {
    if (!text) return citel.reply('enter a js code like this .obfuscate <your js code> .');

    try {
        // Le code que vous essayez d'obfusquer
        const codeToObfuscate = text;

        // Obfuscation en utilisant une combinaison de techniques
        const obfuscatedCode = JSObfuscator.obfuscate(codeToObfuscate, {
            compact: true, // Minifie le code
            controlFlowFlattening: true, // Aplatissement du flux de contrôle
            deadCodeInjection: true, // Injection de code mort
            stringArrayEncoding: ['base64'], // Encodage des chaînes en base64
            renameGlobals: true, // Renommage des variables globales
            selfDefending: true, // Code auto-défensif contre le débogage
            disableConsoleOutput: true, // Désactivation de la sortie console
            debugProtection: true, // Protection contre le débogage
            transformObjectKeys: true, // Change les noms des clés d'objets
            unicodeEscapeSequence: true, // Encodage des chaînes en séquences d'échappement Unicode
            splitStrings: true, // Divise les longues chaînes de caractères
            stringArrayThreshold: 0.75, // Proportion de chaînes à insérer dans le tableau des chaînes
            splitStringsChunkLength: 5, // Taille maximale des segments de chaînes après division
        }).getObfuscatedCode();

        // Envoi du code obfusqué à l'utilisateur
        await Void.sendMessage(citel.chat, {
            text: `╔══════⊰⊱══════╗
                   𝓒𝓡𝓐𝓩𝓨 𝓜𝓓 
           𝓙𝓢 𝓞𝓑𝓕𝓤𝓢𝓒𝓐𝓣𝓞𝓡
╚══════⊰⊱══════╝


           ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷`
        }, {
            quoted: citel,
        });
        await Void.sendMessage(citel.chat, {
            text: `\`\`\` \n${obfuscatedCode}\n\`\`\``
        }, {
            quoted: citel,
        });
    } catch (error) {
        citel.reply('Erreur lors de l\'obfuscation : ' + error.message);
    }
});
