const Discord = require('discord.js');
const punishments = require('../models/ModSchema');

module.exports.run = async (bot, message, args) => {
    const messageArray = message.content.split(' ');
    const cmd = messageArray[0];
    const args1 = messageArray.slice(1);

    let toWarn = message.mentions.members.first() || message.guild.members.cache.get(args1) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args1.slice(0).join(" ") || x.user.username === args1);

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        var embed1 = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription('<:denied:788762769440374855> **Nemate premisije za upotrebu ove komande!**')
            .setColor('RED')
        message.channel.send(embed1).then((message) => {
            message.delete({ timeout: 5000 })
        });
    }

    if (message.author.id === toWarn.id) return;

    let reason = args1.slice(1).join(" ")

    if (!reason) {
        var embed2 = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription('<:denied:788762769440374855> **Niste naveli razlog upozorenja!**')
            .setColor('RED')
        message.channel.send(embed2).then((message) => {
            message.delete({ timeout: 5000 })
        });
    }

    let data = await punishments.findOne({
        GuildID: message.guild.id,
        UserID: toWarn.id
    });

    if (data) {
        data.Punishments.unshift({
            PunishType: 'Warn',
            Moderator: message.author.id,
            Reason: reason,
        });
        data.save();

        if (reason) {
            var embed5 = new Discord.MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL())
                .setDescription(`<:accepted:788762768940597259> ${toWarn} **je upozoren!** \n **Razlog:** \`${reason}\``)
                .setColor('GREEN')
            message.channel.send(embed5).then((message) => {
                message.delete({ timeout: 5000 })
            });
        }

    } else if (!data) {
        let newData = new punishments({
            GuildID: message.guild.id,
            UserID: toWarn.id,
            Punishments: [{
                PunishType: 'Warn',
                Moderator: message.author.id,
                Reason: reason,
            },],
        });
        newData.save();

        var embed4 = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription(`<:accepted:788762768940597259> ${toWarn} **je upozoren!** \n **Razlog:** \`${reason}\``)
            .setColor('GREEN')
        message.channel.send(embed4).then((message) => {
            message.delete({ timeout: 5000 })
        });
    }
}

module.exports.config = {
    name: "warn",
    aliases: []
}