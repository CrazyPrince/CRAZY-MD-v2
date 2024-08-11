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
const axios = require('axios')


cmd({
  pattern: "yuri",
  desc: "Retrieve and send an NSFW image",
  category: "nsfw",
  react: "🧼",
  filename: __filename
},

async (Void, citel, text, { isCreator }) => {
  const apiURL = `https://api.maher-zubair.tech/nsfw/yuri`;
  
  try {
    const response = await axios.get(apiURL);
    const { url } = response.data;
    console.log(response.data);

    if (url) {
      const msg = `╔══════⊰⊱══════╗
              𝓒𝓡𝓐𝓩𝓨 𝓜𝓓 𝓝𝓢𝓕𝓦
╚══════⊰⊱══════╝


           ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷`;

      await Void.sendMessage(citel.chat, {
        image: {
          url: url,
        },
        caption: msg,
      }, {
        quoted: citel,
      });
    } else {
      citel.reply('Image not found.');
    }
  } catch (error) {
    console.error('Error when recovering the image:', error);
    citel.reply('An error occurred while retrieving the image. Please try again later.');
  }
});
//===========================================================================================
cmd({
  pattern: "ass",
  desc: "Retrieve and send an NSFW image",
  category: "nsfw",
  react: "🧼",
  filename: __filename
},

async (Void, citel, text, { isCreator }) => {
  const apiURL = `https://api.maher-zubair.tech/nsfw/ass`;
  
  try {
    const response = await axios.get(apiURL);
    const { url } = response.data;
    console.log(response.data);

    if (url) {
      const msg = `╔══════⊰⊱══════╗
              𝓒𝓡𝓐𝓩𝓨 𝓜𝓓 𝓝𝓢𝓕𝓦
╚══════⊰⊱══════╝


           ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷`;

      await Void.sendMessage(citel.chat, {
        image: {
          url: url,
        },
        caption: msg,
      }, {
        quoted: citel,
      });
    } else {
      citel.reply('Image not found.');
    }
  } catch (error) {
    console.error('Error when recovering the image:', error);
    citel.reply('An error occurred while retrieving the image. Please try again later.');
  }
});
//===========================================================================================
cmd({
  pattern: "pussy",
  desc: "Retrieve and send an NSFW image",
  category: "nsfw",
  react: "🧼",
  filename: __filename
},

async (Void, citel, text, { isCreator }) => {
  const apiURL = `https://api.maher-zubair.tech/nsfw/pussy`;
  
  try {
    const response = await axios.get(apiURL);
    const { url } = response.data;
    console.log(response.data);

    if (url) {
      const msg = `╔══════⊰⊱══════╗
              𝓒𝓡𝓐𝓩𝓨 𝓜𝓓 𝓝𝓢𝓕𝓦
╚══════⊰⊱══════╝


           ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷`;

      await Void.sendMessage(citel.chat, {
        image: {
          url: url,
        },
        caption: msg,
      }, {
        quoted: citel,
      });
    } else {
      citel.reply('Image not found.');
    }
  } catch (error) {
    console.error('Error when recovering the image:', error);
    citel.reply('An error occurred while retrieving the image. Please try again later.');
  }
});
//===========================================================================================
cmd({
  pattern: "lesbian",
  desc: "Retrieve and send an NSFW image",
  category: "nsfw",
  react: "🧼",
  filename: __filename
},

async (Void, citel, text, { isCreator }) => {
  const apiURL = `https://api.maher-zubair.tech/nsfw/lesbian`;
  
  try {
    const response = await axios.get(apiURL);
    const { url } = response.data;
    console.log(response.data);

    if (url) {
      const msg = `╔══════⊰⊱══════╗
              𝓒𝓡𝓐𝓩𝓨 𝓜𝓓 𝓝𝓢𝓕𝓦
╚══════⊰⊱══════╝


           ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷`;

      await Void.sendMessage(citel.chat, {
        image: {
          url: url,
        },
        caption: msg,
      }, {
        quoted: citel,
      });
    } else {
      citel.reply('Image not found.');
    }
  } catch (error) {
    console.error('Error when recovering the image:', error);
    citel.reply('An error occurred while retrieving the image. Please try again later.');
  }
});
//===========================================================================================
cmd({
  pattern: "fingering",
  desc: "Retrieve and send an NSFW image",
  category: "nsfw",
  react: "🧼",
  filename: __filename
},

async (Void, citel, text, { isCreator }) => {
  const apiURL = `https://api.maher-zubair.tech/nsfw/fingering`;
  
  try {
    const response = await axios.get(apiURL);
    const { url } = response.data;
    console.log(response.data);

    if (url) {
      const msg = `╔══════⊰⊱══════╗
              𝓒𝓡𝓐𝓩𝓨 𝓜𝓓 𝓝𝓢𝓕𝓦
╚══════⊰⊱══════╝


           ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷`;

      await Void.sendMessage(citel.chat, {
        image: {
          url: url,
        },
        caption: msg,
      }, {
        quoted: citel,
      });
    } else {
      citel.reply('Image not found.');
    }
  } catch (error) {
    console.error('Error when recovering the image:', error);
    citel.reply('An error occurred while retrieving the image. Please try again later.');
  }
});
//===========================================================================================
cmd({
  pattern: "dildo",
  desc: "Retrieve and send an NSFW image",
  category: "nsfw",
  react: "🧼",
  filename: __filename
},

async (Void, citel, text, { isCreator }) => {
  const apiURL = `https://api.maher-zubair.tech/nsfw/dildo`;
  
  try {
    const response = await axios.get(apiURL);
    const { url } = response.data;
    console.log(response.data);

    if (url) {
      const msg = `╔══════⊰⊱══════╗
              𝓒𝓡𝓐𝓩𝓨 𝓜𝓓 𝓝𝓢𝓕𝓦
╚══════⊰⊱══════╝


           ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷`;

      await Void.sendMessage(citel.chat, {
        image: {
          url: url,
        },
        caption: msg,
      }, {
        quoted: citel,
      });
    } else {
      citel.reply('Image not found.');
    }
  } catch (error) {
    console.error('Error when recovering the image:', error);
    citel.reply('An error occurred while retrieving the image. Please try again later.');
  }
});
//===========================================================================================
cmd({
  pattern: "dick",
  desc: "Retrieve and send an NSFW image",
  category: "nsfw",
  react: "🏳️‍⚧️",
  filename: __filename
},

async (Void, citel, text, { isCreator }) => {
  const apiURL = `https://api.maher-zubair.tech/nsfw/dick`;
  
  try {
    const response = await axios.get(apiURL);
    const { url } = response.data;
    console.log(response.data);

    if (url) {
      const msg = `╔══════⊰⊱══════╗
              𝓒𝓡𝓐𝓩𝓨 𝓜𝓓 𝓝𝓢𝓕𝓦
╚══════⊰⊱══════╝


           ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷`;

      await Void.sendMessage(citel.chat, {
        image: {
          url: url,
        },
        caption: msg,
      }, {
        quoted: citel,
      });
    } else {
      citel.reply('Image not found.');
    }
  } catch (error) {
    console.error('Error when recovering the image:', error);
    citel.reply('An error occurred while retrieving the image. Please try again later.');
  }
});
//===========================================================================================
cmd({
  pattern: "bdsm",
  desc: "Retrieve and send an NSFW image",
  category: "nsfw",
  react: "🏳️‍⚧️",
  filename: __filename
},

async (Void, citel, text, { isCreator }) => {
  const apiURL = `https://api.maher-zubair.tech/nsfw/bdsm`;
  
  try {
    const response = await axios.get(apiURL);
    const { url } = response.data;
    console.log(response.data);

    if (url) {
      const msg = `╔══════⊰⊱══════╗
              𝓒𝓡𝓐𝓩𝓨 𝓜𝓓 𝓝𝓢𝓕𝓦
╚══════⊰⊱══════╝


           ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷`;

      await Void.sendMessage(citel.chat, {
        image: {
          url: url,
        },
        caption: msg,
      }, {
        quoted: citel,
      });
    } else {
      citel.reply('Image not found.');
    }
  } catch (error) {
    console.error('Error when recovering the image:', error);
    citel.reply('An error occurred while retrieving the image. Please try again later.');
  }
});
//===========================================================================================
cmd({
  pattern: "blowjob",
  desc: "Retrieve and send an NSFW image",
  category: "nsfw",
  react: "🏳️‍⚧️",
  filename: __filename
},

async (Void, citel, text, { isCreator }) => {
  const apiURL = `https://api.maher-zubair.tech/nsfw/blowjob`;
  
  try {
    const response = await axios.get(apiURL);
    const { url } = response.data;
    console.log(response.data);

    if (url) {
      const msg = `╔══════⊰⊱══════╗
              𝓒𝓡𝓐𝓩𝓨 𝓜𝓓 𝓝𝓢𝓕𝓦
╚══════⊰⊱══════╝


           ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷`;

      await Void.sendMessage(citel.chat, {
        image: {
          url: url,
        },
        caption: msg,
      }, {
        quoted: citel,
      });
    } else {
      citel.reply('Image not found.');
    }
  } catch (error) {
    console.error('Error when recovering the image:', error);
    citel.reply('An error occurred while retrieving the image. Please try again later.');
  }
});
//===========================================================================================
cmd({
  pattern: "fucks",
  desc: "Retrieve and send an NSFW image",
  category: "nsfw",
  react: "🏳️‍⚧️",
  filename: __filename
},

async (Void, citel, text, { isCreator }) => {
  const apiURL = `https://api.maher-zubair.tech/nsfw/fuck`;
  
  try {
    const response = await axios.get(apiURL);
    const { url } = response.data;
    console.log(response.data);

    if (url) {
      const msg = `╔══════⊰⊱══════╗
              𝓒𝓡𝓐𝓩𝓨 𝓜𝓓 𝓝𝓢𝓕𝓦
╚══════⊰⊱══════╝


           ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷`;

      await Void.sendMessage(citel.chat, {
        image: {
          url: url,
        },
        caption: msg,
      }, {
        quoted: citel,
      });
    } else {
      citel.reply('Image not found.');
    }
  } catch (error) {
    console.error('Error when recovering the image:', error);
    citel.reply('An error occurred while retrieving the image. Please try again later.');
  }
});

//===========================================================================================

