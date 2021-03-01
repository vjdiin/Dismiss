const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    if (!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
            .setAuthor(`🌀| Dismiss™ | Informacije bota`, member.user.displayAvatarURL({ dynamic: true }))
            .addFields({ name: '**Ime bota:**', value: '🌀| Dismiss™', inline: false })
            .addFields({ name: '**Developer bota:**', value: 'vjdin#4667', inline: false })
            .addFields({ name: '**Prefix:**', value: '%', inline: false })
            .addFields({ name: '**Help komanda:**', value: '%help', inline: false })
            .addFields({ name: '**Bot napravljen:**', value: '11.12.2020', inline: false })
            .addFields({ name: '**Support server:**', value: 'https://dsc.gg/dismiss/', inline: false })
            .setThumbnail('https://cdn.discordapp.com/attachments/756139786560864299/795607439236005888/logo.png')
            .setColor('#00FFF3')
            .setFooter('🌀| Dismiss™ by vjdin', 'https://cdn.discordapp.com/attachments/756139786560864299/795607439236005888/logo.png')

        message.channel.send(embed);
    }
}

module.exports.config = {
    name: "botinfo",
    description: "",
    usage: "%botinfo",
    accessableby: "Members",
    aliases: []
}