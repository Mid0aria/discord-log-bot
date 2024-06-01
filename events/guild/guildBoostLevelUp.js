module.exports = async (client, guild, oldLevel, newLevel) => {
    const logchannel = await client.sendLogs(guild.id);
    if (!logchannel) return;

    const embed = new client.embed()
        .setTitle(`🆙・New boost level`)
        .setDescription(`This server has returned to a new boost level`)
        .addFields(
            { name: `> Old level`, value: `- ${oldLevel}` },
            { name: `> New level`, value: `- ${newLevel}` },
            {
                name: `> Timestamp`,
                value: `- <t:${Math.floor(Date.now() / 1000)}:R>`,
            }
        )
        .setColor("#00FF00")
        .setTimestamp();

    logchannel.send({ embeds: [embed] }).catch(() => {});
};
