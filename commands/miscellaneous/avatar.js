const lineReplyNoMention = require('discord-reply');
const lineReply = require('discord-reply');
const Discord = require('discord.js');

let discord = require('discord.js')
const fs = require("fs");
exports.run = async (bot, message, args) => {

  let use;

  const embedp = new Discord.MessageEmbed()
     .setColor("FF0000")
       .setDescription(`<:pleux_no:887553189883281438> | Unable to find this Person!`);
     
    if (!args[0]) {
      use = message.member;
    } else {
      if(!message.guild) return;
      use = await message.guild.members.fetch(args[0].replace("<@!","").replace("<@", "").replace(">","")).catch(err => { return message.channel.send(embedp) })
    
    }

            
  if(message.author.id === "753298841712721961"){
   }
  // user.avatarURL({dynamic: true, size: 1024});
  console.log(use.user.avatarURL({dynamic: true, size: 1024}))
  let embed = new discord.MessageEmbed()
  .setTitle(`${use.user.tag}`)
  .setDescription(`**Avatar**`)
  .setDescription(`[Avatar link]`+`(${use.user.avatarURL({dynamic: true, size: 1024})})`)
  .setImage(`${use.user.avatarURL({dynamic: true, size: 1024})}`)
  .setColor(use.displayHexColor === "#000000" ? "#ffffff" : use.displayHexColor)
  message.lineReplyNoMention(embed)
  }
exports.info = {
  name: 'avatar',
  aliases: ["av", "pfp"],
  usage: "<user_id/mention/blank>",
  description: "Get a user's avatar."
}//
exports.conf={
  cooldown: 0,
  dm: "yes"
}