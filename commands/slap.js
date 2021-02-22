const Discord = require("discord.js");
const Math = require("mathjs");

module.exports.run = async (bot, message, args) => {
    var list = [
        'https://i.imgur.com/fm49srQ.gif',
        'https://i.imgur.com/4MQkDKm.gif',
        'https://i.imgur.com/o2SJYUS.gif',
        'https://i.imgur.com/oOCq3Bt.gif',
        'https://i.imgur.com/Agwwaj6.gif',
        'https://i.imgur.com/YA7g7h7.gif',
        'https://i.imgur.com/mIg8erJ.gif',
        'https://i.imgur.com/oRsaSyU.gif',
        'https://i.pinimg.com/originals/51/a6/e1/51a6e17bfdf01f8d97f64462982a1a12.gif',
        'https://media3.giphy.com/media/60rH3h0jO424TJ7qz8/giphy.gif',
        'https://media2.giphy.com/media/57YhXUWx8GxieCsf0Q/200_d.gif',
        'https://i.pinimg.com/originals/45/32/9a/45329a3a364454b416915db94b20c829.gif',
        'https://media0.giphy.com/media/KHWsnPDIpF2JgoeJ3v/source.gif',
        'https://i.gifer.com/3c2b.gif',
        'https://i.gifer.com/2a55.gif',
        'https://i.imgur.com/kSLODXO.gif',
        'https://i.imgur.com/CwbYjBX.gif',
        'https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif?itemid=10426943',
        'https://i.imgur.com/Li9mx3A.gif',
        'https://thumbs.gfycat.com/AmusingTautGangesdolphin-size_restricted.gif'
    ];

    var rand = list[Math.floor(Math.random() * list.length)];
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;

    const embed1 = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`${message.author.toString()} **je ošamario/la** ${member}`)
        .setImage(rand)
        .setColor("RANDOM")
        .setFooter('🌀| Dismiss™ by vjdin', 'https://cdn.discordapp.com/attachments/756139786560864299/795607439236005888/logo.png')
    message.channel.send(embed1);
};

module.exports.config = {
    name: "slap",
    aliases: []
}