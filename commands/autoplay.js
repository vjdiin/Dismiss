const Discord = require('discord.js');
const DisTube = require('distube');

module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) {
        var embed1 = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription('<:denied:788762769440374855> **Morate biti u glasovnom kanalu!**')
            .setColor('RED')
        message.channel.send(embed1).then((message) => {
            message.delete({ timeout: 5000 })
        });
    }

    if (!bot.distube.isPlaying(message)) {
        var embed2 = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription('<:denied:788762769440374855> **Ništa nije pušteno!**')
            .setColor('RED')
        message.channel.send(embed2).then((message) => {
            message.delete({ timeout: 5000 })
        });
    }

    let mode = bot.distube.toggleAutoplay(message);
    mode = " " + (mode ? "Uključen" : "Isključen") + ""

    var embed3 = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`<:accepted:788762768940597259> Autoplay je **${mode}**!`)
        .setColor('GREEN')
    message.channel.send(embed3).then((message) => {
        message.delete({ timeout: 5000 })
    });
};

module.exports.config = {
    name: "autoplay",
    aliases: ['ap']
}