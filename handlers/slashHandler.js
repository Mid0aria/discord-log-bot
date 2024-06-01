module.exports = async (client) => {
    const slashCommands = client.fs
        .readdirSync(`./commands/`)
        .filter((d) => d.endsWith(".js"));
    for (let file of slashCommands) {
        const cmd = require(`../commands/${file}`);
        client.slashCommands.set(cmd.data.name, cmd);
        if (["MESSAGE", "USER"].includes(cmd.type)) delete cmd.description;
        client.arrayOfSlashCommands.push(cmd.data.toJSON());
    }

    console.log(
        client.chalk.blue(client.chalk.bold(`Bot`)),
        client.chalk.white(`>>`),
        client.chalk.red(`Commands`),
        client.chalk.green(`Succesfully loaded!`)
    );
};
