const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "furry",
   run: (client, message) => {
    client.channels.fetch("1027675167347965992")
    .then(channel => channel.messages.fetch({ limit: 100, cache: false })
    .then(msgs => {
      const gallery = msgs.map(a => a.attachments.map(u => u.url)).flat();
      const embed = new EmbedBuilder()
        .setDescription(`furrys :3`)
        .setColor("Red")
        .setImage(file = gallery[Math.floor(Math.random() * gallery.length)])
      message.channel.send({ embeds: [embed] });
    }))
    .catch(console.error);
  }
};