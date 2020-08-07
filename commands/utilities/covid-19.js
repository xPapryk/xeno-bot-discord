const { Message, MessageEmbed } = require('discord.js');
const indentString = require('indent-string');
const fetch = require("node-fetch");
const moment = require("moment");

module.exports = {
    name: "covid-19",
    category: "utilities",
    description: "Returns some statistics about the covid-19",
    usage: "covid-19",
    run: async (client, message, args) => {

        const url = `https://api.covid19api.com/world/total`;
        const res = await fetch(url).then(url => url.json());

        let covidEmbed = new MessageEmbed()
        .addField("Covid-19 WorldWide Stats:", [
            `**Total Cases Confirmed** ${res.TotalConfirmed}`,
            `**Total Deaths:** ${res.TotalDeaths}`,
            `**Total Recoveries:** ${res.TotalRecovered}`
        ])
        .setTimestamp()
        .setFooter("Powered By Xeno", `${client.user.avatarURL()}`)

        message.channel.send(covidEmbed);
    }
} 