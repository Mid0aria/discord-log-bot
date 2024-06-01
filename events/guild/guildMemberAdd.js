module.exports = async (client, member) => {
    const logchannel = await client.sendLogs(member.guild.id);
    if (!logchannel) return;

    const embed = new client.embed()
        .setTitle(`➡️ User Joined Server`)
        .setDescription(`**${member.user.tag}** joins us`)
        .setColor("#00FF00")
        .setTimestamp();

    logchannel.send({ embeds: [embed] }).catch(() => {});
};
