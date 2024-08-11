const axios = require('axios')
const pino = require("pino");
const { sck1, tiny, fancytext, cmd } = require('../lib/')
const fs = require('fs-extra');
const { exec } = require('child_process')
const fetch = (text) => import('node-fetch').then(({ default: fetch }) => fetch(text));


//=========================================================================================================
cmd({
  pattern: "fb",
  desc: "Download a Facebook video",
  category: "downloader",
  use: 'fb <link>',
  react: "🎦",
  filename: __filename
},

async (Void, citel, text, { isCreator }) => {
  if (!text) {
    return citel.reply('Please provide a link.');
  }

  const apiURL = `https://api.maher-zubair.tech/download/alldownload?url=${encodeURIComponent(text)}`;

  try {
    const response = await axios.get(apiURL);
    const { result } = response.data;
    console.log(response.data)

    if (result && result.medias && result.medias.length > 0) {
      const videoUrl = result.medias[0].url;
      const title = result.title;
      let msg = `𝓕𝓐𝓒𝓔𝓑𝓞𝓞𝓚 𝓥𝓘𝓓𝓔𝓞 𝓓𝓞𝓦𝓝𝓛𝓞𝓐𝓓𝓔𝓡
      
      𝓣𝓲𝓽𝓵𝓮 : *${title}*`;
       let buttonMessaged = {
    video: { url: videoUrl },
    caption: msg,
    footer: 'Mᴀᴅᴇ ᴡɪᴛʜ 💜',
    headerType: 4,
    contextInfo: {
      externalAdReply: {
        title: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷",
        body: "(ᴄʟɪᴄᴋ ʜᴇʀᴇ)",
        thumbnail: log0,
        mediaType: 4,
        mediaUrl: '',
        sourceUrl: `https://whatsapp.com/channel/0029VaV3DymGE56jsC8j1M3c`,
      },
    },
  };
    await Void.sendMessage(citel.chat, buttonMessaged, { quoted: citel });
    } else {
      citel.reply('Aucune vidéo trouvée.');
    }
  } catch (error) {
    console.error('Erreur lors de la récupération de la vidéo :', error);
    citel.reply('Une erreur est survenue lors de la récupération de la vidéo. Veuillez réessayer plus tard.');
  }
});

//---------------------------------------------------------------------------
cmd({
  pattern: "gdrive",
  desc: "Download a google drive file",
  category: "downloader",
  use: '<link>',
  react: "⬇️",
  filename: __filename
},

async (Void, citel, text, { isCreator }) => {
  if (!text) {
    return citel.reply('Please provide a link.');
  }

  const apiURL = `https://api.maher-zubair.tech/download/gdrive?url=${encodeURIComponent(text)}`;

  try {
    const response = await axios.get(apiURL);
    const { result } = response.data;
    console.log(response.data);

    if (result && result.downloadUrl) {
      const mime = result.mimetype;
      const nom = result.fileName;
      const lien = result.downloadUrl;
      const msg = `𝓒𝓡𝓐𝓩𝓨_𝓜𝓓 𝓖𝓞𝓞𝓖𝓛𝓔 𝓓𝓡𝓘𝓥𝓔 𝓓𝓞𝓦𝓝𝓛𝓞𝓐𝓓𝓔𝓡

𝓝𝓪𝓶𝓮: ${nom},
𝓢𝓲𝔃𝓮: ${result.fileSize}`;
      citel.reply(msg);
      await Void.sendMessage(citel.chat, {
        document: { url: lien },
        mimetype: mime,
        title: nom,
        fileName: nom
      });
    } else {
      citel.reply('Fichier non trouvé.');
    }
  } catch (error) {
    console.error('Error when retrieving the media :', error);
    citel.reply('An error occurred while retrieving the media. Please try again later.');
  }
});


//---------------------------------------------------------------------------

cmd({
  pattern: "wamods",
  desc: "Download a WhatsApp mod",
  category: "downloader",
  use: '<gbwa> <waplus> <ogwa> <anwa> <fmwa> <yowa> <aerowa> <goldwa> <karinawa>',
  react: "⬇️",
  filename: __filename
},

async (Void, citel, text, { isCreator }) => {
  if (!text) return citel.reply(`Type: ${prefix}gbwa ${prefix}waplus ${prefix}ogwa ${prefix}anwa ${prefix}fmwa ${prefix}yowa ${prefix}aerowa ${prefix}goldwa ${prefix}karinawa.`);
  if (!['gbwa', 'waplus', 'ogwa', 'anwa', 'fmwa', 'yowa', 'aerowa', 'goldwa', 'karinawa'].includes(text)) {
    return citel.reply(`Type: ${prefix}gbwa ${prefix}waplus ${prefix}ogwa ${prefix}anwa ${prefix}fmwa ${prefix}yowa ${prefix}aerowa ${prefix}goldwa ${prefix}karinawa.`);
  }
  const apiURL = `https://api.maher-zubair.tech/whatsapp/wamods`;

  try {
    const response = await axios.get(apiURL);
    const { url } = response.data;
    console.log(response.data);
    const lienn = 'url.' + text;
    const lien = lienn;
    let msg = `𝓒𝓡𝓐𝓩𝓨_𝓜𝓓 𝓦𝓐 𝓜𝓞𝓓𝓢 𝓓𝓞𝓦𝓝𝓛𝓞𝓐𝓓𝓔𝓡

𝓝𝓪𝓶𝓮: ${text},
𝓢𝓲𝔃𝓮: undefined
𝓛𝓲𝓷𝓴: ${lien}`;
    citel.reply(msg);
    if (result && result.text && result.text.length > 0) {
      const link = 'result.' + text;
      const title = text;

      await Void.sendMessage(citel.chat, {
        document: { url: link },
        mimetype: "application/vnd.android.package-archive",
        title: text + '.apk',
        fileName: text + '.apk'
      });
    } else {
      citel.reply('No mods found.');
    }
  } catch (error) {
    console.error('Error fetching mods:', error);
    citel.reply('An error occurred while fetching mods. Please try again later.');
  }
});


//---------------------------------------------------------------------------
cmd({
  pattern: "mediafire",
  desc: "Download a mediafire file",
  category: "downloader",
  use: '<link>',
  react: "⬇️",
  filename: __filename
},

async (Void, citel, text, { isCreator }) => {
  if (!text) {
    return citel.reply('Veuillez fournir un lien.');
  }

  const apiURL = `https://api.maher-zubair.tech/download/mediafire?url=${encodeURIComponent(text)}`;

  try {
    const response = await axios.get(apiURL);
    const { result } = response.data;
    console.log(response.data);

    if (result && result.link) {
      const type = result.mime;
      const nom = result.name;
      const lien = result.link;
      const sizeStr = result.size;
      const last = result.date;

      // Fonction de conversion de la taille en MB
      const convertSizeToMB = (sizeStr) => {
        const sizeValue = parseFloat(sizeStr);
        const unit = sizeStr.match(/[a-zA-Z]+/)[0].toUpperCase(); // Récupère l'unité (KB, MB, GB, TB)
        
        switch(unit) {
          case 'KB':
            return sizeValue / 1024;
          case 'MB':
            return sizeValue;
          case 'GB':
            return sizeValue * 1024;
          case 'TB':
            return sizeValue * 1024 * 1024;
          default:
            return sizeValue; // Si aucune unité trouvée, retourne la valeur brute
        }
      };

      const sizeInMB = convertSizeToMB(sizeStr);

      const msg = `𝓒𝓡𝓐𝓩𝓨_𝓜𝓓 𝓜𝓔𝓓𝓘𝓐𝓕𝓘𝓡𝓔 𝓓𝓞𝓦𝓝𝓛𝓞𝓐𝓓𝓔𝓡

𝓝𝓪𝓶𝓮: ${nom},
𝓢𝓲𝔃𝓮:    [${sizeStr}],
𝓛𝓪𝓼𝓽𝓤𝓹𝓭𝓪𝓽𝓮: ${last}`;

      citel.reply(msg);

      if (sizeInMB > 250) {
        return citel.reply('The file is too large to be sent (over than 100 MB).');
      } else {
        await Void.sendMessage(citel.chat, {
          document: { url: lien },
          mimetype: type,
          title: nom,
          fileName: nom
        });
      }
    } else {
      citel.reply('Fichier non trouvé.');
    }
  } catch (error) {
    console.error('Erreur lors de la récupération du média :', error);
    citel.reply('Une erreur est survenue lors de la récupération du média. Veuillez réessayer plus tard.');
  }
});

//---------------------------------------------------------------------------
cmd({
  pattern: "apk",
  desc: "To download apk",
  category: "downloader",
  use: '<name>',
  react: "⬇️",
  filename: __filename
},

async (Void, citel, text, { isCreator }) => {
  if (!text) {
    return citel.reply('Veuillez fournir un nom.');
  }

  const apiURL = `https://api.maher-zubair.tech/download/apk?id=${text}`;

  try {
    const response = await axios.get(apiURL);
    const { result } = response.data;
    console.log(response.data);
    if (result && result.dllink) {
      const type = result.mime;
      const nom = result.name;
      const lien = result.dllink;
      const sizeStr = result.size;
      const last = result.lastup;
      const img = result.icon;
      const msg = `𝓒𝓡𝓐𝓩𝓨_𝓜𝓓 𝓜𝓔𝓓𝓘𝓐𝓕𝓘𝓡𝓔 𝓓𝓞𝓦𝓝𝓛𝓞𝓐𝓓𝓔𝓡

𝓝𝓪𝓶𝓮: ${nom},
𝓢𝓲𝔃𝓮:    [${sizeStr}],
𝓛𝓪𝓼𝓽𝓤𝓹𝓭𝓪𝓽𝓮: ${last}`;
await Void.sendMessage(citel.chat, { 
    image: img,
    caption: msg
},{ quoted: citel });
      // Fonction de conversion de la taille en MB
      const convertSizeToMB = (sizeStr) => {
        const sizeValue = parseFloat(sizeStr);
        const unit = sizeStr.match(/[a-zA-Z]+/)[0].toUpperCase(); // Récupère l'unité (KB, MB, GB, TB)
        
        switch(unit) {
          case 'KB':
            return sizeValue / 1024;
          case 'MB':
            return sizeValue;
          case 'GB':
            return sizeValue * 1024;
          case 'TB':
            return sizeValue * 1024 * 1024;
          default:
            return sizeValue; // Si aucune unité trouvée, retourne la valeur brute
        }
      };

      const sizeInMB = convertSizeToMB(sizeStr);

      if (sizeInMB > 250) {
        return citel.reply('The file is too large to be sent (over than 250 MB).');
      } else {
        await Void.sendMessage(citel.chat, {
          document: { url: lien },
          mimetype: type,
          title: nom + '.apk',
          fileName: nom + '.apk'
        });
      }
    } else {
      citel.reply('File not found.');
    }
  } catch (error) {
    console.error('Error when retrieving the media:', error);
    citel.reply('An error occurred while retrieving the media. Please try again later.');
  }
});

//------------------------------------------------------------_________________________________________________

cmd({
  pattern: "lyrics",
  desc: "Télécharger des paroles",
  category: "downloader",
  use: '<titre>',
  react: "🎙️",
  filename: __filename
},
async (Void, citel, text, { isCreator }) => {

    if (!text) {
        return citel.reply(`Please provide the name of a song. Use : ${prefix}lyrics [song name]`);
    }

    const searchMessage = await citel.reply(`🔍 Recherche des paroles : ${text}`);

    try {
        const response = await axios.get(`https://samirxpikachuio.onrender.com/lyrics?query=${encodeURIComponent(text)}`);
        const { title, artist, lyrics, image } = response.data;
        let msg = `𝓒𝓡𝓐𝓩𝓨 𝓜𝓓 𝓖𝓔𝓝𝓘𝓤𝓢 𝓜𝓘𝓒 𝓛𝓨𝓡𝓘𝓒𝓢\n
        𝓛𝔂𝓻𝓲𝓬𝓼 : ${lyrics}\n\n𝓝𝓪𝓶𝓮 𝓸𝓯 𝓽𝓱𝓮 𝓼𝓸𝓷𝓰 : ${title}\n\n𝓐𝓾𝓽𝓱𝓸𝓻 : ${artist}`;
        const img = image;

       let buttonMessaged = {
    image: { url: img },
    caption: msg,
    footer: 'Mᴀᴅᴇ ᴡɪᴛʜ 💜',
    headerType: 4,
    contextInfo: {
      externalAdReply: {
        title: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷",
        body: "(ᴄʟɪᴄᴋ ʜᴇʀᴇ)",
        thumbnail: log0,
        mediaType: 4,
        mediaUrl: '',
        sourceUrl: `https://whatsapp.com/channel/0029VaV3DymGE56jsC8j1M3c`,
      },
    },
  };
    await Void.sendMessage(citel.chat, buttonMessaged, { quoted: citel });
    } catch (error) {
        console.error('[ERREUR]', error);
        Void.sendMessage(citel.chat, 'An error occurred while retrieving the lyrics.');
    }

    await Void.deleteMessage(citel.chat, searchMessage.key);
});

//------------------------------------------------------------_________________________________________________

    
//------------------------------------------------------------_________________________________________________

cmd({
  pattern: "ss",
  desc: "website screenshots",
  category: "search",
  use: '<titre>',
  react: "🌐",
  filename: __filename
}, async (Void, citel, text, { isCreator }) => {
   if (!text) {
      return citel.reply(`Invalid input⚠️\nPlease use:\n${prefix}scr <url> \nor\n${prefix}scr -g <text>.`);
    }

  let url;
  if (!text.includes('http') && !text.includes('https')) {
    if (text.includes(' ')) {
      citel.reply(`Invalid text input with spaces⚠️\nPlease use:\n${prefix}scr  YourText`);
      return;
    }
    url = `https://www.google.com/search?q=${text}&tbm=isch`;
  } else {
    url = text;
    if (!url.match(/^https?:\/\/.+$/)) {
      url = `https://${url}`;
    }
  }

  const apiURL = `https://image.thum.io/get/width/1920/crop/400/fullpage/noanimate/${url}`;

  try {
    const res = await fetch(apiURL);
    if (!res.ok) {
      citel.reply(`API not responding. Please try again later.`);
      return;
    }

    const msg = `𝓒𝓡𝓐𝓩𝓨 𝓜𝓓 𝓢𝓒𝓡𝓔𝓔𝓝𝓢𝓗𝓞𝓣𝓢 𝓓𝓞𝓦𝓝𝓛𝓞𝓐𝓓𝓔𝓡\n_Here is the screenshot._`;



     let buttonMessaged = {
    image: { url: apiURL },
    caption: msg,
    footer: 'Mᴀᴅᴇ ᴡɪᴛʜ 💜',
    headerType: 4,
    contextInfo: {
      externalAdReply: {
        title: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷",
        body: "(ᴄʟɪᴄᴋ ʜᴇʀᴇ)",
        thumbnail: log0,
        mediaType: 4,
        mediaUrl: '',
        sourceUrl: `https://whatsapp.com/channel/0029VaV3DymGE56jsC8j1M3c`,
      },
    },
  };
    await Void.sendMessage(citel.chat, buttonMessaged, { quoted: citel });
  } catch (error) {
    console.error('[ERROR]', error);
    citel.reply('An error occurred while processing the command.');
  }
});
//------------------------------------------------------------_________________________________________________

cmd({
  pattern: "twitter",
  desc: "search for twitter videos",
  category: "downloader",
  use: '<link>',
  react: "✖️",
  filename: __filename
}, async (Void, citel, text, { isCreator }) => {
    if (text.length === 0) {
        return citel.reply("Please provide a search query. Usage: .twitter <link>");
    }
    
    const apiURL = `https://api.diego-ofc.store/xdown?url=${encodeURIComponent(text)}`;

    try {
        const response = await axios.get(apiURL);
        const { media, date, likes, replies, retweets, authorName, authorUsername } = response.data;

        if (!media || media.length === 0) {
            return citel.reply("No videos found for your query.");
        }

        const videoUrl = media[0].url;
        let msg = `𝓒𝓡𝓐𝓩𝓨 𝓜𝓓 𝓣𝓦𝓔𝓔𝓣𝓔𝓡 𝓧 𝓓𝓛\n
_Here's your twitter x video 🎦_

𝓛𝓲𝓷𝓴 : ${text}

𝓐𝓾𝓽𝓱𝓸𝓻 : *${authorName}*

𝓟𝓼𝓮𝓾𝓭𝓸 : *${authorUsername}*

𝓤𝓹𝓵𝓸𝓪𝓭 : *${date}*

𝓛𝓲𝓴𝓮𝓼 & 𝓡𝓮𝓹𝓵𝓲𝓮𝓼 : *[ ${likes} | ${replies} ]*

ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷`;

       let buttonMessaged = {
    video: { url: videoUrl },
    caption: msg,
    footer: 'Mᴀᴅᴇ ᴡɪᴛʜ 💜',
    headerType: 4,
    contextInfo: {
      externalAdReply: {
        title: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷",
        body: "(ᴄʟɪᴄᴋ ʜᴇʀᴇ)",
        thumbnail: log0,
        mediaType: 4,
        mediaUrl: '',
        sourceUrl: `https://whatsapp.com/channel/0029VaV3DymGE56jsC8j1M3c`,
      },
    },
  };
    await Void.sendMessage(citel.chat, buttonMessaged, { quoted: citel });
    } catch (error) {
        console.error('Error fetching Twitter videos:', error);
        citel.reply("An error occurred while searching for Twitter videos.");
    }
});

//------------------------------------------------------------_________________________________________________

cmd({
  pattern: "spotify",
  desc: "Download music from the given spotify link",
  category: "downloader",
  use: '<link>',
  react: "🎶",
  filename: __filename
}, async (Void, citel, text, { isCreator }) => {
    if (!text) {
        return citel.reply("Please provide a link. Usage: .spotify <link>");
    }

    const apiURL = `https://api.diego-ofc.store/spotifydl?url=${encodeURIComponent(text)}`;

    try {
        const response = await axios.get(apiURL);
        const { thumbnail, title, artist, duration, preview, url } = response.data.data;

        let infoMsg = `𝓒𝓡𝓐𝓩𝓨 𝓜𝓓 𝓢𝓟𝓞𝓣𝓘𝓕𝓨 𝓓𝓛
        
*𝓣𝓲𝓽𝓵𝓮*: *${title}*
*𝓐𝓻𝓽𝓲𝓼𝓽*: *${artist.name}*
${artist.external_urls.spotify}
*𝓓𝓾𝓻𝓪𝓽𝓲𝓸𝓷*: ${duration}

*𝓟𝓻𝓮𝓿𝓲𝓮𝔀*: ${preview}
`;
       let buttonMessaged = {
    image: { url: thumbnail },
    caption: infoMsg,
    footer: 'Mᴀᴅᴇ ᴡɪᴛʜ 💜',
    headerType: 4,
    contextInfo: {
      externalAdReply: {
        title: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷",
        body: "(ᴄʟɪᴄᴋ ʜᴇʀᴇ)",
        thumbnail: log0,
        mediaType: 4,
        mediaUrl: '',
        sourceUrl: `https://whatsapp.com/channel/0029VaV3DymGE56jsC8j1M3c`,
      },
    },
  };
    await Void.sendMessage(citel.chat, buttonMessaged, { quoted: citel });
        await Void.sendMessage(citel.chat, {
            audio: {
                url: url,
            },
            mimetype: 'audio/mpeg',
            ptt: false
        }, {
            quoted: citel,
        });

    } catch (error) {
        console.error('Error fetching music:', error);
        citel.reply("An error occurred while downloading the music.");
    }
});
//=========================================================================================

cmd({
  pattern: "spotifys",
  desc: "List all music data from spotify query research",
  category: "downloader",
  react: "🔍",
  filename: __filename
}, async (Void, citel, text, { isCreator }) => {
    if (!text) {
        return citel.reply("Please provide a link. Usage: .spotifys <query>");
    }

    const apiUrl = `https://api.diego-ofc.store/spotifysearch?query=${encodeURIComponent(text)}`;
    try {
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (data.status && data.data.length > 0) {
            let message = `🎵 𝓒𝓡𝓐𝓩𝓨 𝓜𝓓 𝓢𝓟𝓞𝓣𝓘𝓕𝓨 𝓢𝓞𝓝𝓖 🎵\n\n`;

            data.data.forEach((item, index) => {
                message += `- ${index + 1}• 🗿 𝓣𝓲𝓽𝓵𝓮 : *${item.title}*\n`;
                message += `⏱️ 𝓓𝓾𝓻𝓪𝓽𝓲𝓸𝓷 : [ ${item.duration} ]\n`;
                message += `🔥 𝓟𝓸𝓹𝓾𝓵𝓪𝓻𝓲𝓽𝔂 : ${item.popularity}\n`;
                message += `🔗 𝓤𝓡𝓛 𝓢𝓹𝓸𝓽𝓲𝓯𝔂 : ${item.url}\n`;
                message += `🎤 𝓟𝓻𝓮𝓿𝓲𝓮𝔀 : ${item.preview}\n\n`;
            });
           let buttonMessaged = {
    image: { url: 'https://telegra.ph/file/4aaac205eff63dae2b7f7.jpg' },
    caption: message,
    footer: 'Mᴀᴅᴇ ᴡɪᴛʜ 💜',
    headerType: 4,
    contextInfo: {
      externalAdReply: {
        title: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷",
        body: "(ᴄʟɪᴄᴋ ʜᴇʀᴇ)",
        thumbnail: log0,
        mediaType: 4,
        mediaUrl: '',
        sourceUrl: `https://whatsapp.com/channel/0029VaV3DymGE56jsC8j1M3c`,
      },
    },
  };
    await Void.sendMessage(citel.chat, buttonMessaged, { quoted: citel });
        } else {
            await Void.sendMessage(citel.chat, { text: "No data found in the API." }, { quoted: citel });
        }
    } catch (error) {
        await Void.sendMessage(citel.chat, { text: "An error occurred while retrieving data from the API." }, { quoted: citel });
        console.error(error);
    }
});
//=====================================================================================================================================================

//==========================================================================================================================

cmd({
  pattern: "song",
  desc: "Find song from Spotify search and download it",
  category: "downloader",
  use: '<query>',
  react: "🎶",
  filename: __filename
}, async (Void, citel, text, { isCreator }) => {
    if (!text) {
        return citel.reply("Please provide a search query. Usage: .findanddownload <query>");
    }

    const searchApiUrl = `https://api.diego-ofc.store/spotifysearch?query=${encodeURIComponent(text)}`;
    const downloadApiUrl = 'https://api.diego-ofc.store/spotifydl'; // URL de l'API pour le téléchargement

    try {
        const searchResponse = await axios.get(searchApiUrl);
        const searchData = searchResponse.data;

        if (!searchData.status || !searchData.data || searchData.data.length === 0) {
            return citel.reply("No music data found for your query.");
        }

        const firstSong = searchData.data[0];

        if (!firstSong) {
            return citel.reply("No song found.");
        }

        const downloadResponse = await axios.get(`${downloadApiUrl}?url=${encodeURIComponent(firstSong.url)}`);
        const downloadData = downloadResponse.data;

        if (downloadData.status && downloadData.data && downloadData.data.url) {
            let infoMsg = `🎵 𝓒𝓡𝓐𝓩𝓨 𝓜𝓓 𝓢𝓟𝓞𝓣𝓘𝓕𝓨 𝓢𝓞𝓝𝓖 𝓓𝓛\n\n`;
            infoMsg += `*𝓣𝓲𝓽𝓵𝓮:* *${firstSong.title}*\n`;
            infoMsg += `*𝓓𝓾𝓻𝓪𝓽𝓲𝓸𝓷:* *${firstSong.duration}*\n`;
            infoMsg += `*𝓟𝓸𝓹𝓾𝓵𝓪𝓻𝓲𝓽𝔂:* *${firstSong.popularity}*\n`;
            infoMsg += `*𝓟𝓻𝓮𝓿𝓲𝓮𝔀:* *${firstSong.preview}*\n`;

           let buttonMessaged = {
    image: { url: downloadData.data.thumbnail },
    caption: infoMsg,
    footer: 'Mᴀᴅᴇ ᴡɪᴛʜ 💜',
    headerType: 4,
    contextInfo: {
      externalAdReply: {
        title: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷",
        body: "(ᴄʟɪᴄᴋ ʜᴇʀᴇ)",
        thumbnail: log0,
        mediaType: 4,
        mediaUrl: '',
        sourceUrl: `https://whatsapp.com/channel/0029VaV3DymGE56jsC8j1M3c`,
      },
    },
  };
    await Void.sendMessage(citel.chat, buttonMessaged, { quoted: citel });

            await Void.sendMessage(citel.chat, {
                audio: {
                    url: downloadData.data.url,
                },
                mimetype: 'audio/mpeg',
                ptt: false
            }, {
                quoted: citel,
            });
        } else {
            await Void.sendMessage(citel.chat, { text: "Failed to download the song." }, { quoted: citel });
        }
    } catch (error) {
        await Void.sendMessage(citel.chat, { text: "An error occurred during the process." }, { quoted: citel });
        console.error(error);
    }
});
//=====================================================================================================================

cmd({
  pattern: "gpt",
  desc: "to generate prompt from OpenAI",
  category: "AI",
  react: "🧠",
  filename: __filename
},

async (Void, citel, text) => {
  if (!text) {
    return citel.reply(`Please provide me a query`);
  }

  // Liste des mots à vérifier
  const greetings = ["hi", "hello", "bonjour", "hey", "salut", "hola", "morning", "gn", "gm", "yo", "crazy"];
  
  // Vérifier si le texte correspond à l'un des mots (en ignorant la casse)
  if (greetings.includes(text.toLowerCase())) {
    return citel.reply('Hi, I am CrazyMd. How can I help you today ? My bruh 🙂‍↕️');
  }

  try {
    const apiURL = `https://api.maher-zubair.tech/ai/chatgpt2?q=${encodeURIComponent(text)}`;
    const response = await axios.get(apiURL);
    const { result } = response.data;
    console.log(response.data);

    await Void.sendMessage(citel.chat, { text: 'ᴄʀᴀᴢʏ ɢᴘᴛ: ' + result }, { quoted: citel });
  } catch (error) {
    console.error('Error:', error);
    citel.reply('An error occurred. Please try again later.');
  }
});

//===========================================================================================
cmd({
  pattern: "math",
  desc: "to resolve math exercices",
  category: "AI",
  react: "🧠",
  filename: __filename
},

async (Void, citel, text) => {
  if (!text) {
    return citel.reply(`Please provide me a math problem`);
  }

  // Liste des mots à vérifier
  const greetings = ["hi", "hello", "bonjour", "hey", "salut", "hola", "morning", "gn", "gm", "yo", "crazy"];
  
  // Vérifier si le texte correspond à l'un des mots (en ignorant la casse)
  if (greetings.includes(text.toLowerCase())) {
    return citel.reply('Hi, I am CrazyMd. How can I help you today ? My bruh 🙂‍↕️');
  }

  try {
    const apiURL = `https://api.maher-zubair.tech/ai/mathssolve?q=${encodeURIComponent(text)}`;
    const response = await axios.get(apiURL);
    const { result } = response.data;
    console.log(response.data);

    await Void.sendMessage(citel.chat, { text: 'ᴄʀᴀᴢʏ ᴍᴀᴛʜ ᴀɪ: ' + result }, { quoted: citel });
  } catch (error) {
    console.error('Error:', error);
    citel.reply('An error occurred. Please try again later.');
  }
});
//===========================================================================================
cmd({
  pattern: "insult",
  desc: "to generate insults",
  category: "misc",
  react: "🤬",
  filename: __filename
},

async (Void, citel) => {

  try {
    const apiURL = `https://api.maher-zubair.tech/misc/insult`;
    const response = await axios.get(apiURL);
    const { result } = response.data;
    console.log(response.data);

    await Void.sendMessage(citel.chat, { text: result}, { quoted: citel });
  } catch (error) {
    console.error('Error:', error);
    citel.reply('An error occurred. Please try again later...');
  }
});
//===========================================================================================
cmd({
  pattern: "iosnews",
  desc: "to get daily ios tech news",
  category: "news",
  react: "📰",
  filename: __filename
},

async (Void, citel) => {

  try {
    const apiURL = `https://api.maher-zubair.tech/details/ios`;
    const response = await axios.get(apiURL);
    const { result } = response.data;
    console.log(response.data);
    
    const titre = result.title;
    const img = result.images;
    const body = result.desc;
    const lien = result.link;
    
    let msg = `╔══════⊰⊱═══════╗
              𝓒𝓡𝓐𝓩𝓨 𝓜𝓓 𝓝𝓔𝓦𝓢
╚══════⊰⊱═══════╝

𝓣𝓲𝓽𝓵𝓮 :  ${titre}

𝓛𝓲𝓷𝓴:  ${lien}

______________________________________
𝓝𝓮𝔀𝓼:  
${body}

             ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷`;

     let buttonMessaged = {
    image: { url: img },
    caption: msg,
    footer: 'Mᴀᴅᴇ ᴡɪᴛʜ 💜',
    headerType: 4,
    contextInfo: {
      externalAdReply: {
        title: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷",
        body: "(ᴄʟɪᴄᴋ ʜᴇʀᴇ)",
        thumbnail: log0,
        mediaType: 4,
        mediaUrl: '',
        sourceUrl: `https://whatsapp.com/channel/0029VaV3DymGE56jsC8j1M3c`,
      },
    },
  };
    await Void.sendMessage(citel.chat, buttonMessaged, { quoted: citel });

    
    await Void.sendMessage(citel.chat, {
        image: {
          url: img,
        },
        caption: msg,
      }, {
        quoted: citel,
      });
  } catch (error) {
    console.error('Error:', error);
    citel.reply('An error occurred. Please try again later...');
  }
});
//===========================================================================================


