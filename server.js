require("dotenv").config();
const discord = require("discord.js");
const { promisify } = require("util");
const ms = require("ms");
const sleep = promisify(setTimeout);
const path = require("path");
const express = require("express");
const bot = new discord.Client();
const disbut = require("discord-buttons");
//const sensor = require("./sensor")
require("discord-buttons")(bot);
const { MessageEmbed, MessageAttachment, Permissions } = require("discord.js");
const request = require("node-superfetch");
const bet = new discord.Client();
const fs = require("fs");
const snipes = new discord.Collection()
const edits = new discord.Collection()
const edits2 = new discord.Collection()
const moment = require("moment");
//var text2png = require("text2png");
const botToken = process.env['TOKEN'];
const util = require("util");
function reverseInPlace(str) {
  var words = [];
  words = str.match(/\S+/g);
  var result = "";
  for (var i = 0; i < words.length; i++) {
    result += words[i].split("").reverse().join("") + " ";
  }
  return;
}
const fetch = require("node-fetch");
setInterval(async () => {
  await fetch(`https://${process.env.PROJECT_DOMAIN}.glitch.me`); //main projects site
  await fetch("https://404-bot-discord.glitch.me");
  await fetch("https://arcaea-bot-javascript.glitch.me");
  await fetch("https://404-tester-discord.glitch.me");
  await fetch("https://lilith-bot-tester.glitch.me");
  await fetch("https://arcaea-bot-typescript.glitch.me");
}, 60000);
bot.db = require("quick.db");
//bot.translate= require("translate-google")
bot.sleep = promisify(setTimeout);
bot.vote = new Map();

//Disable welcome Image

//let serversetting = JSON.parse(fs.readFileSync("./serversetting.json", "utf8"));
console.defaultLog = console.log.bind(console);
console.logs = [];
console.green = function () {
  // default &  console.log()
  console.greenLog.apply(console, arguments);
  // new & array data
  console.logs.push(Array.from(arguments));
};
function parseTime(time) {
  return time
    .split(":") // Split them into array as chunk of [hour, minute, second]
    .map(pad) // Map them with `pad` function below
    .join(":"); // Join them back into 'hh:mm:ss'
}
bot.on("guildMemberAdd", async (member) => {
  if (bot.db.get(`${member.guild.id}_autorole`)) {
    let autorole = bot.db.get(`${member.guild.id}_autorole`);
    member.roles.add(member.guild.roles.cache.find((r) => r.id === autorole));
    member.roles.add(
      member.guild.roles.cache.find((r) => r.id === autorole).id
    );
  }
  let userm = member;
  let targe = member;
  let muterole = bot.db.get(`${member.guild.id}_muterole`);

  if (bot.db.get(`${member.guild.id}_${userm.user.id}mutetime`)) {
    if (!bot.db.get(`${member.guild.id}_muterole`)) {
      let muterale = member.guild.roles.cache.find((r) => r.name === "Muted");
      bot.db.set(
        `${member.guild.id}_muterole`,
        member.guild.roles.cache.find((r) => r.name === "Muted").id
      );
      if (!muterale) {
        try {
          let muterele = await member.guild.roles.create({
            data: {
              name: "Muted",
              color: "#222222",
              permissions: [],
            },
          });
          member.guild.channels.cache.forEach(async (channel, id) => {
            await channel.updateOverwrite(
              member.guild.roles.cache.find((r) => r.name === "muted"),
              {
                CREATE_INSTANT_INVITE: true,
                ADD_REACTIONS: false,
                STREAM: false,
                SEND_MESSAGES: false,
                SEND_TTS_MESSAGES: false,
                ATTACH_FILES: false,
                READ_MESSAGE_HISTORY: true,
                MENTION_EVERYONE: false,
                USE_EXTERNAL_EMOJIS: true,
                CONNECT: false,
                SPEAK: false,
                USE_VAD: false,
                CHANGE_NICKNAME: true,
              }
            );
          });
        } catch (err) {
          console.log(`Error :${err}`);
        }
      }
      muterole = bot.db.set(
        `${member.guild.id}_muterole`,
        member.guild.roles.cache.find((r) => r.name === "Muted").id.toString()
      );
    }
    let muteroles = bot.db.set(
      `${member.guild.id}_${userm.user.id}muteroles`,
      userm._roles
    );

    console.log(muterole + "\n" + muteroles);

    setTimeout(function () {
      targe.roles
        .add(member.guild.roles.cache.find((r) => r.id === muteroles))
        .catch(() => {
          targe.roles.add(muteroles);
          targe.roles.remove(
            member.guild.roles.cache.find((r) => r.id === muterole)
          );
          targe.roles.remove(
            member.guild.roles.cache.find((r) => r.id === muterole).id
          );
          bot.db.delete(`${member.guild.id}_${userm.user.id}mutetime`);
          bot.db.delete(`${member.guild.id}_${userm.user.id}muteroles`);
        });

      targe.roles.remove(
        member.guild.roles.cache.find((r) => r.id === muterole)
      );
      targe.roles.remove(
        member.guild.roles.cache.find((r) => r.id === muterole).id
      );
      bot.db.delete(`${member.guild.id}_${userm.user.id}muteroles`);
      bot.db.delete(`${member.guild.id}_${userm.user.id}mutetime`);
    }, ms(bot.db.get(`${member.guild.id}_${userm.user.id}mutetime`)));

    targe.roles.remove(targe.roles.cache);
    targe.roles.add(member.guild.roles.cache.find((r) => r.id === muterole));
    targe.roles.add(member.guild.roles.cache.find((r) => r.id === muterole).id);
  }
  // ${bot.db.get(`${member.guild.id}_welcomeimg`)}
  console.log(`${bot.db.get(`${member.guild.id}_welcomechannel`)}
  ${bot.db.get(`${member.guild.id}_welcomemessage`)}
  ${bot.db.get(`${member.guild.id}_welcomeembed`)}
${bot.db.get(`${member.guild.id}_welcomemessagesys`)}`);

  if (
    bot.db.get(`${member.guild.id}_welcomemessagesys`) ||
    // bot.db.get(`${member.guild.id}_welcomeimg`) ||
    bot.db.get(`${member.guild.id}_welcomeembed`) ||
    bot.db.get(`${member.guild.id}_welcomemessage`) ||
    bot.db.get(`${member.guild.id}_welcomechannel`)
  ) {
    if (!bot.db.get(`${member.guild.id}_welcomemessagesys`)) {
      bot.db.set(`${member.guild.id}_welcomemessagesys`, "yes");
    }
    if (!bot.db.get(`${member.guild.id}_welcomemessage`)) {
      bot.db.set(
        `${member.guild.id}_welcomemessage`,
        "Welcome to $SERVER$, $MENTION$!"
      );
    }
    // if (!bot.db.get(`${member.guild.id}_welcomeimg`)) {
    //  bot.db.set(`${member.guild.id}_welcomeimg`, "no");
    // }
    if (!bot.db.get(`${member.guild.id}_welcomeembed`)) {
      bot.db.set(`${member.guild.id}_welcomeembed`, "no");
    }
    if (!bot.db.get(`${member.guild.id}_welcomechannel`)) return;
    const msg =
      bot.db
        .get(`${member.guild.id}_welcomemessage`)
        .replace(/\$MEMBER\$/g, member.user.username)
        .replace(/\$MENTION\$/g, "<@!" + member.id + ">")
        .replace(/\$SERVER\$/g, member.guild.name) ||
      `Welcome to ${member.guild.id}, <@!${member.id}>!`;

    if (bot.db.get(`${member.guild.id}_welcomemessagesys`) !== "yes") {
      return;
    }

    // if (bot.db.get(`${member.guild.id}_welcomeimg`) === "no") {
    if (bot.db.get(`${member.guild.id}_welcomeembed`) === "no") {
      return bot.channels.cache
        .get(bot.db.get(`${member.guild.id}_welcomechannel`))
        .send(msg);
    }
    const Embed = new discord.MessageEmbed()
      .setThumbnail(member.user.avatarURL({ dynamic: true }))
      .setDescription(msg)
      .setColor("RANDOM");
    bot.channels.cache
      .get(bot.db.get(`${member.guild.id}_welcomechannel`))
      .send(Embed);
    return;
    // }

    // if (bot.db.get(`${member.guild.id}_welcomeimg`) === "yes") {
    //  var list = [
    //   "https://i.imgur.com/UcGioIH.gif",
    //   "https://i.imgur.com/AqK6ipr.gif",
    //   "https://i.imgur.com/aUwimFa.gif",
    //   "https://i.imgur.com/TXlp1YT.gif",
    //   "https://i.imgur.com/5SABV1P.gif",
    //   "https://i.imgur.com/EpeiJq8.gif",
    //   "https://i.imgur.com/fFNLyAx.gif",
    //   "https://i.imgur.com/5s8vsTH.gif"
    //  ];
    //  var rand = list[Math.floor(Math.random() * list.length)];
    // console.log(rand);
    //   const image = new discord.MessageAttachment(rand, "welcome.gif");

    //  if (bot.db.get(`${member.guild.id}_welcomeembed`) === "yes") {
    //   const Embed = new discord.MessageEmbed()
    //     .setDescription(msg)
    //    .setColor("RANDOM")
    //    .setImage(rand)
    //     .setThumbnail(member.user.avatarURL({ dynamic: true }));
    //   console.log(rand);
    //   bot.channels.cache
    //     .get(bot.db.get(`${member.guild.id}_welcomechannel`))
    //     .send(Embed);
    //   return;
    // }

    // bot.channels.cache
    //   .get(bot.db.get(`${member.guild.id}_welcomechannel`))
    //   .send(msg, image);
    // return;
    // }
  }
});
bot.on("guildMemberRemove", async (member) => {
  console.log(`${bot.db.get(`${member.guild.id}_leavechannel`)}
  ${bot.db.get(`${member.guild.id}_leavemessage`)}
${bot.db.get(`${member.guild.id}_goodbyemessagesys`)}`);

  if (
    bot.db.get(`${member.guild.id}_goodbyemessagesys`) ||
    bot.db.get(`${member.guild.id}_leavemessage`) ||
    bot.db.get(`${member.guild.id}_leavechannel`)
  ) {
    if (!bot.db.get(`${member.guild.id}_goodbyemessagesys`)) {
      bot.db.set(`${member.guild.id}_goobyemessagesys`, "yes");
    }
    if (!bot.db.get(`${member.guild.id}_leavemessage`)) {
      bot.db.set(`${member.guild.id}_leavemessage`, "Goodbye, $MEMBER$!");
    }
    if (!bot.db.get(`${member.guild.id}_leavechannel`)) return;
    const msg =
      bot.db
        .get(`${member.guild.id}_leavemessage`)
        .replace(/\$MEMBER\$/g, member.user.username)
        .replace(/\$MENTION\$/g, "<@!" + member.id + ">")
        .replace(/\$SERVER\$/g, member.guild.name) ||
      `Goodbye ${member.guild.id}, <@!${member.id}>!`;

    if (bot.db.get(`${member.guild.id}_goodbyemessagesys`) !== "yes") {
      return;
    }

    return bot.channels.cache
      .get(bot.db.get(`${member.guild.id}_leavechannel`))
      .send(msg);
  }
});

bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();
bot.songs = new discord.Collection();
bot.packs = new discord.Collection();
bot.packaliases = new discord.Collection();
bot.songaliases = new discord.Collection();
bot.helps = new discord.Collection();
bot.cooldowns = new discord.Collection();
bot.queue = new Map();

const { Player } = require("discord-player"); // Create a new Player (Youtube API key is your Youtube Data v3 key)
const player = new Player(bot, process.env.GOOGLE_API); // To easily access the player
bot.player = player;
bot.on("message", (message) => {
  if (message.author.bot) return;
  if (message.guild) {
    bot.config = {
      owners: "753298841712721961",
      prefix: bot.db.get(`${message.guild.id}_prefix`) || ".",
    };
    bot.music = {
      vote: bot.db.get(`${message.guild.id}_vote`) || false,
    };
  }
});

fs.readdir("./commands/", (err, categories) => {
  if (err) console.log(err);
  console.log(`Found total ${categories.length} categories.`);

  categories.forEach((category) => {
    let moduleConf = require(`./commands/${category}/module.json`);
    moduleConf.path = `./commands/${category}`;
    moduleConf.cmds = [];
    if (!moduleConf) return;
    bot.helps.set(category, moduleConf);
    // commands category
    fs.readdir(`./commands/${category}`, (err, files) => {
      console.log(
        `Found total ${files.length - 1} command(s) from ${category}.`
      );

      if (err) console.log(err);
      let commands = new Array();

      files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let prop = require(`./commands/${category}/${file}`);
        let cmdName = file.split(".")[0];

        bot.commands.set(prop.info.name, prop);

        prop.info.aliases.forEach((alias) => {
          bot.aliases.set(alias, prop.info.name);
        });

        bot.helps.get(category).cmds.push(prop.info.name);
      });
    });
  });
});

bot.on("message", async (message) => {
  if (message.author.bot) return;
  const db = require("quick.db");
  const button = require('discord-buttons');

  if (message.guild.id == "1056851311439642675" && message.content.includes("discord.gg")) {
    message.channel.bulkDelete(1)
  }
 
  //BlackList
  const Blacklisted = db.fetch(`blacklistedUsers_${message.author.id}`)
 
   if(Blacklisted == true) return;

  if (message.channel.type === "dm") {
   // const dmEmbed = new discord.MessageEmbed()
   //    .setTitle(`New Private Message Sent by ${message.author.tag}!`)
   //    .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
   //    .setAuthor(
   //      `USER: ${message.author.tag}` + `\nID: ${message.author.id}`,
   //      `${message.author.displayAvatarURL({ dynamic: true })}`
   //    )
   //    .setDescription(`${message.content}`)
   //    .setColor(`#131313`);
    
   //  if (
   //      message.attachments.first()
   //        ? message.attachments.first().proxyURL
   //        : null
   //    ) {
   //   dmEmbed.setImage(
   //        message.attachments.first()
   //          ? message.attachments.first().proxyURL
   //          : null
   //      )
   //   }
    
   //  bot.channels.cache.get(`921957126119772190`).send(dmEmbed);
    const dmEmbeds = new discord.MessageEmbed()
    .setAuthor(bot.user.username + ` Ilmu Komputer dan Teknologi`, bot.user.displayAvatarURL())
    .addField("Join Komunitas kami", 'gabung sekarang!')
      .setColor('#03fc0f')
   .setTimestamp();
    let button = new disbut.MessageButton()
  .setLabel("Gabung Server kami")
  .setStyle("url")
.setURL(`https://iktindonesia.ml/discord`)
  
    message.author.send(dmEmbeds, button)
  }

  // if (message.channel.name == "global-chat" && !message.author.bot) {
  //   bot.guilds.cache.forEach((guild) => {
  //     let channel = guild.channels.cache.find(
  //       (ch) => ch.name === "global-chat"
  //     );
  //     if (!channel) return;
  //     const embed = new discord.MessageEmbed()
  //       .setAuthor(message.author.username, message.author.displayAvatarURL())
  //       .setDescription(
  //         `**From Server:** ${message.guild.name}\n**Server ID:** ${message.guild.id}\n\n**Message:** ${message.content}\n[Jump to channel](https://discord.com/channels/${message.guild.id}/${message.channel.id})`
  //       )
  //       .setColor("RANDOM");
  //     if (
  //       message.attachments.first()
  //         ? message.attachments.first().proxyURL
  //         : null
  //     ) {
  //       embed.setImage(
  //         message.attachments.first()
  //           ? message.attachments.first().proxyURL
  //           : null
  //       );
  //     }
  //     channel.send(embed);
  //   });
  // }

  db.add(`messages_${message.guild.id}_${message.author.id}`, 1);
  if (db.has(`${message.guild.id}_${message.author.id}` + ".afk")) {
  /*  message.member.setNickname(`${message.author.username}`).catch((error) => {
      return;
    }); */
    
     const embed = new discord.MessageEmbed()
       .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setAuthor(message.author.username + ` is no longer AFK
`)
        .setDescription(
          `**Message**\n> Welcome back, I've removed your AFK status.`)
        .setColor("#34c6eb")
       .setFooter( `AFK since `)
       .setTimestamp();
      message.channel.send(embed).then((ms) => {
   // message.reply(`Welcome back, i removed your AFK`).then((ms) => {
      ms.delete({ timeout: "7000" });
    });
    db.delete(`${message.guild.id}_${message.author.id}` + ".afk");
    db.delete(`${message.guild.id}_${message.author.id}` + ".messageafk");
  }

  message.mentions.users.forEach((user) => {
    
     let stat = {
      online: "https://emoji.gg/assets/emoji/9166_online.png",
      idle: "https://emoji.gg/assets/emoji/3929_idle.png",
      dnd: "https://emoji.gg/assets/emoji/2531_dnd.png",
      offline: "https://emoji.gg/assets/emoji/7445_status_offline.png"
    }
     
    if (db.has(`${message.guild.id}_${user.id}` + ".afk")) {
      let messageafk2 = db.fetch(
        `${message.guild.id}_${user.id}` + ".messageafk"
      );
      if (message.author.bot) return;
        const embed = new discord.MessageEmbed()
       .setThumbnail(user.displayAvatarURL({ dynamic: true }))
        .setAuthor(`${user.tag} is now AFK
`, stat[user.presence.status])
        .setDescription(
          `**Message**\n${messageafk2}`)
        .setColor("#34c6eb")
        .setFooter( `AFK since • ${new Date()
      .toString()
      .split(" ", 5)
      .join(" ")}`
  )
      message.channel.send(embed);
     // message.channel.send(`**${user.tag}** is AFK\nReason: ${messageafk2}`);
    }
  });
  const prefixMention = new RegExp(`^<@!?${bot.user.id}>( |)$`);
  let testo = bot.db.get(`${message.guild.id}_prefix`) || ".";

  if (message.content.match(prefixMention)) {
    return message.reply(
      new discord.MessageEmbed()
        .setDescription(
          `My current prefix in this server is  \`${testo}\`  \ntype \`${testo}help\` for command`
        )
        .setColor("#34c6eb")
        .setFooter(`invite me with ${testo}invite`)
    );
  }
  if (message.author.bot || message.author === bot.user) return;

  if (!message.guild) {
    const prefixMention = new RegExp(`^<@!?${bot.user.id}> `);
    const prefix = message.content.match(prefixMention)
      ? message.content.match(prefixMention)[0]
      : bot.config.prefix;

    bot.emit("experience", message);

    // If the user doesn't doing any to the bot, return it.
    if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;

    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let msg = message.content.toLowerCase();
    let cmd = args.shift().toLowerCase();
    let sender = message.author;

    message.flags = [];
    while (args[0] && args[0][0] === "-") {
      message.flags.push(args.shift().slice(1));
    }

    let commandFile =
      bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
    if (!commandFile) return;

    const member = message.member,
      now = Date.now(),
      timestamps = bot.cooldowns.get(commandFile.info.name),
      cooldownAmount = (commandFile.conf.cooldown || 3) * 1000;

    try {
      if (!commandFile) return;
      if (commandFile.conf.dm === "no") return;
      commandFile.run(bot, message, args);
    } catch (error) {
      console.log(error.message);
    } finally {
      // If you want to really know, who is typing or using your bot right now.
      console.log(`${sender.tag} (${sender.id}) ran a command: ${cmd}`);
      bot.channels.cache
        .get(`952812368684023828`)
        .send(
          `<:pleuxinfo:902806293419544576> ${sender.tag} (${sender.id}) in ${message.guild.name} ran a command: *${cmd}*`
        );
    }
    return;
  }

  //message.guild
  else {
    const prefixMention = new RegExp(`^<@!?${bot.user.id}> `);
    const prefix = message.content.match(prefixMention)
      ? message.content.match(prefixMention)[0]
      : bot.config.prefix;

    bot.emit("experience", message);

    if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;

    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let msg = message.content.toLowerCase();
    let cmd = args.shift().toLowerCase();
    let sender = message.author;

    message.flags = [];
    while (args[0] && args[0][0] === "-") {
      message.flags.push(args.shift().slice(1));
    }

    let commandFile =
      bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
    if (!commandFile) return;

    if (!bot.cooldowns.has(commandFile.info.name))
      bot.cooldowns.set(commandFile.info.name, new discord.Collection());

    const member = message.member,
      now = Date.now(),
      timestamps = bot.cooldowns.get(commandFile.info.name),
      cooldownAmount = (commandFile.conf.cooldown || 3) * 1000;

    if (!timestamps.has(member.id)) {
      if (!bot.config.owners.includes(message.author.id)) {
        timestamps.set(member.id, now);
      }
    } else {
      const expirationTime = timestamps.get(member.id) + cooldownAmount;

      if (now < expirationTime) {
        const timeLeft = (expirationTime - now) / 1000;
        const embed = new discord.MessageEmbed().setTitle(
          `**<:pleuxinfo:902806293419544576> There is something wrong**`
        ).setDescription(`Please wait **${timeLeft.toFixed(1)} seconds** for repair
        `);
        return message.lineReply(embed);
      }
      //${timeLeft.toFixed(1
      timestamps.set(member.id, now);
      setTimeout(() => timestamps.delete(member.id), cooldownAmount);
    }

    try {
      if (!commandFile) return;
      commandFile.run(bot, message, args);
    } catch (error) {
      console.log(error.message);
    } finally {
      console.log(`${sender.tag} (${sender.id}) ran a command: ${cmd}`);
      bot.channels.cache
        .get(`952812368684023828`)
        .send(
          `<:pleuxinfo:902806293419544576> ${sender.tag} (${sender.id}) in ${message.guild.name} ran a command: *${cmd}*`
        );
    }
  }
});

bot.on("ready", () => {
  bot.user.setActivity(
    `.help | iktindonesia.ml`,
   // `${bot.guilds.cache.size} Server's`,
    { type: "PLAYING" }
  );
  console.log("Artificial Bot Maulana#1977 2020.");
  console.log("Ok it works!!!");
  console.log("The bot is ready to use");
  console.log(
    `[Connect] ${bot.user.tag} ready to serve ${bot.users.cache.size} at ${bot.guilds.cache.size} servers.`
  );
  console.log(`logged in as ${bot.user.username} BOT ✅`);
  console.log(`Update:[${new Date().toString().split(" ", 5).join(" ")}]`);

});
function pad(n) {
  return parseInt(n) < 10 // If number less than 10
    ? "0" + n // Add '0' in front
    : n; // Else, return the original string.
}
function seconds(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);

  var dDisplay = d > 0 ? d + (d == 1 ? " date, " : " date, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hour, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minutes, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " seconds" : " seconds") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

bot.on("message", async (message) => {
  
  if (message.author.bot || message.guild === null) return;
  xp(message);

  serverxp(message);

  const prefixMention = new RegExp(`^<@!?${bot.user.id}> `);
  const prefix = message.content.match(prefixMention)
    ? message.content.match(prefixMention)[0]
    : bot.config.prefix;

  if (message.content.indexOf(prefix) !== 0 || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "setup") {
    const type = args[0];
    const setup = args.slice(1).join(" ");

    if (type === "goobyechannel") {
      if (!setup)
        return message.channel.send(
          `<:botno:766649381411618837> | <@!${message.author.id}>, Please send a welcome message send place id with this format` +
            prefix +
            "setleavesendplace [welcome message send place] or skip this to make it send random channel(random only for if have welcomemessage)"
        );
      bot.db.set(
        `${message.guild.id}_leavechannel`,
        setup.replace("<#", "").replace(">", "")
      );
      message.channel.send(
        `<a:bener:744780650216685658> | Successfully setup leave message send place`
      );
      return;
    }
  }
});

//leveling
function xp(message) {
  let xp = bot.db.add(
    `xp_${message.author.id}`,
    Math.floor(Math.random() * 5) + 3
  );
  let level = Math.floor(0.3 * Math.sqrt(xp));

  let lvl =
    bot.db.get(`level_${message.author.id}`) ||
    bot.db.set(`level_xp_${message.author.id}`, 1);
  if (level > lvl) {
    let newLevel = bot.db.set(`level_${message.author.id}`, level);
    if (
      message.guild.id === "865943338876010506" ||
      bot.db.get(`${message.guild.id}_lvlupmsg`) === "no"
    )
      return;
    message.channel
      .send(`> ${message.author.toString()} is now at level ${newLevel} in global!`);
  }
}

function serverxp(message) {
  let a = message.guild.id;
  let xp = bot.db.add(
    `${a}xp_${message.author.id}`,
    Math.floor(Math.random() * 5) + 3
  );
  let level = Math.floor(0.3 * Math.sqrt(xp));
  let lvl =
    bot.db.get(`${a}level_${message.author.id}`) ||
    bot.db.set(`${a}level_${a}xp_${message.author.id}`, 1);
  if (level > lvl) {
    let newLevel = bot.db.set(`${a}level_${message.author.id}`, level);
    if (
      message.guild.id === "865943338876010506" ||
      bot.db.get(`${message.guild.id}_lvlupmsg`) === "no"
    )
      return;
    message.channel
      .send(
        `> ${message.author.toString()} is now on level ${newLevel} in this server!`);
  }
}

bot.on("guildMemberUpdate", (oldMember, newMember) => {
  try {
    var logChannel = oldMember.guild.channels.cache.get(
      bot.db.get(`${oldMember.guild.id}_botlog`)
    );
    if (!logChannel) return;
    oldMember.guild.fetchAuditLogs().then((logs) => {
      var userID = logs.entries.first().executor.id;
      var userAvatar = logs.entries.first().executor.avatarURL();
      var userTag = logs.entries.first().executor.tag;
      if (oldMember.nickname !== newMember.nickname) {
        if (oldMember.nickname === null) {
          var oldNM = `${oldMember.user.username}`;
        } else {
          var oldNM = oldMember.nickname;
        }
        if (newMember.nickname === null) {
          var newNM = `${newMember.user.username}`;
        } else {
          var newNM = newMember.nickname;
        }
        let updateNickname = new discord.MessageEmbed()
          .setAuthor(oldMember.user.tag, oldMember.user.avatarURL())
          .setTitle("NICKNAME UPDATE")
          .setColor("RANDOM")
          .setDescription(`**old :** ${oldNM}\n**new :** ${newNM}`)
          .setTimestamp()
          .setFooter("by: " + userTag);

        logChannel.send(updateNickname);
      }
      if (oldMember.roles.cache.size < newMember.roles.cache.size) {
        let role = newMember.roles.cache
          .filter((r) => !oldMember.roles.cache.has(r.id))
          .first();
        let roleAdded = new discord.MessageEmbed()
          .setAuthor(oldMember.user.tag, oldMember.user.avatarURL())
          .setTitle("ROLE ADDED")
          .setColor("RANDOM")
          .setDescription(`**Role:** <@&${role.id}>`)
          .setTimestamp()
          .setFooter("by: " + userTag);

        logChannel.send(roleAdded);
      }
      if (oldMember.roles.cache.size > newMember.roles.cache.size) {
        let role = oldMember.roles.cache
          .filter((r) => !newMember.roles.cache.has(r.id))
          .first();
        let roleRemoved = new discord.MessageEmbed()
          .setAuthor(oldMember.user.tag, oldMember.user.avatarURL())
          .setTitle("ROLE REMOVED")
          .setColor("RANDOM")
          .setDescription(`**Role:** <@&${role.id}>`)
          .setTimestamp()
          .setFooter("by: " + userTag);
        logChannel.send(roleRemoved);
      }
    });
    if (oldMember.guild.owner.user.id !== newMember.guild.owner.user.id) {
      let newOwner = new discord.MessageEmbed()
        .setTitle("**UPDATE GUILD OWNER**")
        .setThumbnail(oldMember.guild.iconURL())
        .setColor("RANDOM")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The OwnerShip.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`
        )
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL());
      logChannel.send(newOwner);
    }
  } catch (err) {
    let embed = new discord.MessageEmbed()
      .setColor("#FF0000")
      .setTitle("Error!")
      .setDescription("**Error Code:** *" + err + "*")
      .setTimestamp();
    console.log(err);
  }
});
bot.on("channelDelete", (channel) => {
  try {
    if (!channel.guild) return;
    if (
      !channel.guild
        .member(bot.user)
        .hasPermission(
          "EMBED_LINKS",
          "VIEW_CHANNEL",
          "READ_MESSAGE_HISTORY",
          "VIEW_AUDIT_LOG",
          "SEND_MESSAGES"
        )
    )
      return;
    const log = channel.guild.channels.cache.get(
      bot.db.get(`${channel.guild.id}_botlog`)
    );
    if (!log) return;
    if (log.type !== "text") return;
    if (
      !log.guild
        .member(bot.user)
        .hasPermission(
          "EMBED_LINKS",
          "VIEW_CHANNEL",
          "READ_MESSAGE_HISTORY",
          "VIEW_AUDIT_LOG",
          "SEND_MESSAGES"
        )
    )
      return;
    if (log) {
      if (channel.type === "text") {
        var type = "Text";
      } else if (channel.type === "voice") {
        var type = "Voice";
      } else if (channel.type === "category") {
        var type = "Category";
      } else if (channel.type === "news") {
        var type = "News Feed";
      } else if (channel.type === "store") {
        var type = "Store channel";
      } else if (!channel.type) {
        var type = "?";
      }
      channel.guild.fetchAuditLogs().then((logs) => {
        var userid = logs.entries.first().executor.id;
        var uavatar = logs.entries.first().executor.avatarURL();
        const event = new discord.MessageEmbed()
          .setTitle("Channel Deleted")
          .setThumbnail(uavatar)
          .addField("Channel name", `${channel.name} (ID: ${channel.id})`)
          .addField("Channel type", `${type}`)
          .addField("Created at", `${channel.createdAt}`)
          .addField("Created by", `<@${userid}> (ID: ${userid})`)
          .setColor("RANDOM")
          .setTimestamp()
          .setFooter(channel.guild.name, channel.guild.iconURL());
        log.send(event);
      });
    }
  } catch (err) {
    console.log(err);
  }
});
bot.on("channelUpdate", (oldChannel, newChannel) => {
  try {
    if (!oldChannel.guild) return;
    if (
      !newChannel.guild
        .member(bot.user)
        .hasPermission(
          "EMBED_LINKS",
          "VIEW_CHANNEL",
          "READ_MESSAGE_HISTORY",
          "VIEW_AUDIT_LOG",
          "SEND_MESSAGES"
        )
    )
      return;
    const log = oldChannel.guild.channels.cache.get(
      bot.db.get(`${oldChannel.guild.id}_botlog`)
    );
    if (!log) return;
    if (log.type !== "text") return;
    if (
      !log.guild
        .member(bot.user)
        .hasPermission(
          "EMBED_LINKS",
          "VIEW_CHANNEL",
          "READ_MESSAGE_HISTORY",
          "VIEW_AUDIT_LOG",
          "SEND_MESSAGES"
        )
    )
      return;
    if (log) {
      if (oldChannel.type === "text") {
        var type = "Text";
      } else if (oldChannel.type === "voice") {
        var type = "Voice";
      } else if (oldChannel.type === "category") {
        var type = "Category";
      } else if (oldChannel.type === "news") {
        var type = "News Feed";
      } else if (oldChannel.type === "store") {
        var type = "Store channel";
      } else if (!oldChannel.type) {
        var type = "?";
      }
      const newcategory = newChannel.parent;
      if (!newcategory) {
        const newcategory = "None";
      }
      const oldcategory = oldChannel.parent;
      if (!oldcategory) {
        const oldcategory = "None";
      }
      if (oldcategory === newcategory) {
        const newcategory = "Not changed";
      }
      oldChannel.guild.fetchAuditLogs().then((logs) => {
        const userid = logs.entries.first().executor.id;
        const uavatar = logs.entries.first().executor.avatarURL();
        const guildsChannel = newChannel.guild;
        if (oldChannel.parent !== newChannel.parent) {
          const channelname = new discord.MessageEmbed()
            .setTitle("Channel Updated")
            .setThumbnail(uavatar)
            .addField("Channel type", `${type}`)
            .addField(
              "Old Channel category (parent)",
              `${oldcategory} (ID: ${newChannel.parentID})`
            )
            .addField(
              "New Channel category (parent)",
              `${newcategory} (ID: ${newChannel.parentID})`
            )
            .addField("Changed by", `<@${userid}> (ID: ${userid})`)
            .addField("Created at", `${oldChannel.createdAt}`)
            .setColor("RANDOM")
            .setTimestamp()
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL());
          log.send(channelname);
        }
        if (oldChannel.name !== newChannel.name) {
          const channelname = new discord.MessageEmbed()
            .setTitle("Channel Name changed")
            .setThumbnail(uavatar)
            .addField("Old Channel name", `\`\`\`${oldChannel.name} \`\`\` `)
            .addField("New Channel name", `<#${newChannel.name}>`)
            .addField("Channel id", `${oldChannel.id}`)
            .addField("Channel type", `${type}`)
            .addField("Changed by", `<@${userid}> (ID: ${userid})`)
            .addField("Created at", `${oldChannel.createdAt}`)
            .setColor("RANDOM")
            .setTimestamp()
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL());
          log.send(channelname);
        }
        if (oldChannel.topic !== newChannel.topic) {
          const newtopic = new discord.MessageEmbed()
            .setTitle("Channel Description changed")
            .setThumbnail(uavatar)
            .addField(
              "Old Channel description",
              `\`\`\`\ ${oldChannel.topic || "(Not set)"} \`\`\` `
            )
            .addField(
              "New Channel description",
              `\`\`\`\ ${newChannel.topic || "(Not set)"} \`\`\` `
            )
            .addField("Channel id", `${newChannel.id}`)
            .addField("Channel type", `${type}`)
            .addField("Changed by", `<@${userid}> (ID: ${userid})`)
            .addField("Created at", `${oldChannel.createdAt}`)
            .setColor("RANDOM")
            .setTimestamp()
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL());
          log.send(newtopic);
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});
bot.on("channelCreate", (channel) => {
  try {
    if (!channel.guild) return;
    if (
      !channel.guild
        .member(bot.user)
        .hasPermission(
          "EMBED_LINKS",
          "VIEW_CHANNEL",
          "READ_MESSAGE_HISTORY",
          "VIEW_AUDIT_LOG",
          "SEND_MESSAGES"
        )
    )
      return;
    const log = channel.guild.channels.cache.get(
      bot.db.get(`${channel.guild.id}_botlog`)
    );
    if (!log) return;
    if (log.type !== "text") return;
    if (
      !log.guild
        .member(bot.user)
        .hasPermission(
          "EMBED_LINKS",
          "VIEW_CHANNEL",
          "READ_MESSAGE_HISTORY",
          "VIEW_AUDIT_LOG",
          "SEND_MESSAGES"
        )
    )
      return;
    if (log) {
      if (channel.type === "text") {
        var type = "Text";
      } else if (channel.type === "voice") {
        var type = "Voice";
      } else if (channel.type === "category") {
        var type = "Category";
      } else if (channel.type === "news") {
        var type = "News Feed";
      } else if (channel.type === "store") {
        var type = "Store channel";
      } else if (!channel.type) {
        var type = "?";
      }
      channel.guild.fetchAuditLogs().then((logs) => {
        const userid = logs.entries.first().executor.id;
        const uavatar = logs.entries.first().executor.avatarURL();
        const event = new discord.MessageEmbed()
          .setTitle("Channel Created")
          .setThumbnail(uavatar)
          .addField("Channel name", `<#${channel.id}> (ID: ${channel.id})`)
          .addField("Channel type", `${type}`)
          .addField("Created by", `<@${userid}> (ID: ${userid})`)
          .setColor("RANDOM")
          .setTimestamp()
          .setFooter(channel.guild.name, channel.guild.iconURL());
        log.send(event);
      });
    }
  } catch (err) {
    console.log(err);
  }
});
bot.on("roleUpdate", (oldRole, newRole) => {
  try {
    if (!oldRole.guild.member(bot.user).hasPermission("EMBED_LINKS")) return;
    if (!oldRole.guild.member(bot.user).hasPermission("VIEW_AUDIT_LOG")) return;
    var logChannel2 = oldRole.guild.channels.cache.get(
      bot.db.get(`${oldRole.guild.id}_botlog`)
    );
    if (!logChannel2) return;
    oldRole.guild.fetchAuditLogs().then((logs) => {
      var userID = logs.entries.first().executor.id;
      var userAvatar = logs.entries.first().executor.avatarURL();
      if (oldRole.name !== newRole.name) {
        let roleUpdateName = new discord.MessageEmbed()
          .setTitle("**ROLE NAME UPDATE**")
          .setThumbnail(userAvatar)
          .setColor("RANDOM")
          .setDescription(
            `**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
          )
          .setTimestamp()
          .setFooter(oldRole.guild.name, oldRole.guild.iconURL());
        logChannel2.send(roleUpdateName);
      }
      if (oldRole.hexColor !== newRole.hexColor) {
        if (oldRole.hexColor === "#000000") {
          var oldColor = "`Default`";
        } else {
          var oldColor = oldRole.hexColor;
        }
        if (newRole.hexColor === "#000000") {
          var newColor = "`Default`";
        } else {
          var newColor = newRole.hexColor;
        }
        let roleUpdateColor = new discord.MessageEmbed()
          .setTitle("**ROLE COLOR UPDATE**")
          .setThumbnail(userAvatar)
          .setColor("RANDOM")
          .setDescription(
            `**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
          )
          .setTimestamp()
          .setFooter(oldRole.guild.name, oldRole.guild.iconURL());
        logChannel2.send(roleUpdateColor);
      }
      if (oldRole.permissions !== newRole.permissions) {
        let roleUpdate = new discord.MessageEmbed()
          .setTitle("**UPDATE ROLE PERMISSIONS**")
          .setThumbnail(userAvatar)
          .setColor("RANDOM")
          .setDescription(
            `**\n**:first_place: Successfully \`\`CHANGED\`\` **${
              oldRole.name
            }** Permissions!\n\n**Old Permissions:** \`\`${oldRole.permissions.toArray()}\`\`\n**New Permissions:** \`\`${newRole.permissions.toArray()}\`\`\n**By:** <@${userID}> (ID: ${userID})`
          )
          .setTimestamp()
          .setFooter(oldRole.guild.name, oldRole.guild.iconURL());
        logChannel2.send(roleUpdate);
      }
    });
  } catch (err) {
    let embed = new discord.MessageEmbed()
      .setColor("#FF0000")
      .setTitle("Error!")
      .setDescription("**Error Code:** *" + err + "*")
      .setTimestamp();
    return logChannel2.send(embed);
  }
});

bot.on("roleDelete", (role) => {
  try {
    if (!role.guild.member(bot.user).hasPermission("EMBED_LINKS")) return;
    if (!role.guild.member(bot.user).hasPermission("VIEW_AUDIT_LOG")) return;
    var logChannel2 = role.guild.channels.cache.get(
      bot.db.get(`${role.guild.id}_botlog`)
    );
    if (!logChannel2) return;
    role.guild.fetchAuditLogs().then((logs) => {
      var userID = logs.entries.first().executor.id;
      var userAvatar = logs.entries.first().executor.avatarURL();
      let roleDelete = new discord.MessageEmbed()
        .setTitle("**ROLE DELETE**")
        .setThumbnail(userAvatar)
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(role.guild.name, role.guild.iconURL());
      logChannel2.send(roleDelete);
    });
  } catch (err) {
    let embed = new discord.MessageEmbed()
      .setColor("#FF0000")
      .setTitle("Error!")
      .setDescription("**Error Code:** *" + err + "*")
      .setTimestamp();
    return logChannel2.send(embed);
  }
});

bot.on("roleCreate", (role) => {
  try {
    if (!role.guild.member(bot.user).hasPermission("EMBED_LINKS")) return;
    if (!role.guild.member(bot.user).hasPermission("VIEW_AUDIT_LOG")) return;
    var logChannel2 = role.guild.channels.cache.get();
    if (!logChannel2) return;
    role.guild.fetchAuditLogs().then((logs) => {
      var userID = logs.entries.first().executor.id;
      var userAvatar = logs.entries.first().executor.avatarURL();
      let roleCreate = new discord.MessageEmbed()
        .setTitle("**ROLE CREATE**")
        .setThumbnail(userAvatar)
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(role.guild.name, role.guild.iconURL());
      logChannel2.send(roleCreate);
    });
  } catch (err) {
    let embed = new discord.MessageEmbed()
      .setColor("#FF0000")
      .setTitle("Error!")
      .setDescription("**Error Code:** *" + err + "*")
      .setTimestamp();
    console.log(err);
  }
});
bot.on("messageUpdate", (oldMessage, newMessage) => {
  
  edits.set(oldMessage.channel.id, oldMessage)
  edits2.set(newMessage.channel.id, newMessage)
  try {
    if (oldMessage.author.bot) return;
    if (!oldMessage.guild.member(bot.user).hasPermission("EMBED_LINKS")) return;
    if (!oldMessage.guild.member(bot.user).hasPermission("MANAGE_MESSAGES"))
      return;
    var logChannel2 = oldMessage.guild.channels.cache.get(
      bot.db.get(`${oldMessage.guild.id}_botlog`)
    );
    if (!logChannel2) return;
    if (oldMessage.content.startsWith("https://")) return;
    if (oldMessage.content.startsWith("http://")) return;
    let messageUpdate = new discord.MessageEmbed()
      .setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL())
      .setColor("RANDOM")
      .setTitle(`**MESSAGE EDITED**`)
      .setDescription(
        `in: ${oldMessage.channel}\n**Old Message  : **${oldMessage}\n**New Message : **${newMessage}\n[Jump to message](https://discord.com/channels/${oldMessage.guild.id}/${oldMessage.channel.id}/${oldMessage.id})`
      )
      .setTimestamp()

    logChannel2.send(messageUpdate);
  
  } catch (err) {
    let embed = new discord.MessageEmbed()
      .setColor("#FF0000")
      .setTitle("Error!")
      .setDescription("**Error Code:** *" + err + "*")
      .setTimestamp();
    return logChannel2.send(embed);
  }
});
bot.on("messageDelete", (message) => {
  
   snipes.set(message.channel.id, message)
  try {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if (
      !message.guild
        .member(bot.user)
        .hasPermission(
          "EMBED_LINKS",
          "VIEW_CHANNEL",
          "READ_MESSAGE_HISTORY",
          "VIEW_AUDIT_LOG",
          "SEND_MESSAGES"
        )
    )
      return;
    const log = message.guild.channels.cache.get(
      bot.db.get(`${message.guild.id}_botlog`)
    );
    if (!log) return;
    if (log.type !== "text") return;
    if (
      !log.guild
        .member(bot.user)
        .hasPermission(
          "EMBED_LINKS",
          "VIEW_CHANNEL",
          "READ_MESSAGE_HISTORY",
          "VIEW_AUDIT_LOG",
          "SEND_MESSAGES"
        )
    )
      return;
    if (log) {
      const final = message.toString().substr(0, 500); // Limit characters
      const event = new discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor("RANDOM")
        .setTitle(`**MESSAGE DELETED**`)
        .setDescription(`in: ${message.channel}\n**Message:**\n${final}`)
        .setTimestamp()
      
      log.send(event);
    }
  } catch (err) {
    console.log(err);
  }
});

bot.on("guildCreate", (guild) => {
  let testo = bot.db.get(`${bot.config.prefix}`) || ".";

  bot.channels.cache
    .get("871920696794689616")
    .send(
      `New Guild Joined: (**${guild.name}**)\nID: (**${guild.id}**)\nThis Guild has **${guild.memberCount}** Members`
    );
  guild.systemChannel
    .send(
      `<:icon:976855886775586846> **thanks for adding Pleux**\nPrefix \`${testo}\` and command help \`${testo}help\`, bot prefix you can change by using command \`${testo}setprefix\`.\n***Hello***\nHello, I'm a bot (pleux), I'm a bot system, what I mean by my system is to make it easier for your server system to switch to bots, commands that are safe without any symptoms, if there are symptoms, please type prefix \`${testo}report\` to send bugs or something problematic on bots.\n***Support***\nSupport us by voting for our bot or joining our discord server, don't forget to share the pleux invite link (<https://bit.ly/pleux-invite>) with your friends. And visit our website <https://pleux.ga> and our blog to see the latest updates from pleux <https://pleuxbot.blogspot.com/>.`
    )
    .catch((x) => x.return);
});
bot.on("guildDelete", (guild) => {
  bot.channels.cache
    .get("871920696794689616")
    .send(
      `I have been removed from: (**${guild.name}**)\nID: (**${guild.id}**)\nThis Guild has **${guild.memberCount}** Members`
    );
});
bot.login(process.env['TOKEN']);

const app = express();
//app.use(express.static(__dirname + "/public"))
const port = process.env['PORT'] || 3000;

//app.get("/", async (req, res) => {
// res.send("Pleux Beta - By YoruAkio | Maulana")
//})

// app.get('/info', async (req, res) => {
// const users = bot.users.cache.size // get pleux users count on database
// const guilds = bot.guilds.cache.size // get pleux total guilds on database

// let file = fs.readFileSync('./public/info.html', { encoding: "utf8" }) // read file html

// file = file.replace("$$guilds$$", guilds) // replace $$guilds$$ with guilds count
// file = file.replace("$$users$$", users) // replace $$users$$ with users count

// res.send(file)
// })

app.listen(port, () => console.log(`Server is live on port ${port}`));
