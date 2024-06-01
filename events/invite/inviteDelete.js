module.exports = async (client, invite) => {
    const logchannel = await client.sendLogs(invite.guild.id);
    if (!logchannel) return;

    const embed = new client.embed()
        .setTitle(`📨・Invite deleted`)
        .setDescription(`A invite has been deleted`)
        .addFields(
            { name: `> Code`, value: `- ${invite.code}` },
            {
                name: `> Timestamp`,
                value: `- <t:${Math.floor(invite.createdTimestamp / 1000)}:R>`,
            }
        )
        .setColor("#0099ff")
        .setTimestamp();

    logchannel.send({ embeds: [embed] }).catch(() => {});
};
