const lineReplyNoMention = require('discord-reply');
const lineReply = require('discord-reply');
const Discord = require('discord.js');

exports.run = (bot, message, args) => {
      const permissions = message.channel.permissionsFor(message.client.user);
  if(!permissions.has("MANAGE_MESSAGES"))
      return message.lineReplyNoMention(  
         new Discord.MessageEmbed()      
        .setAuthor(bot.user.tag, bot.user.avatarURL())
        .addField("<:pleux_no:887553189883281438> Missing Permission(s)", 'Bot need permission **Manage Messages** to using this command!')     
        .setColor("#ff0000"))
 
 if (!message.member.hasPermission("MANAGE_MESSAGES")) {
     const embed = new Discord.MessageEmbed()
     .setColor(`#ff0000`)
         .setDescription(`<:pleux_no:887553189883281438> | You don't have **Manage messages** permission to use this command!!!`);
      return message.lineReply(embed)
       };
    
  if(message.member.roles.cache.has("767032961764687903")){
  if(!args[0]) return message.channel.send(`<:pleux_no:887553189883281438> | Error while running the command. Please type \`${bot.config.prefix}clear [number of message]\` to clear message!`)
    if(isNaN(args[0])) {
       message.channel.send(`<:pleux_no:887553189883281438> | Error while running the command. Please type \`${bot.config.prefix}purge [number of message]\` to purge messages!`)
      return
  }
     if(parseInt(args[0])>99){
       return message.channel.send(`<:pleux_no:887553189883281438> | Error while running the command because your given number is over 99
       . Please give a number which is less than 99`)
     }
     
    try{
      message.channel.bulkDelete(args[0]+++1).then(msg => message.channel.send(`<:pleuxsuccess:877362988368146442> | deleted **${args[0]---1}** messages sucessfully(complete)!`).then(msg=>msg.delete({timeout: 5000})))
    }
    catch(error) {
      message.channel.send('Error:' + error)
    } return
}
  //checked
    if(!message.member.hasPermission('MANAGE_MESSAGES')&&!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(':x: | You dont have permission to purge the messages!')
    if(!args[0]) return message.channel.send(`<:pleux_no:887553189883281438> | Error while running the command. Please type \`${bot.config.prefix}purge [number of message]\` to purge message!`)
    if(isNaN(args[0])) {
       message.channel.send(`<:pleux_no:887553189883281438> | Error while running the command. Please type \`${bot.config.prefix}purge [number of message]\` to purge messages!`)
      return
  }
     if(parseInt(args[0])>99){
       return message.channel.send(`<:pleux_no:887553189883281438> | Error while running the command because your given number is over 99. Please give a number which is less than 99`)
     }
     
    try{
      message.channel.bulkDelete(args[0]+++1).then(msg => message.channel.send(`<:pleux_success:887552715247452210> | deleted **${args[0]---1}** messages sucessfully(complete)!`).then(msg=>msg.delete({timeout: 5000})))
    }
    catch(error) {
      message.channel.send('Error:' + error)
    } return
  }
  exports.info = {
    name: 'clear',
    aliases: ['purge', 'prune'],
  usage: "<number>",
  description:"clear messages in amount of a number"
  }
exports.conf={
  cooldown: 0,
  dm: "no"
}