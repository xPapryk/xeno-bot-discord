const { Message, MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: "fml",
    category: "fun",
    description: "A random FML joke",
    usage: "fml",
    run: async (client, message, args) => {

        const url = `https://api.alexflipnote.dev/fml`;
        const res = await fetch(url).then(url => url.json());

        const fml = res.text;

        let fmlEmbed = new MessageEmbed()
        .setColor("RANDOM")
        .addField("FML Joke:", `${fml}`)
        .setTimestamp()
        .setFooter("Powered By Xeno", `${client.user.avatarURL()}`)
        message.channel.send(fmlEmbed)
        .then(message => {

            message.react('😂').then( r => {
            message.react('🥱')

    })  
})}}