const { EmbedBuilder, Collection } = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "help-nsfw",
  description: "Lista de comandos NSFW",
  options: [],
  run: (client, int) => {
    const nsfw = new Collection();
    fs.readdirSync("./commands/nsfw").forEach((file) => {
      let command_nsfw = require(`../nsfw/${file}`);
      nsfw.set(command_nsfw.name, command_nsfw);
    });
    const nsfw_name = nsfw.map(n => n.name);
    const embed = new EmbedBuilder()
      .setTitle("Lista de comandos NSFW")
      .setDescription(`Comandos disponibles para usar:`)
      .addFields(
        {name: "\u200B", 
        value: `**- ${nsfw_name.join('\n- ')}**`, 
        inline: true
        },
      )
      .setColor("Green")
      .setTimestamp()
    int.reply({ embeds: [embed] });
  }
};