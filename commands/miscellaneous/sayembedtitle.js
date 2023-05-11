const lineReplyNoMention = require('discord-reply');
const lineReply = require('discord-reply');
const Discord = require('discord.js')
const db = require("quick.db");
const { MessageEmbed } = require("discord.js");
const sendError =require("util")
exports.run = async (bot, message, args) => {
  const permissions = message.channel.permissionsFor(message.client.user);
  if(!permissions.has("MANAGE_GUILD"))
      return message.lineReplyNoMention(  
         new Discord.MessageEmbed()      
        .setAuthor(bot.user.tag, bot.user.avatarURL())
        .addField("<:pleux_no:887553189883281438> Missing Permission(s)", 'Bot need permission **Manage server** to using this command!')     
        .setColor("ff66d6"))
 
 if (!message.member.hasPermission("MANAGE_GUILD")) {
     const embed = new Discord.MessageEmbed()
         .setDescription(`<:pleux_no:887553189883281438> | You don't have **Manage server** permission to use this command!!!`);
      return message.lineReply(embed)
       };
  {
    if (args[0] === "off") {
    let chn = await db.delete(`${message.guild.id}_title`); 
      return message.lineReplyNoMention(     
        new Discord.MessageEmbed()
        .setDescription(`You turn off`)
        .setColor("ff66d6")   
      ) 

    }

    let setup= args[0]
     if (!args[0]||isNaN(args[0].replace("<#", "").replace(">", "")))setup = message.channel.id
     bot.db.set(`${message.guild.id}_title`, setup.replace("<#", "").replace(">", ""))
  return message.lineReplyNoMention(     
        new Discord.MessageEmbed()
        .setDescription(`<:pleux_success:887552715247452210> | Successfully`)
        .setColor("ff66d6")   
      ) 

  return;
}
  }
exports.info = {
name: 'sayembedtitle',
  aliases:["sayembedtitle"],
  description: "sets the welcome message",
  usage: "<channel_id/channel_tag>"
}
exports.conf={
  cooldown: 0,
  dm: "no"
}