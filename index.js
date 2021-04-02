const Discord = require('discord.js');
const bot = new Discord.Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
require('dotenv').config(); 
const mongoose = require('mongoose');
const ms = require("ms");
const DisTube = require('distube');
const Levels = require("discord-xp");

Levels.setURL("mongodb+srv://vjdin:Ajdin321@dismiss.lkgeo.mongodb.net/database");

bot.on("message", async message => {
    if (!message.guild) return;
    if (message.author.bot) return;

    const prefix = '%';

    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const randomXp = Math.floor(Math.random() * 9) + 1;
    const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
    if (hasLeveledUp) {
        const user = await Levels.fetch(message.author.id, message.guild.id);
        message.channel.send(`<:d_tada:807184344023433217> **Čestitam** ${message.author.toString()}, upravo si prešao/la na level **${user.level}**!`);
    }
})

bot.on("guildMemberAdd", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === '💬・global')
    var welcomeEmbed = new Discord.MessageEmbed()
        .setColor("#00FFF3")
        .setDescription("<:novo:788762770593546241> **Novi član!**")
        .addFields({ name: '** **', value: `<:tada_d:807184344023433217>・Hej ${member} dobrodošao/la u **🌀| Dismiss™️**! \n <:strelica_note:788762774741843988>・**Obavezno** pročitaj <#756452433541988352> \n <:d_gg:813101466532446240>・Nadam se da ćeš se **zabaviti** i **uživaj**!`, inline: true })
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        .setFooter('🌀| Dismiss™ by vjdin', 'https://cdn.discordapp.com/attachments/756139786560864299/795607439236005888/logo.png')
    welcomeChannel.send(welcomeEmbed);
})

bot.on("guildMemberRemove", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === '💥・izašli')
    welcomeChannel.send(`${member} **je napustio server!**`)
})

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

const fs = require("fs");
const { re } = require('mathjs');
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

    let prefix = '%';
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
                .setDescription('<:denied:788762769440374855> **Nemate permisije za upotrebu ove komande!**')
                .setColor('RED')
            message.channel.send(embed1).then((message) => {
                message.delete({ timeout: 5000 })
            });
        }
    }
});

bot.on("message", async message => {
    const command = message.content.toLocaleLowerCase();

    if (command === "hi") {
        message.reply("Ćao!")
    }
});

bot.on("message", async message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];

    if (cmd === '%verification') {
        let embed = new Discord.MessageEmbed()
            .setTitle('<:d_accepted:788762768940597259> Verifikacija!')
            .setColor('#00FFF3')
            .setDescription('**Da biste dobili pristup serveru reaktujte sa ✅ ispod ove poruke!**')
            .setFooter('🌀| Dismiss™ by vjdin', 'https://cdn.discordapp.com/attachments/756139786560864299/795607439236005888/logo.png')
        let msgEmbed = await message.channel.send(embed);
        msgEmbed.react('✅')
    }
});

bot.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.guild) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === "816335641843073034") {
        if (reaction.emoji.name === '✅') {
            await reaction.message.guild.members.cache.get(user.id).roles.add("773479863779590164")
        }
    }
})

bot.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.guild) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === "816335641843073034") {
        if (reaction.emoji.name === '✅') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("773479863779590164")
        }
    }
})

bot.on("message", async message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];

    if (!message.member.hasPermission('ADMINISTRATOR')) return;

    if (cmd === '%selfroles') {
        message.channel.send("https://cdn.discordapp.com/attachments/756139786560864299/816032536940642344/self_roles.png")

        var embed1 = new Discord.MessageEmbed()
            .setTitle('<:d_strelica:788762774741843988> **Self roles**')
            .setDescription("**Ovdje možete preuzeti self-roles! Sve što trebate uraditi jeste da ostavite reakciju ispod poruke.**")
            .setColor("YELLOW")
        message.channel.send(embed1);

        let embedSpol = new Discord.MessageEmbed()
            .setTitle('<:d_arrow:777511712433635359> Spol:')
            .setColor('YELLOW')
            .setDescription(`<:d_arrow:777511712433635359> <@&782599250982076416> \n <:d_arrow:777511712433635359> <@&782626085551472660>`)
        let msgEmbed1 = await message.channel.send(embedSpol);
        msgEmbed1.react('🚹')
        msgEmbed1.react('🚺')

        let embedDrzave = new Discord.MessageEmbed()
            .setTitle('<:d_arrow:777511712433635359> Države:')
            .setColor('YELLOW')
            .setDescription(`<:d_arrow:777511712433635359> <@&782626273369128971> \n <:d_arrow:777511712433635359> <@&782626270223400970> \n <:d_arrow:777511712433635359> <@&782626272744046592> \n <:d_arrow:777511712433635359> <@&782626533109137458> \n <:d_arrow:777511712433635359> <@&782626534938771546>`)
        let msgEmbed2 = await message.channel.send(embedDrzave);
        msgEmbed2.react('🇧🇦')
        msgEmbed2.react('🇭🇷')
        msgEmbed2.react('🇷🇸')
        msgEmbed2.react('🇲🇪')
        msgEmbed2.react('🇲🇰')

        let embedGodine = new Discord.MessageEmbed()
            .setTitle('<:d_arrow:777511712433635359> Godine:')
            .setColor('YELLOW')
            .setDescription(`<:d_arrow:777511712433635359> <@&782626991886172241> \n <:d_arrow:777511712433635359> <@&782626990469283840> \n <:d_arrow:777511712433635359> <@&782626988208291852>`)
        let msgEmbed3 = await message.channel.send(embedGodine);
        msgEmbed3.react('🧢')
        msgEmbed3.react('🎓')
        msgEmbed3.react('🎩')
    }
});

bot.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.guild) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === "782597651375325214") {
        if (reaction.emoji.name === '🚹') {
            await reaction.message.guild.members.cache.get(user.id).roles.add("782599250982076416")
        }
        if (reaction.emoji.name === '🚺') {
            await reaction.message.guild.members.cache.get(user.id).roles.add("782626085551472660")
        }
        if (reaction.emoji.name === '🇧🇦') {
            await reaction.message.guild.members.cache.get(user.id).roles.add("782626273369128971")
        }
        if (reaction.emoji.name === '🇭🇷') {
            await reaction.message.guild.members.cache.get(user.id).roles.add("782626270223400970")
        }
        if (reaction.emoji.name === '🇷🇸') {
            await reaction.message.guild.members.cache.get(user.id).roles.add("782626272744046592")
        }
        if (reaction.emoji.name === '🇲🇪') {
            await reaction.message.guild.members.cache.get(user.id).roles.add("782626533109137458")
        }
        if (reaction.emoji.name === '🇲🇰') {
            await reaction.message.guild.members.cache.get(user.id).roles.add("782626534938771546")
        }
        if (reaction.emoji.name === '🧢') {
            await reaction.message.guild.members.cache.get(user.id).roles.add("782626991886172241")
        }
        if (reaction.emoji.name === '🎓') {
            await reaction.message.guild.members.cache.get(user.id).roles.add("782626990469283840")
        }
        if (reaction.emoji.name === '🎩') {
            await reaction.message.guild.members.cache.get(user.id).roles.add("782626988208291852")
        }
    }
})

bot.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.guild) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === "782597651375325214") {
        if (reaction.emoji.name === '🚹') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("782599250982076416")
        }
        if (reaction.emoji.name === '🚺') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("782626085551472660")
        }
        if (reaction.emoji.name === '🇧🇦') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("782626273369128971")
        }
        if (reaction.emoji.name === '🇭🇷') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("782626270223400970")
        }
        if (reaction.emoji.name === '🇷🇸') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("782626272744046592")
        }
        if (reaction.emoji.name === '🇲🇪') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("782626533109137458")
        }
        if (reaction.emoji.name === '🇲🇰') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("782626534938771546")
        }
        if (reaction.emoji.name === '🧢') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("782626991886172241")
        }
        if (reaction.emoji.name === '🎓') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("782626990469283840")
        }
        if (reaction.emoji.name === '🎩') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("782626988208291852")
        }
    }
});

bot.on("message", async message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];

    if (!message.member.hasPermission('ADMINISTRATOR')) return;

    if (cmd === '%click') {
        let click = new Discord.MessageEmbed()
            .setColor('#00FFF3')
            .setDescription(`<:d_vortex:788762770413715506> **Klikni ispod** <:d_vortex:788762770413715506>`)
        let msgEmbed4 = await message.channel.send(click);
        msgEmbed4.react('<:d_gg:813101466532446240>')
    }
});

bot.login(process.env.TOKEN);