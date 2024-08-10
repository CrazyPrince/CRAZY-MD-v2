const axios = require('axios')
const pino = require("pino");
const { sck1, tiny, fancytext, cmd } = require('../lib/')
const fs = require('fs-extra');
const { exec } = require('child_process')
const fetch = (text) => import('node-fetch').then(({ default: fetch }) => fetch(text));


//=========================================================================================================
cmd({
  pattern: "fb",
  desc: "Télécharger une vidéo Facebook",
  category: "downloader",
  use: 'fb <link>',
  react: "⬇️",
  filename: __filename
},

async (Void, citel, text, { isCreator }) => {
  if (!text) {
    return citel.reply('Veuillez fournir un lien.');
  }

  const apiURL = `https://api.maher-zubair.tech/download/alldownload?url=${encodeURIComponent(text)}`;

  try {
    const response = await axios.get(apiURL);
    const { result } = response.data;
    console.log(response.data)

    if (result && result.medias && result.medias.length > 0) {
      const videoUrl = result.medias[0].url;
      const title = result.title;

      await Void.sendMessage(citel.chat, { video: { url: videoUrl }, caption: `Titre : ${title}` }, { quoted: citel });
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
  desc: "Télécharger un fichier google drive",
  category: "downloader",
  use: '<link>',
  react: "⬇️",
  filename: __filename
},

async (Void, citel, text, { isCreator }) => {
  if (!text) {
    return citel.reply('Veuillez fournir un lien.');
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
    console.error('Erreur lors de la récupération du média :', error);
    citel.reply('Une erreur est survenue lors de la récupération du média. Veuillez réessayer plus tard.');
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
    const { result } = response.data;
    console.log(response.data);
    const lien = 'result.' + text;
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
  desc: "Télécharger un fichier mediafire",
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
    image: icon,
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
        return citel.reply(`Veuillez fournir le nom d'une chanson. Utilisation : ${prefix}lyrics [nom_chanson]`);
    }

    const searchMessage = await citel.reply(`🔍 Recherche des paroles : ${text}`);

    try {
        const response = await axios.get(`https://samirxpikachuio.onrender.com/lyrics?query=${encodeURIComponent(text)}`);
        const { title, artist, lyrics, image } = response.data;
        let msg = `Paroles : ${lyrics}\n\nNom de la chanson : ${title}\n\nAuteur : ${artist}`;
        const img = image;
        await Void.sendMessage(citel.chat, {
            image: {
                url: img,
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

    await Void.sendMessage(citel.chat, {
      image: {
        url: apiURL,
      },
      caption: msg,
    }, {
      quoted: citel,
    });
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
        let msg = `𝓒𝓡𝓐𝓩𝓨 𝓜𝓓 𝓣𝓦𝓔𝓔𝓣𝓔𝓡 𝓧 𝓓𝓛
_Here's your twitter video 🎦_

Link : ${text}

Author : ${authorName}

Pseudo : ${authorUsername}

Upload : ${date}

Likes & Replies : [ ${likes} | ${replies} ]

ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷`;
                
        await Void.sendMessage(citel.chat, {
            video: {
                url: videoUrl,
            },
            mimetype: 'video/mp4',
            caption: msg
        }, {
            quoted: citel,
        });
    
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
        
*Title*: *${title}*
*Artist*: *${artist.name}*
${artist.external_urls.spotify}
*Duration*: ${duration}

*Preview*: ${preview}
`;

        await Void.sendMessage(citel.chat, {
            image: { url: thumbnail },
            caption: infoMsg
        });

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
  react: "🎧",
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
            let message = `🎵 *Liste des morceaux disponibles :* 🎵\n\n`;

            data.data.forEach((item, index) => {
                message += `*${index + 1}.* 🎧 *Titre :* ${item.title}\n`;
                message += `⏱️ *Durée :* ${item.duration}\n`;
                message += `🔥 *Popularité :* ${item.popularity}\n`;
                message += `🔗 *URL Spotify :* ${item.url}\n`;
                message += `🎤 *Preview :* [Écouter](${item.preview})\n\n`;
            });

            await Void.sendMessage(citel.chat, { text: message }, { quoted: citel });
        } else {
            await Void.sendMessage(citel.chat, { text: "Aucune donnée trouvée dans l'API." }, { quoted: citel });
        }
    } catch (error) {
        await Void.sendMessage(citel.chat, { text: "Une erreur s'est produite lors de la récupération des données de l'API." }, { quoted: citel });
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
        // Étape 1 : Récupérer les données de recherche
        const searchResponse = await axios.get(searchApiUrl);
        const searchData = searchResponse.data;

        if (!searchData.status || !searchData.data || searchData.data.length === 0) {
            return citel.reply("No music data found for your query.");
        }

        // Étape 2 : Sélectionner le premier élément
        const firstSong = searchData.data[0];

        if (!firstSong) {
            return citel.reply("No song found.");
        }

        // Étape 3 : Télécharger le morceau
        const downloadResponse = await axios.get(`${downloadApiUrl}?url=${encodeURIComponent(firstSong.url)}`);
        const downloadData = downloadResponse.data;

        if (downloadData.status && downloadData.data && downloadData.data.url) {
            let infoMsg = `🎵 *Song Downloaded* 🎵\n\n`;
            infoMsg += `*Title:* ${firstSong.title}\n`;
            infoMsg += `*Duration:* ${firstSong.duration}\n`;
            infoMsg += `*Popularity:* ${firstSong.popularity}\n`;
            infoMsg += `*Preview:* ${firstSong.preview}\n`;

            await Void.sendMessage(citel.chat, {
                image: { url: downloadData.data.thumbnail },
                caption: infoMsg
            });

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


