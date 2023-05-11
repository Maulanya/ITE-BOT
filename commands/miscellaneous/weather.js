
const Discord = require("discord.js");
const weather = require("weather-js");
const lineReplyNoMention = require('discord-reply');
const lineReply = require('discord-reply');

exports.run = async (bot, message, args) => {
    
    try {
      if (!args.length) {
        return message.lineReplyNoMention("Command Usage: `forecast < city, country_code | zipcode >`")
      }

      await weather.find({ search: args.join(' '), degreeType: 'C' }, async (err, result) => {
        if (err) {
          return message.lineReplyNoMention(`No search results found.`);
        }

        if (!result || !result.length) {
          return message.lineReplyNoMention("Connection error.");
        }

        let fields = [];
        for (let i = 0; i < result[0].forecast.length; i++) {
          fields.push({
            name: new Date(result[0].forecast[i].date).toDateString(),
            value: `**Condition:** ${result[0].forecast[i].skytextday}\n**Low:** ${result[0].forecast[i].low} \u00B0${result[0].location.degreetype}\n**High:** ${result[0].forecast[i].high} \u00B0${result[0].location.degreetype}\n**Precipitation:** ${result[0].forecast[i].precip} cm`
          });
        }

        await message.lineReplyNoMention({
          embed: {
            title: '☀️ | Weather Forecast',
            description: result[0].location.name,
            fields: fields,
            footer: {
              text: 'Powered by MSN Weather'
            }
          }
        });
      });
    } catch (err) {
      return message.lineReplyNoMention(`Oh no, an error occurred: \`${err.message}\`.`);
    }
  };

exports.info = {
  name: 'weather',
  aliases:['w'],
  usage: "weathers",
  description: "get the infoermation weather in the world",
}
exports.conf={
  cooldown: 0,
  dm: "yes"
}