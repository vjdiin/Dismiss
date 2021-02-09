const Discord = require("discord.js")

module.exports = bot => { 
    console.log(`${bot.user.username} je online!`)
    bot.user.setActivity("🌀| Dismiss™️ | %help", {type: "PLAYING"});
}