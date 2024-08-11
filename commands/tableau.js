/**

*     ██████╗██████╗  █████╗ ███████╗██╗   ██╗    ███╗   ███╗██████╗     
*    ██╔════╝██╔══██╗██╔══██╗╚══███╔╝╚██╗ ██╔╝    ████╗ ████║██╔══██╗    
*    ██║     ██████╔╝███████║  ███╔╝  ╚████╔╝     ██╔████╔██║██║  ██║    
*    ██║     ██╔══██╗██╔══██║ ███╔╝    ╚██╔╝      ██║╚██╔╝██║██║  ██║    
*    ╚██████╗██║  ██║██║  ██║███████╗   ██║       ██║ ╚═╝ ██║██████╔╝    
*     ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝   ╚═╝       ╚═╝     ╚═╝╚═════╝     
                                                                    

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

const { sck1, tiny, fancytext, cmd } = require('../lib/')


cmd({
  pattern: "coffee",
  desc: "to download coffee wallpaper",
  category: "wallpaper",
  use: '',
  react: "🖼️",
  filename: __filename
},
async (Void, citel, text, { isCreator }) => {
    citel.reply('⏳Downloading...')
    let msg = `╔══════⊰⊱═══════╗
      𝓒𝓡𝓐𝓩𝓨 𝓜𝓓 𝓦𝓐𝓛𝓛𝓟𝓐𝓟𝓔𝓡
╚══════⊰⊱═══════╝


             ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷`;
    try {
       let apiUrl = 'https://api.cafirexos.com/api/wallpaper/coffee';
    
        await Void.sendMessage(citel.chat, {
            image: {
                url: apiUrl,
            },
            caption: msg,
        }, {
            quoted: citel,
        });
    } catch (error) {
        console.error('[ERREUR]', error);
        Void.sendMessage(citel.chat, 'Une erreur s\'est produite lors de la récupération des paroles.');
    }

    await Void.deleteMessage(citel.chat, searchMessage.key);
});
//========================================================================================================

cmd({
  pattern: "wprandom",
  desc: "to download coffee wallpaper",
  category: "wallpaper",
  use: '',
  react: "🖼️",
  filename: __filename
},
async (Void, citel, text, { isCreator }) => {
    citel.reply('⏳Downloading...')
    let msg = `╔══════⊰⊱═══════╗
      𝓒𝓡𝓐𝓩𝓨 𝓜𝓓 𝓦𝓐𝓛𝓛𝓟𝓐𝓟𝓔𝓡
╚══════⊰⊱═══════╝


             ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷`;
    try {
       let apiUrl = 'https://api.cafirexos.com/api/wallpaper/wprandom';
    
        await Void.sendMessage(citel.chat, {
            image: {
                url: apiUrl,
            },
            caption: msg,
        }, {
            quoted: citel,
        });
    } catch (error) {
        console.error('[ERREUR]', error);
        Void.sendMessage(citel.chat, 'Une erreur s\'est produite lors de la récupération des paroles.');
    }

    await Void.deleteMessage(citel.chat, searchMessage.key);
});
//========================================================================================================

cmd({
  pattern: "cr7",
  desc: "to download coffee wallpaper",
  category: "wallpaper",
  use: '',
  react: "🖼️",
  filename: __filename
},
async (Void, citel, text, { isCreator }) => {
    citel.reply('⏳Downloading...')
    let msg = `╔══════⊰⊱═══════╗
      𝓒𝓡𝓐𝓩𝓨 𝓜𝓓 𝓦𝓐𝓛𝓛𝓟𝓐𝓟𝓔𝓡
╚══════⊰⊱═══════╝


             ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷`;
    try {
       let apiUrl = 'https://api.cafirexos.com/api/wallpaper/cristianoronaldo';
    
        await Void.sendMessage(citel.chat, {
            image: {
                url: apiUrl,
            },
            caption: msg,
        }, {
            quoted: citel,
        });
    } catch (error) {
        console.error('[ERREUR]', error);
        Void.sendMessage(citel.chat, 'Une erreur s\'est produite lors de la récupération des paroles.');
    }

    await Void.deleteMessage(citel.chat, searchMessage.key);
});
//========================================================================================================

cmd({
  pattern: "messi",
  desc: "to download coffee wallpaper",
  category: "wallpaper",
  use: '',
  react: "🖼️",
  filename: __filename
},
async (Void, citel, text, { isCreator }) => {
    citel.reply('⏳Downloading...')
    let msg = `╔══════⊰⊱═══════╗
      𝓒𝓡𝓐𝓩𝓨 𝓜𝓓 𝓦𝓐𝓛𝓛𝓟𝓐𝓟𝓔𝓡
╚══════⊰⊱═══════╝


             ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷`;
    try {
       let apiUrl = 'https://api.cafirexos.com/api/wallpaper/messi';
    
        await Void.sendMessage(citel.chat, {
            image: {
                url: apiUrl,
            },
            caption: msg,
        }, {
            quoted: citel,
        });
    } catch (error) {
        console.error('[ERREUR]', error);
        Void.sendMessage(citel.chat, 'Une erreur s\'est produite lors de la récupération des paroles.');
    }

    await Void.deleteMessage(citel.chat, searchMessage.key);
});
//========================================================================================================

cmd({
  pattern: "christmas",
  desc: "to download coffee wallpaper",
  category: "wallpaper",
  use: '',
  react: "🖼️",
  filename: __filename
},
async (Void, citel, text, { isCreator }) => {
    citel.reply('⏳Downloading...')
    let msg = `╔══════⊰⊱═══════╗
      𝓒𝓡𝓐𝓩𝓨 𝓜𝓓 𝓦𝓐𝓛𝓛𝓟𝓐𝓟𝓔𝓡
╚══════⊰⊱═══════╝


             ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷`;
    try {
       let apiUrl = 'https://api.cafirexos.com/api/wallpaper/navidad';
    
        await Void.sendMessage(citel.chat, {
            image: {
                url: apiUrl,
            },
            caption: msg,
        }, {
            quoted: citel,
        });
    } catch (error) {
        console.error('[ERREUR]', error);
        Void.sendMessage(citel.chat, 'Une erreur s\'est produite lors de la récupération des paroles.');
    }

    await Void.deleteMessage(citel.chat, searchMessage.key);
});
//========================================================================================================

cmd({
  pattern: "mountain",
  desc: "to download coffee wallpaper",
  category: "wallpaper",
  use: '',
  react: "🖼️",
  filename: __filename
},
async (Void, citel, text, { isCreator }) => {
    citel.reply('⏳Downloading...')
    let msg = `╔══════⊰⊱═══════╗
      𝓒𝓡𝓐𝓩𝓨 𝓜𝓓 𝓦𝓐𝓛𝓛𝓟𝓐𝓟𝓔𝓡
╚══════⊰⊱═══════╝


             ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷`;
    try {
       let apiUrl = 'https://api.cafirexos.com/api/wallpaper/wpmountain';
    
        await Void.sendMessage(citel.chat, {
            image: {
                url: apiUrl,
            },
            caption: msg,
        }, {
            quoted: citel,
        });
    } catch (error) {
        console.error('[ERREUR]', error);
        Void.sendMessage(citel.chat, 'Une erreur s\'est produite lors de la récupération des paroles.');
    }

    await Void.deleteMessage(citel.chat, searchMessage.key);
});
//========================================================================================================

cmd({
  pattern: "pubg",
  desc: "to download coffee wallpaper",
  category: "wallpaper",
  use: '',
  react: "🖼️",
  filename: __filename
},
async (Void, citel, text, { isCreator }) => {
    citel.reply('⏳Downloading...')
    let msg = `╔══════⊰⊱═══════╗
      𝓒𝓡𝓐𝓩𝓨 𝓜𝓓 𝓦𝓐𝓛𝓛𝓟𝓐𝓟𝓔𝓡
╚══════⊰⊱═══════╝


             ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷`;
    try {
       let apiUrl = 'https://api.cafirexos.com/api/wallpaper/pubg';
    
        await Void.sendMessage(citel.chat, {
            image: {
                url: apiUrl,
            },
            caption: msg,
        }, {
            quoted: citel,
        });
    } catch (error) {
        console.error('[ERREUR]', error);
        Void.sendMessage(citel.chat, 'Une erreur s\'est produite lors de la récupération des paroles.');
    }

    await Void.deleteMessage(citel.chat, searchMessage.key);
});
//=======================================================================================================

cmd({
  pattern: "gaming",
  desc: "to download coffee wallpaper",
  category: "wallpaper",
  use: '',
  react: "🖼️",
  filename: __filename
},
async (Void, citel, text, { isCreator }) => {
    citel.reply('⏳Downloading...')
    let msg = `╔══════⊰⊱═══════╗
      𝓒𝓡𝓐𝓩𝓨 𝓜𝓓 𝓦𝓐𝓛𝓛𝓟𝓐𝓟𝓔𝓡
╚══════⊰⊱═══════╝


             ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷`;
    try {
       let apiUrl = 'https://api.cafirexos.com/api/wallpaper/wpgaming';
    
        await Void.sendMessage(citel.chat, {
            image: {
                url: apiUrl,
            },
            caption: msg,
        }, {
            quoted: citel,
        });
    } catch (error) {
        console.error('[ERREUR]', error);
        Void.sendMessage(citel.chat, 'Une erreur s\'est produite lors de la récupération des paroles.');
    }

    await Void.deleteMessage(citel.chat, searchMessage.key);
});
//=======================================================================================================


//=======================================================================================================
