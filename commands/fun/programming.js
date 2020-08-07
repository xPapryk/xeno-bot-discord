const { Message, MessageEmbed } = require('discord.js');
const indentString = require('indent-string');
const fetch = require("node-fetch");
const moment = require("moment");

module.exports = {
    name: "programming",
    category: "fun",
    description: "Give's you a random programming quote",
    usage: "programming",
    run: async (client, message, args) => {

        const url = `https://programming-quotes-api.herokuapp.com/quotes/random`;
        const res = await fetch(url).then(url => url.json());

        let embed = new MessageEmbed()
        .setColor("RANDOM")
        .addField(res.en, res.author)
        .setTimestamp()
        .setFooter("Powered By Xeno", `${client.user.avatarURL()}`)

        message.channel.send(embed);
    }
} 