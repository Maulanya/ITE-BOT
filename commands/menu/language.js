const Discord = require('discord.js')

exports.run = (bot, message, args) => {
  
  const embed = new Discord.MessageEmbed()
    .setColor('#00fcf4') 
    .setTitle(`${bot.user.username} Language`)
    .setThumbnail(`${bot.user.displayAvatarURL()}`)
    .setDescription(`see all language for Translate <a:emoji_16:737869371031945226>`)
    .addField('Language for Translate',`[**Click Here !**](https://www-kodesingkatan-com.cdn.ampproject.org/v/s/www.kodesingkatan.com/kode-singkatan-negara-di-dunia/?amp_gsa=1&amp_js_v=a6&usqp=mq331AQKKAFQArABIIACAw%3D%3D#amp_tf=Dari%20%251%24s&aoh=16370383585775&referrer=https%3A%2F%2Fwww.google.com&ampshare=https%3A%2F%2Fwww.kodesingkatan.com%2Fkode-singkatan-negara-di-dunia%2F)`)
  .setFooter(`Languages`);

  message.channel.send(embed)
  
  
}

exports.info = {
  name: 'language',
usage: "",
  description: "",
  enabled: true,
  guildOnly: false,
aliases: ["l"], 
  permLevel: 0
};
exports.conf={
  cooldown: 0,
  dm: "yes"
}
  