const lineReplyNoMention = require('discord-reply');
const lineReply = require('discord-reply');


exports.run = (bot, message, args) => {
         const Discord = require("discord.js")
         let linkwebsite= `https://iktindonesia.ml/`
         let msgembed = new Discord.MessageEmbed()
      .setColor('#0affaf')
         .setTitle("Our Website")
      // .setDescription(`Official Website:\n[Click here]` + `(${linkwebsite})`)
         .setDescription(`Official Website:\n[Click here]` + `(${linkwebsite})`)
      // .addField("Our Blogspot", 'Official Blogspot:\n[Click here]' + `(${linkblog})`)
      //.addField("­", 'Commands Emotes: [Link]' + `(${linkblog})`)
      .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
       message.lineReplyNoMention("Generating Official Website...")
        .then(msg => {
          msg.edit("", msgembed)
       });
  }
  exports.info = {
    name: 'website',
  aliases:["web"],
  usage: "",
    description: "",
  }
exports.conf={
  cooldown: 0,
  dm: "yes"
}