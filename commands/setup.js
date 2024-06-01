const {
    SlashCommandBuilder,
    EmbedBuilder,
    PermissionFlagsBits,
    ChannelType,
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("setup")
        .setDescription("Setup log Channel")
        .addChannelOption((option) =>
            option
                .setName("channel")
                .setDescription("Choose Log Channel.")
                .setRequired(true)
                .addChannelTypes(ChannelType.GuildText)
        ),

    async execute(client, interaction) {
        if (
            !interaction.member.permissions.has(
                PermissionFlagsBits.Administrator
            )
        ) {
            return interaction.reply(
                "You must have **Administrator** permission to use this command."
            );
        }

        const channel = interaction.options.getChannel("channel");
        const embed = new EmbedBuilder()
            .setColor("Random")
            .setTitle("Successfully!").setDescription(`
              > **Log Channel:** ${channel}
              `);

        let guildID = interaction.guild.id;
        if (client.db.type === "json") {
            try {
                await client.db.set(`logger_${guildID}.channel`, channel.id);
                await interaction.reply({
                    embeds: [embed],
                    ephemeral: true,
                });
            } catch (error) {
                await interaction.reply({ content: "error", ephemeral: true });
            }
        } else if (client.db.type === "mysql") {
            client.db.query(
                "SELECT * FROM guilds where guild = ?",
                [guildID],
                function (err, result, fields) {
                    if (err) throw err;
                    if (result.length > 0) {
                        client.db.query(
                            "UPDATE guilds SET channel = ? WHERE guild = ?",
                            [channel.id, guildID],
                            async function (err, result) {
                                if (err) throw err;

                                await interaction.reply({
                                    embeds: [embed],
                                    ephemeral: true,
                                });
                            }
                        );
                    } else {
                        client.db.query(
                            "INSERT INTO guilds (guild, channel) VALUES (?, ?)",
                            [guildID, channel.id],
                            async function (err, result) {
                                if (err) throw err;
                                await interaction.reply({
                                    embeds: [embed],
                                    ephemeral: true,
                                });
                            }
                        );
                    }
                }
            );
        } else if (client.db.type === "mongodb") {
            const Schema = require("../databases/mongodbmodels/logger.js");

            Schema.findOne({ Guild: guildID })
                .then(async (data) => {
                    if (data && data.Channel) {
                        await Schema.updateOne(
                            { Guild: guildID },
                            { Channel: channel.id }
                        );
                    } else {
                        await Schema.create({
                            Guild: guildID,
                            Channel: channel.id,
                        });
                    }
                    await interaction.reply({
                        embeds: [embed],
                        ephemeral: true,
                    });
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    },
};
