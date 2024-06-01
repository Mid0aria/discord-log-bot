// auto install dependencies
const cp = require("child_process");
const packageJson = require("./package.json");
for (let dep of Object.keys(packageJson.dependencies)) {
    try {
        require.resolve(dep);
    } catch (err) {
        console.log("Installing dependencies...");
        cp.execSync(`npm i`);
    }
}

//bot client
const {
    Client,
    Partials,
    GatewayIntentBits,
    Collection,
    EmbedBuilder,
} = require("discord.js");

const chalk = require("chalk");
const fs = require("fs");
const config = require("./config.json");

const client = new Client({
    partials: [
        Partials.Channel,
        Partials.GuildMember,
        Partials.Message,
        Partials.Reaction,
        Partials.User,
        Partials.GuildScheduledEvent,
    ],
    autoReconnect: true,
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.GuildScheduledEvents,
        GatewayIntentBits.MessageContent,
    ],
    allowedMentions: {
        parse: ["roles", "users"],
        repliedUser: true,
    },
});
client.fs = fs;
client.chalk = chalk;
client.config = config;
client.embed = EmbedBuilder;
client.arrayOfSlashCommands = [];

["aliases", "slashCommands"].forEach((x) => (client[x] = new Collection()));

fs.readdirSync("./handlers").forEach((file) => {
    require(`./handlers/${file}`)(client);
});

if (config.db.type.trim().toLowerCase() === "json") {
    const db = require("croxydb");
    client.db = db;
    client.db.type = "json";
    console.log(
        chalk.blue(chalk.bold(`Database`)),
        chalk.white(`>>`),
        chalk.red(`JSON`),
        chalk.green(`is ready!`)
    );
} else if (config.db.type.trim().toLowerCase() === "mysql") {
    const { db } = require("./databases/mysql");
    client.db = db;
    client.db.type = "mysql";
    console.log(
        chalk.blue(chalk.bold(`Database`)),
        chalk.white(`>>`),
        chalk.red(`MySQL`),
        chalk.green(`is connecting...`)
    );

    db.getConnection((err, connection) => {
        if (err) {
            console.log(
                chalk.red(`[ERROR]`),
                chalk.white(`>>`),
                chalk.red(`MySQL`),
                chalk.white(`>>`),
                chalk.red(`Failed to connect to MySQL!`),
                chalk.white(`>>`),
                chalk.red(`Error: ${err}`)
            );
            console.log(chalk.red("Exiting..."));
            process.exit(1);
        }
        console.log(
            chalk.blue(chalk.bold(`Database`)),
            chalk.white(`>>`),
            chalk.red(`MySQL`),
            chalk.green(`is ready!`)
        );
        connection.release();
    });

    db.on("error", (err) => {
        console.log(
            chalk.red(`[ERROR]`),
            chalk.white(`>>`),
            chalk.red(`Database`),
            chalk.white(`>>`),
            chalk.red(`Failed to connect to MySQL!`),
            chalk.white(`>>`),
            chalk.red(`Error: ${err}`)
        );
        console.log(chalk.red("Exiting..."));
        process.exit(1);
    });
} else if (config.db.type.trim().toLowerCase() === "mongodb") {
    (async () => await require("./databases/mongodb")())();
    client.db = {};
    client.db.type = "mongodb";
} else {
    const db = require("croxydb");
    client.db = db;
    client.db.type = "json";

    console.log(
        chalk.blue(`Database`),
        chalk.white(`>>`),
        chalk.red(
            `JSON database is automatically selected because no database type is selected!`
        )
    );
    console.log(
        chalk.blue(chalk.bold(`Database`)),
        chalk.white(`>>`),
        chalk.red(`JSON`),
        chalk.green(`is ready!`)
    );
}
client.login(config.bot.token);
