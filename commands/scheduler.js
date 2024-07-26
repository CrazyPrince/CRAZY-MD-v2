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

 const { tlang,sck,prefix,cmd } = require('../lib')
 cmd({
     pattern: "amute",
     desc: "sets auto mute time in group.",
     category: "moderation",
 },
 async(Void, citel, text,{ isCreator }) => {
     if (!isCreator) return citel.reply(tlang().owner)
     if(!citel.isGroup) return citel.reply(tlang().group)
     if(!text.split(':')[1]) return citel.reply(`Please provide correct form.\nEg: setmute ${prefix}22:00`)
     //if(!Number.isInteger(text.split(':')[0])) return citel.reply(`Please provide correct form.\nEg: setmute ${prefix}22:00`);
     //if(!Number.isInteger(text.split(':')[1])) return citel.reply(`Please provide correct form.\nEg: setmute ${prefix}22:00`)
           let Group = await sck.findOne({ id: citel.chat })
             if (!Group) {
                 await new sck({ id: citel.chat, mute: text }).save()
                 return citel.reply('Mute added.')
             } else {
                 await await sck.updateOne({ id: citel.chat }, { mute:text })
                 return citel.reply(`_Mute added for ${text} successfully._`)     
             }      
 }
 )

 //--------------------------------------------------------------------------------
 cmd({
    pattern: "aunmute",
    desc: "sets unmute time in group.",
    category: "moderation",
},
async(Void, citel, text,{ isCreator }) => {
    if (!isCreator) return citel.reply(tlang().owner)
    if(!citel.isGroup) return citel.reply(tlang().group)
    if(!text.split(':')[0]) return citel.reply(`Please provide correct form.\nEg: setmute ${prefix}22:00`)
   // if(!Number.isInteger(text.split(':')[0])) return citel.reply(`Please provide correct form.\nEg: setmute ${prefix}22:00`);
   // if(!Number.isInteger(text.split(':')[1])) return citel.reply(`Please provide correct form.\nEg: setmute ${prefix}22:00`)
          let Group = await sck.findOne({ id: citel.chat })
            if (!Group) {
                await new sck({ id: citel.chat, unmute: text }).save()
                return citel.reply('Mute added.')
            } else {
                await await sck.updateOne({ id: citel.chat }, { unmute:text })
                return citel.reply(`_Unmute updated for ${text} successfully._`)
                
            }      
}
)
 //--------------------------------------------------------------------------------
 cmd({
    pattern: "dunmute",
    desc: "Delete unmute from group.",
    category: "moderation",
},
async(Void, citel, text,{ isCreator }) => {
    if (!isCreator) return citel.reply(tlang().owner)
    if(!citel.isGroup) return citel.reply(tlang().group)
          let Group = await sck.findOne({ id: citel.chat })
            if (!Group) {
                return citel.reply('There\'s no unmute set in group.')
            } else {
                await await sck.updateOne({ id: citel.chat }, { unmute:'false' })
                return citel.reply('Unmute deleted successfully.')
                
            }      
}
)
 //--------------------------------------------------------------------------------
 cmd({
    pattern: "dmute",
    desc: "Delete mute from group.",
    category: "moderation",
},
async(Void, citel, text,{ isCreator }) => {
    if (!isCreator) return citel.reply(tlang().owner)
    if(!citel.isGroup) return citel.reply(tlang().group)
          let Group = await sck.findOne({ id: citel.chat })
            if (!Group) {
                return citel.reply('There\'s no mute set in group.')
            } else {
                await await sck.updateOne({ id: citel.chat }, { mute:'false' })
                return citel.reply('Mute deleted successfully.')
                
            }      
}
)
 //--------------------------------------------------------------------------------
