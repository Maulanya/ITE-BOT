const db = require ("quick.db");
const discord = require ("discord.js");
exports.run = (bot, message, args) => {
  if (!args[0]) return message.reply("**Please specify the bug. Example:**\n`f!bal isn't working`");
if (args[0] === "bug") return message.reply("**Please specify the bug. Example:**\n`f!bal isn't working`");
    args = args.join(" ");
    message.reply("**Thanks for submitting a bug.**");

    const content = new discord.MessageEmbed()
    .setTitle ("Report")
    .setDescription (`**Reporter :** \`${message.author.username}#${message.author.discriminator}\`\n**Reporter ID :** \`${message.author.id}\`\n**Report :** \`${args}\`\n**Server :** \`${message.guild.name}\`\n**Server ID:** \`${message.guild.id}\``);
    bot.channels.cache.get(`870517090996588607`).send(content) 
    console.log(`[SYSTEM] ${message.author.tag} Reported bug command ${args}💤`)

}
exports.info = {
  name: 'report',
  aliases: ['report'],
  usage: "",
  description: "report etc"
}
//checked
exports.conf={
  cooldown: 0,
  dm: "yes"
}