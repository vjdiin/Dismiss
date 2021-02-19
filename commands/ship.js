const Discord = require("discord.js");
const Math = require("mathjs");

module.exports.run = async (bot, message, args) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
    let randNo = Math.floor(Math.random() * 100 + 1);
    var embed2 = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`${message.author.toString()} \n **${randNo}%💖** \n ${member}`)
        .setColor("RANDOM")
    message.channel.send(embed2);
};

module.exports.config = {
    name: "ship",
    aliases: []
}

