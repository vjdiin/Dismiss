const Discord = require('discord.js');
const DisTube = require('distube');

module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) {
        var embed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription('<:denied:788762769440374855> **Morate biti u glasovnom kanalu!**')
            .setColor('RED')
        message.channel.send(embed).then((message) => {
            message.delete({ timeout: 5000 })
        });
    }

    let queue = await bot.distube.getQueue(message);

    if (queue) {
        bot.distube.stop(message)
        var embed2 = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription("<:accepted:788762768940597259> **Bot stopiran!**")
            .setColor("GREEN")
        message.channel.send(embed2).then((message) => {
            message.delete({ timeout: 5000 })
        });

    } else if (!queue) {
        return
    };
}

module.exports.config = {
    name: "stop",
    aliases: []
}