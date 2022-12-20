const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "provocar",
   run: (client, message) => {
    const autor = message.author.username;
    const target_id = message.mentions.users.map(u => u.id);
    const target_u = message.mentions.users.map(u => u.username);
    client.channels.fetch("1033494261720682726")
    .then(channel => channel.messages.fetch({ limit: 100, cache: false })
    .then(msgs => {
      const gallery = msgs.map(a => a.attachments.map(u => u.url)).flat();
      if (message.content.includes(`<@${target_id}>`)) {
        const embed = new EmbedBuilder()
          .setDescription(`**${autor}** esta provocando a **${target_u}** owo`)
          .setColor("Red")
          .setImage(file = gallery[Math.floor(Math.random() * gallery.length)])
        message.channel.send({ embeds: [embed] });
      } else {
        const embed = new EmbedBuilder()
          .setDescription(`**${autor}** se puso provocativa owo`)
          .setColor("Red")
          .setImage(file = gallery[Math.floor(Math.random() * gallery.length)])
        message.channel.send({ embeds: [embed] });
      };
    }))
    .catch(console.error);
  }
};