const lineReplyNoMention = require('discord-reply');
const lineReply = require('discord-reply');

const { MessageEmbed } = require('discord.js') // npm i discord.js
const fetch = require('node-fetch') // npm i node-fetch

exports.run = async (bot, message, args) => {

        const wiki = args.slice().join(' ')
        if(!wiki) return message.lineReply('Provide A Query To Search.') // If No Topic Provided To Searched
        const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wiki)}` // From Here BOT Will Search For Searched Topic

        let response
        try {
            response = await fetch(url).then(res => res.json()) // Getting Result
        }      
        catch (e) {
            return message.lineReplyNoMention('An Error Occured, Try Again.') // If Error Occur's
        }

        try {
            if(response.type === 'disambiguation') { // If Their Are Many Results With Same Searched Topic
                const embed = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle(response.title) // Title Of Topic
                .setThumbnail(response.thumbnail.source)
                .setURL(response.content_urls.desktop.page) // URL Of Searched Topic
                .setDescription([`
                ${response.extract}
                Links For Topic You Searched [Link](${response.content_urls.desktop.page}).`]) 
                message.lineReplyNoMention(embed)
            }
            else { // If Only One Result
                const embed = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle(response.title) // Title Of Topic
                .setThumbnail(response.thumbnail.source)
                .setURL(response.content_urls.desktop.page) // URL Of Searched Topic
                .setDescription(response.extract)
                message.lineReplyNoMention(embed)
            }
        }
        catch {
            return message.lineReply('Provide A Valid Query To Search.') // If Searched Topic Is Not Available
        }
    }

exports.info = {
  name: 'wikipedia',
  aliases: ['wiki'],
  usage: "",
  description: ""
}
//checked
exports.conf={
  cooldown: 0,
  dm: "yes"
}