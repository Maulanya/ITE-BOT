const { MessageEmbed } = require("discord.js")
const Discord = require('discord.js')
exports.run = async (bot, message, args) => {
  //console.log(message.member)
      const permissions = message.channel.permissionsFor(message.client.user);
 
  if (!message.member.hasPermission("MANAGE_GUILD")&&!message.member.hasPermission("MANAGE_CHANNELS")) {
     const embed = new Discord.MessageEmbed()
     .setColor(`#ff0000`)
         .setDescription(`<:pleux_no:887553189883281438> | You don't have **Manage server** or **Manage channels** permission to use this command!!!`);
      return message.lineReply(embed)
       };
 
 if (!message.member.hasPermission("MANAGE_GUILD")&&!message.member.hasPermission("MANAGE_CHANNELS")) {
     const embed = new Discord.MessageEmbed()
     .setColor(`#ff0000`)
         .setDescription(`<:pleux_no:887553189883281438> | You don't have **Manage server** or **Manage channels** permission to use this command!!!`);
      return message.lineReply(embed)
       };

  let channel = message.mentions.channels.first();
      
        (
            channel = message.channel
        )

        if(channel.permissionsFor(message.guild.id).has('SEND_MESSAGES') === true) {
            const lockchannelError2 = new MessageEmbed()

            .setDescription(`${channel} is already unlocked!`)
            .setColor("#ff5900")

            return message.channel.send(lockchannelError2)
        }

        channel.updateOverwrite(message.guild.id, { SEND_MESSAGES: true })

        const embed = new MessageEmbed()
        .setTitle(`Channel unLocked!`)
        .setDescription('Lockdown lifted. WEEEEEEEEEEEEEEEEEEEEEE, enjoy talking while you still can:wink:')
        .setColor("#00ff11")

        message.channel.send(embed)

    }

exports.info = {
  name: 'unlock',
  aliases:[],
  description: "unlock a channel"
}//checked
exports.conf={
  cooldown: 3,
  dm: "no"
}
