
exports.run = async (bot, message, args) => {

try {
		if (!args[0])
			return message.reply("You need to input the text to reverse!");

		const str = args.join(" ");
		const msg = await message.reply(str.split("").reverse().join(""));
		msg.react("🔁");
	} catch (err) {
		message.channel.send(`Their was an error!\n${err}`).catch();
	}
};
exports.info = {
  name: "reverse",
  aliases: [],
  usage: "",
  description: ""
};
//checked
exports.conf = {
  cooldown: 0,
  dm: "yes"
};
exports.conf={
  cooldown: 0,
  dm: "yes"
}