const lineReplyNoMention = require('discord-reply');
const lineReply = require('discord-reply');


const { MessageEmbed } = require('discord.js');
const translate = require('@iamtraction/google-translate');
exports.run = async (bot, message, args) => {
//gunakan ini @k3rn31p4nic/google-translate-api jika link di atas untuk google translate tidak berfungsi
    try {
      if (args.length < 2) {
        return message.lineReplyNoMention(`Command Usage: *translate <Language> <Text>*\nsee all languages by typing **${bot.config.prefix}language**`)
      }

      const result = await translate(args.slice(1).join(' '), { to: args[0] });

      const embed = new MessageEmbed()
        .setColor('#22ff00')
        .setDescription(result.text)
        .setFooter(`Translation from ${result.from.language.iso.toUpperCase()} to ${args[0].toUpperCase()}`);
      message.lineReplyNoMention({ embed });
    } catch (err) {
      return message.lineReplyNoMention(`Oh no, an error occurred: \`${err.message}\`.`);
    }
  };

exports.info = {
  name: 'translate',
  aliases: ["t", "ts", "trs"],
  usage: "",
  description: "t"
}
//checked
exports.conf={
  cooldown: 0,

    }