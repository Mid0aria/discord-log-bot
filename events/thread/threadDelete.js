module.exports = async (client, channel) => {
    let types = {
        10: "News Thread",
        11: "Public Thread",
        12: "Private Thread",
    };

    const logchannel = await client.sendLogs(channel.guild.id);
    if (!logchannel) return;

    const embed = new client.embed()
        .setTitle(`📖・Thread deleted`)
        .setDescription(`A thread has been deleted`)
        .addFields(
            { name: `> Name`, value: `- ${channel.name}` },
            { name: `> ID`, value: `- ${channel.id}` },
            { name: `> Category`, value: `${channel.parent}` },
            { name: `> Type`, value: `${types[channel.type]}` }
        );

    logchannel.send({ embeds: [embed] }).catch(console.error);
};
