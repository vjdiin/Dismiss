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

    const mode = bot.distube.toggleAutoplay(message);
    message.channel.send("Autoplay je **" + (mode ? "Uključen" : "Isključen") + "**");
};

module.exports.config = {
    name: "autoplay",
    aliases: ['ap']
}