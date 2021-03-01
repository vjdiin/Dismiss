const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const messageArray = message.content.split(' ');
    const args1 = messageArray.slice(1);

    if (message.deletable) {
        message.delete();
    }

    if (isNaN(args[0]) || parseInt(args[0]) <= 0 || !message.member.hasPermission("MANAGE_MESSAGES")) {
        var embed2 = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription('<:denied:788762769440374855> **Nemate premisije za upotrebu ove komande, ili ste je nepravilno upotrijebili!**')
            .setColor('RED')
        message.channel.send(embed2).then((message) => {
            message.delete({ timeout: 5000 })
        });

    } else {

        let deleteAmount;

        if (parseInt(args1) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args1);
        }

        message.channel.bulkDelete(deleteAmount + 1)
        var embed3 = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`<:accepted:788762768940597259> Uspješno obrisano **${deleteAmount}** poruka!`)
            .setColor('GREEN')
        message.channel.send(embed3).then((message) => {
            message.delete({ timeout: 5000 })
        });
    }
}

module.exports.config = {
    name: "clear",
    aliases: ['c', 'purge']
}