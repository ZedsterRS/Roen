const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "toy",
    description: "Usar un dildo",
    options: [{
      name: "usuario",
      description: "Elige el usuario",
      type: 6,
      required: false
    }],
   run: (client, int) => {
    const autor = int.user.username;
    const target = int.options._hoistedOptions.map(x => x.user.username);
    client.channels.fetch("1027392794576310343")
    .then(channel => channel.messages.fetch({ limit: 100, cache: false })
    .then(msgs => {
      const links = (msgs.map(a => a.attachments.map(u => u.url)));
      const gallery = links.flat();
      if (int.options.getUser("usuario")) {
        let embed = new EmbedBuilder()
          .setDescription(`**${target}** mira a **${autor}** usar su juguete uwu`)
          .setColor("Red")
          .setImage(file = gallery[Math.floor(Math.random() * gallery.length)])
        int.reply({ embeds: [embed] });
      } else {
        let embed = new EmbedBuilder()
          .setDescription(`**${autor}** usa su juguete para darse amor owo`)
          .setColor("Red")
          .setImage(file = gallery[Math.floor(Math.random() * gallery.length)])
        int.reply({ embeds: [embed] });
      };
    }))
    .catch(console.error);
  }
};