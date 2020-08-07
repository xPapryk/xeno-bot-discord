const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "announce", 
    category: "moderation",
    description: "Creates an announcement in the specified channel",
    usage: "announce <channel  id> <message>",
    run: async (client, message, args) => {

        let id = args[0];

        let annoucement = args.slice(1).join(" ");

        let usage = new MessageEmbed()
        .setColor("RANDOM")
        if(!id)usage.addField("Missing Channel ID", "Usage: announce <channel id> <message>")
        if(!annoucement)usage.addField("Missing Message", "Usage: announce <channel id> <message>")
        if(!message.member.hasPermission("MANAGE_MESSAGES"))usage.addField("Your Missing the ``MANAGE_MESSAGES`` Permission", "You do not have the permissions required to make an annoucement.")

        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
            .then(message.delete())
        }

        if(!id) {
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        if(!annoucement) {
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        client.channels.cache.get(id).send(annoucement);

    }
} 