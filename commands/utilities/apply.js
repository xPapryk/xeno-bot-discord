const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "application",
    category: "utilities",
    description: "Return the link of the application form",
    usage: "apply",
    run: async (client, message, args) => {

        let embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())
        .addField("Application form link:", "[Click Here](https://forms.gle/2KasZ54r8HSgw8X18)")

        message.channel.send(embed)

    }   
}