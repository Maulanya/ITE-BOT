const util = require("util")
const discord = require("discord.js");
exports.run = async (bot,message,args)=>{
  
   if(message.author.id == '753298841712721961')  {//make sure u replace your id here
            function wait(ms){
            let start = new Date().getTime();
            let end = start;
            while(end < start + ms) {
              end = new Date().getTime();
           }
         }
      bot.user.setActivity("Restarting...");
     const embed = new discord.MessageEmbed()
     .setDescription('preparing to restart the bot...')
const prompt = await message.channel.send(embed);
    
     await wait(2700);
     const embeds = new discord.MessageEmbed()
     .setDescription('Restarting in 2800ms')
      await  prompt.edit(embeds);
     await wait(2800);
     const embedres = new discord.MessageEmbed()
     .setDescription("Restarting...")
     await  prompt.edit(embedres);
     await wait(2700);
     process.exit(1)
    
  } else {
     const permEmbed = new discord.MessageEmbed()
     .setColor("#ff0000")
     .setDescription("You don't have permission to use this command!")
     message.channel.send(permEmbed)
	}
  }
exports.info = {
  name: 'restart',
  aliases: [],
  description: "turn off the bot (Owner or trusted person only)",
  usage : "",
  example: "",
}
exports.conf={
  cooldown: 0,
  dm: "yes"
}