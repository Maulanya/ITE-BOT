 const Discord = require('discord.js') 
exports.run = (bot, message, args) => {
  
 const permissions = message.channel.permissionsFor(message.client.user);
  if(!permissions.has("KICK_MEMBERS"))
      return message.lineReplyNoMention(  
         new Discord.MessageEmbed()      
        .setAuthor(bot.user.tag, bot.user.avatarURL())
        .addField("<:pleux_no:887553189883281438> Missing Permission(s)", 'Bot need permission **Kick members** to using this command!')     
        .setColor("#ff0000"))
 
 if (!message.member.hasPermission("KICK_MEMBERS")) {
     const embed = new Discord.MessageEmbed()
     .setColor("#ff0000")
         .setDescription(`<:pleux_no:887553189883281438> | You don't have **Kick Members** permission to use this command!!!`);
      return message.lineReply(embed)
       };
  let channel = message.member.voice.channel;
        for (let member of channel.members) {
            member[1].voice.setChannel(null)
        }
        message.channel.send("Done i have kicked all persons who were in your vc")
  }

 exports.info = {
  name: 'voicekick',
  aliases:[],
  description: ""
}//checked
exports.conf={
  cooldown: 3,
  dm: "no"
}