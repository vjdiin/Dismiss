const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    if (!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
            .setAuthor(`🌀| Dismiss™ | Muzika`, member.user.displayAvatarURL({ dynamic: true }))
            .addFields({ name: '**%play**', value: '```Pustite muziku```', inline: false })
            .addFields({ name: '**%stop**', value: '```Zaustavite muziku```', inline: false })
            .addFields({ name: '**%skip**', value: '```Skipujete muziku```', inline: false })
            .addFields({ name: '**%queue**', value: '```Vidite red naručenih pjesama```', inline: false })
            .addFields({ name: '**%autoplay**', value: '```Uključite/isključite autoplay```', inline: false })
            .setColor('#00FFF3')
            .setFooter('🌀| Dismiss™ by vjdin', 'https://cdn.discordapp.com/attachments/756139786560864299/795607439236005888/logo.png')

        message.channel.send(embed);
    }
}

module.exports.config = {
    name: "music",
    description: "",
    usage: "%music",
    accessableby: "Members",
    aliases: []
}