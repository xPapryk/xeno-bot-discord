const { MessageEmbed, Message } = require("discord.js");
const { get } = require("snekfetch");

module.exports = {
    name: "ass",
    run: async(client, message, args) => {

        let premiumUsers = message.author.id == '342333088573161472' || '711123545463455744' || '538594457499729950' || '374173012230144012';

        let usage = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())
        if(!premiumUsers)usage.addField("🔞", "I cannot display NSFW content in a non-NSFW channel")
        if(!message.channel.nsfw)usage.addField("Missing Permissions", "You need to be a premium user to be able to execute this command")

        if(!message.channel.nsfw) {
            message.channel.send(usage1)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        else if(!premiumUsers) {
            message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        } else {

        const { body } = await get("http://api.obutts.ru/butts/0/1/random");

            let embed = new MessageEmbed()
            .setTitle("Click here if the image failed to load")
            .setURL(`http://media.obutts.ru/${body[0].preview}`)
            .setImage(`http://media.obutts.ru/${body[0].preview}`)
            .setColor("RANDOM")
            .setTimestamp()
            .setFooter("Powered By Xeno", client.user.avatarURL())

            message.channel.send(embed)

        }

    }
}