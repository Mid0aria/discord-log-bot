module.exports = async (client, role, oldName, newName) => {
    const logchannel = await client.sendLogs(role.guild.id);
    if (!logchannel) return;

    const embed = new client.embed()
        .setTitle(`🧻・Role name updated`)
        .setDescription(`A role has been updated`)
        .addFields(
            { name: "> Role", value: `- ${role}` },
            { name: "> Before", value: `- ${oldName}` },
            { name: "> After", value: `- ${newName}` },
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
