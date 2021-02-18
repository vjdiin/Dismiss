const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission('KICK_MEMBERS')) {
        var embed1 = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription('<:denied:788762769440374855> **Nemate premisije za upotrebu ove komande!**')
            .setColor('RED')
        message.channel.send(embed1).then((message) => {
            message.delete({ timeout: 5000 })
        });
    }

    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
    const target = message.mentions.users.first();
    if (target) {
        const memberTarget = message.guild.members.cache.get(target.id);
        memberTarget.kick();
        var embed2 = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription(`<:accepted:788762768940597259> ${member} **je uspješno kikovan/na!**`)
            .setColor('GREEN')
        message.channel.send(embed2).then((message) => {
            message.delete({ timeout: 5000 })
        });

    } else {

        var embed3 = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription('<:denied:788762769440374855> **Član nije u serveru!**')
            .setColor('RED')
        message.channel.send(embed3).then((message) => {
            message.delete({ timeout: 5000 })
        });
    }
}

module.exports.config = {
    name: "kick",
    description: "Kicks a user",
    usage: "%kick",
    accessableby: "Admins",
    aliases: []
}