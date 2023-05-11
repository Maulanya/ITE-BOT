 exports.run = async (bot, message, args) => {
const id1 = message.member.voice.channel.id;
const id2 = message.member.voice.channel;
message.channel.send(`${id1}`);
await message.channel.send(`Done here is Your Voice Channel id of ${id2}  `);

 }
 exports.info = {
  name: 'vcid',
  aliases:[],
  description: ""
}//checked
exports.conf={
  cooldown: 3,
  dm: "no"
}