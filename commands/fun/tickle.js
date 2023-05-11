const Discord = require("discord.js");
const superagent = require("snekfetch");

     exports.run = async (bot, message, args, data, db) => {
 

            const user = message.mentions.users.first();
            if(!user)
              return await message.channel.send({embed: {
                color: 16734039,
                description: "<:pleux_no:887553189883281438> | You must mention someone to tickle!"
            }});
              
		if (message.author === user) {
       return await message.channel.send({embed: {
                color: 16734039,
                description: "<:pleux_no:887553189883281438> | You cant tickle yourself!"
            }})
         
		}
            superagent.get('https://nekos.life/api/v2/img/tickle')
                .end((err, response) => {
              const embed = new Discord.MessageEmbed()
              .setTitle(user.username + " just got tickled by " + message.author.username)
              .setImage(response.body.url)
              .setColor(`RANDOM`)
              .setDescription((user.toString() + " got tickled by " + message.author.toString()))
              .setFooter(`._.`)
              .setURL(response.body.url);
          message.channel.send(embed);
            }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Something went wrong... :cry:"
            }}));

        }
      exports.info = {
  name: "tickle",
  aliases: [],
  usage: "",
  description: "show the bot info"
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