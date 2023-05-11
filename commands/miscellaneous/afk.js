const db = require("quick.db");
const discord = require("discord.js");
exports.run = async (bot, message, args) => {
  
   let stat = {
      online: "https://emoji.gg/assets/emoji/9166_online.png",
      idle: "https://emoji.gg/assets/emoji/3929_idle.png",
      dnd: "https://emoji.gg/assets/emoji/2531_dnd.png",
      offline: "https://emoji.gg/assets/emoji/7445_status_offline.png"
    }
   
  // message.delete({ timeout: "3000" });
  if (db.has(`${message.guild.id}_${message.author.id}` + '.afk')) {
       message.reply("Removed AFK Done 👍");
        db.delete(`${message.guild.id}_${message.author.id}` + '.afk')
        db.delete(`${message.guild.id}_${message.author.id}` + '.messageafk')
      } else {
       // message.member.setNickname(`[AFK] ${message.author.username}`).catch(error => message.channel.send("Couldn't update your nickname."));
      let rsn = args.join(" ")    
    if(!rsn) rsn = "[Not set]"
       const embed = new discord.MessageEmbed()
       .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setAuthor(message.author.username + ` is now AFK
`, stat[message.author.presence.status])
        .setDescription(
          `**Message**\n${rsn}`)
        .setColor("#34c6eb")
        .setFooter( `AFK since `)
       .setTimestamp();
      message.channel.send(embed);
       // message.reply(`I set your AFK: ${rsn}`);    
   db.set(`${message.guild.id}_${message.author.id}` + '.afk', true)
        if(!args[0]){
          let none = "[Not set]";
          db.set(`${message.guild.id}_${message.author.id}` + '.messageafk', none)
          return;
        }
        db.set(`${message.guild.id}_${message.author.id}` + '.messageafk', args.join(" "))
      }
};

exports.info = {
  name: "afk",
  aliases: [],
  usage: "",
  description: "",
  cooldown: 5,
};
//checked
exports.conf = {
  cooldown: 5,
  dm: "yes"
}; 

