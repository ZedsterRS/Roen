const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "yuritoys",
    description: "Usa juguetes con un usuario",
    options: [{
      name: "usuario",
      description: "Elige el usuario",
      type: 6,
      required: true
    }],
   run: (client, int) => {
    const autor = int.user.username;
    const target = int.options._hoistedOptions.map(x => x.user.username);
    client.channels.fetch("1032083523336679524")
    .then(channel => channel.messages.fetch({ limit: 100, cache: false })
    .then(msgs => {
      const links = (msgs.map(a => a.attachments.map(u => u.url)));
      const gallery = links.flat();
      const embed = new EmbedBuilder()
        .setDescription(`**${autor}** y **${target}** usan juguete owo`)
        .setColor("Red")
        .setImage(file = gallery[Math.floor(Math.random() * gallery.length)])
      int.reply({ embeds: [embed] });
    }))
    .catch(console.error);
  }
};