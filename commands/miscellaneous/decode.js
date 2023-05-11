const { MessageEmbed } = require('discord.js');
const axios = require('axios');

exports.run = async (bot, message, args) => {
        const url = `http://some-random-api.ml/binary?decode=${args}`;

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured, please try again!`)
        }

        const embed = new MessageEmbed()
            .setTitle('Decode Binary')
            .setDescription(data.text)

        await message.channel.send(embed)
    }
exports.info = {
  name: "decode",
  description: "",
  aliases: []
}
exports.conf = {
  cooldown: 0,
  dm: "yes"
}
