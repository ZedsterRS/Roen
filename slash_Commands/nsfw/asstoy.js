const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "asstoy",
    description: "Usar un dildo en ano",
    options: [{
      name: "usuario",
      description: "Elige el usuario",
      type: 6,
      required: false
    }],
   run: (client, int) => {
    const autor = int.user.username;
    const target = int.options._hoistedOptions.map(x => x.user.username);
    client.channels.fetch("1032106750964420708")
    .then(channel => channel.messages.fetch({ limit: 50, cache: false })
    .then(msgs => {
      const links = (msgs.map(a => a.attachments.map(u => u.url)));
      const gallery = links.flat();
      if (int.options.getUser("usuario")) {
        const embed = new EmbedBuilder()
          .setDescription(`**${target}** mira a **${autor}** usar un juguete por su qlo o//o`)
          .setColor("Red")
          .setImage(file = gallery[Math.floor(Math.random() * gallery.length)])
        int.reply({ embeds: [embed] });
      } else {
        const embed = new EmbedBuilder()
          .setDescription(`**${autor}** usa su juguete por su anastacio :0`)
          .setColor("Red")
          .setImage(file = gallery[Math.floor(Math.random() * gallery.length)])
        int.reply({ embeds: [embed] });
      };
    }))
    .catch(console.error);
  }
};