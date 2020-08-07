const  { MessagEmbed } = require("discord.js");
const figlet = require("figlet");

module.exports = {
    name: "asciify",
    category: "fun",
    description: "Turns text into ascii art",
    usage: "asciify <text>",
    run: async (client, message, args) => {

        const text = args.join(" ");

        const bigText = figlet.textSync(text, {
            font: 'Ghost',
            horizontalLayout: 'universal smushing',
            verticalLayour: 'universal smushing'
        })

        message.channel.send(`\`\`\`${bigText}\`\`\``);

    }
}