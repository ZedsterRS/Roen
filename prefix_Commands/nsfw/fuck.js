const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "fuck",
    description: "Folla un usuario",
    options: [],
   run: (client, message, prefix, args) => {
    const autor = message.author.username;
    const target_id = message.mentions.users.map(u => u.id);
    const target_u = message.mentions.users.map(u => u.username);
    client.channels.fetch("1027390609746563122")
    .then(channel => channel.messages.fetch({ limit: 50, cache: false })
    .then(msgs => {
      const links = (msgs.map(a => a.attachments.map(u => u.url)));
      const gallery = links.flat();
      if (message.content.includes(`<@${target_id}>`)) {
        const embed = new EmbedBuilder()
          .setDescription(`**${target_u}**, **${autor}** te está dando como cajón D:`)
          .setColor("Red")
          .setImage(file = gallery[Math.floor(Math.random() * gallery.length)])
        message.channel.send({ embeds: [embed] });
      } else message.reply("Menciona un usuario uwu");
    }))
    .catch(console.error);
  }
};