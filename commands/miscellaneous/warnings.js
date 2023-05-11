const lineReply = require('discord-reply');

const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  
  let warnlevel = bot.db.get(`${wUser.user.id}_${message.guild.id}_warns`)||0;
     if (!args[0]) {
   const embed = new Discord.MessageEmbed()
    .setTitle(`**Command: ${bot.config.prefix}warnings**`)
   .setColor("#ff5900")
         .setDescription(`Please put mentions for see how much he/she get warn.`);
  return message.lineReply(embed)
      } 
  
  let wUser = message.guild.member(args[0].replace("<@!", "").replace("<@", "").replace(">", ""));
  const embedp = new Discord.MessageEmbed()
     .setColor("FF0000")
       .setDescription(`<:pleux_no:887553189883281438> | Unable to find this Person!`);
            let userm = await message.guild.members.fetch(args[0].replace("<@!", "").replace("<@", "").replace(">", "")).catch(err => { console.error(err);return message.channel.send(embedp) })
  
  if(!wUser) return message.reply("I couldn't find this member!");
  
  message.lineReply(`<@${wUser.id}> has ${warnlevel} warnings.`);
}

module.exports.info = {
  name: "warnings",
  aliases: ["warning"],
  usage: "<user_id_or_mention>",
  description: "to know how much warns does the member has",
}
exports.conf={
  cooldown: 0,
  dm: "yes"
}