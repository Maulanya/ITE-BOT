const lineReplyNoMention = require("discord-reply");
const lineReply = require("discord-reply");
const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setColor("#00fcf4")
    .setTitle(`${bot.user.username} News`)
    .setThumbnail(`${bot.user.displayAvatarURL()}`)
    .setDescription(
      `update, fix is here, read all before trying Pleux commands`
    )
    .addField(
      "**Leaderboard**",
      `• a small update from us, namely the command leaderboard that sees the rank level on the server now you can see the global rank by typing [${bot.config.prefix}leaderboard global.`
    )
    .setFooter(
      `• please report commands that error, type (${bot.config.prefix}report.)`
    );

  message.lineReplyNoMention(embed);
};

exports.info = {
  name: "news",
  aliases: [],
  usage: "",
  description: "show the bot command update, fix"
};
//checked
exports.conf = {
  cooldown: 0,
  dm: "yes"
};
