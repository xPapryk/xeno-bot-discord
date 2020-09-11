const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "warnings",
    category: "moderation",
    description: "Returns the number of warnings the specified user has",
    usage: "warnings [@user]",
    run: async(client, message, args) => {

        const user = message.mentions.members.first() || message.author;

        let usage = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())
        if(!user)usage.addField("Missing User", "Usage: warnings <@user>")

        if(!user) {
            return message.channel.send(usage).then(msg => {msg.delete({ timeout: 5000 })})
        }

        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);
        if(warnings === null) warnings = 0;

        message.channel.send(`**${user.user.username}** has ${warnings} warning(s)`)

    }
}