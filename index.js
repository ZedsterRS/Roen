require("dotenv").config();
require("colors");
const { REST, Routes, Client, GatewayIntentBits, Collection } = require("discord.js");
const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN);
const fs = require("fs");
const client = new Client({ intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent
]});

client.prefix_Commands = new Collection();
client.slash_Commands = new Collection();
const slash_Commands = [];

fs.readdirSync("./prefix_Commands").forEach((dir) => {
  const commands = fs.readdirSync(`./prefix_Commands/${dir}/`).filter((file) => file.endsWith(".js"));
  for (let file of commands) {
    let command = require(`./prefix_Commands/${dir}/${file}`);
    client.prefix_Commands.set(command.name, command);
  };
  console.log(`${client.prefix_Commands.size} prefix commands loaded successfully`.white);
});

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

fs.readdirSync("./events").forEach((file) => {
  const event = require(`./events/${file}`);
  console.log(`evento -${event.name} cargado`.cyan);
  client.on(event.name, (...args) => event.run(client, ...args));
});

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");
    await rest.put(Routes.applicationCommands(process.env.BOT_CLIENT_ID, process.env.BOT_GUILD_ID), { body: slash_Commands });
    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();

client.login(process.env.BOT_TOKEN);