const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const sendError =require("util")
exports.run = (bot, message, args) => {
         const permissions = message.channel.permissionsFor(message.client.user);
  if(!permissions.has("MANAGE_GUILD"))
      return message.lineReplyNoMention(  
         new Discord.MessageEmbed()      
        .setAuthor(bot.user.tag, bot.user.avatarURL())
        .addField("<:pleux_no:887553189883281438> Missing Permission(s)", 'Bot need permission **Manage messages** to using this command!')     
        .setColor("#ff0000"))
 
 if (!message.member.hasPermission("MANAGE_GUILD")) {
     const embed = new Discord.MessageEmbed()
         .setDescription(`<:pleux_no:887553189883281438> | You don't have **Manage server** permission to use this command!!!`);
      return message.lineReply(embed)
       };
  if (!args[0]) {
       const embed = new Discord.MessageEmbed()
    .setTitle(`**Command: ${bot.config.prefix}levelmessage**`)
       .setColor("#ff0000")
         .setDescription(`**Description:** setup level message to appear\n\n**Sub Commands:**\n${bot.config.prefix}levelmessage, ${bot.config.prefix}lvlmsg, ${bot.config.prefix}setlvlmsg, ${bot.config.prefix}levelupmessage, ${bot.config.prefix}lvlupmsg, ${bot.config.prefix}setlvlupmsg, ${bot.config.prefix}setlevelupmessage.\n\n**Usage:**\n${bot.config.prefix}levelmessage [on/off]\n\n**Example:**\n${bot.config.prefix}levelmessage on.\n\n**Cooldown:** 3 seconds`
        );
  return message.lineReply(embed)
      };
    const type = args[0];
    if (type === "on" || type === "enable") {
      bot.db.set(`${message.guild.id}_lvlupmsg`, "yes")
      message.channel.send(
        `<:pleux_success:887552715247452210> | Level up message  is successfully enabled!`
      );
      return;
    }
    if (type === "off" || type === "disable") {
      bot.db.set(`${message.guild.id}_lvlupmsg`, "no")
      message.channel.send(
        `<:pleux_success:887552715247452210> | Level up message successfully disabled!`
      );
      return;
    }
}
exports.info = {
name: 'setlevelmessage',
  aliases:["levelmessage", "lvlmsg", "setlvlmsg", "levelupmessage", "lvlupmsg", "setlvlupmsg", 'setlevelupmessage', 
          "level-message", "lvl-msg", "set-lvl-msg", "level-up-message", "lvl-up-msg", "set-lvl-up-msg", 'set-level-up-message'],
  usage: "<on/enable/off/disable>",
  description: "turns the level message on/off(default: on)",
}
exports.conf={
  cooldown: 3,
  dm: "no"
}