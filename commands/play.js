const Discord = require('discord.js');
const DisTube = require('distube');

module.exports.run = async (bot, message, args) => {
    const messageArray = message.content.split(' ');
	const cmd = messageArray[0];
	const args1 = messageArray.slice(1);
    
    if (!message.member.voice.channel) {
        var embed1 = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription('<:denied:788762769440374855> **Morate biti u glasovnom kanalu!**')
            .setColor('RED')
        message.channel.send(embed1).then((message) => {
            message.delete({ timeout: 5000 })
        });
    }

    const music = args1.join(" ");

    bot.distube.play(message, music)
};

module.exports.config = {
    name: "play",
    aliases: ['p']
}