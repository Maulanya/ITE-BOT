const discord = require('discord.js');
const db = require('quick.db');

exports.run = async (bot, message, args) => {
   if(message.author.id == "753298841712721961"){ 
    const user = message.mentions.users.first()
const blackembed = new discord.MessageEmbed()
 .setColor("#34c6eb")
.setDescription("Please mentions a user to blacklist!")
if(!user) return message.channel.send(blackembed)
const Blacklisted = db.fetch(`blacklistedUsers_${user.id}`)

const readyembed = new discord.MessageEmbed()
 .setColor("#34c6eb")
.setDescription("This user is already blacklisted")
if(!Blacklisted == false) return message.channel.send(readyembed)

const addembed = new discord.MessageEmbed()
 .setColor("#34c6eb")
.setDescription(`Successfuly added ${user.username} to the blacklisted users`)
message.channel.send(addembed)

db.set(`blacklistedUsers_${user.id}`, true)

     
   } else {
     const permEmbed = new discord.MessageEmbed()
     .setColor("#ff0000")
     .setDescription("You don't have permission to use this command!")
     message.channel.send(permEmbed)
	}
};

exports.info = {
  name: "blacklist",
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