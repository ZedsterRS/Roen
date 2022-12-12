const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "images",
    description: "Imagenes H",
    options: [],
   run: (client, message, prefix, args) => {
    client.channels.fetch("1034327175949733928")
    .then(channel => channel.messages.fetch({ limit: 100, cache: false })
    .then(msgs => {
        const links = (msgs.map(a => a.attachments.map(u => u.url)));
        const gallery = links.flat();
        const embed = new EmbedBuilder()
            .setDescription(`Disfrute el h uwu`)
            .setColor("Red")
            .setImage(file = gallery[Math.floor(Math.random() * gallery.length)])
        message.channel.send({ embeds: [embed] });
    }))
    .catch(console.error);
  }
};