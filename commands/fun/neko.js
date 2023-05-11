const fs = require("fs");
const Discord = require("discord.js");
const superagent = require("superagent");
const fetch = require("node-fetch");
const bot = require('nekos.life');
const neko = new bot();
module.exports.run = async (bot, message, args, tools) => {
if (message.channel.nsfw!== true)
    return message.channel.send(`**You're pervert, I need NSFW**`);
   //start the command with a language
  
  

    const mat =await neko.sfw.neko();
  const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle("This is your neko OwO")
    .setImage(mat.url);
 return message.channel.send({ embed });

  
 
};

exports.info = {
  name: 'neko',
usage: "",
  description: "sends a neko **(NSFW neko only for nsfw channels)**",
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.conf={
  cooldown: 0,
  dm: "yes"
}