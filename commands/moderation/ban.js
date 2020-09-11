const { MessageEmbed } = require("discord.js");
const talkedRecently = new Set();

module.exports = {
    name: "ban",
    category: "moderation",
    description: "Ban's a user from the guild",
    usage: "ban <@user> <reason>",
    run: async (client, message, args) => {

        let reason = args.slice(1).join(" ");
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        let usage = new MessageEmbed()
        .setColor("RANDOM")
        if(!message.member.hasPermission("BAN_MEMBERS"))usage.addField("Missing Permission", "``BAN_MEMBERS``")
        if(!message.guild.me.hasPermission("BAN_MEMBERS"))usage.addField("I am Missing a Permission", "``BAN_MEMBERS``")
        if(!member)usage.addField("Missing User:", "Usage: ban <@user> <reason>")
        /*if(!member.kickable)usage.addField("Error:", "This member can't be kicked.")*/
        if(!member === message.author.id)usage.addField("Error:", "You can't ban yourself.")
        if(!reason)usage.addField("Missing Reason", "Usage: ban <@user> <reason>")

        if(!message.member.hasPermission("BAN_MEMBERS")) {
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000})})
        }

        if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        if(!member){
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000})})
        }

        if(!member.bannable) {
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 7000 })})
        }

        if(!member === message.author.id) { 
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000})})
        }

        if(!reason) {
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        member.ban(reason)
        .catch(err => {
            if(err) return message.channel.send("Something went wrong.")
            .then(msg => {msg.delete({ timeout: 5000 })})
        })

        let banEmbed = new MessageEmbed()
        .addField(`${member.user.tag} has been banned from the server`, [
            `**• Banned By:** ${message.author}`,
            `**• Reason:** ${reason}`
        ])
        .setTimestamp()
        .setFooter("Powered By Xeno", `${client.user.avatarURL()}`)
        .setColor("RANDOM")

        message.channel.send(banEmbed)

        message.delete();

    }
}