const discord = require("discord.js")

exports.run = async (bot, message, args) => {
      const permissions = message.channel.permissionsFor(message.client.user);
  if(!permissions.has("MANAGE_GUILD")&&!permissions.has("MANAGE_CHANNELS"))
      return message.lineReplyNoMention(  
         new discord.MessageEmbed()      
        .setAuthor(bot.user.tag, bot.user.avatarURL())
        .addField("<:pleux_no:887553189883281438> Missing Permission(s)", 'Bot need permission **Manage server** or **Manage channels** to using this command!')     
        .setColor("#ff0000"))
 
 if (!message.member.hasPermission("MANAGE_GUILD")&&!message.member.hasPermission("MANAGE_CHANNELS")) {
     const embed = new discord.MessageEmbed()
     .setColor(`#ff0000`)
         .setDescription(`<:pleux_no:887553189883281438> | You don't have **Manage server** or **Manage channels** permission to use this command!!!`);
      return message.lineReply(embed)
       };
  let pos = message.channel.position
  
  message.channel.clone().then(c => {
    message.channel.delete()
    c.setPosition(pos)
    c.send("This channel has been nuked\nhttps://imgur.com/LIyGeCR")
  })
};

  exports.info = {
    name: 'nuke',
    aliases: [],
  usage: "",
  description:"nuke a channel"
  }
exports.conf={
  cooldown: 0,
  dm: "no"
}