const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;

    let avatar = member.user.displayAvatarURL({ size: 4096, dynamic: true });

    const embed = new Discord.MessageEmbed()

    if (!message.mentions.users.first()) {
        embed.setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic: true, size: 1024 }))
        embed.setTitle("**Avatar:**")
        embed.setImage(avatar)
        embed.setColor("RANDOM")
        embed.setFooter('🌀| Dismiss™ by vjdin', 'https://cdn.discordapp.com/attachments/756139786560864299/795607439236005888/logo.png')
        return message.channel.send(embed)

    } else {

        const user = message.mentions.users.first()
        embed.setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic: true, size: 1024 }))
        embed.setTitle(`**Avatar:**`)
        embed.setImage(avatar)
        embed.setColor('RANDOM')
        embed.setFooter('🌀| Dismiss™ by vjdin', 'https://cdn.discordapp.com/attachments/756139786560864299/795607439236005888/logo.png')
        return message.channel.send(embed)
    }
}

module.exports.config = {
    name: "avatar",
    description: "",
    usage: "%avatar",
    accessableby: "Members",
    aliases: ['av']
}