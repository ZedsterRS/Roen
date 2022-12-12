const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "help",
  description: "Lista de comandos",
  options: [],
  run: (client, message, prefix, args) => {
    const embed = new EmbedBuilder()
      .setTitle("Para ver:")
      .addFields(
        { name: "- Lista de Comandos Interactivos", value: `Usar *help-i `, inline: true },
		    { name: "- Lista de Comandos NSFW", value: "Usar *help-nsfw", inline: false },
      )
      .setColor("Green")
      .setTimestamp()
    message.channel.send({ embeds: [embed] });
  }
};