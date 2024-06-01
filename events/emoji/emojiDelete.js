module.exports = async (client, emoji) => {
    const logchannel = await client.sendLogs(emoji.guild.id);
    if (!logchannel) return;

    const embed = new client.embed()
        .setTitle(`😛・Emoji deleted`)
        .setDescription(`An emoji has been deleted`)
        .addFields(
            { name: `> Name`, value: `- ${emoji.name}` },
            { name: `> ID`, value: `- ${emoji.id}` }
        );

    logchannel.send({ embeds: [embed] }).catch(() => {});
};
