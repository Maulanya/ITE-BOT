const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (bot, message, args) => {
 
     

 if(message.author.id == '753298841712721961')  {//make sure u replace your id here
  let user = message.mentions.members.first();

if (!user) return message.channel.send({embed: {
                    color: 16734039,
                    description: "You must mention someone to add money!"
                }})
    if (isNaN(args[1])) return message.channel.send({embed: {
                    color: 16734039,
                    description: "You must enter the amount of money to add!"
                }})
                if(args[0] >= 20000)
                {
   message.reply("You cant add amount this much more")
   return;
                }

    db.add(`money_${message.author.id}`, args[1])
    let bal = await db.fetch(`money_${message.author.id}`)

    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`<:pleux_success:887552715247452210> Added ${args[1]} coins\n\nNew Balance: ${bal}`);
    message.channel.send(moneyEmbed)
    } else {
	message.channel.send({embed: {
                    color: 16734039,
                    description: "You don't have premission add money!"
                }})
	}
}
exports.info = {
  name: "addmoney",
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