module.exports = async (client, channel, oldTopic, newTopic) => {
    let types = {
        0: "Text Channel",
        2: "Voice Channel",
        4: "Category",
        5: "News Channel",
        10: "News Thread",
        11: "Public Thread",
        12: "Private Thread",
        13: "Stage Channel",
        14: "Category",
    };

    const logchannel = await client.sendLogs(channel.guild.id);
    if (!logchannel) return;

    const embed = new client.embed()
        .setTitle(`🔧・Channel topic adjusted`)
        .setDescription(`One channel topic modified`)
        .addFields(
            { name: `> Old Topic`, value: `- ${oldTopic}` },
            { name: `> New Topic`, value: `- ${newTopic}` },
            { name: `> Name`, value: `- ${channel.name}` },
            { name: `> ID`, value: `- ${channel.id}` },
            { name: `> Category`, value: `- ${channel.parent}` },
            { name: `> Channel`, value: `- <#${channel.id}>` },
            { name: `> Type`, value: `- ${types[channel.type]}` }
        );

    logchannel.send({ embeds: [embed] }).catch(() => {});
};
