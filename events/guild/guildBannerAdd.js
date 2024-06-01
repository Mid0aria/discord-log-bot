module.exports = async (client, guild, bannerURL) => {
    const logchannel = await client.sendLogs(guild.id);
    if (!logchannel) return;

    const embed = new client.embed()
        .setTitle(`🖼️・New banner`)
        .setDescription(`The server banner has been updated`)
        .setImage(bannerURL)
        .setColor("#00FF00")
        .setTimestamp();

    logchannel.send({ embeds: [embed] }).catch(() => {});
};
