const { MessageEmbed } = require("discord.js");
const talkedRecently = new Set();

module.exports = {
    name: "kick",
    category: "moderation",
    description: "Kick's a user from the guild",
    usage: "kick <@user> <reason>",
    run: async (client, message, args) => {

        let reason = args.slice(1).join(" ");
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        let usage = new MessageEmbed()
        .setColor("RANDOM")
        if(!message.member.hasPermission("KICK_MEMBERS"))usage.addField("Missing Permission", "``KICK_MEMBERS``")
        if(!message.guild.me.hasPermission("KICK_MEMBERS"))usage.addField("I am Missing a Permission", "``KICK_MEMBERS``")
        if(!member)usage.addField("Missing User:", "Usage: kick <@user> <reason>")
        /*if(!member.kickable)usage.addField("Error:", "This member can't be kicked.")*/
        if(!member === message.author.id)usage.addField("Erorr:", "You can't kick yourself.")
        if(!reason)usage.addField("Missing Reason", "Usage: kick <@user> <reason>")

        if(!message.member.hasPermission("KICK_MEMBERS")) {
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000})})
        }

        if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        if(!member){
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000})})
        }

        /* if(!member.kickable) {
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        } */

        if(!member === message.author.id) {
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000})})
        }

        if(!reason) {
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        member.kick(reason)
        .catch(err => {
            if(err) return message.channel.send("Something went wrong.")
            .then(msg => {msg.delete({ timeout: 5000 })})
        })

        let kickEmbed = new MessageEmbed()
        .addField(`${member.user.tag} has been kicked from the server`, [
            `**• Kicked By:** ${message.author}`,
            `**• Reason:** ${reason}`
        ])
        .setTimestamp()
        .setFooter("Powered By Xeno", `${client.user.avatarURL()}`)
        .setColor("RANDOM")

        message.channel.send(kickEmbed)

        message.delete();
    }
}