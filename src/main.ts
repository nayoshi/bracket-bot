import { CreateThread } from "./helper";

require('dotenv').config()
const {Client, MessageEmbed} = require('discord.js');
const bot = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

CreateThread(function(){
  if (process.env['CHALLONGE_API'] === undefined || process.env['CHALLONGE_API'] === '') {
    throw 'challonge_api is not defined in the .env. copy example.env and rename to .env'
  }
  if (process.env['DISCORD_KEY'] === undefined || process.env['DISCORD_KEY'] === '') {
    throw 'DISCORD_KEY is not defined in the .env. copy example.env and rename to .env'
  }
  CreateThread(function() {
    bot.login(process.env['DISCORD_KEY'])
  })
})

bot.on('ready', () => {
  console.log('competition bot is ready!')

})

// function GrabJSONFromURL() : String {
//     return ""
// }

// GrabJSONFromURL = async(link) => {
//   try{
//     let response = await timeout(4000, fetch("http://" + config.BaseURL + ":" + config.Port + "/" + link + ".json"))
//     let body = await response.text()
//     return JSON.parse(body)
//   } catch {
//     return null
//   }
// }