const { MessageEmbed } = require("discord.js");
const { number } = require("mathjs");
var Roll = require('roll'),
roll = new Roll();

module.exports = {
    name: "roll",
    category: "fun",
    description: "Rolls a 6 sided dice",
    usage: "roll",
    run: async (client, message, args) => {

        var oneDie = roll.roll('d6');
        
        message.channel.send(`${message.author} you rolled one die and you got: \`\`${oneDie.result}\`\``)
 

    }   
}