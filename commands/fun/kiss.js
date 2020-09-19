const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    name: "kiss",
    category: "kiss",
    description: "Kiss somebody",
    usage: "kiss [@member]",
    run: async(client, message, args) => {

        const data = await fetch("https://nekos.life/api/kiss").then((res) => res.json());

        const member = message.mentions.members.first() || message.author;
        const kissed = message.author.id === member.id ? "themselfs" : member.user.username;

        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())
        .setTitle(`${message.author.username} kissed ${kissed}`)
        .setURL(data.url)
        .setImage(data.url)

        message.channel.send(embed)

    }
}