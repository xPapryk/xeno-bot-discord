const { Message, MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: "gayrate",
    category: "fun",
    description: "See how gay is a person (100% real)",
    usage: "gayrate [@member]",
    run: async (client, message, args) => {

        let ratus = message.mentions.members.first() || message.author;
        if(!ratus) return message.channel.send("Tag someone to gayratethem!");

        let gayrate = Math.floor(Math.random() * 101);

        if(ratus.user.id === "342333088573161472") {
            message.channel.send(`I'd say that **__Xeno Epicrafter__** is 1% gay.`);
        } else {
            message.channel.send(`I'd say that **__${ratus.user.username}__** is ${gayrate}% gay.`);
        }

    }
}