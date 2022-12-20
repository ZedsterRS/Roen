module.exports = {
    name: "yes",
    description: "Enviar emote animado: (Si)",
    options: [{
        name: "usuario",
        description: "Elige el usuario",
        type: 6,
        required: false
      }],
    run: (client, int) => {
        const target = int.options._hoistedOptions.map(x => x.user.username);
        if(int.options.getUser("usuario")) {
            int.reply("<a:yes:1037443201025458236>");
        } else if(message.mentions.repliedUser === null) {
            int.delete();
            int.reply("<a:yes:1037443201025458236>");
        } else {
            int.reply("<a:yes:1037443201025458236>");
        };
    }
};