const lineReplyNoMention = require('discord-reply');
const lineReply = require('discord-reply');

exports.run = async (bot, message, args) => {
    let discord = require('discord.js')
 
  const fetch= require("node-fetch"),main = await fetch("https://nekos.life/api/v2/img/slap"), mat = await main.json();
 
     let userm;
  let author;
  let use;
  let usern;
 
if (args[0]=== "me"||args[0]=== `<@!${message.author.id}>`) {
      userm = message.author
      usern= message.author
      author = bot.user
    } else if(args[0]){
      if(!message.guild) return;
       const embed = new discord.MessageEmbed()
      .setColor("#ff0019")
      .setDescription("<:pleux_no:887553189883281438> | Remember to mention a valid user to slap!")
      userm = await message.guild.members.fetch(args[0].replace("<@!", "").replace("<@","").replace(">","")).catch(err => { return message.lineReply(embed) })
      usern =userm.user
      //userm =use.user
      author = message.author
    }
  
    if(!userm||!args[0]) {
      return await message.channel.send({embed: {
                color: 16734039,
                description: "<:pleux_no:887553189883281438> | Remember to mention a valid user to slap!"
            }})
    }
    
         
    let embed = new discord.MessageEmbed()
    .setTitle(`${author.username} slaps ${usern.username}, ouch!!!`)
    .setImage(mat.url)
    .setColor('RANDOM')
    .setTimestamp()
    .setFooter("ouch!")
    message.lineReplyNoMention(embed)
    
  }
  exports.info = {
    name: 'slap',
  aliases:[],
  description: "slap a user",
  usage: "<user_id_or_mention>",
  }
exports.conf={
  cooldown: 0,
  dm: "no"
}