
const { sck1, tiny, fancytext, cmd } = require('../lib/')
const axios = require('axios')


cmd({
  pattern: "yuri",
  desc: "Récupérer et envoyer une image NSFW Yuri",
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
      const msg = `Voici une image Yuri :`;

      await Void.sendMessage(citel.chat, {
        image: {
          url: url,
        },
        caption: msg,
      }, {
        quoted: citel,
      });
    } else {
      citel.reply('Image non trouvée.');
    }
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'image :', error);
    citel.reply('Une erreur est survenue lors de la récupération de l\'image. Veuillez réessayer plus tard.');
  }
});