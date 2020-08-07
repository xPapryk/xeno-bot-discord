const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "suggest",
    category: "utilities",
    description: "Suggest something",
    usage: "suggest <suggestion>",
    run: async (client, message, args) => {

        message.delete();

        let suggestion = args.join(" ");

        let usage = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())
        .addField("Missin Suggestion", "Usage: suggest <suggestion>")

        if(!suggestion) {
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        let embed = new MessageEmbed()
        .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)
        .setColor("RANDOM")
        .addField("Suggestion:", `${suggestion}`)

        message.channel.send(embed)
        .then(message.react('🔼'))
        .then(message.react('🔽'))

        let embed2 = new MessageEmbed()
        .setAuthor(`New Suggestion from ${message.author.tag}`, `${message.author.displayAvatarURL()}`)
        .setColor("RANDOM")
        .addField("Suggestion:", `${suggestion}`)

        client.users.cache.get("342333088573161472").send(embed2);

    }
}