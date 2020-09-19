const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    name: "hug",
    category: "fun",
    description: "Hug a user",
    usage: "hug [@member]",
    run: async(client, message, args) => {

        const data = await fetch("https://nekos.life/api/hug").then((res) =>
        res.json());

        const member = message.mentions.members.first() || message.author;
        const hugged = message.author.id === member.id ? "themselfs" : member.user.username;

        const embed = new MessageEmbed()
        .setTitle(`${message.author.username} hugged ${hugged}`)
        .setFooter("Powered By Xeno", client.user.avatarURL())
        .setColor("RANDOM")
        .setImage(`${data.url}`)
        .setTimestamp()
        .setURL(data.url)

        message.channel.send(embed);

    }
}