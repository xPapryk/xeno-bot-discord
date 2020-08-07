const { Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: "kill",
    category: "fun",
    description: "Someone bothering you? Easy peasy. Just kill the! (Warning: Do not try this at home)",
    usage: "kill [@member]",
    run: async (client, message, args) => {

        let killed = message.mentions.members.first();
        if(!killed) {

        let emb = new MessageEmbed()
        .setColor("#00f00")
        .setDescription(`${message.author} decied to kill themself 💔 REST IN PEACE`)
        .setFooter("Powered By Xeno", `${client.user.avatarURL()}`)
        .setTimestamp()

        message.channel.send(emb)

        } else {

        let emb = new MessageEmbed()
        .setColor("#00f00")
        .setDescription(`${killed} was killed by ${message.author} 💔 REST IN PEACE`)
        .setFooter("Powered By Xeno", `${client.user.avatarURL()}`)
        .setTimestamp()

        message.channel.send(emb)

        message.delete();

    }   
}}
