const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;

    if (!args[0]) {
        var embed1 = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription('<:denied:788762769440374855> **Nepravilna upotreba komande!**')
            .setColor('RED')
        message.channel.send(embed1).then((message) => {
            message.delete({ timeout: 5000 })
        });
    }

    if (!member) {
        var embed2 = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription('<:denied:788762769440374855> **Nepravilna upotreba komande!**')
            .setColor('RED')
        message.channel.send(embed2).then((message) => {
            message.delete({ timeout: 5000 })
        });
    }

    fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
        .then(res => res.json())
        .then(json => {
            const embed3 = new Discord.MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL())
                .setDescription(`${member}, **${json.insult}**`)
                .setColor('RANDOM')
                .setFooter('🌀| Dismiss™ by vjdin', 'https://cdn.discordapp.com/attachments/756139786560864299/795607439236005888/logo.png')
            message.channel.send(embed3)
        })
}

module.exports.config = {
    name: "roast",
    description: "",
    usage: "%roast",
    accessableby: "Members",
    aliases: []
}