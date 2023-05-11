const lineReplyNoMention = require('discord-reply');
const lineReply = require('discord-reply');

const Discord = require('discord.js')
exports.run = async (bot, message, args) => {
  //console.log(message.member)
       const permissions = message.channel.permissionsFor(message.client.user);
  if(!permissions.has("BAN_MEMBERS"))
      return message.lineReplyNoMention(  
         new Discord.MessageEmbed()      
        .setAuthor(bot.user.tag, bot.user.avatarURL())
        .addField("<:pleux_no:887553189883281438> Missing Permission(s)", 'Bot need permission **BAN members** to using this command!')     
        .setColor("#ff0000"))
 
 if (!message.member.hasPermission("BAN_MEMBERS")) {
     const embed = new Discord.MessageEmbed()
     .setColor(`#ff0000`)
         .setDescription(`<:pleux_no:887553189883281438> | You don't have **BAN Members** permission to use this command!!!`);
      return message.lineReply(embed)
       };
    
  if(!args[0]) {
         const embed = new Discord.MessageEmbed()
    .setTitle(`**Command: ${bot.config.prefix}ban**`)
         .setColor("ff5900")
         //.setDescription(`**Description:** ban a member\n\n**Sub Commands:**\n${bot.config.prefix}setwarn - ban if he/she gets 2 warns(Example: ${bot.config.prefix}setwarn ban 4).\n\n**Usage:**\n${bot.config.prefix}ban [user_id_or_mention] (reason)\n\n**Example:**\n${bot.config.prefix}ban @User spam\n\n**Cooldown:** 3 seconds`
         .setDescription(`**Description:** ban a member\n\n**Usage:**\n${bot.config.prefix}ban [user_id_or_mention] (reason)\n\n**Example:**\n${bot.config.prefix}ban @User spam\n\n**Cooldown:** 3 seconds`
        );
  return message.lineReply(embed)
      } 
  const embedp = new Discord.MessageEmbed()
     .setColor("ff5900")
       .setDescription(`<:pleux_no:887553189883281438> | Unable to find this Person!`);
            let userm = await message.guild.members.fetch(args[0].replace("<@!", "").replace("<@", "").replace(">", "")).catch(err => { console.error(err);return message.lineReply(embedp) })
    
      let target = message.mentions.members.first()|| bot.users.cache.get(args[0]);

      if (target === !args[0]) {
        return message.lineReply(
          "⚠ |Please mention the person who you want to ban"
        );
      }
     const targe =  message.guild.member(target)
      
    
      if (target.id === message.author.id) {
        return message.lineReply("<:pleux_no:887553189883281438> | You can not ban yourself");
      }
      if(target.id=== "753298841712721961") {//t404(me)
  return message.channel.send("<:pleux_no:887553189883281438> | you can ban that person!!")//make sure u replace your id here
    }
   const embedai = new Discord.MessageEmbed()
     .setColor("#ff0000")
       .setDescription(`<:pleux_no:887553189883281438> | I can not do th I can't do that, my role is lower than yours!`);
       
   if(targe.roles.highest.position >= message.guild.members.cache.get(bot.user.id).roles.highest.position) return message.channel.send(embedai)

if (targe.hasPermission("ADMINISTRATOR")/*hasPermission("ADMINISTRATOR")*/){
        return message.lineReply("<:pleux_no:887553189883281438> | The user you want to ban is a moderator/administrator I can't do that,try to ban him/her/them yourself..");
  }
      let reason = args.slice(1).join(" ");
      if (!reason) reason = "-";
        let reasonb= args.slice(1).join(" ");
  
  const embedBan = new Discord.Embed()
  .setColor("#ff0000")
  .setDescription(`You were banned from **${message.guild.name}**`)
        targe.ban({reason: reason+` || by ${message.member.user.tag}`});
         const embed = new Discord.MessageEmbed()
       .setTitle("<:pleux_success:887552715247452210> Banned Sucessfully")
    .addField("Action by", `${message.author.tag}`, true)
    .addField("Banned:",`${targe.user.tag}`, true)
         .addField("Reason", `[No Reason]`, true)
   
       .setFooter( `Banned: ${new Date()
      .toString()
      .split(" ", 5)
      .join(" ")}`
  )
      .setColor("#00ff11")
     
         if(!reasonb){
         {message.channel.send(embed)};
           targe.send(embedBan);
      }
   const embedBanr = new Discord.Embed()
  .setColor("#ff0000")
  .setDescription(`You were banned from **${message.guild.name}**`)
    const embed1 = new Discord.MessageEmbed()
       .setTitle("<:pleux_success:887552715247452210> Banned Sucessfully")
      .addField("Action by", `${message.author.tag}`, true)
    .addField("Banned:",`${targe.user.tag}`, true)
        .addField("Reason", `${reasonb}`, true)
       .setFooter( `Banned: ${new Date()
      .toString()
      .split(" ", 5)
      .join(" ")}`
  )
      .setColor("#00ff11")
     
      if(reasonb){
         message.channel.send(embed1);
        targe.send(embedBanr);
      }
      };


exports.info = {
  name: 'ban',
  aliases:[],
  usage: "<user_id_or_mention>",
  description: "banned a member"
}//checked
exports.conf={
  cooldown: 3,
  dm: "no"
}