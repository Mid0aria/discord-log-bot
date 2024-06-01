module.exports = async (client, member) => {
    const logchannel = await client.sendLogs(channel.guild.id);
    if (!logchannel) return;

    const embed = new client.embed()
        .setTitle(`🚀・New Unboost`)
        .setDescription(`${member} Unboosted the server!`);

    logchannel.send({ embeds: [embed] });
};
