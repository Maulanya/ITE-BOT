const { MessageEmbed } = require("discord.js");
const sendError = require("util");
const Discord = require("discord.js");
exports.run = (bot, message, args) => {  const permissions = message.channel.permissionsFor(message.client.user);
  if(!permissions.has("MANAGE_GUILD"))
      return message.lineReplyNoMention(  
         new Discord.MessageEmbed()      
        .setAuthor(bot.user.tag, bot.user.avatarURL())
        .addField("<:pleux_no:887553189883281438> Missing Permission(s)", 'Bot need permission **Manage server** to using this command!')     
        .setColor("#ff0000"))
 
 if (!message.member.hasPermission("MANAGE_GUILD")) {
     const embed = new Discord.MessageEmbed()
     .seTColor("#ff0000")
         .setDescription(`<:pleux_no:887553189883281438> | You don't have **Manage server** permission to use this command!!!`);
      return message.lineReply(embed)
       };
                                       
    const embed = new Discord.MessageEmbed()
    .setColor("#ff5900")
         .setDescription(`<:pleuxinfo:902806293419544576> | type ON/OFF to turn on and turn off the system`
        );
      if (!args[0]) return message.lineReplyNoMention (embed);
    const type = args[0];
    if (type === "on" || type === "enable") {
      bot.db.set(`${message.guild.id}_goodbyemessagesys`, "yes")
      message.channel.send(
        `<:pleux_success:887552715247452210> | Goodbye message is successfully enabled!`
      );
      return;
    }
    if (type === "off" || type === "disable") {
      bot.db.set(`${message.guild.id}_goodbyemessagesys`, "no")
      message.channel.send(
        `<:pleux_success:887552715247452210> | Goodbye message is successfully disabled!`
      );
      return;
    }
}
exports.info = {
name: 'setleavebyemessagesystem',
  aliases:[`setleavesystem`,`setleavemsgsys`,"goodbyemsgsys", 'goodbyemessagesys',"setgoodbymessagesys", "setgoodbyemsgsys", "leavemessagesys", "setleavemessagesys", "setleavemsgsys","leavemsgsys","leavemsgsystem","setleavemsgsystem","setleavemessagesystem","leavemessagesystem"],
  usage: "<on/enable/off/disable>",
  description: "turns the welcome message on/off",
}
exports.conf={
  cooldown: 3,
  dm: "no"
}