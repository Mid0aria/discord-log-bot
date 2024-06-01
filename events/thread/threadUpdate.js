module.exports = async (client, oldChannel, newChannel) => {
    let types = {
        10: "News Thread",
        11: "Public Thread",
        12: "Private Thread",
    };

    const logchannel = await client.sendLogs(newChannel.guild.id);
    if (!logchannel) return;

    const embed = new client.embed()
        .setTitle(`📖・Thread updated`)
        .setDescription(`A thread has been updated`)
        .addFields(
            { name: `> Old name`, value: `- ${oldChannel.name}` },
            { name: `> New name`, value: `- ${newChannel.name}` },
            { name: `> ID`, value: `- ${newChannel.id}` },
            { name: `> Category`, value: `${newChannel.parent}` },
            { name: `> Channel`, value: `<#${newChannel.id}>` },
            { name: `> Type`, value: `${types[newChannel.type]}` }
        );

    logchannel.send({ embeds: [embed] }).catch(console.error);
};
