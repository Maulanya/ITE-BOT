const lineReplyNoMention = require('discord-reply');
const lineReply = require('discord-reply');
const Discord = require('discord.js')
const ms = require("ms");

exports.run = async (bot, message, args) => {
       const permissions = message.channel.permissionsFor(message.client.user);
  if(!permissions.has("MANAGE_GUILD")&&!permissions.has("MANAGE_CHANNELS"))
      return message.lineReplyNoMention(  
         new Discord.MessageEmbed()      
        .setAuthor(bot.user.tag, bot.user.avatarURL())
        .addField("<:pleux_no:887553189883281438> Missing Permission(s)", 'Bot need permission **Manage server** or **Manage channels** to using this command!')     
        .setColor("#ff0000"))
 
 if (!message.member.hasPermission("MANAGE_GUILD")&&!message.member.hasPermission("MANAGE_CHANNELS")) {
     const embed = new Discord.MessageEmbed()
     .setColor(`#ff0000`)
         .setDescription(`<:pleux_no:887553189883281438> | You don't have **Manage server** or **Manage channels** permission to use this command!!!`);
      return message.lineReply(embed)
       };
  let channel = message.mentions.channels.first(),
      time = args.slice(1).join(" ");

  if (!channel) time = args.join(" "), channel = message.channel;
  // If the user doesn't includes the channel.

 if (args[0] === "off") {
    channel.setRateLimitPerUser(0);
    return message.channel.send(`<#${channel.id}> slowmode has been deactivated.`);
  }


 if (!time) {
         const embed = new Discord.MessageEmbed()
    .setTitle(`**Command: ${bot.config.prefix}kick**`)
         .setDescription(`**Description:** Slowmode Cooldown\n\n**Usage:**\ninput the time format to run slowmode, secodns(s), minute(m) and hours(h), turn off slowmde by typing off\n\n${bot.config.prefix}slowmode (time)\n\n**Example:**\n${bot.config.prefix}slowmode 5s\n${bot.config.prefix}slowmode off\n\n**Cooldown:** 3 seconds`
        );
  return message.lineReply(embed)
      } 
  let convert = ms(time); // This will results the milliseconds.
  let toSecond = Math.floor(convert / 1000); // This will convert the ms to s. (seconds)

  if (!toSecond || toSecond == undefined) return message.lineReply("Please insert the valid time format!");

  if (toSecond > 21600) return message.lineReply("Timer should be less than or equal to 6 hours.");
  else if (toSecond < 1) return message.lineReply("Timer should be more than or equal to 1 second.");

  await channel.setRateLimitPerUser(toSecond);
  message.channel.send(`This channel: <#${channel.id}> has been slowing down for **${ms(ms(time), {long: true})}**.`);
}

exports.info = {
  name: 'slowmode',
  aliases: ["slow"],
  description: "Slowing down the channel.",
  usage: "",
}
exports.conf={
  cooldown: 3,
  dm: "yes"
}
