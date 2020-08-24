const { MessageEmbed } = require("discord.js");
let fetch = require("node-fetch");

module.exports = {
    name: "hex",
    caterory: "utilities",
    description: "Display a hex color in an embed",
    usage: "hex <hex color>",
    run: async (client, message, args) => {

        let color = args.join(" ");

        const url = `https://api.alexflipnote.dev/color/${color}`;
        const res = await fetch(url).then(url => url.json());

        let usage = MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())
        if(!color)usage.addField("Missing Color", "Usage: color <hex color>")

        if(!color) {
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        let embed = new MessageEmbed()
        .setColor(`${color}`)
        .setThumbnail(res.image)
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())
        .addField("Basic Information:", [
            `Name: **${res.name}**`,
            `Hex Code: **${res.hex}**`,
            `RGB Value: **${res.rgb}**`
        ])

        message.channel.send(embed)

    }
}   