module.exports = async (client, sticker) => {
    const logchannel = await client.sendLogs(sticker.guild.id);
    if (!logchannel) return;

    const embed = new client.embed()
        .setTitle(`😜・Sticker created`)
        .setDescription(`A sticker has been created`)
        .addFields(
            { name: `> Name`, value: `- ${sticker.name}` },
            { name: `> ID`, value: `- ${sticker.id}` },
            { name: `> Url`, value: `${sticker.url}` }
        )
        .setColor("#00FF00")
        .setTimestamp();

    logchannel.send({ embeds: [embed] }).catch(() => {});
};
