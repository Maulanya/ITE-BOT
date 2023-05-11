const db = require ("quick.db");
const discord = require ("discord.js");
exports.run = (bot, message, args) => {
  if (!args[0]) return message.reply("**Please specify the suggestion. Example:**\nadd command avatar");
if (args[0] === "suggestion") return message.reply("**Please specify the suggestion. Example:**\nadd command avatar");
    args = args.join(" ");
    message.reply("**Thanks for submitting a suggestion.**");
  const content = new discord.MessageEmbed()
    .setTitle(`**Suggestion**`)
         .setDescription(`**Suggest from :** \`${message.author.username}#${message.author.discriminator}\`\n**Suggest ID :** \`${message.author.id}\`\n**Suggestion :** \`${args}\`\n**Server :** \`${message.guild.name}\`\n**Server ID:** \`${message.guild.id}\``
        );
    bot.channels.cache.get(`931069516300046366`).send(content) 
   
}
exports.info = {
  name: 'suggestion',
  aliases: ['suggest'],
  usage: "",
  description: "suggest etc"
}
//checked
exports.conf={
  cooldown: 0,
  dm: "yes"
}