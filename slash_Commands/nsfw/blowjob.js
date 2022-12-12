const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "blowjob",
    description: "Mamada a un usuario",
    options: [{
      name: "usuario",
      description: "Elige el usuario",
      type: 6,
      required: true
    }],
   run: (client, int) => {
    const autor = int.user.username;
    const target = int.options._hoistedOptions.map(x => x.user.username);
    client.channels.fetch("1027393900379381820")
    .then(channel => channel.messages.fetch({ limit: 50, cache: false })
    .then(msgs => {
      const links = (msgs.map(a => a.attachments.map(u => u.url)));
      const gallery = links.flat();
      const embed = new EmbedBuilder()
        .setDescription(`**${target}**, estas recibiendo una mamada de **${autor}**`)
        .setColor("Red")
        .setImage(file = gallery[Math.floor(Math.random() * gallery.length)])
      int.reply({ embeds: [embed] });
    }))
    .catch(console.error);
  }
};