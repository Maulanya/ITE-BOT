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
        .setColor("#ff0000"))
 
 if (!message.member.hasPermission("MANAGE_GUILD")) {
     const embed = new Discord.MessageEmbed()
     .setColor("#ff0000")
         .setDescription(`<:pleux_no:887553189883281438> | You don't have **Manage server** permission to use this command!!!`);
      return message.lineReply(embed)
       };
  {
    if (args[0] === "off") {
    let chn = await db.delete(`${message.guild.id}_leavechannel`); 
      return message.lineReplyNoMention(     
        new Discord.MessageEmbed()
        .setDescription(`You turn off the goodbye channel`)
        .setColor("#00ff11")   
      ) 

    }

    let setup= args[0]
     if (!args[0]||isNaN(args[0].replace("<#", "").replace(">", "")))setup = message.channel.id
     bot.db.set(`${message.guild.id}_leavechannel`, setup.replace("<#", "").replace(">", ""))
  return message.lineReplyNoMention(     
        new Discord.MessageEmbed()
    .setColor("#00ff11")
        .setDescription(`<:pleux_success:887552715247452210> | Successfully setup goodbye message send place\n${bot.config.prefix}setleavechannel off (turn off goodbye Channel)\n if the command has been run and has not shown the channel text, please type *${bot.config.prefix}setleavesystem*`) 
      ) 

  return;
}
  }
exports.info = {
name: 'setleavechannel',
  aliases:["leavechannel"],
  description: "sets the welcome message",
  usage: "<channel_id/channel_tag>"
}
exports.conf={
  cooldown: 3,
  dm: "no"
}