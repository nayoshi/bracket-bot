const {Client, MessageEmbed} = require('discord.js');

const client = new Client();
var data = {}

client.on('ready', () => {
  console.log('Apex Bot is ready!')

})

function GrabJSONFromURL() : String {
    return ""
}

GrabJSONFromURL = async(link) => {
  try{
    let response = await timeout(4000, fetch("http://" + config.BaseURL + ":" + config.Port + "/" + link + ".json"))
    let body = await response.text()
    return JSON.parse(body)
  } catch {
    return null
  }
}
