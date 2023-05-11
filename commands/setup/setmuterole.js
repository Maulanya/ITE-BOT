const lineReplyNoMention = require('discord-reply');
const lineReply = require('discord-reply');
const Discord = require("discord.js");

const { MessageEmbed } = require("discord.js")
exports.conf={
  cooldown: 0,
  dm: "no"
}
exports.run = (bot, message, args) => {
     const permissions = message.channel.permissionsFor(message.client.user);
  if(!permissions.has("MANAGE_ROLES"))
      return message.lineReplyNoMention(  
         new Discord.MessageEmbed()      
        .setAuthor(bot.user.tag, bot.user.avatarURL())
        .addField("<:pleux_no:887553189883281438> Missing Permission(s)", 'Bot need permission **Manage roles** to using this command!')     
        .setColor("#ff0000"))
 
 if (!message.member.hasPermission("MANAGE_ROLES")) {
     const embed = new Discord.MessageEmbed()
     .setColor("#ff0000")
         .setDescription(`<:pleux_no:887553189883281438> | You don't have **Manage roles** permission to use this command!!!`);
      return message.lineReply(embed)
       };
      const setup = args.slice().join(" ");
    
      if (!setup||isNaN(setup.replace("<@&", "").replace("<@", "").replace(">", "")))
        return message.lineReply(
          `<:pleux_no:887553189883281438> | Please send a mute role id with this format ${bot.config.prefix}setmuterole [mute role id]`
        );
      bot.db.set(`${message.guild.id}_muterole`, setup.replace("<@&", "").replace("<@", "").replace(">", ""))
      
      message.channel.send(
        `<:pleux_success:887552715247452210> | Successfully setup mute role`
      );
      return;
}
exports.info = {
name: 'setmuterole',
  aliases:["muterole"],
  description: "sets the mute role",
  usage: "<muterole_id/muterole_tag>"
}
exports.conf={
  cooldown: 3,
  dm: "no"
}