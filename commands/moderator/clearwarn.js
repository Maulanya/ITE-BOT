const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (bot, message, args) => {
     const permissions = message.channel.permissionsFor(message.client.user);
  
 if (!message.member.hasPermission("MANAGE_MESSAGES")) {
     const embed = new Discord.MessageEmbed()
     .setColor(`#ff0000`)
         .setDescription(`<:pleux_no:887553189883281438> | You don't have **Manage messages** permission to use this command!!!`);
      return message.lineReply(embed)
       };
     

 //make sure u replace your id here
   if(!message.guild) return;
  let useram;
let x;
  let ao= message.guild.id;
  if (!args[0]) {
   const embed = new Discord.MessageEmbed()
    .setTitle(`**Command: ${bot.config.prefix}clearwarn**`)
   .setColor(`#ff5900`)
         .setDescription(`**Description:** clear warn a member\n\n**Usage:**\n${bot.config.prefix}clearwarnwarn [user_id_or_mention] <amount>\n\n**Example:**\n${bot.config.prefix}clearwarn @User 5\n\n**Cooldown:** 3 seconds`
        );
  return message.lineReply(embed)
      }else{
         useram = await message.guild.members.fetch(args[0].replace("<@!", "").replace("<@", "").replace(">", ""))
           const embedp = new Discord.MessageEmbed()
     .setColor("FF0000")
       .setDescription(`<:pleux_no:887553189883281438> | Unable to find this Person!`);
           x = useram.user
         }
  
const embedWarn0 = new Discord.MessageEmbed()
.setDescription(`there are no warnings to delete from ${useram}`)
.setColor("#ff0000")
if(`${useram.user.id}_${message.guild.id}_warns` || 0) return message.channel.send(embedWarn0);
  let user = message.mentions.members.first();
let a = message.guild.id;
if (!user) return message.channel.send(useram)
    if (isNaN(args[1])) return message.channel.send({embed: {
                    color: 16734039,
                    description: "You must enter the amount of warn to remove!"
                }})
                if(args[0] >= 20000)
                {
   message.reply("You cant clear this much more")
   return;
                }
    db.delete(`${useram.user.id}_${message.guild.id}_warns`, args[1])

    let deleteWarn = new Discord.MessageEmbed()
    .setColor("#00ff11")
    .setDescription(`<:pleux_success:887552715247452210> Delete ${args[1]} Warn from ${useram}.`);
    message.channel.send(deleteWarn)
    }
exports.info = {
  name: "clearwarn",
  aliases: [],
  usage: "",
  description: ""
};
//checked
exports.conf = {
  cooldown: 0,
  dm: "yes"
};
exports.conf={
  cooldown: 0,
  dm: "yes"
}