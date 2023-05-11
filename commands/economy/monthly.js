const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

    exports.run = async (bot, message) => {
if(message.author.id == '753298841712721961')  {//make sure u replace your id here
  let user = message.author;
  let timeout = 604800000;
  let amount = 500;
    
     
  let monthly = await db.fetch(`monthly_${message.author.id}`);

  if (monthly !== null && timeout - (Date.now() - monthly) > 0) {
    let time = ms(timeout - (Date.now() - monthly));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor(16734039)
    .setDescription(`<:pleux_no:887553189883281438> | You have already collected your monthly reward\n\nCollect it again in ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`<:pleux_success:887552715247452210> | You've collected your monthly reward of ${amount} coins`);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.author.id}`, amount)
  db.set(`monthly${message.author.id}`, Date.now())


  }
}
}
  exports.info = {
  name: "monthly",
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