module.exports = async (client, guild, afkChannel) => {
    const logchannel = await client.sendLogs(guild.id);
    if (!logchannel) return;

    const embed = new client.embed()
        .setTitle(`🛑・New AFK channel`)
        .setDescription(`An AFK channel has been added to the server`)
        .addFields(
            { name: "> Channel", value: `- ${afkChannel}` },
            { name: "> Name", value: `- ${afkChannel.name}` },
            { name: "> ID", value: `- ${afkChannel.id}` },
            {
                name: "> Timestamp",
                value: `- <t:${Math.floor(
                    afkChannel.createdTimestamp / 1000
                )}:R>`,
            }
        )
        .setColor("#00FF00")
        .setTimestamp();

    logchannel.send({ embeds: [embed] }).catch(() => {});
};
