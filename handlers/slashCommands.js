const fs = require("fs");
require("colors");

module.exports = {
    name: "slashCommands",
    run: (client, slash_Commands) => {
        fs.readdirSync("./slash_Commands").forEach((dir) => {
            const commands = fs.readdirSync(`./slash_Commands/${dir}/`).filter((file) => file.endsWith(".js"));
            for (let file of commands) {
              let command = require(`./slash_Commands/${dir}/${file}`);
              client.slash_Commands.set(command.name, command);
              slash_Commands.push({
                name: command.name,
                description: command.description,
                type: command.type,
                options: command.options 
              });
            };
            console.log(`${slash_Commands.length} slash commands loaded successfully`.white);
        });
    }
};