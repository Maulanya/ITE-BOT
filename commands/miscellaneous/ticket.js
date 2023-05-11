const fetchAll = require('discord-fetch-all')
const fs = require('fs')
const { MessageAttachment } = require('discord.js') 
const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  message.delete({ timeout: "5000" });
  const permissions = message.channel.permissionsFor(message.client.user);
  if(!permissions.has("ADMINISTRATOR"))
      return message.lineReplyNoMention(  
         new Discord.MessageEmbed()      
        .setAuthor(bot.user.tag, bot.user.avatarURL())
        .addField("<:pleux_no:887553189883281438> Missing Permission(s)", 'Bot need permission **Administrator** to using this command!')     
        .setColor("ff66d6"))
 
if (`${bot.config.prefix}ticket`) {
            const ticketEmbed = new Discord.MessageEmbed() //Embed for the ticket

            const user = message.author.id; //just for the channel name
            const user2 = message.author.username

            const name = user2 + "s-ticket";

            if (message.guild.channels.cache.find(ch => ch.name == name)) {
                message.channel.send(ticketEmbed.setColor("RANDOM").setTitle("You have already opened a ticket")) //in case the user tries to spam tickets
            } else {
                message.guild.channels.create(name).then(async (chan) => { // makes a new channel so only admins can see it
                    chan.updateOverwrite(message.guild.roles.everyone, {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    })
                    chan.updateOverwrite(user, {
                        SEND_MESSAGES: true,
                        VIEW_CHANNEL: true
                    })
                    message.channel.send(ticketEmbed.setColor("RANDOM").setTitle("I have created a ticket for you\n`if the command ticket doesn't work, like you're the only one in the channel ticket, make sure you activate the Administrator permission on Pleux so you can access the Ticket Channel.`"))
                  .then(ms => {
        ms.delete({ timeout: "5000" });
      });
                    
                  chan.send(`${message.author} here your Ticket!`)
                    await chan.send(ticketEmbed.setColor("RANDOM").setAuthor(`Hello ${message.author.username}, thank you for opening a ticket`).setTitle("New Ticket!") .setFooter( `Muted: ${new Date()
      .toString()
      .split(" ", 5)
      .join(" ")}`
  ).setDescription(`Thanks for opening a ticket.  Please let us know why you have opened a ticket and a mod will get to you as fast as possible. 📌`).setThumbnail(bot.user.displayAvatarURL())).then((m) => { m.pin() })
                    chan.send(`${chan.name} | Use \`${bot.config.prefix}ticketinfo\` for more help`) 
                })
            }
        } 
  };

exports.info = {
  name: "ticket",
  aliases: [],
  usage: "",
  description: "show the bot command"
};
//checked
exports.conf = {
  cooldown: 50,
  dm: "yes"
};
