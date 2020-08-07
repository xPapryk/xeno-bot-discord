const { Message, MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: "meme",
    category: "fun",
    description: "Send's you a random meme",
    usage: "meme",
    run: async (client, message, args) => {

        const url = `https://some-random-api.ml/meme`;
        const res = await fetch(url).then(url => url.json());

        let memeEmbed = new MessageEmbed()
        .setColor("RANDOM")
        .addField("Caption:", `${res.caption}`)
        .setTimestamp()
        .setFooter("Powered By Xeno", `${client.user.avatarURL()}`)
        .setImage(`${res.image}`)
        message.channel.send(memeEmbed)
        .then(message => {

            message.react('😂').then( r => {
            message.react('🥱')
            })  
        })
    }
}