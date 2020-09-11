const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports ={
    name: "bindlog",
    category: "moderation",
    description: "Set the channel in which logs will be sent",
    usage: "bindlog <#channel>",
    run: async(client, message, args) => {

        let channel = message.mentions.channels.first();

        let usage = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())
        
        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            usage.addField("Missing Permission", "``MANAGE_MESSAGES``")
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        if(!args[0]) {
            usage.addField("Missing Channel", "Usage: bindlog <#channel>")
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        message.channel.send(`Logs will now be sent in **<#${channel.id}>**`)

        db.set(`_log_${message.guild.id}`, channel.id)

    }
}