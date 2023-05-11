const { MessageEmbed } = require('discord.js');
const axios = require('axios');

exports.run = async (bot, message, args) => {
  const url = `http://some-random-api.ml/binary?text=${args}`;

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured, please try again!`)
        }

        const embed = new MessageEmbed()
            .setTitle('Text to Binary')
            .setDescription(data.binary)

        await message.channel.send(embed)
    }
exports.info = {
name: "binary",
  description: "text to binary",
  aliases: []
}
exports.conf = {
  colldown: 0,
  dm: "yes"
}