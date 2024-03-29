const Discord = require("discord.js");
const Levels = require("discord-xp");

Levels.setURL("mongodb+srv://vjdin:Ajdin321@dismiss.lkgeo.mongodb.net/database");

module.exports.run = async (bot, message, args) => {
    if (!message.guild) return;
    if (message.author.bot) return;

    const prefix = '%';

    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
    const args1 = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args1.shift().toLowerCase();

    if (command === 'leaderboard' || command === 'lb') {
        const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 5);
        if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");

        const leaderboard = await Levels.computeLeaderboard(bot, rawLeaderboard);

        const lb = leaderboard.map(e => `**${e.position}.** ${e.username}#${e.discriminator} \n **Level:** ${e.level} \n **XP:** ${e.xp.toLocaleString()}`);
        var embed1 = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription('🏆 **Ljestvica najaktivnijih:**')
            .addFields({ name: '** **', value: `${lb, lb.join("\n\n")}`, inline: true })
            .setColor('#00FFF3')
            .setFooter('🌀| Dismiss™ by vjdin', 'https://cdn.discordapp.com/attachments/756139786560864299/795607439236005888/logo.png')
        message.channel.send(embed1)
    }
};

module.exports.config = {
    name: "leaderboard",
    aliases: ['lb']
}