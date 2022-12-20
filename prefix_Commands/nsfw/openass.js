const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "openass",
   run: (client, message) => {
    const autor = message.author.username;
    const target_id = message.mentions.users.map(u => u.id);
    const target_u = message.mentions.users.map(u => u.username);
    client.channels.fetch("1027646049034190909")
    .then(channel => channel.messages.fetch({ limit: 100, cache: false })
    .then(msgs => {
      const gallery = msgs.map(a => a.attachments.map(u => u.url));
      if (message.content.includes(`<@${target_id}>`)) {
        let embed = new EmbedBuilder()
          .setDescription(`**${autor}** abre sus nalgas para **${target_u}**`)
          .setColor("Red")
          .setImage(file = gallery[Math.floor(Math.random() * gallery.length)])
        message.channel.send({embeds: [embed] });
      } else {
        let embed = new EmbedBuilder()
          .setDescription(`**${autor}** abre sus nalgas`)
          .setColor("Red")
          .setImage(file = gallery[Math.floor(Math.random() * gallery.length)])
        message.channel.send({ embeds: [embed] });
      };
    }))
    .catch(console.error);
  }
};