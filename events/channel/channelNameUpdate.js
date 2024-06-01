module.exports = async (client, channel, oldName, newName) => {
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
        .setTitle(`🔧・Channel name adjusted`)
        .setDescription(`One channel name modified`)
        .addFields(
            { name: `> Old Name`, value: `- ${oldName}` },
            { name: `> New Name`, value: `- ${newName}` },
            { name: `> ID`, value: `- ${channel.id}` },
            { name: `> Category`, value: `- ${channel.parent}` },
            { name: `> Channel`, value: `- <#${channel.id}>` },
            { name: `> Type`, value: `- ${types[channel.type]}` }
        );

    logchannel.send({ embeds: [embed] }).catch(() => {});
};
