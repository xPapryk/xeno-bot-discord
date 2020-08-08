const { Message, MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: "howdumb",
    category: "fun",
    description: "See how dumb is a user(100% real) ",
    usage: "howdumb [@member]",
    run: async (client, message, args) => {

        let ratus = message.mentions.members.first() || message.author;
        if(!ratus) return message.channel.send("Tag someone to dumratethem!");

        let gayrate = Math.floor(Math.random() * 101);

        if(ratus.user.id === "342333088573161472") {
            message.channel.send(`I'd say that **__Xeno Epicrafter__** is 1% dumb.`);
        } else {
            message.channel.send(`I'd say that **__${ratus.user.username}__** is ${gayrate}% dumb.`);
        }

    }
}