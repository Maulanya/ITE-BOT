const lineReplyNoMention = require('discord-reply');
const lineReply = require('discord-reply');
const Discord = require("discord.js");


module.exports.info = {
  name: "setprefix",
  description: "Set a new prefix for your server",
  usage: "<new_prefix>",
  aliases: ["prefix"]
};
module.exports.run=async(bot,message,args)=>{
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
 if (!args[0]) {
       const embed = new Discord.MessageEmbed()
       .setColor("#ff5900")
         .setDescription(`<:pleux_no:887553189883281438> | Please add new prefix`);
      return message.lineReply(embed)
      };

     let prefix = bot.db.set(`${message.guild.id}_prefix`, args.slice().join(" "))


      console.log(prefix)
if (prefix.includes("`")) {
message.channel.send(`Prefix set to \`${prefix} \`.`);
} else {
message.channel.send(`Prefix set to \`${prefix}\`.`);
}

      }
exports.info = {
name: 'setprefix',
  aliases:["prefix"],
  description: "custom prefix bot",
  usage: ".setprefix {newprefix}"
}
exports.conf={
  cooldown: 3,
  dm: "no"
}