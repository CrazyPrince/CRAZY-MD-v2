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

const { tlang, botpic, cmd, prefix, runtime, Config , sleep } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')
const fetch = require('node-fetch');
//---------------------------------------------------------------------------


//---------------------------------------------------------------------------
const token = 'ghp_Hs8bEx69bG2WPSOJyUK3bY57-JO3Eb41bA26P'; 

async function getRepoStarsAndForks(owner, repo) {
  const endpoint = `https://api.github.com/repos/${owner}/${repo}`;
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.get(endpoint, { headers });
    const data = response.data;
    return {
      stars: data.stargazers_count,
      forks: data.forks_count,
    };
  } catch (error) {
    console.error('Erreur lors de la récupération des informations du dépôt :', error.message);
    return { stars: 0, forks: 0 }; // Valeurs par défaut en cas d'erreur
  }
}

cmd({
  pattern: "repo",
  alias: ["git", "sc", "script"],
  desc: "Sends info about repo.",
  category: "general",
  filename: __filename,
}, async (Void, citel) => {
  const owner = 'CrazyPrince'; 
  const repo = 'CRAZY-MD-v2'; 
  const { stars, forks } = await getRepoStarsAndForks('CrazyPrince', 'CRAZY-MD-v2');
  let cap = `Hey ${citel.pushName}\n
*❲❒❳ Total Stars:* ${stars} stars
*❲❒❳ Forks:* ${forks} forks
*❲❒❳ Repo:* https://github.com/CrazyPrince/CRAZY-MD-v2
*❲❒❳ Group:* https://chat.whatsapp.com/Hyurt8L1oiDAXg0dadZ5mp
*❲❒❳ Deploy Your Own:*
https://dashboard.render.com/login`;
  let capp = `ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷`;
  let buttonMessaged = {
    image: { url: await botpic() },
    caption: cap,
    footer: capp,
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
  return await Void.sendMessage(citel.chat, buttonMessaged, {
    quoted: citel,
  });
});
//---------------------------------------------------------------------------
cmd({
        pattern: "status",
        alias: ["about"],
        desc: "To check bot status",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        const uptime = process.uptime();
        timestampe = speed();
        latensie = speed() - timestampe;
        let ter = `
🔰 *${tlang().title}* 🔰
*🌟Description:* A WhatsApp bot with rich features, build in NodeJs to make your WhatsApp enjoyable.
*⚡Speed:* ${latensie.toFixed(4)} ms
*🚦Uptime:* ${runtime(process.uptime())}
*🕸Version:* 0.0.1
*👤Owner:*  ${Config.ownername}

ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷`;
        let buttonMessaged = {
            image: {
                url: await botpic(),
            },
            caption: ter,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: tlang().title,
                    body: `Bot-Status`,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: ``,
                    sourceUrl: ``,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

//---------------------------------------------------------------------------
cmd({
    pattern: "theme",
    desc: "To find all themes",
    category: "general",
    filename: __filename,
},
async(Void, citel,text,{isCreator}) => {

if(!isCreator) return citel.reply(tlang().owner);
let str="*𝓐𝓵𝓵 𝓪𝓿𝓪𝓲𝓵𝓪𝓫𝓵𝓮 𝓽𝓱𝓮𝓶𝓮𝓼 𝓲𝓷 𝓒𝓡𝓐𝓩𝓨 𝓜𝓓*\n"
str+=`1. CRAZY\n2. ADAM\n3. AYANOKOJI\n4. EDITH\n5. FRIDAY\n6. GENOS\n7. GIDEON\n8. GOKU\n9. LUFFY\n10. NARUTO\n11. NEZUKO\n12. PARKER\n13. DAMSO(Coming Soon)\n\n 𝓽𝓱𝓮𝓼𝓮 𝓪𝓻𝓮 𝓽𝓱𝓮 𝓽𝓱𝓮𝓶𝓮𝓼 𝓸𝓯 𝓒𝓻𝓪𝔃𝔂𝓜𝓭 𝓤𝓼𝓮𝓻𝓫𝓸𝓽.\_𝓡𝓮𝓹𝓵𝔂 ${prefix}setvar THEME:LUFFY`
return citel.reply(str)
    
}
)