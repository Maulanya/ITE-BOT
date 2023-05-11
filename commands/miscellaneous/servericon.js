const Discord = module.require("discord.js");
const fs = require("fs");
exports.run = async (bot, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setColor("RANDOM")
    .setImage(message.guild.iconURL())
    .setTimestamp()

  await message.channel.send(embed);
};

 exports.info = {
  name: "servericon",
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