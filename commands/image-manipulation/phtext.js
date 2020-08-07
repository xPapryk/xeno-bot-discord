const { Message, MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: "ph",
    category: "image-manipulation",
    description: "Your own PH type logo",
    usage: "ph <text1> <text2>",
    run: async (client, message, args) => {

        let usage = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())
        if(!args[0])usage.addField("Missing Argument n1", "Usage: ph <text1> <text2>")
        if(!args[1])usage.addField("Missing Argument n2", "Usage: ph <text1> <text2>")

        if(!args[[0]]) {
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        if(!args[1]) {
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        const url = `https://api.alexflipnote.dev/pornhub?text=${args[0]}&text2=${args[1]}`;

        let phEmbed = new MessageEmbed()
        .setColor("#ffa31a")
        .setImage(url)
        .setTimestamp()
        .setFooter("Powered By Xeno", `${client.user.avatarURL()}`)
        message.channel.send(phEmbed)

        message.delete();
    }} 
 