const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "setgame",
    category: "developer",
    description: "Change the bot stauts",
    usage: "setgame <type> <status>",
    run: async(client, message, args) => {

        const type = args[0];
        const game = args.slice(1).join(' ');
        let developer = message.author.id == '342333088573161472';

        let usage = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())

        if(!developer) {
            usage.addField("Missing Permissions", "Only \`\`Xeno Bot\`\` developers can execute this command")
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        if(!type) {
            usage.addField("Missing Game Type", "Usage: setgame <type> <status>")
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        if(!game) {
            usage.addField("Missing Status Name", "Usage: setgame <type> <status>")
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        await client.user.setActivity(game, { type: type })

        message.channel.send(`Status has been changed to: **${game}**`)

    }
}