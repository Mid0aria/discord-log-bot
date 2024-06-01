const Discord = require("discord.js");

module.exports = async (client) => {
    client.sendLogs = async function (guildId) {
        return new Promise((resolve, reject) => {
            if (client.db.type === "json") {
                let dbresult = client.db.get(`logger_${guildId}`);
                if (!dbresult) {
                    resolve(false);
                } else {
                    const channel = client.channels.cache.get(dbresult.channel);
                    resolve(channel);
                }
            } else if (client.db.type === "mysql") {
                client.db.query(
                    "SELECT * FROM guilds where guild = ?",
                    [guildId],
                    function (err, result, fields) {
                        if (err) {
                            console.error(err);
                            reject(err);
                        } else {
                            if (result[0] && result[0].channel !== null) {
                                const channel = client.channels.cache.get(
                                    result[0].channel
                                );
                                resolve(channel);
                            } else {
                                resolve(false);
                            }
                        }
                    }
                );
            } else if (client.db.type === "mongodb") {
                const Schema = require("../databases/mongodbmodels/logger.js");
                Schema.findOne({ Guild: guildId })
                    .then((data) => {
                        if (data && data.Channel) {
                            const channel = client.channels.cache.get(
                                data.Channel
                            );
                            resolve(channel);
                        } else {
                            resolve(false);
                        }
                    })
                    .catch((err) => {
                        console.error(err);
                        reject(err);
                    });
            }
        });
    };

    client.on(Discord.Events.GuildMemberUpdate, (oldMember, newMember) => {
        if (!oldMember.premiumSince && newMember.premiumSince) {
            client.emit("guildMemberBoost", newMember);
        }

        if (oldMember.premiumSince && !newMember.premiumSince) {
            client.emit("guildMemberUnboost", newMember);
        }
    });

    client.on(Discord.Events.GuildUpdate, (oldGuild, newGuild) => {
        if (oldGuild.premiumTier < newGuild.premiumTier) {
            client.emit(
                "guildBoostLevelUp",
                newGuild,
                oldGuild.premiumTier,
                newGuild.premiumTier
            );
        }

        if (oldGuild.premiumTier > newGuild.premiumTier) {
            client.emit(
                "guildBoostLevelDown",
                newGuild,
                oldGuild.premiumTier,
                newGuild.premiumTier
            );
        }

        if (!oldGuild.banner && newGuild.banner) {
            client.emit(
                "guildBannerAdd",
                newGuild,
                newGuild.bannerURL({ size: 1024 })
            );
        }

        if (!oldGuild.afkChannel && newGuild.afkChannel) {
            client.emit("guildAfkChannelAdd", newGuild, newGuild.afkChannel);
        }

        if (!oldGuild.vanityURLCode && newGuild.vanityURLCode) {
            client.emit("guildVanityURLAdd", newGuild, newGuild.vanityURLCode);
        }

        if (oldGuild.vanityURLCode && !newGuild.vanityURLCode) {
            client.emit(
                "guildVanityURLRemove",
                newGuild,
                oldGuild.vanityURLCode
            );
        }

        if (oldGuild.vanityURLCode !== newGuild.vanityURLCode) {
            client.emit(
                "guildVanityURLUpdate",
                newGuild,
                oldGuild.vanityURLCode,
                newGuild.vanityURLCode
            );
        }
    });

    client.on(Discord.Events.GuildRoleUpdate, (oldRole, newRole) => {
        if (oldRole.rawPosition !== newRole.rawPosition) {
            client.emit(
                "rolePositionUpdate",
                newRole,
                oldRole.rawPosition,
                newRole.rawPosition
            );
        }

        if (oldRole.permissions.bitfield !== newRole.permissions.bitfield) {
            client.emit(
                "rolePermissionsUpdate",
                newRole,
                oldRole.permissions.bitfield,
                newRole.permissions.bitfield
            );
        }

        if (oldRole.color !== newRole.color) {
            client.emit(
                "roleColorUpdate",
                newRole,
                oldRole.color,
                newRole.color
            );
        }

        if (oldRole.name !== newRole.name) {
            client.emit("roleNameUpdate", newRole, oldRole.name, newRole.name);
        }
    });

    client.on(Discord.Events.ChannelUpdate, (oldChannel, newChannel) => {
        if (
            oldChannel.type === Discord.ChannelType.GuildText &&
            oldChannel.topic !== newChannel.topic
        ) {
            client.emit(
                "channelTopicUpdate",
                newChannel,
                oldChannel.topic,
                newChannel.topic
            );
        }

        if (oldChannel.name !== newChannel.name) {
            client.emit(
                "channelNameUpdate",
                newChannel,
                oldChannel.name,
                newChannel.name
            );
        }
    });
};
