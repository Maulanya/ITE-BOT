const lineReplyNoMention = require('discord-reply');
const lineReply = require('discord-reply');
const Discord = require('discord.js')
const ms = require("ms")
exports.run = async (bot, message, args) => {
  //console.log(message.member)
      const permissions = message.channel.permissionsFor(message.client.user);
  if(!permissions.has("MANAGE_ROLES")&&!permissions.has("MANAGE_GUILD"))
      return message.lineReplyNoMention(  
         new Discord.MessageEmbed()      
        .setAuthor(bot.user.tag, bot.user.avatarURL())
        .addField("<:pleux_no:887553189883281438> Missing Permission(s)", 'Bot need permission **Manage roles** or **Manage server** to using this command!')     
        .setColor("#ff0000"))
 
 if (!message.member.hasPermission("MANAGE_ROLES")&&!message.member.hasPermission("MANAGE_GUILD")) {
     const embed = new Discord.MessageEmbed()
     .setColor("#ff0000")
         .setDescription(`<:pleux_no:887553189883281438> | You don't have **Manage roles** or **Manage server** permission to use this command!!!`);
      return message.lineReply(embed)
       };
     
   if (!args[0]) {
          const embed = new Discord.MessageEmbed()
          .setColor("#ff5900")
    .setTitle(`**Command: ${bot.config.prefix}mute**`)
        // .setDescription(`**Description:** mute a member\n\n**Sub Commands:**\n${bot.config.prefix}setwarn - mute if he/she gets 2 warns(Example: ${bot.config.prefix}setwarn mute 4).\n\n**Usage:**\nThe mute duration is in minutes by default but can be applied with time indicators such as \`d, h, m, s\`, example: \`${bot.config.prefix}mute @user 2d spam\` returns to mute the user for 2 days with spam as reason.\n\n${bot.config.prefix}mute [user_id_or_mention] (duration) (reason)\n\n**Example:**\n${bot.config.prefix}mute @User 1m spamming\n\n**Cooldown:** 3 seconds`
         .setDescription(`**Description:** mute a member\n\n**Usage:**\nThe mute duration is in minutes by default but can be applied with time indicators such as \`d, h, m, s\`, example: \`${bot.config.prefix}mute @user 2d spam\` returns to mute the user for 2 days with spam as reason.\n\n${bot.config.prefix}mute [user_id_or_mention] (duration) (reason)\n\n**Example:**\n${bot.config.prefix}mute @User 1m\n${bot.config.prefix}mute @User 1m spamming\n\n**Cooldown:** 3 seconds`
        
          );
  return message.lineReply(embed)
      }
    const embedp = new Discord.MessageEmbed()
     .setColor("#ff5900")
       .setDescription(`<:pleux_no:887553189883281438> | Unable to find this Person!`);
            let userm = await message.guild.members.fetch(args[0].replace("<@!", "").replace("<@", "").replace(">", "")).catch(err => { console.error(err);return message.lineReply(embedp) })
                                                                                                     
        let target = bot.users.cache.get(args[0].replace("<@!", "").replace("<@", "").replace(">", ""));
  if (target === !args[0]) {
        return message.lineReply(
          "⚠ |Please mention the person who you want to mute"
        );
      }
  const targe =  message.guild.member(target)
  if(target.id=== "753298841712721961") {//t404(me)
  return message.channel.send("<:pleux_no:887553189883281438> | you can mute that person!!")//make sure u replace your id here
    }

 if (target.id === message.author.id) {
        return message.lineReply("<:pleux_no:887553189883281438> | You can not mute yourself");
      }
      const embedai = new Discord.MessageEmbed()
     .setColor("#ff0000")
       .setDescription(`<:pleux_no:887553189883281438> | I can not do th I can't do that, my role is lower than yours!`);
       
   if(targe.roles.highest.position >= message.guild.members.cache.get(bot.user.id).roles.highest.position) return message.channel.send(embedai)

if (targe.hasPermission("ADMINISTRATOR")){
        return message.lineReply("<:pleux_no:887553189883281438> |"+
                                    " The user you want to mute is a moderator/administrator I can't do that,try to mute him/her/them yourself..");
  }

   let reason = args.slice(2).join(" ");
  if(!reason) reason = "-";
let muterole= bot.db.get(`${message.guild.id}_muterole`)
   

  if(!bot.db.get(`${message.guild.id}_muterole`)){
   let muterale = message.guild.roles.cache.find(r => r.name === 'Muted');
    //  bot.db.set(`${message.guild.id}_muterole`,message.guild.roles.cache.find(r => r.name === 'muted').id);
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
    const time = args[1]
   
     if(!time||ms(time)===undefined){
       const embed = new Discord.MessageEmbed()
       .setColor("#ff5900")
         .setDescription(`<:pleux_no:887553189883281438> | Please add a correct time to mute this member!`);
      return message.lineReply(embed)
     
    }
   
  let muteroles=bot.db.set(`${message.guild.id}_${userm.user.id}muteroles`, userm._roles)
  
      console.log(muterole+"\n"+muteroles)

      
    
bot.db.set(`${message.guild.id}_${userm.user.id}mutetime`, time)

  setTimeout(function(){
  
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
             }, ms(bot.db.get(`${message.guild.id}_${userm.user.id}mutetime`)))
  
  
targe.roles.remove(targe.roles.cache);
  targe.roles.add(message.guild.roles.cache.find(r => r.id ===muterole))
  targe.roles.add(message.guild.roles.cache.find(r => r.id ===muterole).id)
 let reasonb = args.slice(2).join(" ");
          const embed = new Discord.MessageEmbed()
       .setTitle("<:pleux_success:887552715247452210> Mute Sucessfully")
    .addField("Action by", `${message.author.tag}`, true)
    .addField("Muted:",`${targe.user.tag}`, true)
     .addField("Limit", `${ms(ms(time), { long:true })}`, true)
         .addField("Reason", `[No Reason]`, true)
       .setFooter( `Muted: ${new Date()
      .toString()
      .split(" ", 5)
      .join(" ")}`
  )
      .setColor("#00ff11")
     
         if(!reasonb){
         {message.channel.send(embed)};
      }
    const embed1 = new Discord.MessageEmbed()
       .setTitle("<:pleux_success:887552715247452210> Mute Sucessfully")
      .addField("Action by", `${message.author.tag}`, true)
    .addField("Muted:",`${targe.user.tag}`, true)
     .addField("Limit", `${ms(ms(time), { long:true })}`, true)
        .addField("Reason", `${reasonb}`, true)
       .setFooter( `Muted: ${new Date()
      .toString()
      .split(" ", 5)
      .join(" ")}`
  )
      .setColor("#00ff11")
     
      if(reasonb){
         message.channel.send(embed1);
      }
 }


exports.info = {
name: 'mute',
  aliases:[],
  usage: "<user_id_or_mention>",
  description: "mutes a member"
}
exports.conf={
  cooldown: 3,
  dm: "no"
}