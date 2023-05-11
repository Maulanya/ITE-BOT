const lineReplyNoMention = require('discord-reply');
const lineReply = require('discord-reply');

const fs = require("fs");

const db = require('quick.db');
const Discord = require("discord.js");
const ms = require("ms");
exports.run = async(bot, message, args) => {
    //   let warning = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
        const permissions = message.channel.permissionsFor(message.client.user);
  if(!permissions.has("MANAGE_MESSAGES"))
      return message.lineReplyNoMention(  
         new Discord.MessageEmbed()      
        .setAuthor(bot.user.tag, bot.user.avatarURL())
        .addField("<:pleux_no:887553189883281438> Missing Permission(s)", 'Bot need permission **Manage Messages** to using this command!')     
        .setColor("#ff0000"))
 
 if (!message.member.hasPermission("MANAGE_MESSAGES")) {
     const embed = new Discord.MessageEmbed()
     .setColor(`#ff0000`)
         .setDescription(`<:pleux_no:887553189883281438> | You don't have **Manage messages** permission to use this command!!!`);
      return message.lineReply(embed)
       };
  
  if (!args[0]) {
   const embed = new Discord.MessageEmbed()
    .setTitle(`**Command: ${bot.config.prefix}warn**`)
   .setColor(`#ff5900`)
         .setDescription(`**Description:** warn a member\n\n**Usage:**\n${bot.config.prefix}warn [user_id_or_mention] (reason)\n\n**Example:**\n${bot.config.prefix}warn @User adv\n\n**Cooldown:** 3 seconds`
        );
  return message.lineReply(embed)
      }
  
const embedp = new Discord.MessageEmbed()
     .setColor("FF0000")
       .setDescription(`<:pleux_no:887553189883281438> | Unable to find this Person!`);
            let userm = await message.guild.members.fetch(args[0].replace("<@!", "").replace("<@", "").replace(">", "")).catch(err => { console.error(err);return message.lineReply(embedp) })
    
   let wUser = message.guild.member(args[0].replace("<@!", "").replace("<@", "").replace(">", ""));
   if(wUser.id=== "753298841712721961") {//t404(me)
  return message.channel.send("<:pleux_no:887553189883281438> | you can warn that person!!")//make sure u replace your id here
    }
      if (wUser.id === message.author.id) {
        return message.lineReply("<:pleux_no:887553189883281438> | You can not warn yourself");
      }
   const embedai = new Discord.MessageEmbed()
     .setColor("FF0000")
       .setDescription(`<:pleux_no:887553189883281438> | I can not do th I can't do that, my role is lower than yours!`);
       
   if(wUser.roles.highest.position >= message.guild.members.cache.get(bot.user.id).roles.highest.position) return message.channel.send(embedai)

          if (wUser.hasPermission("ADMINISTRATOR")/*hasPermission("ADMINISTRATOR")*/){
        return message.lineReply("<:pleux_no:887553189883281438> | The user you want to warn is a moderator/administrator I can't do that,try to warn him/her/them yourself..");
  };
  let reason = args.slice(1).join(" ");
      if (!reason) reason = "";
      let a=bot.db.get(`${wUser.user.id}_${message.guild.id}_warns`)||0
  let b=bot.db.get(`${message.member.id}_${message.guild.id}_modwarns`)||0
let warnings=bot.db.set(`${wUser.user.id}_${message.guild.id}_warns`,a+1)
let modwarn=bot.db.set(`${message.member.id}_${message.guild.id}_modwarns`, b+1)
console.log(warnings)
  console.log(modwarn)
 
  let c=bot.db.get(`${message.guild.id}_warnmute`) ||2//mute
  let d=bot.db.get(`${message.guild.id}_warnkick`) ||3//kick
  let e=bot.db.get(`${message.guild.id}_warnban`) ||4//ban
  
  /*
      if(a > e-1){
         let target = bot.users.cache.get(args[0].replace("<@!", "").replace("<@", "").replace(">", ""));
const targe =  message.guild.member(target)
      
        
        targe.ban({reason: `get too much warns`});
       
       return message.channel.send(`<:pleux_success:887552715247452210> | Banned sucessfully || get too much warns`)
}   
  else
  if(a > d-1){
    let target = bot.users.cache.get(args[0].replace("<@!", "").replace("<@", "").replace(">", ""));
const targe =  message.guild.member(target)
      
   
        
        targe.kick({reason: `get too much warns`});
       
       return message.channel.send(`<:pleux_success:887552715247452210> | Kicked sucessfully || get too much warns`)
}  
  else
    if(a > c-1){
   
  
    let userm = await message.guild.members.fetch(args[0].replace("<@!", "").replace("<@", "").replace(">", "")).catch(err => { console.error(err);return message.channel.send("<:pleuxno:877346661033185281> | Unable to find this Person") })
    
        let target = bot.users.cache.get(args[0].replace("<@!", "").replace("<@", "").replace(">", ""));
  
  
  const permissions = message.channel.permissionsFor(message.client.user);
 
  
const targe =  message.guild.member(target)
      


  
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
    const time = bot.db.get(`${message.guild.id}_mutetime`)||"3d"
   
    if(!time){
      return message.lineReply("⚠ | Please add a time to mute this member!")
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
  bot.db.delete(`${message.guild.id}_${userm.user.id}muteroles`)})
    targe.roles.remove(message.guild.roles.cache.find(r => r.id ===muterole))
targe.roles.remove(message.guild.roles.cache.find(r => r.id ===muterole).id)
    bot.db.delete(`${message.guild.id}_${userm.user.id}mutetime`)
    bot.db.delete(`${message.guild.id}_${userm.user.id}muteroles`)
             }, ms(bot.db.get(`${message.guild.id}_${userm.user.id}mutetime`)))
  
  
targe.roles.remove(targe.roles.cache);
  targe.roles.add(message.guild.roles.cache.find(r => r.id ===muterole))
  targe.roles.add(message.guild.roles.cache.find(r => r.id ===muterole).id)
 
  
  message.lineReplyNoMention("<:pleux_success:887552715247452210> | Muted Sucessfully! || Get too much warns")
 
   
} else */ {

        let reasonb= args.slice(1).join(" ");
        if(!reasonb){
          const embedWarn = new Discord.MessageEmbed()
          .setColor("#00ff11")
          .setDescription(`<:pleux_success:887552715247452210> | ${wUser.user.tag} has been warned`)
        message.channel.send(embedWarn)
        };
      if(reasonb) {
          const embedWarnr = new Discord.MessageEmbed()
          .setColor("#00ff11")
          .setDescription(`<:pleux_success:887552715247452210> | ${wUser.user.tag} has been warned || ${reason}`)
        message.channel.send(embedWarnr);}
   };
}
exports.info = {
name: 'warn',
  aliases:[],
  usage: "<user_id_or_mention>",
  description: "warns a member",
}
exports.conf={
  cooldown: 0,
  dm: "no"
}