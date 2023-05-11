const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
   if(message.author.id == '753298841712721961')  {
	const embed = new Discord.MessageEmbed().setColor('#FF00FF');
  if(!args[0]) {
      message.guild.leave()
  } else {
    let server = bot.guilds.cache.get(args[0]);
    server.leave()
  }
 message.channel.send(embed.setDescription('Successfully left the server!'));
    } else {
     const permEmbed = new Discord.MessageEmbed()
     .setColor("#ff0000")
    .setDescription("This command only for Developer")
     message.channel.send(permEmbed)
	}
		
	};
 exports.info = {
  name: "leaves",
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