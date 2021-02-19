const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const messageArray = message.content.split(' ');
	const cmd = messageArray[0];
	const args1 = messageArray.slice(1);

    const channel = message.guild.channels.cache.find(c => c.name === '💧・chat');
    if (!channel) return message.channel.send('suggestions channel does not exist!');

    let messageArgs = args1.join(' ');
    const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`\`${messageArgs}\``)
        .setTimestamp();

    channel.send(embed).then((msg) => {
        msg.react('<:d_check:812249243581546525>');
        msg.react('<:d_cross:812249242806124555>');
        message.delete();
    }).catch((err) => {
        throw err;
    });
};

module.exports.config = {
    name: "suggest",
    aliases: []
}

