module.exports = async (client, event) => {
    let types = {
        GUILD_ONLY: "Server only",
        PUBLIC: "Public",
    };

    let locations = {
        NONE: "None",
        STAGE_INSTANCE: "Stage Channel",
        VOICE: "Voice Channel",
        EXTERNAL: `External`,
    };

    const logchannel = await client.sendLogs(event.guildId);
    if (!logchannel) return;
    const embed = new client.embed()
        .setTitle(`🎡・Event created`)
        .setDescription(`An event has been created`)
        .addFields(
            { name: `> Name`, value: `- ${event.name}` },
            {
                name: `> Description`,
                value: `- ${event.description || "None"}`,
            },
            {
                name: `> Start`,
                value: `- <t:${(event.scheduledStartTimestamp / 1000).toFixed(
                    0
                )}>`,
            },
            { name: `> Privacy`, value: `- ${types[event.privacyLevel]}` },
            {
                name: `> Creator`,
                value: `- <@!${event.creatorId}> (${event.creatorId})`,
            },
            {
                name: `> Location type`,
                value: `- ${locations[event.entityType]}`,
            },
            {
                name: `> Timestamp`,
                value: `- <t:${Math.floor(Date.now() / 1000)}:R>`,
            }
        )
        .setColor("#00FF00")
        .setTimestamp();

    logchannel.send({ embeds: [embed] }).catch(() => {});
};
