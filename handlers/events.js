const fs = require("fs");
require("colors");

module.exports = {
    name: "prefixCommands",
    run: (client) => {
        fs.readdirSync("./events").forEach((file) => {
            const event = require(`./events/${file}`);
            console.log(`evento -${event.name} cargado`.cyan);
            client.on(event.name, (...args) => event.run(client, ...args));
        });
    }
};