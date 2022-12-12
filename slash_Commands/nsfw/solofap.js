const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "solofap",
    description: "Darse amor",
    options: [],
   run: (client, message, prefix, args) => {
    const autor = message.author.username;
    client.channels.fetch("1027679674777731143")
    .then(channel => channel.messages.fetch({ limit: 50, cache: false })
    .then(msgs => {
      const links = (msgs.map(a => a.attachments.map(u => u.url)));
      const gallery = links.flat();
      const embed = new EmbedBuilder()
        .setDescription(`**${autor}** se esta dando amor uwu`)
        .setColor("Red")
        .setImage(file = gallery[Math.floor(Math.random() * gallery.length)])
      message.channel.send({ embeds: [embed] });
    }))
    .catch(console.error);
  }
};