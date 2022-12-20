const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "squirt",
    description: "Hacer un squirt",
    options: [],
   run: (client, int) => {
    const autor = int.user.username;
    client.channels.fetch("1032748119273783296")
    .then(channel => channel.messages.fetch({ limit: 100, cache: false })
    .then(msgs => {
      const links = (msgs.map(a => a.attachments.map(u => u.url)));
      const gallery = links.flat();
      const embed = new EmbedBuilder()
        .setDescription(`**${autor}** se esta viniedo a chorros <:emoji_8:1034341943339122698>`)
        .setColor("Red")
        .setImage(file = gallery[Math.floor(Math.random() * gallery.length)])
      int.reply({ embeds: [embed] });
    }))
    .catch(console.error);
  }
};