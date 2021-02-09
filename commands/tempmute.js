const Discord = require('discord.js');
const ms = require ("ms");

module.exports.run = async (bot, message, args) => {
    let messageArray = message.content.split(" ");
    let args1 = messageArray.slice(1);
    let cmd = messageArray[0];

    if (message.member.hasPermission('MANAGE_MESSAGES')) {
        var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args1));
        if (!member) return message.reply('Please Provide a Member to TempMute.')

        let role = message.guild.roles.cache.find(role => role.name === "❕・Muted");

        if (!role) return message.reply("Couldn't find the 'muted' role.")

        let time = args1;
        if (!time) {
            return message.reply("You didnt specify a time!");
        }

        member.roles.add(role.id);

        message.channel.send(`@${member.user.tag} has now been muted for ${ms(ms(time))}`)

        setTimeout(function () {
            member.roles.remove(role.id);
            message.channel.send(`@${member.user.tag} has been unmuted.`)
        }, ms(time));

    } else {

        var embed1 = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription('**Nemate premisije za upotrebu ove komande!**')
            .setColor('RED')
        message.channel.send(embed1).then((message) => {
            message.delete({ timeout: 5000 })
        });
    }
}

module.exports.config = {
    name: "tempmute",
    description: "",
    usage: "%tempmute",
    accessableby: "Admins",
    aliases: []
}