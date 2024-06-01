module.exports = async (client, oldMember, newMember) => {
    if (!oldMember || !newMember) return;
    const removedRoles = oldMember.roles.cache.filter(
        (role) => !newMember.roles.cache.has(role.id)
    );
    const addedRoles = newMember.roles.cache.filter(
        (role) => !oldMember.roles.cache.has(role.id)
    );
    if (
        (removedRoles.size === 0 && addedRoles.size === 0) ||
        removedRoles.size === addedRoles.size
    )
        return;
    const logchannel = await client.sendLogs(newMember.guild.id);

    if (!logchannel) return;

    var ostring = "";
    if (removedRoles.size === 0) ostring = "No roles removed";
    if (removedRoles.size > 0)
        removedRoles.forEach((element) => {
            ostring += "<@&" + element + "> ";
        });

    var nstring = "";
    if (addedRoles.size > 0)
        addedRoles.forEach((element) => {
            nstring += "<@&" + element + "> ";
        });

    const embed = new client.embed()
        .setTitle(`${newMember.user.username} Roles Adjusted`)
        .setDescription(`There are role changes`)
        .addFields(
            { name: "> Old Roles", value: `- ${ostring}` },
            { name: "> New Roles", value: `- ${nstring}` }
        )
        .setColor("#ff0000")
        .setTimestamp();

    logchannel.send({ embeds: [embed] }).catch((err) => {
        console.log(err);
    });
};
