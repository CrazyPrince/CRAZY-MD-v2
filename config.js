const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
process.env.OWNER_NUMBER = process.env.OWNER_NUMBER || '23675969444'
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Krishna:pss968048@cluster0.4rfuzro.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'crazycvv@gmail.com'
global.github = 'https://github.com/CrazyPrince/CRAZY-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || "237620114013"
global.devs = "237620114013";
global.website = 'https://github.com/CrazyPrince/CRAZY-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/984e15c49561a5dd9d112.jpg'






module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'Crazy Bot' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'CRAZY MD' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? CRAZY-MD-WHATSAPP-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVBaTDlCR1VsZGZWY1FDVEJjRE9ZaGVSNkFCdTlyZWNzZmdialprYjBHOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicnVWZ2NzRFpIdVIxZGNiKzd2eDFwL3JxZHNsZTQxZ0x4dUZNVzhHSDVrMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTEVKQkdtek5wRnRldDBwZ3FZR2h6Y3VGT3EzWlE1L0FKa01rV2hpYUg0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkQWZPd0xUZWI5QXB6SVg3cExnbjA5SHhzNDBUQXUxcVF1bmZKYWFKekF3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldBeGhaeHlhWnQ5c2JTV3dlc3FUNXdNaWtxZmp4aDk4N2E0WnhDVldkMDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllRWlZuYVkxS0VLUEhvZDJ1RDZyMCtNdjdlbXhiWmtBK1Z0TFFrRkdhV0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY090WG9VaTA1dW5IMldLVUkzd05obi9XODdvenNKK0dNOGtJcTUwbWJHND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiODQ1RnczRXFtNXRQTVVncmxTN0ozQTg4UjhaVWVuRGhQSXdja205WDdpST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InN5bnZLVXkwalZxZG1CUWxjSTcvV0xiVDd4MzF3c3ZyZ1ErSDB5NzcrSy9CanJZVjlRbTJJTmM0MkpUdDkzY21QTmlaK1ZlaGVnWmFheDEzL3l5eGhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAxLCJhZHZTZWNyZXRLZXkiOiJkTVUza2QrQk5wYlQ1a2RVcDM0UkVLQi9XVlZweWVDdytaRm5CaGdvbmNJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJIUzM3ZzY0dFJXcXhwSGxrUDkyWjVRIiwicGhvbmVJZCI6ImY4MWVhNmU5LTQxMzEtNGFlMy05ZWIyLWEzZDQzOWE0ODgzYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyS2R0dTNHTU11NVFzSDVBcnUwMHlGemY1K3M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQnk5clVSOGRBVHVsTktFQkpZa3VSb1ExWElZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRNNjRYWjQzIiwibWUiOnsiaWQiOiIyMzY3NTk2OTQ0NDoyMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwk4qI8JKGnOKAoOKAosWBxaxYxa4kIMOQxZjEksW4w4XFgSDEnsSkw5jFnsWmxKYg4oCi4oCg8JKGnPCTionqp4IifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xUTzVJNEhFUHFweExZR0dCQWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlNmWTFua2NGdHkzN0FVZHhERGlqNkdJK1QwRnd3djc5US90LzhzQjdJVkE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik4vVkpHYnBoOFM5Ym1YR09UZ1p0TmE4aGdPa1lUbEM3UThUV3JvUjBhaTloM1FnMWdjU3dyUHdOREtvRVNDd2JTdTJ6Q2JzNWVvN3FhN0xyOGZHbEFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJZTFpoUU9HOE9YN2xCby96aURGZHM1YjIyN2ZVOEN4Z3YvRDJma2pyMGdob1dRZkRTYWZWTG4xSjRDZytZNTNJa0M5RC8xWlZYQ1pINkNBN2hXYWJqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNjc1OTY5NDQ0OjIwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVuMk5aNUhCYmN0K3dGSGNRdzRvK2hpUGs5QmNNTCsvVVA3Zi9MQWV5RlEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjQ5Nzg0NDF9 : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'CRAZY_MD' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'Crazy-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  GENIUS_API_KEY:  process.env.GENIUS_API_KEY === undefined ? '6vdum57Wo2tsKxaEGKJcvNHeSo1sd9oNTcPpDZD8E9v3mUh0jArn5TSvuvgmZLIs' : process.env.GENIUS_API_KEY,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'delete' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'Hey bruh, I,m Crazy  Md...Alive Now...' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.1' : process.env.VERSION,
  LANG: process.env.THEME|| 'CRAZY',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE,
  LG: process.env.LG === undefined ? 'false' : process.env.LG,
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
