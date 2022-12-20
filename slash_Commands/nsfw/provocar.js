const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "provocar",
    description: "Provoca a un usuario",
    options: [{
      name: "usuario",
      description: "Elige el usuario",
      type: 6,
      required: false
    }],
   run: (client, int) => {
    const autor = int.user.username;
    const target = int.options._hoistedOptions.map(x => x.user.username);
    client.channels.fetch("1033494261720682726")
    .then(channel => channel.messages.fetch({ limit: 50, cache: false })
    .then(msgs => {
      const links = (msgs.map(a => a.attachments.map(u => u.url)));
      const gallery = links.flat();
      if (int.options.getUser("usuario")) {
        let embed = new EmbedBuilder()
          .setDescription(`**${autor}** esta provocando a **${target}** owo`)
          .setColor("Red")
          .setImage(file = gallery[Math.floor(Math.random() * gallery.length)])
        int.reply({ embeds: [embed] });
      } else {
        let embed = new EmbedBuilder()
          .setDescription(`**${autor}** se puso provocativa uwu`)
          .setColor("Red")
          .setImage(file = gallery[Math.floor(Math.random() * gallery.length)])
        int.reply({ embeds: [embed] });
      };
    }))
    .catch(console.error);
  }
};