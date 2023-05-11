  const Discord = require('discord.js') 
exports.run = (bot, message, args) => {
   
const permissions = message.channel.permissionsFor(message.client.user);
   if(!permissions.has("MOVE_MEMBERS"))
      return message.lineReplyNoMention(  
         new Discord.MessageEmbed()      
        .setAuthor(bot.user.tag, bot.user.avatarURL())
        .addField("<:pleux_no:887553189883281438> Missing Permission(s)", 'Bot need permission **Move members** to using this command!')     
        .setColor("#ff0000"))
 
 if (!message.member.hasPermission("MOVE_MEMBERS")) {
     const embed = new Discord.MessageEmbed()
     .setColor("#ff0000")
         .setDescription(`<:pleux_no:887553189883281438> | You don't have **Move Members** permission to use this command!!!`);
      return message.lineReply(embed)
       };
    let args1 = args.join(" ");
    if(!args1)
    {
      message.channel.send("You didnt gave me vc developer id do join the voice channel you wanna drag and do $prefix}vcid after it")
    }
   
   const vc1 = args1;
  const channel = message.member.voice.channel;
   for (let member of channel.members) {
            member[1].voice.setChannel(vc1)
        }
message.channel.send(`DONE I HAVE MOVED ALL USERS TO <@#${args1}>`);
  }
  
 
  
 exports.info = {
  name: 'voicemove',
  aliases:[],
  description: ""
}//checked
exports.conf={
  cooldown: 3,
  dm: "no"
}