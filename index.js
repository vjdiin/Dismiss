const Discord = require('discord.js');
const bot = new Discord.Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
const botsettings = require('./botsettings.json');
const mongoose = require('mongoose');
const ms = require("ms");
const DisTube = require('distube');

bot.distube = new DisTube(bot, { searchSongs: false, emitNewSongOnly: true });
bot.distube
    .on("playSong", (message, queue, song) => {
        var embed1 = new Discord.MessageEmbed()
            .setTitle("Sada se reproducira:")
            .setDescription(`${song.name} - \`${song.formattedDuration}\` [${song.user}]`)
            .setColor('GREEN')
        message.channel.send(embed1);
    })

    .on("addSong", (message, queue, song) => {
        var embed2 = new Discord.MessageEmbed()
            .setTitle("Pjesma dodata:")
            .setDescription(`${song.name} - \`${song.formattedDuration}\` [${song.user}]`)
            .setColor('GREEN')
        message.channel.send(embed2);
    })

require("./util/eventHandler")(bot);

mongoose.connect('mongodb+srv://vjdin:Ajdin321@dismiss.lkgeo.mongodb.net/database', { useNewUrlParser: true, useUnifiedTopology: true, })
mongoose.set('useFindAndModify', false);

const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});

bot.on("message", async message => {
    if (message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = message.content.substring(message.content.indexOf(' ') + 1);

    if (!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if (commandfile) commandfile.run(bot, message, args)

})

bot.on("message", async message => {

    const messageArray = message.content.split(' ');
    const cmd = messageArray[0];
    const args = messageArray.slice(1);

    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;

    if (cmd === '%tempmute') {
        if (message.member.hasPermission('MANAGE_MESSAGES')) {
            if (!member) {
                var embed1 = new Discord.MessageEmbed()
                    .setAuthor(message.author.tag, message.author.displayAvatarURL())
                    .setDescription('<:denied:788762769440374855> **Nepravilna upotreba komande!**')
                    .setColor('RED')
                message.channel.send(embed1).then((message) => {
                    message.delete({ timeout: 5000 })
                });
            }

            let role = message.guild.roles.cache.find(role => role.name === "❕・Muted");

            let time = args[1];
            if (!time) {
                var embed2 = new Discord.MessageEmbed()
                    .setAuthor(message.author.tag, message.author.displayAvatarURL())
                    .setDescription('<:denied:788762769440374855> **Nepravilna upotreba komande!**')
                    .setColor('RED')
                message.channel.send(embed2).then((message) => {
                    message.delete({ timeout: 5000 })
                });
            }

            member.roles.add(role.id);
            var embed3 = new Discord.MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL())
                .setDescription(`<:accepted:788762768940597259> ${member} **je uspješno mjutan/na na ${ms(ms(time))}!**`)
                .setColor('GREEN')
            message.channel.send(embed3).then((message) => {
                message.delete({ timeout: 5000 })
            });

            setTimeout(function () {
                member.roles.remove(role.id);
                var embed4 = new Discord.MessageEmbed()
                    .setAuthor(message.author.tag, message.author.displayAvatarURL())
                    .setDescription(`<:accepted:788762768940597259> ${member} **je uspješno unmjutan/na!**`)
                    .setColor('GREEN')
                message.channel.send(embed4).then((message) => {
                    message.delete({ timeout: 5000 })
                });
            }, ms(time));

        } else {

            var embed1 = new Discord.MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL())
                .setDescription('<:denied:788762769440374855> **Nemate premisije za upotrebu ove komande!**')
                .setColor('RED')
            message.channel.send(embed1).then((message) => {
                message.delete({ timeout: 5000 })
            });
        }
    }
})

bot.login(botsettings.token);