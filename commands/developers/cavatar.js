const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    if(message.author.id == "753298841712721961"){ 
const embed = new Discord.MessageEmbed().setColor('#FF00FF')
	

		await bot.user.setAvatar(args[0])
		message.channel.send(embed.setDescription('You have successfully changed my avatar!'));
    } else {
     const permEmbed = new Discord.MessageEmbed()
     .setColor("#ff0000")
     .setDescription("You don't have permission to use this command!")
     message.channel.send(permEmbed)
	}
	};
exports.info = {
  name: "cavatar",
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