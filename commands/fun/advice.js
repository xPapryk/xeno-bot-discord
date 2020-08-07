const { Message, MessageEmbed } = require('discord.js');
const indentString = require('indent-string');
const fetch = require("node-fetch");
const moment = require("moment");

module.exports = {
    name: "advice",
    category: "fun",
    description: "Gives you a random advice",
    usage: "advice",
    run: async (client, message, args) => {

        const url = `https://api.adviceslip.com/advice`;
        const res = await fetch(url).then(url => url.json());   

        let advice = new MessageEmbed()
        .setColor("RANDOM")
        .addField("Advice:", `${res.slip.advice}`)
        .setFooter("Powered By Xeno", `${client.user.avatarURL()}`)
        .setTimestamp()

        message.channel.send(advice)
        
    }
}