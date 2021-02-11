const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (bot, message, args) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;

    if (member.presence.status === 'dnd') member.presence.status = 'Do Not Disturb';
    if (member.presence.status === 'online') member.presence.status = 'Online';
    if (member.presence.status === 'idle') member.presence.status = 'Idle';
    if (member.presence.status === 'offline') member.presence.status = 'offline';

    let x = Date.now() - member.createdAt;
    let y = Date.now() - message.guild.members.cache.get(member.id).joinedAt;
    const joined = Math.floor(y / 86400000);

    const joineddate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss");
    let status = member.presence.status;

    const userEmbed = new Discord.MessageEmbed()
        .setAuthor('🌀| Dismiss™ | Informacije člana', message.author.displayAvatarURL())
        .setColor('#00FFF3')
        .setImage(member.user.displayAvatarURL())
        .addField("**Tag:**", member.user.tag)
        .addField("**ID Člana:**", member.id)
        .addField('**Rolovi:**', `<@&${member._roles.join('> <@&')}>`)
        .addField("**Račun napravljen:**", ` ${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY")}`, true)
        .addField('**Ušao/la u server:**', `${joineddate} \n> Prije ${joined} dana`)
        .addField("**Status:**", status)
        .setFooter('🌀| Dismiss™ by vjdin', 'https://cdn.discordapp.com/attachments/756139786560864299/795607439236005888/logo.png')
    message.channel.send(userEmbed);
}

module.exports.config = {
    name: "userinfo",
    description: "",
    usage: "%userinfo",
    accessableby: "Members",
    aliases: ['memberinfo']
}