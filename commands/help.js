const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    if (!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
            .setAuthor(`🌀| Dismiss™ | Pomoć`, member.user.displayAvatarURL({ dynamic: true }))
            .addFields({ name: '**Info**', value: '```%info```', inline: true })
            .addFields({ name: '**Muzika**', value: '```%music```', inline: true })
            .addFields({ name: '**Ljubav**', value: '```%love```', inline: true })
            .addFields({ name: '**Zabava**', value: '```%fun```', inline: true })
            .addFields({ name: '**Leveling**', value: '```%leveling```', inline: true })
            .addFields({ name: '**Moderacija**', value: '```%moderation```', inline: true })
            .addFields({ name: '**Prefix:**', value: '```%```', inline: true })
            .setThumbnail('https://cdn.discordapp.com/attachments/756139786560864299/795607439236005888/logo.png')
            .setColor('#00FFF3')
            .setFooter('🌀| Dismiss™ by vjdin', 'https://cdn.discordapp.com/attachments/756139786560864299/795607439236005888/logo.png')

        message.channel.send(embed);
    }
}

module.exports.config = {
    name: "help",
    description: "",
    usage: "%help",
    accessableby: "Members",
    aliases: []
}