const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (bot, message, args) => {
 
     

if(message.author.id == '753298841712721961' || message.author.id == '776334966783082496')  {//make sure u replace your id here
   if(!message.guild) return;
  let useram;
let x;
  let ao= message.guild.id;
  if(!args[0]){
           useram = message.member
           x = useram
         }else{
         useram = await message.guild.members.fetch(args[0].replace("<@!", "").replace("<@", "").replace(">", ""))
           x = useram.user
         }
  let user = message.mentions.members.first();
   let level = bot.db.get(`${ao}level_${x.id}`) || 1;
let a = message.guild.id;
if (!user) return message.channel.send({embed: {
                    color: 16734039,
                    description: "You must mention someone to add level!"
                }})
    if (isNaN(args[1])) return message.channel.send({embed: {
                    color: 16734039,
                    description: "You must enter the amount of level to add!"
                }})
                if(args[0] >= 20000)
                {
   message.reply("You cant add amount this much more")
   return;
                }

    db.add(`${ao}level_${user.id}`, args[1])
    let newlvl = await db.fetch(`${ao}level_${user.id}`)

    let newlvlEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`<:pleux_success:887552715247452210> Added ${args[1]} Levels\n\nNow ${useram} Level: ${newlvl}`);
    message.channel.send(newlvlEmbed)
    } else {
	message.channel.send({embed: {
                    color: 16734039,
                    description: "You don't have permission add level!"
                }})
	}
}
exports.info = {
  name: "addlvl",
  aliases: ["addlevel"],
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