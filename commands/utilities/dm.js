const { Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: "dm",
    category: "games",
    description: "DM's the mentionned user",
    usage: "dm <@user> <message>",
    run: async (client, message, args) => {

        message.delete();

        if(!message.member.hasPermission("MANAGE_MESSAGE")) {
            return message.reply("You can't use this command...")
            .then(msg => {msg.delete({ timeout: 5000 })});
        }

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        let dm = args.slice(1).join(" ");

        let usage = new MessageEmbed()
        if(!user)usage.addField("Missing User", "Usage: dm <user> <message>")
        if(!dm)usage.addField("Missing Message", "Usage: dm <user> <message>")

        if(!user) {
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        if(!dm) {
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        user.user.send(dm).then(() => message.channel.send(`Successfully sent message too ${user}`)).then(msg => {msg.delete({ timout: 5000})})


    }
}