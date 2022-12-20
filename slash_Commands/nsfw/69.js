const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "69",
    description: "69 con un usuario",
    options: [{
      name: "usuario",
      description: "Elige el usuario",
      type: 6,
      required: true
    }],
   run: (client, int) => {
    const autor = int.user.username;
    const target = int.options._hoistedOptions.map(x => x.user.username);
    client.channels.fetch("1033136546917912616")
    .then(channel => channel.messages.fetch({ limit: 100, cache: false })
    .then(msgs => {
      const links = (msgs.map(a => a.attachments.map(u => u.url)));
      const gallery = links.flat();
      const embed = new EmbedBuilder()
        .setDescription(`**${target}** y **${autor}** hacen un 69 uwu`)
        .setColor("Red")
        .setImage(file = gallery[Math.floor(Math.random() * gallery.length)]);
      int.reply({ embeds: [embed] });
    }))
    .catch(console.error);
  }
};