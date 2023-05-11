const lineReplyNoMention = require('discord-reply');
const lineReply = require('discord-reply');

exports.run = async (bot, message, args) => {
  let discord = require('discord.js')
  const { MessageEmbed } = require('discord.js');
const fetch= require("node-fetch"),main = await fetch("https://some-random-api.ml/animu/wink"), mat = await main.json();
        

        
           

       
    

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
      .setDescription("<:pleux_no:887553189883281438> | Remember to mention a valid user to wink!")
      userm = await message.guild.members.fetch(args[0].replace("<@!", "").replace("<@","").replace(">","")).catch(err => { return message.lineReply(embed) })
      usern =userm.user
      //userm =use.user
      author = message.author
    }
  
  if(!userm||!args[0]) {
let emb = new discord.MessageEmbed()
  .setTitle(`${message.author.username} winks!`)
  .setImage(mat.link)
  .setColor('RANDOM')
  .setTimestamp()
  return message.lineReplyNoMention(emb)
}
    
  let embed = new discord.MessageEmbed()
  .setTitle(`${author.username} gives ${usern.username} a wink!`)
  .setImage(mat.link)
  .setColor('RANDOM')
  .setTimestamp()
  message.lineReplyNoMention(embed)
  
}
exports.info = {
  name: 'wink',
  aliases: [],
  description: "winks a user",
  usage: "<user_id/mention/\"me\">",
}
exports.conf={
  cooldown: 0,
  dm: "yes"
}