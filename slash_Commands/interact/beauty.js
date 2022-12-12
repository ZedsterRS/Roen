const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "beauty",
  description: "Mensaje para neir",
  options: [],
  run: (client, int, args) => {
    const embed = new EmbedBuilder()
      .setTitle("Neir es bellisima")
      .setDescription("❤️ úwù")
      .setColor("Blue")
      .setImage("https://media.tenor.com/U45Q8YaJzBUAAAAC/moti-hearts.gif")
    int.reply({ embeds: [embed] });
  }
};