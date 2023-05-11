const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (bot, message, args) => {
 
     

 if(message.author.id == '753298841712721961')  {//make sure u replace your id here
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
let a = message.guild.id;
if (!user) return message.channel.send({embed: {
                    color: 16734039,
                    description: "You must mention someone to remove xp!"
                }})
    if (isNaN(args[1])) return message.channel.send({embed: {
                    color: 16734039,
                    description: "You must enter the amount of xp to remove!"
                }})
                if(args[0] >= 20000)
                {
   message.reply("You cant remove amount this much more")
   return;
                }

    db.delete(`${ao}xp_${x.id}`, args[1])

    let newxpEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`<:pleux_success:887552715247452210> Delete ${args[1]} XPs from ${useram}.`);
    message.channel.send(newxpEmbed)
    } else {
	message.channel.send({embed: {
                    color: 16734039,
                    description: "You don't have premission remove xp!"
                }})
	}
}
exports.info = {
  name: "removexp",
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