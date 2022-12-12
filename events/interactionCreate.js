module.exports = {
  name: "interactionCreate",
  run: (client, int) => {
    if (int.isChatInputCommand()) {
      const command = client.slash_Commands.get(int.commandName);
      if (!command) return;
      command.run(client, int);
    }
  }
}