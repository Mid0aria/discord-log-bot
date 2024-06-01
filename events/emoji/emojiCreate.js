module.exports = async (client, emoji) => {
    const logchannel = await client.sendLogs(emoji.guild.id);
    if (!logchannel) return;

    const embed = new client.embed()
        .setTitle(`😛・Emoji created`)
        .setDescription(`An emoji has been created`)
        .addFields(
            { name: `> Emoji`, value: `- ${emoji}` },
            { name: `> Name`, value: `- ${emoji.name}` },
            { name: `> ID`, value: `- ${emoji.id}` },
            { name: `> URL`, value: `- ${emoji.url}` }
        );

    logchannel.send({ embeds: [embed] }).catch(() => {});
};
