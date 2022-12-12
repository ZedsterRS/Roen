module.exports = {
    name: "messageCreate",
    run: (client, messageCreate) => {
        const prefix = process.env.PREFIX;
        if(!messageCreate.content.startsWith(prefix)) return;
        const args = messageCreate.content.slice(prefix.length).trim().split(/ +/g);
        const argCommand = args.shift().toLowerCase();
        let cmd = client.prefix_Commands.find((c) => c.name === argCommand);
        if(cmd) {cmd.run(client, messageCreate, args, prefix)}
    }
}