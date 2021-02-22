const Discord = require("discord.js");
const Math = require("mathjs");

module.exports.run = async (bot, message, args) => {
    var list = [
        'https://i.imgur.com/sGVgr74.gif',
        'https://i.imgur.com/TItLfqh.gif',
        'https://i.imgur.com/8LKPbOf.gif',
        'https://i.imgur.com/YbNv10F.gif',
        'https://i.imgur.com/wQjUdnZ.gif',
        'https://i.imgur.com/lmY5soG.gif',
        'https://i.imgur.com/IgGumrf.gif',
        'https://i.pinimg.com/originals/ed/1a/5b/ed1a5bf41b0747742d1600d4eaad6bcf.gif',
        'https://i.pinimg.com/originals/39/fe/16/39fe167bdab90223bcc890bcb067b761.gif',
        'https://i.imgur.com/GBY6sX0.gif',
        'https://i.pinimg.com/originals/10/4b/52/104b52a3be76b0e032a55df0740c0d3b.gif',
        'https://64.media.tumblr.com/4ac01a3a300d835bec123107aca27156/tumblr_mqnp5qBdHU1surp3lo1_400.gifv',
        'https://media2.giphy.com/media/cXLsAS8yCbz9jSe3a8/giphy.gif',
        'https://media.tenor.com/images/3ebbd3f3e01a0a127f2aed4731faea2e/tenor.gif',
        'https://media3.giphy.com/media/UCyuDunJK0l6U/giphy.gif',
        'https://i.pinimg.com/originals/f6/5e/35/f65e357cd4542fe749b784430dde5669.gif',
        'https://media2.giphy.com/media/f5vXCvhSJsZxu/giphy.gif',
        'https://cutewallpaper.org/21/anime-kiss-on-the-cheek/images-for-kiss-command-A-Issue-125-A-rem-bot-industries-.gif',
        'https://i.imgur.com/4AaMn5E.gif',
        'https://i.imgur.com/1sq3s21.gif'
    ];

    var rand = list[Math.floor(Math.random() * list.length)];
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;

    const embed1 = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`${message.author.toString()} **je poljubio/la** ${member}`)
        .setImage(rand)
        .setColor("RANDOM")
        .setFooter('🌀| Dismiss™ by vjdin', 'https://cdn.discordapp.com/attachments/756139786560864299/795607439236005888/logo.png')
    message.channel.send(embed1);
};

module.exports.config = {
    name: "kiss",
    aliases: []
}