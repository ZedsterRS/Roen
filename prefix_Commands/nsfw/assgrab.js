const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "assgrab",
   run: (client, message) => {
    const autor = message.author.username;
    const target_id = message.mentions.users.map(u => u.id);
    const target_u = message.mentions.users.map(u => u.username);
    client.channels.fetch("1027679857183838269")
    .then(channel => channel.messages.fetch({ limit: 50, cache: false })
    .then(msgs => {
      const gallery = msgs.map(a => a.attachments.map(u => u.url)).flat();
      if (message.content.includes(`<@${target_id}>`)) {
        const embed = new EmbedBuilder()
          .setDescription(`**${autor}** está agarrando el culo de **${target_u}** owo`)
          .setColor("Red")
          .setImage(file = gallery[Math.floor(Math.random() * gallery.length)])
        message.channel.send({ embeds: [embed] });
      } else message.reply("Menciona un usuario uwu");
    }))
    .catch(console.error);
  }
};