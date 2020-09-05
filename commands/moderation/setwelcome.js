const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "setwelcome",
    category: "moderation",
    description: "Set the channel in which new users will be announced",
    usage: "setwelcome <#channel>",
    run: async (client, message, args) => {

        let channel = message.mentions.channels.first()
        
        let usage = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())
        if(!channel)usage.addField("Missing Channel", "Usage: setwelcome <#channel>")
        if(!message.member.hasPermission("MANAGE_CHANNELS"))usage.addField("Missing Permission", "You can't use this command")

        if(!channel) {
            message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        if(!message.member.hasPermission("MANAGE_CHANNELS")) {
            message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }
        
        db.set(`welchannel_${member.guild.id}`, channel.id)
        
        message.channel.send(`Welcome Channel is set to ${channel}`)

    }
}