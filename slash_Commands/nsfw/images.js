const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "images",
    description: "Imagenes H",
    options: [{
        name: "usuario",
        description: "Elige el usuario",
        type: 6,
        required: false
    }],
   run: (client, int) => {
    const autor = int.user.username;
    const target = int.options._hoistedOptions.map(x => x.user.username);
    client.channels.fetch("1034327175949733928")
    .then(channel => channel.messages.fetch({ limit: 100, cache: false })
    .then(msgs => {
        const links = (msgs.map(a => a.attachments.map(u => u.url)));
        const gallery = links.flat();
        if (int.options.getUser("usuario")) {
            const embed = new EmbedBuilder()
                .setDescription(`**${target}** Disfrute el h que le manda **${autor}** uwu`)
                .setColor("Red")
                .setImage(file = gallery[Math.floor(Math.random() * gallery.length)])
            int.reply({ embeds: [embed] });
        } else {
            const embed = new EmbedBuilder()
                .setDescription(`Disfrute el h uwu`)
                .setColor("Red")
                .setImage(file = gallery[Math.floor(Math.random() * gallery.length)])
            int.reply({ embeds: [embed] });
        };
    }))
    .catch(console.error);
  }
};