const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const messageArray = message.content.split(' ');
    const cmd = messageArray[0];
    const args1 = messageArray.slice(1);

    if (message.deletable) {
        message.delete();
    }

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        var embed1 = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription('<:denied:788762769440374855> **Nemate premisije za upotrebu ove komande!**')
            .setColor('RED')
        message.channel.send(embed1).then((message) => {
            message.delete({ timeout: 5000 })
        });
    }

    if (isNaN(args1) || parseInt(args1) <= 0) {
        var embed2 = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription('<:denied:788762769440374855> **Nepravilna upotreba komande!**')
            .setColor('RED')
        message.channel.send(embed2).then((message) => {
            message.delete({ timeout: 5000 })
        });
    }

    let deleteAmount;

    if (parseInt(args1) > 100) {
        deleteAmount = 100;
    } else {
        deleteAmount = parseInt(args1);
    }

    if (!isNaN(args1) || !parseInt(args1) <= 0) {
        message.channel.bulkDelete(deleteAmount, true)
        var embed3 = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription(`<:accepted:788762768940597259> Uspješno obrisano **${deleteAmount}** poruka!`)
            .setColor('GREEN')
        message.channel.send(embed3).then((message) => {
            message.delete({ timeout: 5000 })
        });
    }
}

module.exports.config = {
    name: "clear",
    description: "clears message",
    usage: "?clear",
    accessableby: "Members",
    aliases: ['c', 'purge']
}