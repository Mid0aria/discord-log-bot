module.exports = async (client, role) => {
    const logchannel = await client.sendLogs(role.guild.id);
    if (!logchannel) return;

    const embed = new client.embed()
        .setTitle(`🧻・Role deleted`)
        .setDescription(`A role has been deleted`)
        .addFields(
            { name: "> Role", value: `- ${role}` },
            { name: "> Name", value: `- ${role.name}` },
            { name: "> ID", value: `- ${role.id}` },
            { name: "> Color", value: `${role.hexColor}` },
            { name: "> Position", value: `${role.position}` },
            {
                name: "> Timestamp",
                value: `- <t:${Math.floor(Date.now() / 1000)}:R>`,
            }
        )
        .setColor("#0099ff")
        .setTimestamp();

    logchannel.send({ embeds: [embed] }).catch(() => {});
};
