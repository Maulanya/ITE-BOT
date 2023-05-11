const db = require("quick.db");
const Discord = require("discord.js")
exports.run = (bot, message, args) => {
    
      const permissions = message.channel.permissionsFor(message.client.user);
  if(!permissions.has("MANAGE_CHANNELS"))
      return message.lineReplyNoMention(  
         new Discord.MessageEmbed()      
        .setAuthor(bot.user.tag, bot.user.avatarURL())
        .addField("<:pleux_no:887553189883281438> Missing Permission(s)", 'Bot need permission **Manage channels** to using this command!')     
        .setColor("#ff0000"))
 
if (!message.member.hasPermission("MANAGE_CHANNELS")) {
     const embed = new Discord.MessageEmbed()
     .setColor(`#ff0000`)
         .setDescription(`<:pleux_no:887553189883281438> | You don't have **Manage channels** permission to use this command!!!`);
      return message.lineReply(embed)
       };
    let content = args[0];
  
    
   message.channel.overwritePermissions([
  {
     id: message.guild.roles.everyone.id,
     deny: ['VIEW_CHANNEL'],
  },
], `${message.member.id} Told to lock the server`);
const embed = new Discord.MessageEmbed()
        .setTitle(`Channel Hide!`)
         .setDescription(`Damnn, **${message.author.username}** just locked the channel down`)
         .setColor("RANDOM")
    message.channel.send(embed);

}

exports.info = {
  name: 'hide',
  aliases:[],
  description: ""
}//checked
exports.conf={
  cooldown: 3,
  dm: "no"
}
