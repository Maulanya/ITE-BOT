const lineReplyNoMention = require('discord-reply');
const lineReply = require('discord-reply');
const db = require('quick.db')
const Discord = require('discord.js')


let discord = require('discord.js')
let { RichEmbed } = require('discord.js')
let { MessageEmbed } = require('discord.js')
const moment = require("moment");

exports.run = async (bot, message, args) => {

  const embedp = new Discord.MessageEmbed()
     .setColor("FF0000")
       .setDescription(`<:pleux_no:887553189883281438> | Unable to find this Person!`);
  

    let userm;

    if (!args[0]) {
      userm = message.member;
    } else if (!userm){
      message.channel.send(embedp)
    }else {
      if(!message.guild) return;
      userm = message.mentions.members.first()|| bot.users.cache.get(args[0])
    }

const flags = {
	DISCORD_EMPLOYEE: 'Discord Employee',
	DISCORD_PARTNER: 'Discord Partner',
	BUGHUNTER_LEVEL_1: 'Bug Hunter (Green)',
	BUGHUNTER_LEVEL_2: 'Bug Hunter (Gold)',
	HYPESQUAD_EVENTS: 'HypeSquad Events',
	HOUSE_BRAVERY: 'House of Bravery',
	HOUSE_BRILLIANCE: 'House of Brilliance',
	HOUSE_BALANCE: 'House of Balance',
	EARLY_SUPPORTER: 'Early Supporter',
	TEAM_USER: 'Team User',
	SYSTEM: 'System',
	VERIFIED_BOT: 'Verified Bot',
	VERIFIED_DEVELOPER: 'Verified Bot Developer'
};
    
    let stat = {
      online: "https://emoji.gg/assets/emoji/9166_online.png",
      idle: "https://emoji.gg/assets/emoji/3929_idle.png",
      dnd: "https://emoji.gg/assets/emoji/2531_dnd.png",
      offline: "https://emoji.gg/assets/emoji/7445_status_offline.png"
    }


    let embed = new MessageEmbed()
     if(userm.user.displayAvatarURL()) embed.setThumbnail(userm.user.displayAvatarURL({ dynamic: true }), true)

    //ACTIVITY
    let array = []
    
let data;
      if(userm.user.presence.activities.length){
         data = userm.user.presence.activities;

      for (let i = 0; i < data.length; i++) {
        let name = data[i].name || "none"
        let zname = data[i].state || "none"
        let type = data[i].type || "none"
        

        array.push(`**${type}** : \`${name}: ${zname}\``)

        if (data[i].name === "Spotify") {
          embed.setThumbnail(`https://i.scdn.co/image/${data[i].assets.largeImage.replace("spotify:", "")}`)
        }
        embed.setDescription(array.join("\n"))
      } 
        
      }
    

      //EMBED COLOR BASED ON member
      embed.setColor(userm.displayHexColor === "#000000" ? "#ffffff" : userm.displayHexColor)

      //OTHER STUFF 
      if(userm.user.displayAvatarURL()) embed.setAuthor(userm.user.tag, userm.user.displayAvatarURL({ dynamic: true }))


       embed.addField("Nickname", userm.nickname||"no nickname("+userm.user.username+")", true)
      embed.addField("Joined At", moment(userm.user.joinedGuildTimestamp).format("LLLL"), true)
        embed.addField("Account Created At", moment(userm.user.createdAt).format("LLLL"), true)
        
        embed.addField("Common Information", `ID: \`${userm.user.id}\`\nTag: #${userm.user.discriminator}\nBot: ${userm.user.bot}\nDeleted User: ${userm.deleted}`, true)
                                
       if(userm._roles) embed.addField("Roles",`<@&${userm._roles.join('> <@&')}>`, true)
        embed.addField("Highest Role", userm.roles.highest,true)
        if(userm.roles.hoist)embed.addField("Rank/Hoist Role", userm.roles.hoist, true)
        if(userm.user.flags.toArray())embed.addField("Flags", userm.user.flags.toArray().length ? userm.user.flags.toArray().map(flag => flags[flag]).join(', ') : 'None', true)
        embed.setFooter(userm.user.presence.status, stat[userm.user.presence.status],true)
  .setTimestamp();


console.log(userm._roles)
//  message.channel.send(userm.user.tag)
      return message.lineReplyNoMention(embed).catch(err => {
        return message.channel.send("Error : " + err)
      })


}
exports.info = {
  name: 'whois',
  aliases:['userinfo'],
  usage: "(<user_id_or_mention>)",
  description: "Get the information of yourself or a user",
}
exports.conf={
  cooldown: 0,
  dm: "yes"
}