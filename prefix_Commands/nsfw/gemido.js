const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "gemido",
   run: (client, message) => {
    const autor = message.author.username;
    const target_id = message.mentions.users.map(u => u.id);
    const target_u = message.mentions.users.map(u => u.username);
    client.channels.fetch("1027645844859658260")
    .then(channel => channel.messages.fetch({ limit: 100, cache: false })
    .then(msgs => {
      const gallery = msgs.map(a => a.attachments.map(u => u.url)).flat();
      if(message.content.includes(`<@${target_id}>`)) {
        const embed = new EmbedBuilder()
        .setDescription(`**${autor}** esta gimiendo por ${target_u} -//-`)
        .setColor("Red")
        .setImage(file = gallery[Math.floor(Math.random() * gallery.length)])
        message.channel.send({ embeds: [embed] });
      } else {
        const embed = new EmbedBuilder()
        .setDescription(`**${autor}** esta gimiendo -//-`)
        .setColor("Red")
        .setImage(file = gallery[Math.floor(Math.random() * gallery.length)])
        message.channel.send({ embeds: [embed] });
      };
    }))
    .catch(console.error);
  }
};