exports.run = async (bot, message, args) => {
  
  function getUserFromMention(mention) {
    
	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return bot.users.cache.get(mention);
  }
        
}
  if (!args[0]) {
  
    return message.channel.send('You are ' + Math.floor(Math.random() * 100 + 0) + '% gay')
  }

  if (args[0]) {
    
    const user = getUserFromMention(args[0])

    
    if (user) return message.channel.send(`<@${user.id}> is ` + Math.floor(Math.random() * 100 + 0) + '% gay')
    
  }
    
}
exports.conf={
  cooldown: 0,
  dm: "yes"
}
module.exports.info = {
    name: 'whogay',
  aliases: [],
  usage: "<math_question>",
  description:"Answers you the given math question."
};