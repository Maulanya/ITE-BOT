const lineReply = require('discord-reply');
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const sendError =require("util")
exports.conf={
  cooldown: 0,
  dm: "no"
}
exports.run = (bot, message, args) => {
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
      const setup = args.slice().join(" ");
    
      if (!setup||isNaN(setup.replace("<@&", "").replace("<@", "").replace(">", ""))) {
    const embed = new Discord.MessageEmbed()
    .setColor("#ff5900")
    .setTitle(`**Command: ${bot.config.prefix}setautorole**`)
         .setDescription(`**Description:** auto role setup for new members\n\n**Sub Commands:**\n${bot.config.prefix}autorole, ${bot.config.prefix}setautorole.\n\n**Usage:**\n${bot.config.prefix}setautorole [auto role id]\n\n**Example:**\n${bot.config.prefix}setautorole 753298841712721961\n\n**Cooldown:** 3 seconds`
        );
  return message.lineReply(embed)
      }
      bot.db.set(`${message.guild.id}_autorole`, setup.replace("<@&", "").replace("<@", "").replace(">", ""))
      
      message.channel.send(
        `<:pleux_success:887552715247452210> | Successfully setup auto role`
      );
      return;
}
exports.info = {
name: 'setautorole',
  aliases:["autorole"],
  description: "sets the auto role(for members who joins this server)",
  usage: "<role_id/role_tag>"
}
exports.conf={
  cooldown: 3,
  dm: "no"
}