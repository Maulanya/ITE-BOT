const lineReplyNoMention = require('discord-reply');
const lineReply = require('discord-reply');
const Discord = require("discord.js");

const { MessageEmbed } = require("discord.js");
const sendError =require("util")
exports.run = (bot, message, args) => {
   if(message.author.id == '753298841712721961')  {//make sure u replace your id here
    const permissions = message.channel.permissionsFor(message.client.user);
  if(!permissions.has("MANAGE_GUILD"))
      return message.lineReplyNoMention(  
         new Discord.MessageEmbed()      
        .setAuthor(bot.user.tag, bot.user.avatarURL())
        .addField("<:pleux_no:887553189883281438> Missing Permission(s)", 'Bot need permission **Manage server** to using this command!')     
        .setColor("ff66d6"))
 
 if (!message.member.hasPermission("MANAGE_GUILD")) {
     const embed = new Discord.MessageEmbed()
         .setDescription(`<:pleux_no:887553189883281438> | You don't have **Manage server** permission to use this command!!!`);
      return message.lineReply(embed)
       };

  if (!args[0]) return message.lineReplyNoMention ("give ```on/off``` to turn on and turn off the system");
    const type = args[0];
    if (type === "on" || type === "enable") {
      bot.db.set(`${message.guild.id}_welcomeimg`, "yes")
      message.channel.send(
        `<:pleux_success:887552715247452210> | Welcome image is successfully enabled!`
      );
      return;
    }
    if (type === "off" || type === "disable") {
      bot.db.set(`${message.guild.id}_welcomeimg`, "no")
      message.channel.send(
        `<:pleux_success:887552715247452210> | Welcome image is successfully disabled!`
      );
      return;
    }
}
}
exports.info = {
name: 'setwelcomeimg',
  aliases:["welcomeimg", "welcomeimage", "setwelcomeimage", "setwelcomeimages", "welcomeimages"],
  usage: "<on/enable/off/disable>",
  description: "turns the welcome image on/off",
}
exports.conf={
  cooldown: 3,
  dm: "no"
}