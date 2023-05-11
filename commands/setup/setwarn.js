const lineReplyNoMention = require('discord-reply');
const lineReply = require('discord-reply');
const Discord = require("discord.js");

const { MessageEmbed } = require("discord.js");
const sendError =require("util")
exports.conf={
  cooldown: 0,
  dm: "no"
}
exports.run = (bot, message, args) => {
  if(message.author.id == '753298841712721961')  {
     const permissions = message.channel.permissionsFor(message.client.user);
  if(!permissions.has("MANAGE_MESSAGES"))
      return message.lineReplyNoMention(  
         new Discord.MessageEmbed()      
        .setAuthor(bot.user.tag, bot.user.avatarURL())
        .addField("<:pleux_no:887553189883281438> Missing Permission(s)", 'Bot need permission **Manage message** to using this command!')     
        .setColor("#ff0000"))
 
 if (!message.member.hasPermission("MANAGE_MESSAGES")) {
     const embed = new Discord.MessageEmbed()
     .setColor("#ff0000")
         .setDescription(`<:pleux_no:887553189883281438> | You don't have **Manage message** permission to use this command!!!`);
      return message.lineReply(embed)
       };

{
 if (!args[0]) {
   const embed = new Discord.MessageEmbed()
    .setTitle(`**Command: ${bot.config.prefix}setwarn**`)
   .setColor("#ff5900")
         .setDescription(`**Description:** sets the auto role(the user is for example muted if he/she gets 2 warns\n\n**Usage:**\nautomatically mute, kick, ban if the user gets the maximum warning, example: \`${bot.config.prefix}setwarn ban 2\` you can changeyou can change tire word with \`mute, kick, ban\` and 2 you can change as you wish, subject 2 (number) is the maximum setting if the user gets a warning.\n\n**Example:**\n${bot.config.prefix}setwarn ban 2\n\n**Cooldown:** 3 seconds`
        );
  return message.lineReply(embed)
      }

    if(isNaN(args[0])&&!isNaN(args[1])){
     const setup = args[1]
      if(args[0].toLowerCase()==="mute"){
    
     
      bot.db.set(`${message.guild.id}_warnmute`, setup)
      
      message.channel.send(
        `<:pleux_success:887552715247452210> | Successfully setup warn, the member will be **muted** if he/she gets **${args[1]}** warns`
      );
      return;
      }
      else if(args[0].toLowerCase()==="kick"){
     
    
      
      bot.db.set(`${message.guild.id}_warnkick`, setup)
      
      message.channel.send(
        `<:pleux_success:887552715247452210> | Successfully setup warn, the member will be **kicked** if he/she gets **${args[1]}** warns`
      );
      return;
      }
      else if(args[0].toLowerCase()==="ban"){
      
    
      
      bot.db.set(`${message.guild.id}_warnban`, setup)
      
      message.channel.send(
        `<:pleux_success:887552715247452210> | Successfully setup warn, the member will be **banned** if he/she gets **${args[1]}** warns`
      );
      return;
      } else return
      }
          
      else if(isNaN(args[1])&&!isNaN(args[0])){
      const setup = args[0]
      if(args[1].toLowerCase()==="mute"){
    
     
      bot.db.set(`${message.guild.id}_warnmute`, setup)
      
      message.channel.send(
        `<:pleux_success:887552715247452210> | Successfully setup warn, the member will be **muted** if he/she gets **${args[1]}** warns`
      );
      return;
      }
      else if(args[1].toLowerCase()==="kick"){
     
    
      
      bot.db.set(`${message.guild.id}_warnkick`, setup)
      
      message.channel.send(
        `<:pleux_success:887552715247452210> | Successfully setup warn, the member will be **kicked** if he/she gets **${args[1]}** warns`
      );
      return;
      }
      else if(args[1].toLowerCase()==="ban"){
      
    
      
      bot.db.set(`${message.guild.id}_warnban`, setup)
      
      message.channel.send(
        `<:pleux_success:887552715247452210> | Successfully setup warn, the member will be **banned** if he/she gets **${args[1]}** warns`
      );
      return;
      } else return
      }
          else return
}
}
}
exports.info = {
name: 'setwarn',
  aliases:["setwarn", "setwarning", "setwarnings"],
  description: "sets the auto role(the user is for example muted if he/she gets 2 warns)",
  usage: "<\"mute\"/\"kick\"/\"ban\"> <number>"
}
exports.conf={
  cooldown: 3,
  dm: "no"
}