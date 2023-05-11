const lineReplyNoMention = require('discord-reply');
const lineReply = require('discord-reply');
const Discord = require("discord.js");

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
  {
      const setup = args.slice().join(" ");
     if (!setup) {
     const embed = new Discord.MessageEmbed()
    .setTitle(`**Command: ${bot.config.prefix}setwelcomemessage**`)
     .setColor("#ff5900")
         .setDescription(`**Description:** setup custom message for new members\n\n**Sub Commands:**\n${bot.config.prefix}setwelcomemsg, ${bot.config.prefix}welcomemessage, ${bot.config.prefix}setwelcomemessage.\n\n**Usage:**\n${bot.config.prefix}setwelcomemessage [welcome message]\nTo mention the new member\'s name, use \`\`\`$MEMBER$\`\`\`\nTo mention the new member, use \`\`\`$MENTION$\`\`\`\nTo mention the server name, use \`\`\`$SERVER$\`\`\`\n\n**Example:**\n${bot.config.prefix}setwelcomemessage hello $MENTION$ welcome to $SERVER$.\n\n**Cooldown:** 3 seconds`
        );
  return message.lineReply(embed)
     }
       
    bot.db.set(`${message.guild.id}_welcomemessage`, setup)
      message.channel.send(
        `<:pleux_success:887552715247452210> | Successfully setup welcome message`
      );
      return;
}
}
exports.info = {
name: 'setwelcomemessage',
  aliases:["welcomemessage", "welcomemsg", "setwelcomemsg"],
  description: "sets the welcome message. To mention the new member, use $MEMBER$\nTo mention the server name, use $SERVER$",
  usage: "<message>"
}
exports.conf={
  cooldown: 3,
  dm: "no"
}
