const lineReplyNoMention = require('discord-reply');
const lineReply = require('discord-reply');
const Discord = require('discord.js')

const ms = require("ms")

exports.run = async(bot, message, args) => {
        const permissions = message.channel.permissionsFor(message.client.user);
  if(!permissions.has("MANAGE_ROLES")&&!permissions.has("MANAGE_GUILD"))
      return message.lineReplyNoMention(  
         new Discord.MessageEmbed()      
        .setAuthor(bot.user.tag, bot.user.avatarURL())
        .setColor("#ff0000")
        .addField("<:pleux_no:887553189883281438> Missing Permission(s)", 'Bot need permission **Manage roles** or **Manage server** to using this command!'))
 
 if (!message.member.hasPermission("MANAGE_ROLES")&&!message.member.hasPermission("MANAGE_GUILD")) {
     const embed = new Discord.MessageEmbed()
     .setColor("#ff0000")
         .setDescription(`<:pleux_no:887553189883281438> | You don't have **Manage server** or **Manage roles** permission to use this command!!!`);
      return message.lineReply(embed)
       };
     

    if (!args[0]) {
          const embed = new Discord.MessageEmbed()
    .setTitle(`**Command: ${bot.config.prefix}unmute**`)
          .setColor("#ff5900")
         .setDescription(`**Description:** unmute a member\n\n**Usage:**\n${bot.config.prefix}unmute [user_id]\n\n**Example:**\n${bot.config.prefix}unmute [user_id]\n\n**Cooldown:** 3 seconds`
        );
  return message.lineReply(embed)
      }
  const embedp = new Discord.MessageEmbed()
     .setColor("#ff5900")
       .setDescription(`<:pleux_no:887553189883281438> | Unable to find this Person!`);
            let userm = await message.guild.members.fetch(args[0].replace("<@!", "").replace("<@", "").replace(">", "")).catch(err => { console.error(err);return message.channel.send(embedp) })
    
       let target = bot.users.cache.get(args[0].replace("<@!", "").replace("<@", "").replace(">", ""));
 
const targe =  message.guild.member(target)
if (target === !args[0]) {
        return message.lineReply(
          "⚠ |Please mention the person who you want to unmute"
        );
      }
  let reason = args.slice(1).join(" ");
  if(!reason) reason = "-";
let muterole= bot.db.get(`${message.guild.id}_muterole`)
   

  if(!bot.db.get(`${message.guild.id}_muterole`)){
   let muterale = message.guild.roles.cache.find(r => r.name === 'Muted');
      //bot.db.set(`${message.guild.id}_muterole`,message.guild.roles.cache.find(r => r.name === 'Muted').id);
  if(!muterale) {
              try{
                let muterele = await message.guild.roles.create({
                  data:{ 
                  name: "Muted",
                  color: "#222222",
                  permissions: []
                  }
                })
                message.guild.channels.cache.forEach(async (channel, id) => {
                  await channel.updateOverwrite(message.guild.roles.cache.find(r => r.name === 'muted'), {
                    CREATE_INSTANT_INVITE: true,
                    ADD_REACTIONS: false,
                    STREAM: false,
                    SEND_MESSAGES: false,
                    SEND_TTS_MESSAGES: false,
                    ATTACH_FILES: false,
                    READ_MESSAGE_HISTORY: true,// https://discord.gg/Tx5tT8z
                    MENTION_EVERYONE: false,
                    USE_EXTERNAL_EMOJIS: true,
                    CONNECT: false,
                    SPEAK: false,
                    USE_VAD: false,
                    CHANGE_NICKNAME: true
                  })
                })
              }
              catch(err) {
                message.channel.send(`Error : ${err}`)
              }
  }
    muterole = bot.db.set(`${message.guild.id}_muterole`,message.guild.roles.cache.find(r => r.name === 'Muted').id.toString());
            
}
  
   
  let muteroles=bot.db.get(`${message.guild.id}_${userm.user.id}muteroles`)
  
      console.log(muterole+"\n"+muteroles)

      if(!targe.roles.cache.has(muterole)){
        const embed = new Discord.MessageEmbed()
        .setColor("#ff5900")
         .setDescription(`<:pleux_no:887553189883281438> | This user is not muted!`);
      return message.lineReply(embed)
       
      }
    


  
              
  
    targe.roles.add(message.guild.roles.cache.find(r => r.id ===muteroles)).catch(()=>{
      targe.roles.add(muteroles)
          targe.roles.remove(message.guild.roles.cache.find(r => r.id ===muterole))
targe.roles.remove(message.guild.roles.cache.find(r => r.id ===muterole).id)
  bot.db.delete(`${message.guild.id}_${userm.user.id}mutetime`)
  bot.db.delete(`${message.guild.id}_${userm.user.id}muteroles`)
  })


  
    targe.roles.remove(message.guild.roles.cache.find(r => r.id ===muterole))
targe.roles.remove(message.guild.roles.cache.find(r => r.id ===muterole).id)
  bot.db.delete(`${message.guild.id}_${userm.user.id}mutetime`)
  bot.db.delete(`${message.guild.id}_${userm.user.id}muteroles`)
 let reasonb = args.slice(1).join(" ");
  if(!reasonb) {
     const embed = new Discord.MessageEmbed()
     .setColor("#00ff11")
         .setDescription(`<:pleux_success:887552715247452210> | Unmuted Sucessfully!`);
      return message.lineReply(embed)
 
  }
  if(reasonb) {
    const embedd = new Discord.MessageEmbed()
    .setColor("#00ff11")
         .setDescription(`<:pleux_success:887552715247452210> | Unmuted Sucessfully!\nreason: ${reason}`)
      return message.lineReply(embedd)
 
  }
  
}

exports.info = {
name: 'unmute',
  aliases:[],
  usage: "<user_id_or_mention>",
  description: "unmute a member",
}
exports.conf={
  cooldown: 3,
  dm: "no"
}