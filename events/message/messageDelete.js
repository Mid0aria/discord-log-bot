module.exports = async (client, messageDeleted) => {
    try {
        if (!messageDeleted) return;
        if (messageDeleted.author.bot) return;

        var content = messageDeleted.content;
        if (!content) content = "No text to be found";

        if (messageDeleted.attachments.size > 0)
            content = messageDeleted.attachments.first()?.url;

        const logchannel = await client.sendLogs(messageDeleted.guild.id);
        if (!logchannel) return;

        const embed = new client.embed()
            .setTitle(`💬・Message deleted`)
            .setDescription(`A message has been deleted`)
            .addFields(
                {
                    name: `> Author`,
                    value: `- ${messageDeleted.author} (${messageDeleted.author.tag})`,
                },
                { name: `> Date`, value: `- ${messageDeleted.createdAt}` },
                {
                    name: `> Channel`,
                    value: `- ${messageDeleted.channel} (${messageDeleted.channel.name})`,
                },
                {
                    name: `> Message`,
                    value: `\`\`\`${content.replace(/`/g, "'")}\`\`\``,
                },
                {
                    name: `> Timestamp`,
                    value: `- <t:${Math.floor(
                        messageDeleted.createdTimestamp / 1000
                    )}:R>`,
                }
            )
            .setColor("#0099ff")
            .setTimestamp();

        logchannel.send({ embeds: [embed] }).catch(() => {});
    } catch {}
};
