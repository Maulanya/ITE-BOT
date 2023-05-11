const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
 

  let user = message.author;
  if(user = message.mentions.members.first()) return message.channel.send(`you can not see the balance of the ${message.mentions.members.first()}`)
    

  let bal = db.fetch(`money_${message.author.id}`)

  if (bal === null) bal = 0;

  let bank = await db.fetch(`bank_${message.author.id}`)
  if (bank === null) bank = 0;

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`**${message.author}'s Balance**\n\nPocket: ${bal}\nBank: ${bank}`);
  message.channel.send(moneyEmbed)
}
  exports.info = {
  name: "balance",
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