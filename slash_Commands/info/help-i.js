const { EmbedBuilder, Collection } = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "help-i",
  description: "Lista de comandos Interactivos",
  options: [],
  run: (client, int) => {
    const interacts = new Collection();
    fs.readdirSync("./commands/interact").forEach((file) => {
      let interact = require(`../interact/${file}`);
      interacts.set(interact.name, interact);
    });
    const interact_name = interacts.map(i => i.name);
    const embed = new EmbedBuilder()
      .setTitle("Lista de comandos Interactivos:")
      .setDescription(`**- ${interact_name.join('\n- ')}**`)
      .setColor("Green")
      .setTimestamp()
    int.reply({ embeds: [embed] });
  }
};