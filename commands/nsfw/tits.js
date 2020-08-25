const { MessageEmbed, Message } = require("discord.js");
const { get } = require("snekfetch");

module.exports = {
    name: "tits",
    category: "nsfw",
    description: "This will return boobs",
    usage: "tits",
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

        const { body } = await get("http://api.oboobs.ru/boobs/0/1/random");

        let embed = new MessageEmbed()
        .setTitle("Click here if the image failed to load")
        .setURL(`http://media.oboobs.ru/${body[0].preview}`)
        .setImage(`http://media.oboobs.ru/${body[0].preview}`)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())

        message.channel.send(embed)

    }
}