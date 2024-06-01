module.exports = async (client, ban) => {
    const logchannel = await client.sendLogs(ban.guild.id);
    if (!logchannel) return;

    const embed = new client.embed()
        .setTitle(`🔧・Member banned`)
        .setDescription(`A user has been banned`)
        .setThumbnail(ban.user.avatarURL({ size: 4096 }))
        .addFields(
            { name: "> User", value: `- ${ban.user}` },
            { name: "> Tag", value: `- ${ban.user.tag}` },
            { name: "> ID", value: `- ${ban.user.id}` },
            {
                name: "> Timestamp",
                value: `- <t:${Math.floor(ban.createdTimestamp / 1000)}:R>`,
            }
        )
        .setColor("#00FF00")
        .setTimestamp();

    logchannel.send({ embeds: [embed] }).catch(() => {});
};
