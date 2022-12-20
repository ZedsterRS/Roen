const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "furry",
    description: "Furry gifs",
    options: [{
      name: "usuario",
      description: "Elige el usuario",
      type: 6,
      required: false
    }],
   run: (client, int) => {
    const autor = int.user.username;
    const target = int.options._hoistedOptions.map(x => x.user.username);
    client.channels.fetch("1027675167347965992")
    .then(channel => channel.messages.fetch({ limit: 50, cache: false })
    .then(msgs => {
      const links = (msgs.map(a => a.attachments.map(u => u.url)));
      const gallery = links.flat();
      if (int.options.getUser("usuario")) {
        const embed = new EmbedBuilder()
          .setDescription(`Mira **${target}**, **${autor}** quiere que veas furrys uwu`)
          .setColor("Red")
          .setImage(file = gallery[Math.floor(Math.random() * gallery.length)])
        int.reply({ embeds: [embed] });
      } else {
        const embed = new EmbedBuilder()
          .setDescription(`Furrys :3`)
          .setColor("Red")
          .setImage(file = gallery[Math.floor(Math.random() * gallery.length)])
        int.reply({ embeds: [embed] });
      }
    }))
    .catch(console.error);
  }
};