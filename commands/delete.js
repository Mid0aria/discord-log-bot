const {
    SlashCommandBuilder,
    EmbedBuilder,
    PermissionFlagsBits,
    ChannelType,
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("delete")
        .setDescription("Delete log setup"),

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

        const embed = new EmbedBuilder()
            .setColor("Random")
            .setTitle("Successfully DELETED!");

        let guildID = interaction.guild.id;
        if (client.db.type === "json") {
            let dbresult = client.db.get(`logger_${guildID}`);
            if (!dbresult) {
                await interaction.reply({
                    content: "this server is already not registered",
                    ephemeral: true,
                });
            } else {
                try {
                    await client.db.delete(`logger_${guildID}.channel`);
                    await interaction.reply({
                        embeds: [embed],
                        ephemeral: true,
                    });
                } catch (error) {
                    await interaction.reply({
                        content: "error",
                        ephemeral: true,
                    });
                }
            }
        } else if (client.db.type === "mysql") {
            client.db.query(
                "SELECT * FROM guilds where guild = ?",
                [guildID],
                async function (err, result, fields) {
                    if (err) throw err;
                    if (result.length > 0) {
                        client.db.query(
                            "DELETE FROM guilds WHERE guild = ?",
                            [guildID],
                            async function (err, result) {
                                if (err) throw err;

                                await interaction.reply({
                                    embeds: [embed],
                                    ephemeral: true,
                                });
                            }
                        );
                    } else {
                        await interaction.reply({
                            content: "this server is already not registered",
                            ephemeral: true,
                        });
                    }
                }
            );
        } else if (client.db.type === "mongodb") {
            // MongoDB
            const Schema = require("../databases/mongodbmodels/logger.js");

            Schema.findOneAndDelete({ Guild: guildID })
                .then(async (data) => {
                    if (data) {
                        await interaction.reply({
                            embeds: [embed],
                            ephemeral: true,
                        });
                    } else {
                        await interaction.reply({
                            content: "This server is already not registered.",
                            ephemeral: true,
                        });
                    }
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    },
};
