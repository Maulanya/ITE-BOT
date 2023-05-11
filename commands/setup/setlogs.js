const lineReplyNoMention = require('discord-reply');
const lineReply = require('discord-reply');
const Discord = require("discord.js");


const { MessageEmbed } = require("discord.js");
const sendError =require("util")
exports.run = (bot, message, args) => {
       const permissions = message.channel.permissionsFor(message.client.user);
  if(!permissions.has("VIEW_AUDIT_LOG"))
      return message.lineReplyNoMention(  
         new Discord.MessageEmbed()      
        .setAuthor(bot.user.tag, bot.user.avatarURL())
        .addField("<:pleux_no:887553189883281438> Missing Permission(s)", 'Bot need permission **View Audit Log** to using this command!')     
        .setColor("#ff0000"))
 
 if (!message.member.hasPermission("MANAGE_GUILD")) {
     const embed = new Discord.MessageEmbed()
     .setColor("#ff0000")
         .setDescription(`<:pleux_no:887553189883281438> | You don't have **Manage server** permission to use this command!!!`);
      return message.lineReply(embed)
       };
  {
    let setup= args[0]
     if (!args[0]||isNaN(args[0].replace("<#", "").replace(">", "")))setup = message.channel.id
     bot.db.set(`${message.guild.id}_botlog`, setup.replace("<#", "").replace(">", ""))
      message.channel.send(`<:pleux_success:887552715247452210> | Successfully setup bot logs\nIf you want remove this channel logs type command ${bot.config.prefix}removelogs.`);
      return;
}
}
exports.info = {
name: 'setlogs',
  aliases:["setlogschannel"],
  description: "sets the welcome message",
  usage: "<channel_id/channel_tag>"
}
exports.conf={
  cooldown: 3,
  dm: "no"
}