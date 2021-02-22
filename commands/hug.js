const Discord = require("discord.js");
const Math = require("mathjs");

module.exports.run = async (bot, message, args) => {
    var list = [
        'https://i.imgur.com/GuADSLm.gif',
        'https://i.imgur.com/XEs1SWQ.gif',
        'https://i.imgur.com/gSGeZJF.gif',
        'https://i.imgur.com/FCXa6Gx.gif',
        'https://i.imgur.com/EatYxy1.gif',
        'https://i.imgur.com/VgP2ONn.gif',
        'https://i.imgur.com/IoSM9JM.gif',
        'https://i.pinimg.com/originals/f3/05/85/f3058569bd60525e7d7532beb993dba3.gif',
        'https://i.imgur.com/34Ldmbz.gif',
        'https://gallery.yopriceville.com/var/albums/Animated-Gif-Images/Lilo_and_Stitch_Hug_gif_Animation.gif?m=1434698413',
        'https://gifsb.in/hug/cartoon-kid-hug.gif',
        'https://media2.giphy.com/media/1nR9Amko49NoHVgBVU/giphy.gif',
        'https://giftergo.com/wp-content/uploads/2019/03/Hug-Gifs-21.gif',
        'https://media0.giphy.com/media/xUOwG1D8Q5vjqrgouI/giphy.gif',
        'https://thumbs.gfycat.com/PopularWhiteHackee-max-1mb.gif',
        'https://data.whicdn.com/images/237712091/original.gif',
        'https://steamuserimages-a.akamaihd.net/ugc/830203772214123848/F4EB24C0198864B7AF673DABAB3EEB57A77752B8/',
        'https://i.gifer.com/5VM.gif',
        'https://i.pinimg.com/originals/03/14/11/0314113c8ed42b1faf18adcaff95b05e.gif',
        'https://data.whicdn.com/images/59399592/original.gif'
    ];

    var rand = list[Math.floor(Math.random() * list.length)];
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;

    const embed1 = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`${message.author.toString()} **je zagrlio/la** ${member}`)
        .setImage(rand)
        .setColor("RANDOM")
        .setFooter('🌀| Dismiss™ by vjdin', 'https://cdn.discordapp.com/attachments/756139786560864299/795607439236005888/logo.png')
    message.channel.send(embed1);
};

module.exports.config = {
    name: "hug",
    aliases: []
}