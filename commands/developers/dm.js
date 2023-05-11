const { MessageEmbed } = require("discord.js")
const db = require("quick.db")
const discord = require("discord.js")
exports.run = async (bot, message, args) => {
 if(message.author.id == '753298841712721961')  {//make sure u replace your id here
   
   
 if (!args[0]) {
          const embed = new discord.MessageEmbed()
    .setTitle(`**Command: ${bot.config.prefix}dm**`)
         .setDescription(`Usage: @Mentions [text]`
        );
  return message.lineReply(embed)
 }
    
let user = bot.users.cache.get(args[0].replace("<@!", "").replace("<@", "").replace(">", ""));
   
if (!user) {
          const embed = new discord.MessageEmbed()
    .setTitle(`**Command: ${bot.config.prefix}dm**`)
         .setDescription(`mentions user or user id`
        );
  return message.lineReply(embed)
      }
    if (
        message.attachments.first()
          ? message.attachments.first().proxyURL
          : null
      ) {
     user.send(
          message.attachments.first()
            ? message.attachments.first().proxyURL
            : null
        )
     }
user.send(args.slice(1).join(" ")).catch(e => message.channel.send(`Couldn't DM member ${user}`));
return message.channel.send(`send a message to ${user}`)
 } else {
     const permEmbed = new discord.MessageEmbed()
     .setColor("#ff0000")
     .setDescription("You don't have permission to use this command!")
     message.channel.send(permEmbed)
	}
}
 exports.info = {
  name: "dm",
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
