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

    const queue = bot.distube.getQueue(message)
    var embed2 = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle("Trenutni red:")
        .setDescription(queue.songs.map((song, id) => `**${id + 1})** ${song.name} - \`${song.formattedDuration}\``).slice(0, 10).join("\n"))
        .setColor('#00FFF3')
    message.channel.send(embed2);
};

module.exports.config = {
    name: "queue",
    aliases: ['q']
}