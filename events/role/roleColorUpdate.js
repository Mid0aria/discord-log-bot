module.exports = async (client, role, oldColor, newColor) => {
    const logchannel = await client.sendLogs(role.guild.id);
    if (!logchannel) return;

    const embed = new client.embed()
        .setTitle(`🧻・Role color updated`)
        .setDescription(`A role has been updated`)
        .addFields(
            { name: "> Role", value: `- ${role}` },
            { name: "> Before", value: `- #${oldColor.toString(16)}` },
            { name: "> After", value: `- #${newColor.toString(16)}` },
            { name: "> ID", value: `${role.id}` },
            {
                name: "> Timestamp",
                value: `- <t:${Math.floor(Date.now() / 1000)}:R>`,
            }
        )
        .setColor("#0099ff")
        .setTimestamp();

    logchannel.send({ embeds: [embed] }).catch(() => {});
};
