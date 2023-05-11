const { MessageEmbed } = require('discord.js')

    exports.run = async(message, args, bot) => {

        const member = message.member

        const color = args[0] // For Color Of Role
        if(!args[0]) return message.lineReply('What Position You Want The Role?') // If No C0lor Provided

        const position = args[1] // Position Of Role
        if(!position) return message.lineReply('What Position You Want The Role?') // If No Position Provided
        if(isNaN(parseInt(position))) return message.reply('Position Isnt A Number') // If Position Isn't A Number

        const name = args.slice(2).join(' ') // For Name Of Role
        if(!name) return message.lineReply(`What Name For Role You Do Want To Keep?`) // If No Name Provided

        if(name.length > 32) return message.lineReply(`Role Name Can't Be Longer Than 32 Words`) // If Name Is Longer Then 32 Words
        if(name.length < 2) return message.lineReply(`Role Name Can't Be Shorter Than 2 Words`) // If Name Is Shorter Then 2 Words

        const embed = new MessageEmbed()
            .setAuthor(member.user.username, member.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('RANDOM')
            .setDescription(`
<@${member.user.id}> Wants To Craete Role With **${name}** And Color **${color}**

React With <a:YesAA:810231460975869963> To Craete Role
React With <a:NoAA:810231506475548672> To Cancel Request
            `)
            message.channel.send(embed).then(message => {
                message.react('<a:YesAA:810231460975869963>') // React With Yes Emoji // Change Emoji
                message.react('<a:NoAA:810231506475548672>') // React With No Emoji // Change Emoji

                const filter = (reaction, user) => ['YesAA','NoAA'].includes(reaction.emoji.name) && user.id === member.id // Check If User Who Reacted Is Same As Who Used The Command
                const collector = message.createReactionCollector(filter)


                collector.on('collect', async r => {
                    switch (r.emoji.name) {
                        case 'YesAA':
                            message.guild.roles.create({
                                data: {
                                    name: name, // Name Of Role
                                    color: color, // Color Of Role
                                    permissions: ['KICK_MEMBERS', 'MANAGE_CHANNELS', 'ADD_REACTIONS'], // Permissions Of Role
                                    mentionable: false, // Can Be true or false,
                                    position: position, // Position Of Role
                                }
                            })
                            message.channel.send(`Successfully Changed Role with Name **${name}** and Color **${color}**`)
                            collector.stop()
                            break;
                            case 'NoAA':
                                message.channel.send('Request Cancelled')
                                collector.stop()
                    }
                })
            })
    }
exports.info = {
  name: "createrole",
  aliases: ["creater", "rolecreate"]
}
exports.conf = {
cooldown: 0,
dm: "yes"
}