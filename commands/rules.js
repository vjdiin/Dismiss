const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) {
        return;
    } else {

        message.channel.send("https://cdn.discordapp.com/attachments/756139786560864299/816049226358194176/New_Project.png");

        var embed1 = new Discord.MessageEmbed()
            .setTitle("**PRAVILA/RULES**")
            .setDescription("POŠTUJTE PRAVILA (nepoštivanje pravila će biti kažnjeno) \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n <:d_arrow:777511712433635359> **1.** STROGO JE ZABRANJENO bilo kakvo vrijeđanje na nacionalnoj, \n vjerskoj ili osobnoj osnovi i kažnjava se banom. \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n <:d_arrow:777511712433635359> **2.** Bez spamanja, spamanje će se kažnjavati. \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n <:d_arrow:777511712433635359> **3.** Pišite u kanalima koji su za to namijenjeni, \n bez spama po svim kanalima. \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n <:d_arrow:777511712433635359> **4.** Bez uvredljivih imena i profilnih slika, \n ako ih imate, bit ćete zamoljeni da promijenite. \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n <:d_arrow:777511712433635359> **5.** Nemojte se raspravljati s administratorima. \n Ovdje se ne misli na offtopic razgovor nego na administrativne odluke, \n ako vam se ne sviđa odluka nekog administratora, obratite se drugom preko privatne poruke. \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n <:d_arrow:777511712433635359> **6.** Zabranjeno je bilo kakvo reklamiranje! \n Svako nedolično ponašanje i nepoštovanje navedenih pravila biće sankcionisano od \n strane **ADMINISTRACIJE**.")
            .setColor("RED")
            .setFooter('🌀| Dismiss™ by vjdin', 'https://cdn.discordapp.com/attachments/756139786560864299/795607439236005888/logo.png')
        message.channel.send(embed1);
    }
};

module.exports.config = {
    name: "rules",
    aliases: []
}