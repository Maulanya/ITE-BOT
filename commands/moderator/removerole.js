const { MessageEmbed } = require('discord.js');
const Discord = require(`discord.js`)
exports.run = async (bot, message, args) => {

      const permissions = message.channel.permissionsFor(message.client.user);
  if(!permissions.has("MANAGE_GUILD")&&!permissions.has("MANAGE_ROLES"))
      return message.lineReplyNoMention(  
         new Discord.MessageEmbed()      
        .setAuthor(bot.user.tag, bot.user.avatarURL())
        .addField("<:pleux_no:887553189883281438> Missing Permission(s)", 'Bot need permission **Manage server** or **Manage roles** to using this command!')     
        .setColor("#ff0000"))
 
 if (!message.member.hasPermission("MANAGE_GUILD")&&!message.member.hasPermission("MANAGE_ROLES")) {
     const embed = new Discord.MessageEmbed()
     .setColor(`#ff0000`)
         .setDescription(`<:pleux_no:887553189883281438> | You don't have **Manage server** or **Manage roles** permission to use this command!!!`);
      return message.lineReply(embed)
       };
    
        if (!args[0]) return message.channel.send("Incorrect usage, It's `<@username | user id> <@role name | id>")
        
             const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const embedai = new Discord.MessageEmbed()
     .setColor("FF0000")
       .setDescription(`<:pleux_no:887553189883281438> | I can not do th I can't do that, my role is lower than yours!`);
       
   if(member.roles.highest.position >= message.guild.members.cache.get(bot.user.id).roles.highest.position) return message.channel.send(embedai)
   const embedyou = new Discord.MessageEmbed()
     .setColor("FF0000")
       .setDescription(`<:pleux_no:887553189883281438> | you can't do that, your role is low and the role is high`);
      
   if(member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(embedyou)
  const embedowner = new Discord.MessageEmbed()
     .setColor("FF0000")
       .setDescription(`<:pleux_no:887553189883281438> | I can't do that he is the owner!`);
   
   if(message.guild.owner.user.id == member.id) return message.channel.send(embedowner)
 
            const embedp = new Discord.MessageEmbed()
     .setColor("FF0000")
       .setDescription(`<:pleux_no:887553189883281438> | Unable to find this Person!`);
            let nouser = await message.guild.members.fetch(args[0].replace("<@!", "").replace("<@", "").replace(">", "")).catch(err => { console.error(err);return message.channel.send(embedp) })
            
   const roleName = message.guild.roles.cache.find(r => (r.name === args[1].toString()) || (r.id === args[1].toString().replace(/[^\w\s]/gi, '')));

             const embed = new MessageEmbed()
                 .setTitle(`Role Name: ${roleName.name}`)
                 .setDescription(`${message.author} has successfully removed the role ${roleName} from ${member.user}`)
                 .setColor('f3f3f3')
                 .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
                 .setFooter(new Date().toLocaleString())

            return member.roles.add(roleName).then(() => message.channel.send(embed));
}

exports.info = {
  name: 'removerole',
  aliases: [],
  usage: "<user_id_or_mention>",
  description:"remove role a user"
}
exports.conf={
  cooldown: 0,
  dm: "no"
}