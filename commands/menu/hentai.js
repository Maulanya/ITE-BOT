const { MessageEmbed } = require('discord.js');

exports.run = async (bot, message, args) => {
    
  let hentai = [
    'https://cdn.nekos.life/hentai/sex01.jpg',
    'https://cdn.nekos.life/hentai/sex02.jpg',
    'https://cdn.nekos.life/hentai/sex03.jpg',
    'https://cdn.nekos.life/hentai/sex04.jpg',
    'https://cdn.nekos.life/hentai/sex05.jpg',
    'https://cdn.nekos.life/hentai/sex06.jpg',
    'https://cdn.nekos.life/hentai/sex07.jpg',
    'https://cdn.nekos.life/hentai/sex08.jpg',
    'https://cdn.nekos.life/hentai/sex09.jpg',
    'https://cdn.nekos.life/hentai/sex10.jpg',
    'https://cdn.nekos.life/hentai/sex11.jpg',
    'https://cdn.nekos.life/hentai/sex12.jpg',
    'https://cdn.nekos.life/hentai/sex13.jpg',
    'https://cdn.nekos.life/hentai/sex14.jpg',
    'https://cdn.nekos.life/hentai/sex15.jpg',
    'https://cdn.nekos.life/hentai/sex16.jpg',
    'https://cdn.nekos.life/hentai/sex17.jpg',
    'https://cdn.nekos.life/hentai/sex18.jpg',
    'https://cdn.nekos.life/hentai/sex19.jpg',
    'https://cdn.nekos.life/hentai/sex20.jpg',
    'https://cdn.nekos.life/hentai/sex21.jpg',
    'https://cdn.nekos.life/hentai/sex22.jpg',
    'https://cdn.nekos.life/hentai/sex23.jpg',
    'https://cdn.nekos.life/hentai/sex24.jpg',
    'https://cdn.nekos.life/hentai/sex25.jpg',
    'https://cdn.nekos.life/hentai/sex26.jpg',
    'https://cdn.nekos.life/hentai/sex27.jpg',
    'https://cdn.nekos.life/hentai/sex28.jpg',
    'https://cdn.nekos.life/hentai/sex29.jpg',
    'https://cdn.nekos.life/hentai/sex30.jpg',
    'https://cdn.nekos.life/hentai/sex31.jpg',
    'https://cdn.nekos.life/hentai/sex32.jpg',
    'https://cdn.nekos.life/hentai/sex33.jpg',
    'https://cdn.nekos.life/hentai/sex34.jpg',
    'https://cdn.nekos.life/hentai/sex35.png',
    'https://cdn.nekos.life/hentai/sex36.png',
    'https://cdn.nekos.life/hentai/sex37.jpg',
    'https://cdn.nekos.life/hentai/sex38.jpg',
    'https://cdn.discordapp.com/attachments/917418619254763610/942680588492603393/IMG-20220116-WA0358.jpg',
    'https://cdn.discordapp.com/attachments/917418619254763610/942680589541208104/IMG-20220116-WA0365.jpg',
    'https://cdn.discordapp.com/attachments/917418619254763610/942680589830590506/IMG-20220116-WA0367.jpg',
    'https://cdn.discordapp.com/attachments/917418619254763610/942680590724001872/IMG-20220116-WA0357.jpg'
  ]
  
  const embed = new MessageEmbed()
    .setTitle('Aww 😳')
    .setColor('#00fcf4')
    .setImage(hentai[Math.floor(Math.random())])
    .setTimestamp()
  if (message.channel.nsfw!== true)
       return message.channel.send(`Invalid command`);//**You're pervert, I need NSFW**
  
  else {
    message.channel.send(embed);
  };
};

exports.info = {
  name: 'hentai',
  aliases: [],
  description: "",
  usage: "",
}
exports.conf={
  cooldown: 0,
  dm: "yes"
}