const Discord = require("discord.js");
exports.run = async (bot, message, args, data, db) => {
 if(message.author.id == '753298841712721961' || message.author.id == '776334966783082496')  {//make sure u replace your id here
    try {
      //let img = args[0]
      //if(!img) return message.lineReplyNoMention("Please send the URL Link image with format .png or .jpg")
      //if(!img.startsWith("https://")) return;
      //if(!img.endsWith(".png") && !img.endsWith(".jpg")) return message.lineReplyNoMention("the URL Link must ends with format .png or .jpg")

      
      bot.guilds.cache.forEach(guild => {
         let channel = guild.channels.cache.find(ch => ch.name === "global-chat");
      if(!channel) return;
     
        channel.send(
          new Discord.MessageEmbed()
          .setTitle("**PLEUX INFORMATION**")
          .setColor("000000")
          .setDescription(`• ${args.join(" ")}`)
          .setTimestamp()
        ).catch(e => {
          return;
        });
      });
    } catch (e) {
      return 
    }
  } else {
     const permEmbed = new Discord.MessageEmbed()
     .setColor("#ff0000")
     .setDescription("You don't have permission to use this command!")
     message.channel.send(permEmbed)
	}
}
 exports.info = {
  name: "gchatinfo",
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
