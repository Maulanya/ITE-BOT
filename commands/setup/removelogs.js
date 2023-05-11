const Discord = require("discord.js");
const db = require("quick.db");
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


message.guild.channels.cache.get(bot.db.get(`${message.guild.id}_botlog`)).delete("Logs Off");


message.reply("Done removed the channel and logs feature both");
  }

exports.info = {
name: 'removelogs',
  aliases:[],
  description: "sets the welcome message",
  usage: "<channel_id/channel_tag>"
}
exports.conf={
  cooldown: 3,
  dm: "no"
}