const ms = require('ms');
const Discord = require('discord.js')

exports.run = (bot, message, args) => {
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

  if (!bot.lockit) bot.lockit = [];
  let time = args.join(' ');
  let validUnlocks = ['release', 'unlock'];
  //if (!message.member.hasPermission("MANAGE_CHANNELS")) return msg.reply("❌**Error:** You don't have the permission to do that!");
    const embed = new Discord.MessageEmbed()
    .setTitle(`**Command: ${bot.config.prefix}locktime**`)
         .setColor("ff5900")
         .setDescription(`**Description:** Lock a Channel\n\n**Usage:**\n${bot.config.prefix}locktime (duration)\n\n**Example:**\n${bot.config.prefix}locktime 5m\n\n**Cooldown:** 3 seconds`
        );
  if (!time) return message.lineReply(embed);

  if (validUnlocks.includes(time)) {
    message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send('Lockdown lifted.');
      clearTimeout(bot.lockit[message.channel.id]);
      delete bot.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      
 const embed = new Discord.MessageEmbed()
        .setTitle(`Channel Locked!`)
       .setDescription(`Damnn, **${message.author.username}** just locked the channel down for ${ms(ms(time), { long:true })}`)
       .setColor("#ff0000")

        message.channel.send(embed).then(() => {

           const embeds = new Discord.MessageEmbed()
        .setTitle(`Channel unLocked!`)
        .setDescription('Lockdown lifted. WEEEEEEEEEEEEEEEEEEEEEE, enjoy talking while you still can:wink:')
         .setColor("#00ff11")

       bot.lockit[message.channel.id] = setTimeout(() => {
          message.channel.createOverwrite(message.guild.id, {
            SEND_MESSAGES: null
          }).then( message.channel.send(embeds)
).catch(console.error);
          delete bot.lockit[message.channel.id];
        }, ms(time));
      
      }).catch(error => {
        console.log(error);
      });
    });
  }
};

exports.info = {
  name: 'locktime',
  aliases:[],
  description: "lock a channel"
}//checked
exports.conf={
  cooldown: 3,
  dm: "no"
}
