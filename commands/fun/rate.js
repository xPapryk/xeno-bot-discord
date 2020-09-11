const { Message, MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: "rate",
    category: "utilities",
    description: "Rates a user on your server on a scale of 1 to 10",
    usage: "rate [@member]",
    run: async (client, message, args) => {

        let ratus = message.mentions.members.first() || message.author;

        let rates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

        let result = Math.floor((Math.random() * rates.length));

        if(!ratus) {
        return message.channel.send(`**${message.author.username}**, I'd give you ${result}/10`);
        } else return message.channel.send(`I'd give **__${ratus.user.username}__** ${result}/10`);

    }
}