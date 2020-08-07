const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "length",
    category: "utilities",
    description: "Calculates the length of the provided text",
    usage: "length <text>",
    run: async(client, message, args) => {
        
        let msgl = args.join(" ");

        let usage = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())
        .addField("Missing Text", "Usage: length <text>")

        if(!msgl) {
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        message.channel.send(`Text length: \`\`${msgl.length}\`\``)

    }
}