 const Discord = require('discord.js') 
exports.run = (bot, message, args) => {
   
const permissions = message.channel.permissionsFor(message.client.user);
   if(!permissions.has("DEAFEN_MEMBERS"))
      return message.lineReplyNoMention(  
         new Discord.MessageEmbed()      
        .setAuthor(bot.user.tag, bot.user.avatarURL())
        .addField("<:pleux_no:887553189883281438> Missing Permission(s)", 'Bot need permission **Deafen members** to using this command!')     
        .setColor("#ff0000"))
 
 if (!message.member.hasPermission("DEAFEN_MEMBERS")) {
     const embed = new Discord.MessageEmbed()
     .setColor("#ff0000")
         .setDescription(`<:pleux_no:887553189883281438> | You don't have **Deafen Members** permission to use this command!!!`);
      return message.lineReply(embed)
       };
  let channel = message.member.voice.channel;
        for (let member of channel.members) {
            member[1].voice.setDeaf(false)
        }
        message.channel.send("Done i have undeafend all persons who were in your vc")
  }

exports.info = {
  name: 'voiceundeaf',
  aliases:[],
  description: ""
}//checked
exports.conf={
  cooldown: 3,
  dm: "no"
}