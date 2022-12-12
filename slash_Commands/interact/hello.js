const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "hello",
    description: "Saluda un usuario",
    options: [],
   run: (client, message, prefix, args) => {
    if(!message.content.endsWith(">")) 
    return message.reply("Menciona un usuario");
    const target = message.mentions.users.map(u => u.username);
    client.channels.fetch("1028019833834590318")
    .then(channel => channel.messages.fetch({ limit: 50, cache: false })
    .then(msgs => {
      const att = (msgs.map(a => a.attachments.map(u => u.url)));
      const rnm = att[Math.floor(Math.random() * att.length)];
      const embed = new EmbedBuilder()
      .setDescription(`Hola **${target}**`)
      .setColor("Blue")
      .setImage(file = rnm[Math.floor(Math.random() * rnm.length)])
    message.channel.send({ embeds: [embed] });
    }))
    .catch(console.error);
  }
};
