const { MessageEmbed } = require('discord.js');
const { evaluate } = require('mathjs');

module.exports = {
    name: "calc",
    category: "utilities",
    description: "Calculates something for you",
    usage: "calc <math expression>",
    run: async(client, message, args) => {

        let expression = args.join(" ");
        let result = evaluate(expression);

        let usage = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())
        if(!expression)usage.addField("Missing Expression", "Usage: calc <expression>")
        /*if(isNaN(args.join(" ")))usage.addField("Invalid Number", "Usage: x!calc <expression>")*/

        if(!expression) {
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        /*if(isNaN(args.join(" "))) {
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }*/

        let embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", `${client.user.avatarURL()}`)
        .setDescription(`\`\`\`${args.join(" ")} = ${result}\`\`\``)

            message.channel.send(embed)

    }
} 