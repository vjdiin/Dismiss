module.exports.run = async (bot, message, args) => {
    message.reply('**Računanje...**').then((resultMessage) => {
        const ping = resultMessage.createdTimestamp - message.createdTimestamp

        resultMessage.edit(`🏓 Pong: **${ping}**ms`)
    })
}

module.exports.config = {
    name: "ping",
    description: "",
    usage: "%ping",
    accessableby: "Members",
    aliases: []
}