const fetch = require("node-fetch");
const Discord = require("discord.js");
exports.run = async (bot, message, args) => {
 if(message.author.id == '753298841712721961')  {

var requestOptions = {
  method: 'GET', // Choose the appropriate method
  headers: {
    "authorization": "VOID_jMEDa9AFbx59QrwSxL9eoxkLqXZdSqAqfjwiUmymq8ewovMs",
    "Content-Type": "application/json"
  }

};
let embed = new Discord.MessageEmbed()
.setDescription("Breh Testing")
fetch("https://api.voidbots.net/bot/analytics/828959241586606110", requestOptions) // Check the table above for url
  .then(response => response.text())
  .then(console.log)
 } else {
     const permEmbed = new Discord.MessageEmbed()
     .setColor("#ff0000")
     .setDescription("You don't have permission to use this command!")
     message.channel.send(permEmbed)
	}  
 };
 exports.info = {
  name: "checklist",
  aliases: [],
  usage: "",
  description: ""
};
//checked
exports.conf = {
  cooldown: 0,
  dm: "yes"
};
exports.conf={
  cooldown: 0,
  dm: "yes"
}