const { MessageEmbed } = require('discord.js')

exports.run = async (bot, message, args) => {
   if(message.author.id == '753298841712721961')  {

      let msg;
        let textChannel = message.mentions.channels.first()
        message.delete()

        if(textChannel) {
            msg = args.slice(1).join(" ");
            textChannel.send(msg)
        } else {
            msg = args.join(" ");
            message.channel.send(msg)
         
        }
    } 
 }
module.exports.info = {
    name: 'say',
  aliases: ['say'],
  usage:"say <reason>",
description:"Send teks in the channel for bot can say"
};
exports.conf={
  cooldown: 0,
  dm: "yes"
}
