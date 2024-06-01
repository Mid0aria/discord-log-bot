const Discord = require("discord.js");

module.exports = async (client, guild, url) => {
    const logchannel = await client.sendLogs(guild.id);
    if (!logchannel) return;

    const embed = new client.embed()
        .setTitle(`🔗・New Vanity URL`)
        .setDescription(`The server vanity URL has been updated`)
        .addFields(
            { name: `> URL`, value: `- ${url}` },
            {
                name: `> Timestamp`,
                value: `- <t:${Math.floor(Date.now() / 1000)}:R>`,
            }
        )
        .setColor("00FF00");

    logchannel.send({ embeds: [embed] }).catch(() => {});
};
