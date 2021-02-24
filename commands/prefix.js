const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    if (!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
            .setDescription('**Prefix ovog bota je %.**')
            .setColor('#00FFF3')
        message.channel.send(embed);
    }
}

module.exports.config = {
    name: "prefix",
    description: "",
    usage: "%prefix",
    accessableby: "Members",
    aliases: []
}