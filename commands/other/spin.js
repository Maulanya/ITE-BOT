const Discord = require('discord.js');
exports.run = async (client, message, args) => {
 
  let wheel = Math.floor(Math.random() * 30);
  let prize = parseInt(args[0]) + 10
const embed = new Discord.MessageEmbed()
      .setColor('#00fcf4')
      .setImage('https://cdn.discordapp.com/attachments/738241016938627113/746659755858198619/1591538577357.png')
      .setDescription(message.author.tag + ` Spun the wheel \ndepo ${args[0]} \nand got ` + wheel + `\n now you have ${prize}` )
      console.log(`[LOG] ${message.author.tag} spin: ${wheel}`)

    
    message.channel.send(embed)
  
};
exports.info = {
name: "spin",
aliases: []
}
exports.conf = {
cooldown: 0,
dm: "yes"
}