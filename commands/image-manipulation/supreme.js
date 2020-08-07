const { Message, MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: "supreme",
    category: "image-manipulation",
    description: "Your own Supreme type logo",
    usage: "supreme <text1>",
    run: async (client, message, args) => {

        let usage = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())
        if(!args[0])usage.addField("Missing Text", "Usage: supreme <text>")

        if(!args[0]) {
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        const image = `https://api.alexflipnote.dev/supreme?text=${args[0]}`;

        let supremeEmbed = new MessageEmbed()
        .setColor("RANDOM")
        .setImage(image)
        .setTimestamp()
        .setFooter("Powered By Xeno", `${client.user.avatarURL()}`)
        message.channel.send(supremeEmbed)
    }
}