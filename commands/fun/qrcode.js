const lineReplyNoMention = require('discord-reply');
const lineReply = require('discord-reply');
const Discord = require("discord.js");
var name = "qr";
// Your command handler here
exports.run = (bot, message, args) => {
  let text = args.slice(0).join(" ");
  if (args.length < 1) {
    message.lineReply(
      "You must add text to your command, so I can convert it to a QR code.\nEg: `.qr This message is now encoded as a QR code` "
    );
  } else {
    var user_text = text.replace(/ /g, "%20");

    var qr_generator = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${user_text}`;
    console.log(qr_generator);
    const embed = new Discord.MessageEmbed()
      .setTitle("QR Code")
      .setColor("#3440eb")
      .setDescription("Here is your QR Code!")
      .setImage(qr_generator);
    message.lineReplyNoMention(embed);
  }
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

module.exports.info = {
  name: "qrcode",
  aliases: ["qr"],
  usage: "",
  description: ""
};
exports.conf = {
  cooldown: 0,
  dm: "yes"
};
