const fs = require("fs");

module.exports = {
    name: "prefixCommands",
    run: (client, args) => {
        fs.readdirSync("./prefix_Commands").forEach((dir) => {
            const commands = fs.readdirSync(`./prefix_Commands/${dir}/`).filter((file) => file.endsWith(".js"));
            for (let file of commands) {
              let command = require(`./prefix_Commands/${dir}/${file}`);
              client.prefix_Commands.set(command.name, command);
            };
            console.log(`${client.prefix_Commands.size} prefix commands loaded successfully`.white);
        });
    }
};