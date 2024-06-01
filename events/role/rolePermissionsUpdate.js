const Discord = require("discord.js");

module.exports = async (client, role, oldPerms, newPerms) => {
    const logchannel = await client.sendLogs(role.guild.id);
    if (!logchannel) return;

    const embed = new client.embed()
        .setTitle(`🧻・Role permissions updated`)
        .setDescription(`A role has been updated`)
        .addFields(
            { name: "> Role", value: `- ${role}` },
            {
                name: "> Before",
                value: `- ${
                    new Discord.PermissionsBitField(oldPerms)
                        .toArray()
                        .join(", ") || "None"
                }`,
            },
            {
                name: "> After",
                value: `- ${
                    new Discord.PermissionsBitField(newPerms)
                        .toArray()
                        .join(", ") || "None"
                }`,
            },
            { name: "> ID", value: `${role.id}` },
            {
                name: "> Timestamp",
                value: `<t:${Math.floor(Date.now() / 1000)}:R>`,
            }
        );

    logchannel.send({ embeds: [embed] }).catch(() => {});
};
