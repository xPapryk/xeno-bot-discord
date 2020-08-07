const { Message, MessageEmbed } = require('discord.js');
const indentString = require('indent-string');
const fetch = require("node-fetch");
const moment = require("moment");

module.exports = {
    name: "trump",
    category: "fun",
    description: "A random Trump quote",
    usage: "trump",
    run: async (client, message, args) => {

        const url = `https://www.tronalddump.io/random/quote`;
        const res = await fetch(url).then(url => url.json());

        let embed = new MessageEmbed()
        .setColor("RANDOM")
        .addField(res.value, "- Donald Trump")
        .setTimestamp()
        .setFooter("Powered By Xeno", `${client.user.avatarURL()}`)

        message.channel.send(embed);
    }
} 