const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "pat",
    description: "Acaricia un usuario",
    options: [],
   run: (client, message, prefix, args) => {
    if(!message.content.endsWith(">")) 
    return message.reply("Menciona un usuario");
    const autor = message.author.username;
    const target = message.mentions.users.map(u => u.username);
    client.channels.fetch("1028052916851970058")
    .then(channel => channel.messages.fetch({ limit: 50, cache: false })
    .then(msgs => {
      const att = (msgs.map(a => a.attachments.map(u => u.url)));
      const rnm = att[Math.floor(Math.random() * att.length)];
      const embed = new EmbedBuilder()
      .setDescription(`**${autor}** acarició a **${target}**`)
      .setColor("Blue")
      .setImage(file = rnm[Math.floor(Math.random() * rnm.length)])
    message.channel.send({ embeds: [embed] });
    }))
    .catch(console.error);
  }
};