const util = require("util")
const discord = require('discord.js')
exports.run = async (client,message,args)=>{
  

  
    if(message.author.id == '753298841712721961')  {//make sure u replace your id here
      const discord = require("discord.js")
const bot = client
  const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`\`\`xl\n${clean(err)}\n\`\`\``);
    }
    } else {
     const permEmbed = new discord.MessageEmbed()
     .setColor("#ff0000")
      .setDescription("You don't have permission to use this command!")
     message.channel.send(permEmbed)
	}
}
exports.info = {
  name: 'evaluate',
  aliases: ["ev", "eval"],
  description: "eval a code(Owner or trusted person only)",
  usage : "<code>",
  example: "message.channel.send(\"Hi lmao\")",
}
exports.conf={
  cooldown: 0,
  dm: "yes"
}