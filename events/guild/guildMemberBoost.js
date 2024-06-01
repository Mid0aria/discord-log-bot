module.exports = async (client, member) => {
    const logchannel = await client.sendLogs(channel.guild.id);
    if (!logchannel) return;

    const embed = new client.embed()
        .setTitle(`🚀・New boost`)
        .setDescription(`${member} boosted the server!`)
        .setColor("#00FF00");

    logchannel.send({ embeds: [embed] });
};
