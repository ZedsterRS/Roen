const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "hello",
    description: "Saluda un usuario",
    options: [{
      name: "usuario",
      description: "Elige el usuario",
      type: 6,
      required: true
    }],
   run: (client, int) => {
    const target = int.options._hoistedOptions.map(x => x.user.username);
    client.channels.fetch("1028019833834590318")
    .then(channel => channel.messages.fetch({ limit: 50, cache: false })
    .then(msgs => {
      const att = (msgs.map(a => a.attachments.map(u => u.url)));
      const rnm = att[Math.floor(Math.random() * att.length)];
      const embed = new EmbedBuilder()
        .setDescription(`Hola **${target}**`)
        .setColor("Blue")
        .setImage(file = rnm[Math.floor(Math.random() * rnm.length)])
      int.reply({ embeds: [embed] });
    }))
    .catch(console.error);
  }
};
