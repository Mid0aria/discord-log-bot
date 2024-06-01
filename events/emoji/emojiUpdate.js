module.exports = async (client, oldEmoji, newEmoji) => {
    const logchannel = await client.sendLogs(newEmoji.guild.id);
    if (!logchannel) return;

    const embed = new client.embed()
        .setTitle(`😛・Emoji updated`)
        .setDescription(`An emoji has been updated`)
        .addFields(
            { name: `> Emoji`, value: `- ${newEmoji}` },
            { name: `> Before`, value: `- ${oldEmoji.name}` },
            { name: `> After`, value: `- ${newEmoji.name}` },
            { name: `> ID`, value: `- ${newEmoji.id}` }
        );

    logchannel.send({ embeds: [embed] }).catch(() => {});
};
