const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "69",
    description: "69 con un usuario",
    options: [],
   run: async (client, message, prefix, args) => {
    const autor = message.author.username;
    const target_id = message.mentions.users.map(u => u.id);
    const target_u = message.mentions.users.map(u => u.username);
    client.channels.fetch("1033136546917912616")
    .then(channel => channel.messages.fetch({ limit: 100, cache: false })
    .then(msgs => {
      const links = (msgs.map(a => a.attachments.map(u => u.url)));
      const gallery = links.flat();
      if (message.content.includes(`<@${target_id}>`)) {
        const embed = new EmbedBuilder()
          .setDescription(`**${target_u}** y **${autor}** hacen un 69 uwu`)
          .setColor("Red")
          .setImage(file = gallery[Math.floor(Math.random() * gallery.length)]);
        message.channel.send({ embeds: [embed] });
      } else message.reply("Menciona un usuario uwu");
    }))
    .catch(console.error);
  }
};