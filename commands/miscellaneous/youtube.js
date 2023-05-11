const Discord = require('discord.js');
const { YTSearcher } = require('ytsearcher');
const cnf = require('../../main/config.js');
const { Util, MessageEmbed } = require("discord.js");
const ytdl = require("ytdl-core");
const yts = require("yt-search");
const sendSuccess = require("../../utils/success")
const sendError =require("../../utils/error")
const searcher = new YTSearcher(cnf.api);

exports.run = async (bot, message, args) => {
  /*
  try {
    const searchEmbed = new Discord.MessageEmbed()
     .setColor("#fff700")
      .setDescription("<:pleuxinfo:902806293419544576> | Please enter a word to search!")
    if (!args[0]) return message.channel.send(searchEmbed)
    if(args.join(" ").includes("sex") || args.join(" ").includes("boobs") || args.join(" ").includes("booty") || args.join(" ").includes("bokep") || args.join(" ").includes("porn"))
    {
      const embed = new Discord.MessageEmbed()
      .setColor("#ff0019")
      .setDescription("<:pleux_no:887553189883281438> | Please dont search NSFW Things")
      return message.reply(embed);
    }
    const search2Embed = new Discord.MessageEmbed()
     .setColor("#fff700")
      .setDescription("🔎 Searching on Youtube...")
    let msg = await message.channel.send(search2Embed)
    
    searcher.search(args.join(' ')).then(info => {
      if (!info.first) {
	  let embed2 = new Discord.MessageEmbed()
      .setDescription("<:pleuxinfo:902806293419544576> | I couldn't find anything on Youtube with your query!")
      .setColor('#ff0019');
	   return msg.edit(embed2);
        }
      let embed = new Discord.MessageEmbed()
      .setTitle("🔎 Youtube Search result:")
      .setDescription("**First result**:\n " + info.first.title + "\n - " + info.first.url + "\n\n **Description**:\n\`\`\`" + info.first.description + "\`\`\`")
      .setColor('#00ff3c');
      msg.edit(embed);
    });

  } catch (err) {
    const errorEmbed = new Discord.MessageEmbed()
     .setColor("#ff0019")
      .setDescription("<:pleuxinfo:902806293419544576> | Something went wrong...")
    
	return message.channel.send(errorEmbed)
  }
  */
  
  /* const channel = message.member.voice.channel;
    if (!channel)return sendError("I'm sorry but you need to be in a voice channel to play music!", message.channel);

    const permissions = channel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT"))return sendError("I cannot connect to your voice channel, make sure I have the proper permissions!", message.channel);
    if (!permissions.has("SPEAK"))return sendError("I cannot speak in this voice channel, make sure I have the proper permissions!", message.channel);
*/
    var searchString = args.join(" ");
  
    if (!searchString)return sendError("You didn't poivide want i want to play", message.channel);
      var songEmbed = await message.channel.send(`🔎 | Searching for \`${args.slice().join(" ")}\`...`);
  
   const embedSong = new Discord.MessageEmbed()
      .setColor("#ff0019")
      .setDescription("<:pleux_no:887553189883281438> | Please dont search NSFW Things")
  if (songEmbed) {
  if(args.join(" ").includes("sex") || args.join(" ").includes("boobs") || args.join(" ").includes("booty") || args.join(" ").includes("bokep") || args.join(" ").includes("porn")) return songEmbed.edit(embedSong);
  }

    message.channel.startTyping()
    var serverQueue = message.client.queue.get(message.guild.id);

    var searched = await yts.search(searchString)
    if(searched.videos.length === 0)return sendError("Looks like i was unable to find the song on YouTube", message.channel)
    const vidNameArr = [];
    const vidUrlArr = [];
    const vidLengthArr = [];
    const vidArr = [];
      for (let i = 0; i < searched.videos.length&&i < 10; i++) {
        vidNameArr.push(`\`${i + 1}.\` [${Util.escapeMarkdown(searched.videos[i].title)}]`);
        vidUrlArr.push(`(${Util.escapeMarkdown(searched.videos[i].url)})`);
        
        vidArr.push(`${vidNameArr[i]}${vidUrlArr[i]}`)
      }
      
    
      vidNameArr.push('exit');
      vidNameArr.push('cancel');
      vidNameArr.push('close');
    const embed = new MessageEmbed()
        .setColor('#00ff3c')
        .setTitle('🔎 Youtube Search result:')
    .setDescription(vidArr.join("\n\n"))//Ok
        /*.addField('** **', `${vidNameArr[0]}`+`${vidUrlArr[0]}`)
        .addField('** **', `${vidNameArr[1]}`+`${vidUrlArr[1]}`)
        .addField('** **', `${vidNameArr[2]}`+`${vidUrlArr[2]}`)
        .addField('** **', `${vidNameArr[3]}`+`${vidUrlArr[3]}`)
        .addField('** **', `${vidNameArr[4]}`+`${vidUrlArr[4]}`)
        .addField('** **', `${vidNameArr[5]}`+`${vidUrlArr[5]}`)
        .addField('** **', `${vidNameArr[6]}`+`${vidUrlArr[6]}`)
        .addField('** **', `${vidNameArr[7]}`+`${vidUrlArr[7]}`)
        .addField('** **', `${vidNameArr[8]}`+`${vidUrlArr[8]}`)
        .addField('** **', `${vidNameArr[9]}`+`${vidUrlArr[9]}`)*/
        //.addField('Exit', ' type `exit`, `cancel` or `close`');
      songEmbed.edit("", { embed }).then(
    message.channel.stopTyping()
      ) 
    
              /*songEmbed.react("766649381411618837").then(r => {
                  const CloseFilter = (reaction, user) =>
          reaction.emoji.id === "766649381411618837" && user.id === message.author.id;
 const close = songEmbed.createReactionCollector(CloseFilter, {
          time: 60000
        });
        close.on("collect", r => {
          message.channel.stopTyping()
         return songEmbed.delete();
        })
        })*/
  /*
    try {
        var response = await message.channel.awaitMessages(
          msg => (msg.content > 0 && msg.content < 11) || msg.content === 'exit',
          {
            max: 1,
            maxProcessed: 1,
            time: 60000,
            errors: ['time']
          }
        );
      
      if(response.first() === undefined){
        message.channel.stopTyping()
        if (songEmbed) {
          songEmbed.delete();
        }
        return sendError(
          'Please try again and enter a number between 1 and 10 or exit',message.channel
        ); 
      }
        var videoIndex = parseInt(response.first().content);
      } catch (err) {
        message.channel.stopTyping()
        console.error(err);
        if (songEmbed) {
          songEmbed.delete();
        }
        return sendError(
          'Please try again and enter a number between 1 and 10 or exit',message.channel
        );
      }
  
    if (response.first().content === 'exit'||response.first().content === 'close'||response.first().content === 'cancel') return songEmbed.delete();
    try {
  message.channel.stopTyping()
        var songInfo = searched.videos[videoIndex - 1]
        if(songEmbed)songEmbed.delete();
      } catch (err) {
        message.channel.stopTyping()
        console.error(err);
        if (songEmbed) {
          songEmbed.delete();
        }
      }
  
    

    const song = {
      id: songInfo.videoId,
      title: Util.escapeMarkdown(songInfo.title),
      views: String(songInfo.views).padStart(1, ' '),
      url: songInfo.url,
      ago: songInfo.ago,
      duration: songInfo.duration.toString(),
      img: songInfo.image,
      req: message.author
    };
    

    if (serverQueue) {
      message.channel.stopTyping()
      serverQueue.songs.push(song);
      let thing = new MessageEmbed()
      .setAuthor("Song has been added to queue", song.req.displayAvatarURL({ dynamic: true }))
      .setThumbnail(song.img)
      .setColor("YELLOW")
      .addField("Name", `[${song.title}]`+ `(${song.url})`)
      .addField("Duration", song.duration)
      .addField("Requested by", song.req.tag)
      .setFooter(`Views: ${song.views} | ${song.ago}`)
      message.channel.stopTyping()
      //if(songEmbed)return songEmbed.edit("",thing);
       return message.channel.send(thing);
    }
    */
/*
    const queueConstruct = {
      textChannel: message.channel,
      voiceChannel: channel,
      connection: null,
      songs: [],
      volume: 100,
      playing: true,
    };
    message.client.queue.set(message.guild.id, queueConstruct);
    queueConstruct.songs.push(song);
      */
message.channel.stopTyping()
    const play = async (song) => {
      const queue = message.client.queue.get(message.guild.id);
      if (!song) {
        sendSuccess("Disconnected sucessfully!", message.channel)
        queue.voiceChannel.leave();//If you want your bot stay in vc 24/7 remove this line :D
        message.client.queue.delete(message.guild.id);
        return;
      }

      const dispatcher = queue.connection
        .play(ytdl(song.url))
        .on("finish", () => {
          
            if (queue.loop === true) {
                queue.songs.push(queue.songs.shift());
            };
          if(queue.skip!== true){
            queue.songs.shift()
            play(queue.songs[0]);
            //queue.skip = !queue.skip
            console.log(queue.skip === true ? "enabled" : "disabled"+ ": !true")

          }else{
            console.log(queue.skip === true ? "enabled" : "disabled"+ ": true")

            play(queue.songs[0]);
            queue.skip = false
          }
          
          const command = args.shift().toLowerCase();
          
          
        })//thynk
        .on("error", (error) => console.error(error));
     // dispatcher.setVolumeLogarithmic(queueConstruct.volume / 100);
      let thing = new MessageEmbed()
      .setAuthor("Now Playing", song.req.displayAvatarURL({ dynamic: true }))
      .setThumbnail(song.img)
      .setColor("BLUE")
      .addField("Name", `[${song.title}]`+ `(${song.url})`)
      .addField("Duration", song.duration, true)
      .addField("Requested by", song.req.tag, true)
      .setFooter(`Views: ${song.views} | Ago: ${song.ago}`)
      queue.textChannel.send(thing);
      message.channel.stopTyping()
      
      //songEmbed.edit("",thing);
    };
    /*
    try {
      const connection = await channel.join();
      message.channel.stopTyping()
      queueConstruct.connection = connection;
      channel.guild.voice.setSelfDeaf(true)
      play(queueConstruct.songs[0]);
    } catch (error) {
      console.error(`I could not join the voice channel: ${error}`);
      message.client.queue.delete(message.guild.id);
      await channel.leave();
      return sendError(`I could not join the voice channel: ${error}`, message.channel);
    }
  */
}
   exports.info = {
  name: 'youtube',
  aliases: ["yt"],
  usage: "<user_id/mention/blank>",
  description: "Get a user's avatar."
}//
exports.conf={
  cooldown: 0,
  dm: "yes"
}