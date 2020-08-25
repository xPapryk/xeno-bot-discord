const line = require("../../assets/json/pickup.json");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "pickup",
    category: "fun",
    description: "Returns a random pickup line",
    usage: "pickup",
    run: async (client, message, args) => {

        let embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())
        .setDescription(`💖 | ` + line[Math.round(Math.random() * (line.length - 1))])

        message.channel.send(embed)

    }
}