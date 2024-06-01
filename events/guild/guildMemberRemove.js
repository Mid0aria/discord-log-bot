module.exports = async (client, member) => {
    const logchannel = await client.sendLogs(member.guild.id);
    if (!logchannel) return;

    const embed = new client.embed()
        .setTitle(`⬅️ User Left Server`)
        .setDescription(`**${member.user.tag}** has left us`)
        .setColor("#ff0000")
        .setTimestamp();

    logchannel.send({ embeds: [embed] }).catch(() => {});
};
