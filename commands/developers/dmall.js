const { MessageEmbed } = require("discord.js")
const db = require("quick.db")
const discord = require("discord.js")
exports.run = async (bot, message, args) => {
 if(message.author.id == '753298841712721961')  {
   
    if (!args[0]) {
          const embed = new discord.MessageEmbed()
    .setTitle(`**Command: ${bot.config.prefix}dmall**`)
         .setDescription(`where's the message?`
        );
  return message.lineReply(embed)
 }
   message.guild.members.cache.forEach(member => { // Looping through each member of the guild.
    // Trying to send a message to the member.
    // This method might fail because of the member's privacy settings, so we're using .catch
    member.send(args.slice(0).join(" ")).catch(e => console.error(`Couldn't DM member ${member.user.tag}`));
});

 } else {
     const permEmbed = new discord.MessageEmbed()
     .setColor("#ff0000")
      .setDescription("You don't have permission to use this command!")
     message.channel.send(permEmbed)
	}
 }
 exports.info = {
  name: "dmall",
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
