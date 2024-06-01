module.exports = async (client, oldSticker, newSticker) => {
    const logchannel = await client.sendLogs(newSticker.guild.id);
    if (!logchannel) return;

    const embed = new client.embed()
        .setTitle(`😜・Sticker updated`)
        .setDescription(`A sticker has been updated`)
        .addFields(
            { name: `> Before`, value: `- ${oldSticker.name}` },
            { name: `> After`, value: `- ${newSticker.name}` },
            { name: `> ID`, value: `- ${newSticker.id}` }
        )
        .setColor("#FFFF00")
        .setTimestamp();

    logchannel.send({ embeds: [embed] }).catch(() => {});
};
