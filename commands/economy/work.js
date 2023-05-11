const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");

     exports.run = async (bot, message, args) => {

    let user = message.author;
    let author = await db.fetch(`work_${message.author.id}`)

    let timeout = 600000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`<:pleux_no:887553189883281438> | You have already worked recently\n\nTry again in ${time.minutes}m ${time.seconds}s `);
        message.channel.send(timeEmbed)
      } else {

        let replies = ['Programmer','Builder','Waiter','Busboy','Chief','Mechanic']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 80) + 1;
        let embed1 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`<:pleux_success:887552715247452210> | You worked as a ${replies[result]} and earned ${amount} coins`);
        message.channel.send(embed1)
        
        db.add(`money_${message.author.id}`, amount)
        db.set(`work_${message.author.id}`, Date.now())
    };
}
      
  exports.info = {
  name: "work",
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