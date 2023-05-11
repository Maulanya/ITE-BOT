## Change the file name sensor.md to sensor.js
#### and un // the const sensor = require("./sensor") from server.js

Code:
```js
module.exports = (client) => {
client.on("message", async message => {
  const db = require("quick.db")
  let SMessages = [client.db.get(`${message.guild.id}_badword`)]

let foundInText = false;
for (var i in SMessages) {
if(message.content.toLowerCase().includes(SMessages[i])) foundInText = true;
}

const { member } = message
if(foundInText) {
message.delete()
message.channel.send(`> ${message.author.toString()} don't say bad words!`).then((ms) => {
      ms.delete({ timeout: "7000" });
    });
}

})}
```