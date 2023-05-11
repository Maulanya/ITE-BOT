const lineReplyNoMention = require('discord-reply');
const lineReply = require('discord-reply');
const Discord = require("discord.js");

const { MessageEmbed } = require("discord.js");
const sendError = require("util");
exports.conf = {
  cooldown: 0,
  dm: "no"
};
exports.run = (bot, message, args) => {
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

  {
    let autorole = `<@&` + bot.db.get(`${message.guild.id}_autorole`) + `>`;
    let log = 
        `<#` + bot.db.get(`${message.guild.id}_botlog`) + `>`;
    let welcomemessage =
      "`" + bot.db.get(`${message.guild.id}_welcomemessage`) + "`";
    let leavemessage =
      "`" + bot.db.get(`${message.guild.id}_leavemessage`) + "`";
    let welcomemessagesend =
      `<#` + bot.db.get(`${message.guild.id}_welcomechannel`) + `>`;
    let leave = `<#` + bot.db.get(`${message.guild.id}_leavechannel`) + `>`;
    let mute = `<@&` + bot.db.get(`${message.guild.id}_muterole`) + `>`;
    let verifychannel =
      `<#` + bot.db.get(`${message.guild.id}_verifychannel`) + `>`;
    let verifyrole = `<@&` + bot.db.get(`${message.guild.id}_verifyrole`) + `>`;
    if (!bot.db.get(`${message.guild.id}_autorole`))
      autorole = "<:pleux_no:887553189883281438>";
    if (!bot.db.get(`${message.guild.id}_botlog`))
      log = "<:pleux_no:887553189883281438>";
    if (!bot.db.get(`${message.guild.id}_welcomemessage`))
      welcomemessage = "<:pleux_no:887553189883281438>";
    if (!bot.db.get(`${message.guild.id}_leavemessage`))
      leavemessage = "<:pleux_no:887553189883281438>";
     if (!bot.db.get(`${message.guild.id}_welcomechannel`))
      welcomemessagesend = "<:pleux_no:887553189883281438>";
    if (!bot.db.get(`${message.guild.id}_leavechannel`))
      leave = "<:pleux_no:887553189883281438>";
    if (!bot.db.get(`${message.guild.id}_muterole`))
      mute = "<:pleux_no:887553189883281438>";
    
    const embed = new MessageEmbed()
      .setTitle(
        `Settings for ${message.guild.name}, if some setting has <:pleux_no:887553189883281438>, that means you haven't setup for this setting yet, else if you have setting, it will show you what thing did you setting`
      )
      .setDescription(
        `${autorole} : welcome auto role
${log} : Server log
${welcomemessage} : welcome message
${leavemessage} : leave message
${welcomemessagesend} : welcome channel
${leave} : Leave channel
${mute} : mute role`
      )
    
    .setColor(`#34c6eb`)
      .setTimestamp();
    message.lineReplyNoMention(embed);
    return;
  }
};
exports.info = {
  name: "setupstatus",
  aliases: [
    "setupstat",
    "setupstats",
    "setup-ststus",
    "setup-stat",
    "setup-stats"
  ],
  description: "showing the setup status",
  usage: ""
};
exports.conf={
  cooldown: 3,
  dm: "no"
}
