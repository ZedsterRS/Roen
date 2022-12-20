const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "solofap",
   run: (client, message) => {
    const autor = message.author.username;
    client.channels.fetch("1027679674777731143")
    .then(channel => channel.messages.fetch({ limit: 100, cache: false })
    .then(msgs => {
      const gallery = msgs.map(a => a.attachments.map(u => u.url)).flat();
      const embed = new EmbedBuilder()
        .setDescription(`**${autor}** se esta dando amor uwu`)
        .setColor("Red")
        .setImage(file = gallery[Math.floor(Math.random() * gallery.length)])
      message.channel.send({ embeds: [embed] });
    }))
    .catch(console.error);
  }
};