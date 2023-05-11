const lineReplyNoMention = require("discord-reply");
const lineReply = require("discord-reply");
const Discord = require("discord.js");

exports.run = (bot, message, args) => {
 if(message.author.id == '753298841712721961')  {
      
  const embed = new Discord.MessageEmbed()
    .setColor("#00fcf4")
    .setTitle(`${bot.user.username} Developer Help`)
    .setThumbnail(`${bot.user.displayAvatarURL()}`)
    .setDescription(
      `project control`
    )
    .addField(
      "**List**",
      "`blacklist`, `whitelist`, `shell`, `uptime`, `dikha`, `eval`,`checklist`, `leave`, `restart`, `status`, `setreportlog`, `gchatinfo (send message only)`, `gchatinfoimg (send message whit image)`, `dm`, `dmall (dm all member in server)`, `cavatar (change bot avatar)`, `username (change bot username)`, `addxp`, `addlvl`, `removexp`, `removelvl`"
    )
    .setFooter(
      `•...`
    );

  message.lineReplyNoMention(embed);
} else {
     const permEmbed = new Discord.MessageEmbed()
     .setColor("#ff0000")
     .setDescription("This command only for Developer")
     message.channel.send(permEmbed)
	}
  };

exports.info = {
  name: "dhelp",
  aliases: [],
  usage: "",
  description: "show the bot command update, fix"
};
//checked
exports.conf = {
  cooldown: 0,
  dm: "yes"
}; 
