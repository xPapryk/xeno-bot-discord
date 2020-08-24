let snekfetch = require("snekfetch");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "shorten",
    category: "utilities",
    description: "Shortens the given URL",
    usage: "shorten <link>",
    run: async (client, message, args) => {

        message.delete();

        let url = args.join(" ");

        let usage = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())
        .addField("Missing Link", "Usage: shorten <link>")

        if(!url) {
            message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        let res = `https://is.gd/create.php?format=simple&url=${url}`;
        snekfetch.get(res).then(r => message.channel.send(`Shortened URL: <${decodeURIComponent(r.body)}>`))

    }
}