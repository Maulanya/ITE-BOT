const db = require("quick.db")
const discord = require("discord.js")
require('discord-reply')
exports.run = async (client,message,args)=>{
     
  if(message.author.id == '753298841712721961')  {//make sure u replace your id here
  //ARGUMENT
    if(!args.length) {
      return message.lineReply("Please give status message")
    }
    
 db.set(`status`, args.join(" "))
 client.user.setActivity(args.join(" ")); 
 message.channel.send("Updated the bot status")
  } else {
     const permEmbed = new discord.MessageEmbed()
     .setColor("#ff0000")
     .setDescription("You don't have permission to use this command!")
     message.channel.send(permEmbed)
	}
  };
    
exports.info = {
  name: 'status',
  aliases: [],
  description: "eval a code(Owner or trusted person only)",
  usage : "<code>",
  example: "message.channel.send(\"Hi lmao\")",
}
exports.conf={
  cooldown: 0,
  dm: "yes"
}