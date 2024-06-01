module.exports = async (client, sticker) => {
    const logchannel = await client.sendLogs(sticker.guild.id);
    if (!logchannel) return;

    const embed = new client.embed()
        .setTitle(`😜・Sticker deleted`)
        .setDescription(`A sticker has been deleted`)
        .addFields(
            { name: `> Name`, value: `- ${sticker.name}` },
            { name: `> ID`, value: `- ${sticker.id}` }
        )
        .setColor("#0099ff")
        .setTimestamp();

    logchannel.send({ embeds: [embed] }).catch(() => {});
};
