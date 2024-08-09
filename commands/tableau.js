
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

    citel.reply(⏳Downloading...)

    const searchMessage = await citel.reply(`🔍 Recherche des paroles : ${text}`);
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


