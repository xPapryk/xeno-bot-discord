const { MessageEmbed, Message } = require("discord.js");
const { get } = require("snekfetch");

module.exports = {
    name: "pussy",
    category: "nsfw",
    description: "This will return a random pussy image",
    usage: "pussy",
    run: async(client, message, args) => {

        let premiumUsers = [
            '342333088573161472',
            '538594457499729950'
        ]

        let usage1 = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())
        .addField("🔞", "I cannot display NSFW content in a non-NSFW channel")

        let usage = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())
        .addField("Missing Permissions", "You need to be a premium user to be able to execute this command")

        if(!message.channel.nsfw) {
            message.channel.send(usage1)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        if(message.author.id =! premiumUsers) {
            message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        const { body } = await get("https://nekobot.xyz/api/image?type=pussy");

        let embed = new MessageEmbed()
        .setImage(body.message)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())

        message.channel.send(embed)

    }
}