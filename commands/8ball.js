const Discord = require('discord.js');
const Math = require("mathjs");

module.exports.run = async (bot, message, args) => {
    const messageArray = message.content.split(' ');
    const cmd = messageArray[0];
    const args1 = messageArray.slice(1);

    bot.prefix = "%"
    
    let question = message.content.slice(bot.prefix.length + 6)

    if (question) {
        let responses = [
            "Da",
            "Ne",
            "Definitivno",
            "Apsolutno",
            "Da (Ne)",
            "Ne (Da)",
            "Vjerovatno",
            "Možda",
            "Ne znam",
            "100%",
            "Nisam siguran",
            "Sigurno",
            "Valjda",
        ]

        let Response = responses[Math.floor(Math.random() * (responses.length))];

        var embed2 = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription("🎱 **8ball**")
            .addField(`**Pitanje:**`, `${question}`)
            .addField(`**Odgovor:**`, `${Response}`)
            .setColor('RANDOM')
        message.channel.send(embed2);
    }
}

module.exports.config = {
    name: "8ball",
    description: "",
    usage: "%8ball",
    aliases: []
}