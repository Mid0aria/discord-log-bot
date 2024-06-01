const Discord = require("discord.js");

module.exports = async (client, oldMessage, newMessage) => {
    try {
        if (!oldMessage.content || !newMessage.content) return;
        if (oldMessage.content === newMessage.content) return;
        if (oldMessage.author.bot) return;

        const logchannel = await client.sendLogs(oldMessage.guild.id);
        if (!logchannel) return;

        let row = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
                .setEmoji("🔗")
                .setLabel("Jump to the Message")
                .setURL(
                    `https://discordapp.com/channels/${newMessage.guild.id}/${newMessage.channel.id}/${newMessage.id}`
                )
                .setStyle(Discord.ButtonStyle.Link)
        );

        const embed = new client.embed()
            .setTitle(`💬・Message updated`)
            .setDescription(`A message has been updated`)
            .addFields(
                {
                    name: `> Author`,
                    value: `- ${newMessage.member.user} (${newMessage.member.user.tag})`,
                },
                { name: `> Date`, value: `- ${newMessage.createdAt}` },
                {
                    name: `> Channel`,
                    value: `- ${newMessage.channel} (${newMessage.channel.name})`,
                },
                {
                    name: `> Old message`,
                    value: `\`\`\`${oldMessage.content.replace(
                        /`/g,
                        "'"
                    )}\`\`\``,
                },
                {
                    name: `> New message`,
                    value: `\`\`\`${newMessage.content.replace(
                        /`/g,
                        "'"
                    )}\`\`\``,
                },
                {
                    name: `> Timestamp`,
                    value: `- <t:${Math.floor(
                        newMessage.createdTimestamp / 1000
                    )}:R>`,
                }
            )
            .setColor("#0099ff")
            .setTimestamp();

        logchannel.send({ embeds: [embed], components: [row] }).catch(() => {});
    } catch {}
};
