const Discord = require('discord.js')
const db = require("quick.db");
const { MessageEmbed } = require("discord.js");
const sendError =require("util")
exports.run = async (bot, message, args) => {
   if(message.author.id == '753298841712721961')  {

    const COLOR = `RANDOM`
      let msg;
        let textChannel = message.mentions.channels.first()
        message.delete()
  
        if(textChannel) {
           msg = args.slice(1).join(" ");
           const embed = new Discord.MessageEmbed()
           .setColor(COLOR)
             .setTitle(msg)
         .setDescription(text + "d");
            textChannel.send(embed)
        } else {
             msg = args.slice(1).join(" ");
           msg2 = args.slice(2).join(" ");
           const embed = new Discord.MessageEmbed()
           .setColor(COLOR)
             .setTitle(msg)
         .setDescription(text);
            message.channel.send(embed)
         
        
  }
    } 
}
module.exports.info = {
    name: 'sayembed',
  aliases: ['sayembed'],
  usage:"say <reason>",
description:"Send teks in the channel for bot can say"
};
exports.conf={
  cooldown: 0,
  dm: "yes"
}
