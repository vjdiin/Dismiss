const Discord = require('discord.js');
const Math = require("mathjs");

module.exports.run = async (bot, message, args) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
    let randNo = Math.floor(Math.random() * 100 + 1);
    var embed = new Discord.MessageEmbed()
        .setTitle("peepee Mašina")
        .setDescription(`${member}´s penis \n 8${'='.repeat(Math.floor(Math.random() * 10 + 1))}D`)
        .setColor("RANDOM")
    message.channel.send(embed);
}

module.exports.config = {
    name: "pp",
    description: "",
    usage: "%pp",
    aliases: ['penis']
}