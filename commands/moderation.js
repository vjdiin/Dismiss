const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    if (!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
            .setAuthor(`🌀| Dismiss™ | Moderacija`, member.user.displayAvatarURL())
            .addFields({ name: '**%warn [Član] (Razlog)**', value: '```Upozoravanje člana```', inline: false })
            .addFields({ name: '**%clear [Broj poruka]**', value: '```Briše određeni broj poruka```', inline: false })
            .addFields({ name: '**%tempmute [Član] (Vrijeme)**', value: '```Privremeno mjuta člana```', inline: false })
            .addFields({ name: '**%mute [Član]**', value: '```Mjuta člana```', inline: false })
            .addFields({ name: '**%unmute [Član]**', value: '```Unmjuta člana```', inline: false })
            .addFields({ name: '**%ban [Član]**', value: '```Banuje člana```', inline: false })
            .addFields({ name: '**%kick [Član]**', value: '```Kikuje člana```', inline: false })
            .setColor('#00FFF3')
            .setFooter('🌀| Dismiss™ by vjdin', 'https://cdn.discordapp.com/attachments/756139786560864299/795607439236005888/logo.png')

        message.channel.send(embed);
    }
}

module.exports.config = {
    name: "moderation",
    description: "",
    usage: "%moderation",
    accessableby: "Members",
    aliases: []
}