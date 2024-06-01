module.exports = async (client, invite) => {
    const logchannel = await client.sendLogs(invite.guild.id);
    if (!logchannel) return;

    const embed = new client.embed()
        .setTitle(`📨・Invite created`)
        .setDescription(`A invite has been created`)
        .addFields(
            { name: `> Code`, value: `- ${invite.code}` },
            {
                name: `> Inviter`,
                value: `- ${invite.inviter} (${invite.inviter.tag})`,
            },
            {
                name: `> Timestamp`,
                value: `- <t:${Math.floor(invite.createdTimestamp / 1000)}:R>`,
            }
        )
        .setColor("#00FF00")
        .setTimestamp();

    logchannel.send({ embeds: [embed] }).catch(() => {});
};
