module.exports = async (client, oldEvent, newEvent) => {
    const logchannel = await client.sendLogs(newEvent.guildId);
    if (!logchannel) return;

    const embed = new client.embed()
        .setTitle(`🎡・Event updated`)
        .setDescription(`An event has been updated`)
        .addFields(
            { name: `> Old Name`, value: `- ${oldEvent.name}` },
            { name: `> New Name`, value: `- ${newEvent.name}` },
            {
                name: `> Old Description`,
                value: `- ${oldEvent.description || "None"}`,
            },
            {
                name: `> New Description`,
                value: `- ${newEvent.description || "None"}`,
            },
            {
                name: `> Old Time`,
                value: `- <t:${(
                    oldEvent.scheduledStartTimestamp / 1000
                ).toFixed(0)}>`,
            },
            {
                name: `> New Time`,
                value: `- <t:${(
                    newEvent.scheduledStartTimestamp / 1000
                ).toFixed(0)}>`,
            },
            {
                name: `> Creator`,
                value: `- <@!${newEvent.creatorId}> (${newEvent.creatorId})`,
            },
            {
                name: `> Timestamp`,
                value: `- <t:${Math.floor(Date.now() / 1000)}:R>`,
            }
        )
        .setColor("#FFFF00")
        .setTimestamp();

    logchannel.send({ embeds: [embed] }).catch(() => {});
};
