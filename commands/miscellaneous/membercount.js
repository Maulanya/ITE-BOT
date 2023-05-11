const lineReplyNoMention = require('discord-reply');
const lineReply = require('discord-reply');


const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const thememberCount = message.guild.memberCount;
    message.lineReplyNoMention(`A total of ${thememberCount} members in **${message.guild.name}**.`)
}

exports.info = {
  name: 'membercount',
  aliases:['members'],
  usage: "",
  description: "member count in server",
}
exports.conf={
  cooldown: 0,
  dm: "no"
}