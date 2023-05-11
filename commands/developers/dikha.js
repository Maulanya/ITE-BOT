const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')

const child = require ('child_process')

exports.run = async (bot, message, args) => {

       if(message.author.id == '753298841712721961')  {
      
     const command = args.join(" ");
      if(!command) return message.reply('pls specific a module to install');
         
      child.exec(command, (err, res) => {
        if(err) return console.log(err);
        message.channel.send(res.slice(0, 2000), { code: 'js'});
      })
      } else {
     const permEmbed = new Discord.MessageEmbed()
     .setColor("#ff0000")
     .setDescription("You don't have permission to use this command!")
     message.channel.send(permEmbed)
	}
    };
  
 exports.info = {
  name: "dikha",
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