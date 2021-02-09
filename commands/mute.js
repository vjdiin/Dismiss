const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;

    if (!message.member.hasPermission(['VIEW_AUDIT_LOG']))
        var embed1 = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription('**Nemate premisije za upotrebu ove komande!**')
            .setColor('RED')
    message.channel.send(embed1).then((message) => {
        message.delete({ timeout: 5000 })
    });

    if (member.hasPermission(['VIEW_AUDIT_LOG']) && !message.member.hasPermission('VIEW_AUDIT_LOG')) return;

    let mutedRole = message.guild.roles.cache.get('787792313416941588');
    if (mutedRole) {
        member.roles.add(mutedRole);
        var embed2 = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription(`<:accepted:788762768940597259> ${member} **je uspješno mjutan/na!**`)
            .setColor('GREEN')
        message.channel.send(embed2).then((message) => {
            message.delete({ timeout: 5000 })
        });
    }
}

module.exports.config = {
    name: "mute",
    description: "",
    usage: "%mute",
    accessableby: "Members",
    aliases: []
}