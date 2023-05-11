const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
     const permissions = message.channel.permissionsFor(message.client.user);
  if(!permissions.has("MANAGE_EMOJIS_ANDSTICKERS")&&!permissions.has("MANAGE_GUILD"))
      return message.lineReplyNoMention(  
         new Discord.MessageEmbed()      
        .setAuthor(bot.user.tag, bot.user.avatarURL())
        .addField("<:pleux_no:887553189883281438> Missing Permission(s)", 'Bot need permission **Manage server** or **Manage emoji** to using this command!')     
        .setColor("#ff0000"))
 
 if (!message.member.hasPermission("MANAGE_EMOJIS_ANDSTICKERS")&&!message.member.hasPermission("MANAGE_GUILD")) {
     const embed = new Discord.MessageEmbed()
     .setColor(`#ff0000`)
         .setDescription(`<:pleux_no:887553189883281438> | You don't have **Manage server** or **Manage emoji** permission to use this command!!!`);
      return message.lineReply(embed)
       };
		const emoji = message.attachments.array()[0] || args[0];

		if (emoji) {
			if (emoji.url) {
				if (args[0]) {
					message.guild.emojis
						.create(emoji.url, args[0])
						.then(emoji =>
							message.channel.send(`I've created the ${emoji.name} emoji!`)
						)
						.catch(err =>
							message.reply(`I couldn't create the emoji!\n${err}`)
						);
				} else message.reply("You need to put the name for the emoji in!");
			} else if (args[1]) {
				message.guild.emojis
					.create(emoji, args[1])
					.then(emoji =>
						message.channel.send(`I've created the ${emoji.name} emoji!`)
					)
					.catch(err => message.reply(`I couldn't create the emoji!\n${err}`));
			} else message.reply("You need to put the name for the emoji in!");
		} else message.reply("You need to give the image for the emoji!");
	};

exports.info = {
  name: "addemoji",
  aliases: ["createemoji"],
  usage: "",
  description: ""
};
//checked
exports.conf = {
  cooldown: 0,
  dm: "yes"
};
exports.conf = {
  cooldown: 0,
  dm: "yes"
}; 