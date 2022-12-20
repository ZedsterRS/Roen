const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "footkiss",
    description: "Besar los pies",
    options: [{
      name: "usuario",
      description: "Elige el usuario",
      type: 6,
      required: true
    }],
   run: (client, int) => {
    const autor = int.user.username;
    const target = int.options._hoistedOptions.map(x => x.user.username);
    client.channels.fetch("1045442211166289931")
    .then(channel => channel.messages.fetch({ limit: 50, cache: false })
    .then(msgs => {
      const links = (msgs.map(a => a.attachments.map(u => u.url)));
      const gallery = links.flat();
      const embed = new EmbedBuilder()
        .setDescription(`**${target}**, **${autor}** te está besando las patas uwu`)
        .setColor("Red")
        .setImage(file = gallery[Math.floor(Math.random() * gallery.length)])
      int.reply({ embeds: [embed] });
    }))
    .catch(console.error);
  }
};