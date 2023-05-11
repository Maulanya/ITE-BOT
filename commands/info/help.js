const Discord = require('discord.js');
const { MessageMenuOption, MessageMenu } = require("discord-buttons");

exports.run = async (bot, message, args) => {
  //--------------------------------------S T A R T---------------------------------------

  const color = "#34c6eb";
  let linkSupport = `https://iktindonesia.ml/discord`
  let linkInvite = `https://discord.com/oauth2/authorize?client_id=975706013124661252&scope=bot&permissions=1543629054`
  let linkWebsite = `https://iktindonesia.ml`
  const embed = new Discord.MessageEmbed()
    .setThumbnail("https://cdn.discordapp.com/attachments/929291256557879336/1074213008500338688/20230108_192227.png")
    .setColor(color)
    .setAuthor(bot.user.username + ` Command's List`, bot.user.displayAvatarURL())
    //.setDescription(`my prefix on this server is \`${bot.config.prefix}\``)
    .addField("SOME HELPFUL LINKS-", `[Invite me]` + `(${linkInvite})` + `\n[Support server]` + `(${linkSupport})` + `\n[Official Website]` + `(${linkWebsite})` + `\nmy prefix on this server is \`${bot.config.prefix}\``)
    // .addField(
    //   "**Commands Category**",
    //   "- Info Commands\n- Moderation Commands\n- Setup Commands\n- Leveling Commands\n- Images Commands\n- Roleplay Commands\n- Miscellaneous Commands\n- Other Commands")//\n\n*want to chat with everyone?, you can create a 'global-chat' channel, don't use emojis and symbols in channel names.*")
    .setFooter(`• please report commands that error, type (${bot.config.prefix}report), have suggestions for developers?, use (${bot.config.prefix}suggestion)`)

  // const embed1 = new Discord.MessageEmbed()
  //   .setColor(color)
  //   .setAuthor(bot.user.username + ` Info Command's`, bot.user.displayAvatarURL())
    // .setDescription(`welcome to Info command list`)
    .addField(
      "**Info Commands**",
      "`info`, `help`, `ping`, `permissions`"
    )
    // .setFooter(`• please report commands that error, type (${bot.config.prefix}report)`);


  // const embed2 = new Discord.MessageEmbed()
  //   .setColor(color)
  //   .setAuthor(bot.user.username + ` Moderator Command's`, bot.user.displayAvatarURL())
  //   // .setDescription(`welcome to moderator command list`)
    //`setbadword / removebadword`
    .addField(
      "**Moderation Commands**",
      "`kick`, `ban / unban`, `clear`, `warn / clearwarn`, `mute / unmute`, `slowmode`, `lock / unlock`, `locktime`, `giverole / removerole`, `addemoji`, ` hide / unhide`\n\n**Moderation  Voice Command's**\n*for use this command, you need connect to voice channel.*\n`vcid`, `voicedeafen`, `voicekick`. `voicemove`, `voicemute`, `voiceundeaf`, `voiceunmute`"
    )
    // .setFooter(`• please report commands that error, type (${bot.config.prefix}report)`);

  // const embed3 = new Discord.MessageEmbed()
  //   .setColor(color)
  //   .setAuthor(bot.user.username + ` Setup Command's`, bot.user.displayAvatarURL())
  //   // .setDescription(`welcome to setup command list`)
    .addField(
      "**Setup Commands**",
      //setwarn
      " `setlevelmessage`, `setmuterole`, `setprefix`, `setautorole`, `setleavechannel`, `setleavemessage`,`setlogschannel`, `setleavesystem`, `setupstatus`, `setwelcomechannel`, `setwelcomemessage`, `setwelcomesystem`, `setwelcomeembed`" //setwelcomeimg
    )
  //   .setFooter(`• please report commands that error, type (${bot.config.prefix}report)`);
  // const embed4 = new Discord.MessageEmbed()
  //   .setColor(color)
  //   .setAuthor(bot.user.username + ` Leveling Command's`, bot.user.displayAvatarURL())
  //   // .setDescription(`welcome to leveling command list`)
    .addField(
      "**Leveling Commands**",
      "`leaderboard`, `leaderboard global`, `rank`"
    )
  //   .setFooter(`• please report commands that error, type (${bot.config.prefix}report)`);
  // const embed5 = new Discord.MessageEmbed()
  //   .setColor(color)
  //   .setAuthor(bot.user.username + ` Economy Command's`, bot.user.displayAvatarURL())
  //   // .setDescription(`welcome to economy command list`)
    .addField(
      "**Economy Commands**",
      " `balance`, `slots`, `beg`, `bet`, `buy`, `daily`, `deposit`, `pay`, `roulette`, `weekly`, `withdraw`, `work`" //monthly
    )
  //   .setFooter(`• please report commands that error, type (${bot.config.prefix}report)`);

  // const embed6 = new Discord.MessageEmbed()
  //   .setColor(color)
  //   .setAuthor(bot.user.username + ` Images Command's`, bot.user.displayAvatarURL())
  //   // .setDescription(`welcome to images command list`)
    .addField(
      "**Images Commands**",
      "`randav (randomav)`, `love`, `facechange`, `300years`, `approved`, `batslap`, `beautiful`, `burn`, `challenger`, `dictator`, `distort`, `magik`, `pat`, `scary`, `triggered`, `tweet`, `vs`, `wanted`, `fire`, `poke`, `rip`"
    )
  //   .setFooter(`• please report commands that error, type (${bot.config.prefix}report)`);

  // const embed7 = new Discord.MessageEmbed()
  //   .setColor(color)
  //   .setAuthor(bot.user.username + ` Roleplay Command's`, bot.user.displayAvatarURL())
  //   // .setDescription(`welcome to roleplay command list`)
    // csgo <= this command is useless because it is not used very often
    .addField(
      "**Roleplay Commands**",
      // hacking
      // findwords [expected to create a channel for this command.] <= this command is useless because it is not used very often
      "`tictactoe`, `slots`, `reverse`,  `hug`, `kiss`, `slap`, `tickle`, `wink`, `cuddle`, `kill`, `calculate`, `poll`, `qrcode`, `meme`, `lovecalc`, `whogay`"
    )
  //   .setFooter(`• please report commands that error, type (${bot.config.prefix}report)`);
  // const embed8 = new Discord.MessageEmbed()
  //   .setColor(color)
  //   .setAuthor(bot.user.username + ` Miscellaneous Command's`, bot.user.displayAvatarURL())
  //   // .setDescription(`welcome to Miscellaneous command list`)
    .addField(
      "**Miscellaneous Commands**",
      "`afk`, `warnings [@mention]` `avatar`, `membercount`, `serverinfo`, `whois`, `ticket`, `weather`, `servericon`, `translate`, `wikipedia`, `playstore`, `alarm`, `anime`, `dependencies`, `binary / decode`, `youtube`"
    )
    // `snipe (show deleted message)`, `edits (show edited message)`, 
  //   .setFooter(`• please report commands that error, type (${bot.config.prefix}report)`);

  // const embed9 = new Discord.MessageEmbed()
  //   .setColor(color)
  //   .setAuthor(bot.user.username + ` Other Command's`, bot.user.displayAvatarURL())
  //   // .setDescription(`welcome to other command list`)
    .addField(
      "**Other Commands**",
      "`invite`, `support`, `website`"
    )
    // .setFooter(`• please report commands that error, type (${bot.config.prefix}report)`);

  //-----------------------------OPTIONS----------------------
  let option = new MessageMenuOption()
    .setLabel('Help')
    .setValue('option')

  let option1 = new MessageMenuOption()
    .setLabel('Info')
    .setValue('option1')

  let option2 = new MessageMenuOption()
    .setLabel('Moderator')
    .setValue('option2')

  let option3 = new MessageMenuOption()
    .setLabel('Setup')
    .setValue('option3')

  let option4 = new MessageMenuOption()
    .setLabel('Leveling')
    .setValue('option4')

  let option5 = new MessageMenuOption()
    .setLabel('Economy')
    .setValue('option5')

  let option6 = new MessageMenuOption()
    .setLabel('Images')
    .setValue('option6')

  let option7 = new MessageMenuOption()
    .setLabel('Roleplay')
    .setValue('option7')

  let option8 = new MessageMenuOption()
    .setLabel('Miscellaneous')
    .setValue('option8')

  let option9 = new MessageMenuOption()
    .setLabel('Other')
    .setValue('option9')

  let select = new MessageMenu()
    .setID('selector')
    .setPlaceholder('Category Options')
    .setMaxValues(1)
    .addOptions(option, option1, option2, option3, option4, option5, option6, option7, option8, option9)

  //-----------------------------OPTIONS----------------------

  const Sendmenu = await message.channel.send(embed);
  const filter = (button) => button.clicker.user.id === message.author.id; //if only the message author click thenit will work
  let collector = Sendmenu.createMenuCollector(filter, { time: 300000 });

  collector.on("collect", (b) => {
    if (b.values[0] == "option") {
      Sendmenu.edit(embed, select)
    }

    if (b.values[0] == "option1") {
      Sendmenu.edit(embed1, select)
    }

    if (b.values[0] == "option2") {
      Sendmenu.edit(embed2, select)
    }

    if (b.values[0] == "option3") {
      Sendmenu.edit(embed3, select)
    }

    if (b.values[0] == "option4") {
      Sendmenu.edit(embed4, select)
    }
    if (b.values[0] == "option5") {
      Sendmenu.edit(embed5, select)
    }

    if (b.values[0] == "option6") {
      Sendmenu.edit(embed6, select)
    }
    if (b.values[0] == "option7") {
      Sendmenu.edit(embed7, select)
    }
    if (b.values[0] == "option8") {
      Sendmenu.edit(embed8, select)
    }
    if (b.values[0] == "option9") {
      Sendmenu.edit(embed9, select)
    }
    b.reply.defer();
  })

  collector.on("end", (b) => {
    Sendmenu.edit("This help menu is expired! Please retype the command to view again.")
  })
};

exports.info = {
  name: 'help',
  usage: "",
  description: "",
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.conf = {
  cooldown: 0,
  dm: "yes"
}
