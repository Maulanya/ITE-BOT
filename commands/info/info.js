const Discord = require("discord.js");
const ms = require("parse-ms");
const config = require("../../main/config.js");
const db = require("quick.db");
exports.run = async (bot, message, args) => {
    
    let uptime = [];

    Object.entries(ms(bot.uptime)).map((x, y) => {
      if (x[1] > 0 && y < 4) uptime.push(`**${x[1]} ${x[0]}**`);
    });

    const embed = new Discord.MessageEmbed()
      .setColor(`#34c6eb`)
      .setTitle(`${bot.user.username} stats`)
    .setThumbnail("https://cdn.discordapp.com/attachments/929291256557879336/1074213008500338688/20230108_192227.png")
      //.setThumbnail(bot.user.displayAvatarURL())
      .addField(
        `Memory Usage:`,
        (process.memoryUsage().rss / 1024 / 1024).toFixed(2) + "MB",
        true
      )
      .addField(`Servers Count:`, `${bot.guilds.cache.size}`, true)
      .addField(`Users Count:`, `${bot.users.cache.size}`, true)
      .addField(`Channels Count:`, `${bot.channels.cache.size}`, true)
      .addField(`Shards:`, `1`, true)
      .addField(`Creation Date -`, `6th February 2021`, true)
      .addField(`Made With :`, `Discord.js V12 And SQ Lite DataBase And Your Love`, true)
      .addField(`Prefix : `, `\`\`${bot.config.prefix}\`\``, true)
     .setTimestamp();
    message.channel.send(embed);
  };
exports.info = {
      name: 'info',
  aliases:[],
  usage: "",
    description: "",
  };
exports.conf={
  cooldown: 0,
  dm: "yes"
}