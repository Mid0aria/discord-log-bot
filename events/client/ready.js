const { ActivityType } = require("discord.js");

module.exports = async (client) => {
    function activity() {
        client.user.setStatus("idle");
        var memberCount = client.guilds.cache
            .reduce((a, b) => a + b.memberCount, 0)
            .toLocaleString();

        client.user.setActivity(`${memberCount} <3`, {
            type: ActivityType.Watching,
        });
    }

    activity();
    setInterval(activity, 900000); // 15 minutes
    await client.application.commands.set(client.arrayOfSlashCommands);

    console.log(
        client.chalk.blue(client.chalk.bold(`Bot`)),
        client.chalk.white(`>>`),
        client.chalk.red(`${client.user.username}`),
        client.chalk.green(`is ready!`)
    );
};
