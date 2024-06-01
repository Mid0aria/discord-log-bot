module.exports = async (client, member, invite, inviter) => {
    const logchannel = await client.sendLogs(member.guild.id);
    if (!logchannel) return;

    const embed = new client.embed()
        .setTitle(`🥸・Invited Member Joined`)
        .setDescription(
            `**${member} | ${member.user.tag}** was invited by ${inviter.tag}`
        )
        .setColor("#00FF00")
        .setTimestamp();

    logchannel.send({ embeds: [embed] }).catch(() => {});
};
