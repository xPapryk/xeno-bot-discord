const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "unmute",
    category: "moderation",
    description: "Unmutes a user",
    usage: "unmute <@member>", 
    run: async(client, message, args) => {

        const muteRole = message.guild.roles.cache.find((r) => r.name === "muted");
        let member = message.mentions.members.first();

        let usage = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())

        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            usage.addField("Missing Permission", "``MANAGE_MESSAGES``")
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        if(!member.roles.cache.find((r) => r.name === 'muted')) {
            usage.addField("Error", "User is not muted")
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }   

        if(!member) {
            usage.addField("Missing Member", "Usage: unmute <@member>")
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        member.roles.remove(muteRole)

        member.user.send(`You have been **unmuted** from **${message.guild.name}**`);
        message.channel.send(`Successfully unmuted **${member.user.tag}**`)

    }
} 