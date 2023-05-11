const Discord = module.require("discord.js");

exports.run = async (bot, message, args) => {
      const permissions = message.channel.permissionsFor(message.client.user);
  if (!message.member.hasPermission("MANAGE_GUILD")&&!message.member.hasPermission("MANAGE_CHANNELS")) {
     const embed = new Discord.MessageEmbed()
     .setColor(`#ff0000`)
         .setDescription(`<:pleux_no:887553189883281438> | You don't have **Manage server** or **Manage channels** permission to use this command!!!`);
      return message.lineReply(embed)
       };
 
 if (!message.member.hasPermission("MANAGE_GUILD")&&!message.member.hasPermission("MANAGE_CHANNELS")) {
     const embed = new Discord.MessageEmbed()
     .setColor(`#ff0000`)
         .setDescription(`<:pleux_no:887553189883281438> | You don't have **Manage server** or **Manage channels** permission to use this command!!!`);
      return message.lineReply(embed)
       };
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
  
   const embed = new Discord.MessageEmbed()
        .setTitle(`Channel Locked!`)
         .setDescription(`Damnn, **${message.author.username}** just locked the channel down`)
         .setColor("#ff0000")
   await message.channel.send(embed);
  // message.delete();
}
exports.info = {
  name: 'lock',
  aliases:[],
  description: "lock a channel"
}//checked
exports.conf={
  cooldown: 3,
  dm: "no"
}