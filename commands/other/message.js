const Discord = require('discord.js')
const db = require('quick.db')


exports.run = async (bot, message, args) => {

  var user = message.mentions.members.first();
  if(!user)
  {
    var user = message.author;
  }
const embed1 = new Discord.MessageEmbed()
.setDescription("I am getting data of Your Messages Counting")
let broov1 = db.fetch(`messages_${message.guild.id}_${user.id}`);
const embed = new Discord.MessageEmbed()
.addField(`You have Typed`, `${broov1} Messages!!`)
.setFooter("1 Message will be stored in  data in 5 seconds to avoid spam messages")
message.channel.send(embed1).then(msg=>{
  msg.edit(embed)
})


};

 exports.info = {
  name: "message",
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