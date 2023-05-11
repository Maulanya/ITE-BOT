const lineReplyNoMention = require('discord-reply');
const lineReply = require('discord-reply');
const db = require("quick.db")
const Discord = require("discord.js");

const { MessageEmbed } = require("discord.js");
const sendError =require("util")
exports.run = (bot, message, args) => {
  if(message.author.id == '753298841712721961')  {
  const permissions = message.channel.permissionsFor(message.client.user);
  if(!permissions.has("MANAGE_MESSAGES"))
      return message.lineReplyNoMention(  
         new Discord.MessageEmbed()      
        .setAuthor(bot.user.tag, bot.user.avatarURL())
        .addField("<:pleux_no:887553189883281438> Missing Permission(s)", 'Bot need permission **MANAGE Messages** to using this command!')     
        .setColor("#ff0000"))
 
 if (!message.member.hasPermission("MANAGE_MESSAGES")) {
     const embed = new Discord.MessageEmbed()
     .setColor(`#ff0000`)
         .setDescription(`<:pleux_no:887553189883281438> | You don't have **MANAGE Messages** permission to use this command!!!`);
      return message.lineReply(embed)
       };
    
  {
      const setup = args.slice().join(" ");
     if (!setup) {
     const embed = new Discord.MessageEmbed()
    .setTitle(`**Command: ${bot.config.prefix}removebadword**`)
         .setDescription(`**Description:** delete words that have been blacklisted\n\n**Sub Commands:**\n${bot.config.prefix}removebadwrods, ${bot.config.prefix}rbadword, ${bot.config.prefix}rbadwords.\n\n**Usage:**\n${bot.config.prefix}removebadword [text]\n\n**Example:**\n${bot.config.prefix}removebadword kntl.\n\n**Cooldown:** 3 seconds`
        );
  return message.lineReply(embed)
     }
       
   db.delete(`${message.guild.id}_badword`, setup)
      message.channel.send(
        `<:pleux_success:887552715247452210> | Successfully remove bad word's message`
      );
      return;
}
}
}
exports.info = {
name: 'removebadword',
  aliases:["removebadwrods", "rbadword", "rbadwords"],
  description: "custon your bad word message to delete",
  usage: "<message>"
}
exports.conf={
  cooldown: 3,
  dm: "no"
}
