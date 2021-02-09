const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission('KICK_MEMBERS')) {
        var embed1 = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription('**Nemate premisije za upotrebu ove komande!**')
            .setColor('RED')
        message.channel.send(embed1).then((message) => {
            message.delete({ timeout: 5000 })
        });
    }

    else {

        let member = message.guild.members.cache.get(args);
        if (member) {

            try {
                await member.kick();
                console.log(member + ' uspješno kikovan/na!');
                var embed2 = new Discord.MessageEmbed()
                    .setAuthor(message.author.tag, message.author.displayAvatarURL())
                    .setDescription(`<:accepted:788762768940597259> ${member} **je uspješno kikovan/na!**`)
                    .setColor('GREEN')
                message.channel.send(embed2).then((message) => {
                    message.delete({ timeout: 5000 })
                });
            }
            catch (err) {
                console.log(err);
            }
        }
    }
}

module.exports.config = {
    name: "kick",
    description: "Kicks a user",
    usage: "%kick",
    accessableby: "Admins",
    aliases: []
}