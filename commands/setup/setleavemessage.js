const lineReplyNoMention = require('discord-reply');
const lineReply = require('discord-reply');
const Discord = require ("discord.js")

const { MessageEmbed } = require("discord.js");
const sendError =require("util")
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
     if (!setup) {
     const embed = new Discord.MessageEmbed()
    .setTitle(`**Command: ${bot.config.prefix}setleavemessage**`)
     .setColor("#ff5900")
         .setDescription(`**Description:** setup custom message for Member Leave\n\n**Sub Commands:**\n${bot.config.prefix}leavemessage, ${bot.config.prefix}leavemsg, ${bot.config.prefix}goodbyemessage.\n\n**Usage:**\n${bot.config.prefix}setleavemessage [leave message]\nTo mention the leave member, use \`\`\`$MEMBER$\`\`\`\nTo mention the server name, use \`\`\`$SERVER$\`\`\`\n\n**Example:**\n${bot.config.prefix}setleavemessage $MEMBER$ just leave the $SERVER$.\n\n**Cooldown:** 3 seconds`
        );
  return message.lineReply(embed)
     }
      bot.db.set(`${message.guild.id}_leavemessage`, setup)
      message.channel.send(
        `<:pleux_success:887552715247452210> | Successfully setup goodbye/leave`
      );
      return;
}

exports.info = {
name: 'setleavemessage',
  aliases:["leavemessage", "leavemsg", "setleavemsg","setgoobyemessage","goodbyemessage","setgoodbyemessage","setgoodbyemsg","goodbyemsg"],
  description: "sets the goodbye/leave message, To mention the new member, use $MENTION$\nTo mention the name of new member, use $MEMBER$\nTo mention the server name, use $SERVER$",
  usage: "<message>"
}
exports.conf={
  cooldown: 3,
  dm: "no"
}

