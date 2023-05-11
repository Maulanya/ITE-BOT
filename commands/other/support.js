const disbut = require("discord-buttons");

exports.run = (bot, message, args) => {
         const Discord = require("discord.js")
       
  let button = new disbut.MessageButton()
  .setLabel("Support!")
  .setStyle("url")
.setURL(`https://discord.com/invite/xvcwjHsp4w`)
message.channel.send(`Support ${bot.user.username} server!`, button);
        }
  exports.info = {
    name: 'support',
  aliases:[],
  usage: "",
    description: "sends the support server, where you can ask us, report bugs, and add new ideas",
  }
exports.conf={
  cooldown: 0,
  dm: "yes"
}