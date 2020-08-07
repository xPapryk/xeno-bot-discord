const { Message, MessageEmbed } = require('discord.js');
const yoMamma = require('yo-mamma').default;

module.exports = {
    name: "yomama",
    category: "fun",
    description: "Gives you a random \"Yo Mama\"\ joke",
    usage: "yomama",
    run: async (client, message, args) => {

        let insult = yoMamma();

        let mamaEmbed = new MessageEmbed()
        .setColor("RANDOM")
        .addField("Yo Mama Joke:", `${insult}`)
        .setTimestamp()
        .setFooter("Powered By Xeno", `${client.user.avatarURL()}`)
        message.channel.send(mamaEmbed)
        .then(message => {
            message.react('😂').then( r => {
            message.react('🥱')
            })  
        })
    }
} 
