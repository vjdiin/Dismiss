const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission('BAN_MEMBERS')) {
        var embed1 = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription('<:denied:788762769440374855> **Nemate premisije za upotrebu ove komande!**')
            .setColor('RED')
        message.channel.send(embed1).then((message) => {
            message.delete({ timeout: 5000 })
        });
    }

    else {

        let bannedMember = await message.guild.members.ban(args);
        if (bannedMember) {

            try {
                console.log(bannedMember.tag + ' uspješno banovan/na!');
                var embed2 = new Discord.MessageEmbed()
                    .setAuthor(message.author.tag, message.author.displayAvatarURL())
                    .setDescription(`<:accepted:788762768940597259> ${bannedMember} **je uspješno banovan/na!**`)
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
    name: "ban",
    description: "",
    usage: "%ban",
    accessableby: "Admins",
    aliases: []
}