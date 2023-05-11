const Discord = require("discord.js");

exports.run = async (bot, message, args, data, db) => {
    const Discord = require('discord.js')

try {
	const embed = new Discord.MessageEmbed()
	  .setTitle(":bricks: Dependencies")
      .setDescription(bot.user.tag + " run on " + Object.keys(require('../../package').dependencies).length + " dependencies")
	  .setTimestamp()
	  .setColor("RANDOM")
  message.channel.send(embed);
} catch (err) {
    message.channel.send({embed: {
                color: 16734039,
                description: "Something went wrong... :cry:"
            }})
  }
}
 exports.info = {
  name: "dependencies",
  aliases: [],
  usage: "",
  description: ""
};
//checked
exports.conf = {
  cooldown: 0,
  dm: "yes"
};
exports.conf={
  cooldown: 0,
  dm: "yes"
}