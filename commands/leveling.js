const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    if (!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
            .setAuthor(`🌀| Dismiss™ | Leveling`, member.user.displayAvatarURL())
            .addFields({ name: '**%level**', value: '```Vidite koji ste level```', inline: false })
            .addFields({ name: '**%leaderboard**', value: '```Prikaže ljestvicu najaktivnijih```', inline: false })
            .setColor('#00FFF3')
            .setFooter('🌀| Dismiss™ by vjdin', 'https://cdn.discordapp.com/attachments/756139786560864299/795607439236005888/logo.png')

        message.channel.send(embed);
    }
}

module.exports.config = {
    name: "leveling",
    description: "",
    usage: "%leveling",
    accessableby: "Members",
    aliases: []
}