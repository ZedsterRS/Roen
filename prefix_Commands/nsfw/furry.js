const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "furry",
    description: "Furry gifs",
    options: [],
   run: (client, message, prefix, args) => {
    client.channels.fetch("1027675167347965992")
    .then(channel => channel.messages.fetch({ limit: 50, cache: false })
    .then(msgs => {
      const links = (msgs.map(a => a.attachments.map(u => u.url)));
      const gallery = links.flat();
      const embed = new EmbedBuilder()
        .setDescription(`furrys :3`)
        .setColor("Red")
        .setImage(file = gallery[Math.floor(Math.random() * gallery.length)])
      message.channel.send({ embeds: [embed] });
    }))
    .catch(console.error);
  }
};