const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) {
        return;
    } else {

        var embed1 = new Discord.MessageEmbed()
            .setTitle("**Sugestije**")
            .setDescription('<:d_strelica:788762774741843988> Da bi ste **predložili** ili napisali sugestiju za server, u <#794205706748035157> napišite komandu **%suggest (Vaš prijedlog)** i sugestija će se automatski prenijeti u ovaj kanal. Članovi servera mogu da glasaju ako su **za** ili **protiv** te sugestije! \n \n <:d_denied:788762769440374855> **Korištenje ove komande kao troll ili bilo kakvo drugo zezanje biće sankcionisano!**')
            .setColor("#00FFF3")
            .setFooter('🌀| Dismiss™ by vjdin', 'https://cdn.discordapp.com/attachments/756139786560864299/795607439236005888/logo.png')
        message.channel.send(embed1);
    }
};

module.exports.config = {
    name: "suggestembed",
    aliases: []
}