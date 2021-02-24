const Discord = require("discord.js");
const Levels = require("discord-xp");
const canvacord = require("canvacord");

module.exports.run = async (bot, message, args) => {
    if (message.author.bot) return;
    if (message.mentions.has(bot.user)) {
        var embed1 = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription('<:denied:788762769440374855> **Bot nema levela!**')
            .setColor('RED')
        message.channel.send(embed1).then((message) => {
            message.delete({ timeout: 5000 })
        });
    }

    const target = message.mentions.users.first() || message.author;
    const img = target.displayAvatarURL({ dynamic: false, format: 'png' });
    const user = await Levels.fetch(target.id, message.guild.id);

    if (!user) {
        var embed2 = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription('<:denied:788762769440374855> **Pokušajte slati malo poruka!**')
            .setColor("RED")
        message.channel.send(embed2).then((message) => {
            message.delete({ timeout: 5000 })
        });
    }

    const neededXp = Levels.xpFor(parseInt(user.level) + 1);
    const rankBackground = ('https://cdn.discordapp.com/attachments/756139786560864299/804055737595985930/dismiss-rank.png')


    const rank = new canvacord.Rank()
        .setAvatar(img)
        .setCurrentXP(user.xp)
        .setRequiredXP(neededXp)
        .setStatus(target.presence.status, false)
        .setProgressBar('#00FFF3', "COLOR")
        .setProgressBarTrack("#23272a")
        .setUsername(target.username)
        .setLevel(user.level)
        .setDiscriminator(target.discriminator)
        .setRank(0, "\u200b", false)
        .setBackground("IMAGE", rankBackground)
        .setOverlay("#050505", '0.86', true)
        .renderEmojis(true)


    rank.build()
        .then(data => {
            const attachment = new Discord.MessageAttachment(data, "card.png");
            message.channel.send(attachment);
        });
};

module.exports.config = {
    name: "level",
    aliases: ['rank']
}