const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    if (!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
            .setAuthor(`🌀| Dismiss™ | Informacije servera`, member.user.displayAvatarURL({ dynamic: true }))
            .addFields({ name: '**Vlasnik**', value: 'vjdin#4667', inline: true })
            .addFields({ name: '**Regija**', value: 'Europa', inline: true })
            .addFields({ name: '**Server ID**', value: '754336174084194305', inline: true })
            .addFields({ name: '**Kategorije kanala**', value: '10', inline: true })
            .addFields({ name: '**Tekstualni kanali**', value: '21', inline: true })
            .addFields({ name: '**Glasovni kanali**', value: '10', inline: true })
            .addFields({ name: '**Emojis**', value: '50', inline: true })
            .addFields({ name: '**Rolovi**', value: '62', inline: true })
            .addFields({ name: '**Server napravljen**', value: 'Sub, 12. Sep 2020, 15:42:38', inline: true }) 
            .setThumbnail('https://cdn.discordapp.com/attachments/756139786560864299/795607439236005888/logo.png')
            .setColor('#00FFF3')
            .setFooter('🌀| Dismiss™ by vjdin', 'https://cdn.discordapp.com/attachments/756139786560864299/795607439236005888/logo.png')

        message.channel.send(embed);
    }
}

module.exports.config = {
    name: "serverinfo",
    description: "",
    usage: "%serverinfo",
    accessableby: "Members",
    aliases: []
}