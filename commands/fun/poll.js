const Discord = require('discord.js')
 exports.run = async (bot, message, args, data, db) => {

        const Poll_Emoji_1 = "👍";
        const Poll_Emoji_2 = "👎";
        const Embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Poll Info")
        .setDescription(`Poll <Message> to create a poll`)
        .setFooter(`Poll requested by ${message.author}`)
        .setTimestamp()
 
        if (args.lenth === 0) {
            return message.channel.send(Embed)
        }
 
        let Message = args.slice(0).join(" ")
 
        let Poll = await message.channel.send(
            new Discord.MessageEmbed()
            .setColor(`RANDOM`)
            .setTitle(`${Message}`)
            .setFooter(`Poll Made by ${message.author.username}`)
            .setTimestamp()
        );
 
 
        await Poll.react(`${Poll_Emoji_1}`);
        await Poll.react(`${Poll_Emoji_2}`);
        await message.delete
 
 
    }
module.exports.info = {
    name: 'polls',
  aliases: ['poll'],
  usage:"<time> <poll question>",
description:"Send polls in the channel you sent the poll message"
};
exports.conf={
  cooldown: 0,
  dm: "no"
}