const lineReplyNoMention = require('discord-reply');
const lineReply = require('discord-reply');


exports.run = async (bot, message, args) => {
  const { MessageEmbed }= require("discord.js")
  const discord = require("discord.js")


 let userm;
  let author;
  let usern;
  const fetch= require("node-fetch"),main = await fetch("https://nekos.life/api/v2/img/kiss"), mat = await main.json();
if (args[0]=== "me"||args[0]=== `<@!${message.author.id}>`) {
      userm = message.author
  usern= message.author
      author = bot.user
    } else if(args[0]){
      if(!message.guild) return;
      const embed = new discord.MessageEmbed()
      .setColor("#ff0019")
      .setDescription("<:pleux_no:887553189883281438> | Remember to mention a valid user to kiss!")
      userm = await message.guild.members.fetch(args[0].replace("<@!", "").replace("<@","").replace(">","")).catch(err => { return message.lineReply(embed) })
      usern =userm.user
      //userm =use.user
      author = message.author
    }
  
  if(!userm||!args[0]) {
     return await message.channel.send({embed: {
                color: 16734039,
                description: "<:pleux_no:887553189883281438> | Remember to mention a valid user to kiss!"
            }})
  }
    
  let embed = new MessageEmbed()
  .setTitle(`${author.username} gives ${usern.username} a big kiss <3 <3!!! Much love!`)
  .setImage(mat.url)
  .setColor('RANDOM')
  .setTimestamp()
  .setFooter("Kissu, kissu, kissu")
  message.lineReplyNoMention(embed)
  
}
exports.info = {
  name: 'kiss',
  aliases:[],
  description: "kiss a user",
  usage: "<user_id/mention/\"me\">",
}
exports.conf={
  cooldown: 0,
  dm: "yes"
}