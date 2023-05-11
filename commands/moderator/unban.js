const lineReplyNoMention = require("discord-reply");
const lineReply = require("discord-reply");

const fs = require("fs");
const Discord = require("discord.js");
exports.run = async (bot, message, args) => {
       const permissions = message.channel.permissionsFor(message.client.user);
  if(!permissions.has("MANAGE_GUILD")&&!permissions.has("BAN_MEMBERS"))
      return message.lineReplyNoMention(  
         new Discord.MessageEmbed()      
        .setAuthor(bot.user.tag, bot.user.avatarURL())
        .addField("<:pleux_no:887553189883281438> Missing Permission(s)", 'Bot need permission **Manage server** or **Ban members** to using this command!')     
        .setColor("#ff0000"))
 
 if (!message.member.hasPermission("BAN_MEMBERS")&&!message.member.hasPermission("MANAGE_GUILD")) {
     const embed = new Discord.MessageEmbed()
     .setColor("#ff0000")
         .setDescription(`<:pleux_no:887553189883281438> | You don't have **Manage guild** or **Ban members** permission to use this command!!!`);
      return message.lineReply(embed)
       };
  if (!args[0]) {
          const embed = new Discord.MessageEmbed()
    .setTitle(`**Command: ${bot.config.prefix}unban**`)
          .setColor("#ff5900")
         .setDescription(`**Description:** unban a member\n\n**Usage:**\n${bot.config.prefix}unban [user_id]\n\n**Example:**\n${bot.config.prefix}unban [user_id]\n\n**Cooldown:** 3 seconds`
        );
  return message.lineReply(embed)
      }
  let bannedMember = bot.users.cache.get(args[0].replace("<@!", "").replace("<@", "").replace(">", ""));

  const embedp = new Discord.MessageEmbed()
     .setColor("#ff5900")
       .setDescription(`<:pleux_no:887553189883281438> | Unable to find this Person!`);
            let userm = await message.guild.members.fetch(args[0].replace("<@!", "").replace("<@", "").replace(">", "")).catch(err => { console.error(err);return message.channel.send(embedp) })
    
  if (bannedMember === !args[0]) {
    return message.lineReply(
      "⚠ |Please give the id of the person who you want to unban"
    );
  }

  let reason = args.slice(1).join(" ");
  if (!reason) reason = "-";
  let reasonb = args.slice(1).join(" ");
  try {
    message.guild.fetchBans().then(bans => {
      message.guild.members.unban(bannedMember);
    });
  } catch (error) {
    console.log(error);
  }
  if(!reasonb) {
     const embed = new Discord.MessageEmbed()
     .setColor("#00ff11")
         .setDescription(`<:pleux_success:887552715247452210> | Unban Sucessfully!`);
      return message.lineReply(embed)
 
  }
  if(reasonb) {
    const embedd = new Discord.MessageEmbed()
    .setColor("#00ff11")
         .setDescription(`<:pleux_success:887552715247452210> | Unban Sucessfully!\nreason: ${reason}`)
      return message.lineReply(embedd)
 
  }
  
  return;
};

exports.info = {
  name: "unban",
  aliases: [],
  usage: "<user_id>",
  description: "unban a member"
};
exports.conf = {
  cooldown: 0,
  dm: "no"
};
