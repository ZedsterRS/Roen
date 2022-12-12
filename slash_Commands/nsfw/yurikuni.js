const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "yurikuni",
    description: "Lame la pussy a un usuario",
    options: [],
   run: (client, message, prefix, args) => {
    const autor = message.author.username;
    const target_id = message.mentions.users.map(u => u.id);
    const target_u = message.mentions.users.map(u => u.username);
    client.channels.fetch("1029502746287669249")
    .then(channel => channel.messages.fetch({ limit: 50, cache: false })
    .then(msgs => {
      const links = (msgs.map(a => a.attachments.map(u => u.url)));
      const gallery = links.flat();
      if (message.content.includes(`<@${target_id}>`)) {
        const embed = new EmbedBuilder()
          .setDescription(`**${autor}** le lame la pussy a **${target_u}** owo`)
          .setColor("Red")
          .setImage(file = gallery[Math.floor(Math.random() * gallery.length)])
        message.channel.send({ embeds: [embed] });
      } else message.reply("Menciona un usuario uwu");
    }))
    .catch(console.error);
  }
};