const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "warn",
    category: "moderation",
    description: "Warns a user",
    usage: "warn <@user> <reason>",
    run: async(client, message, args) => {

        const user = message.mentions.members.first();
        const reason = args.slice(1).join(' ');

        let usage = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())
        if(!user)usage.addField("Missing User", "Usage: warn <@user> <reason>")
        if(!reason)usage.addField("Missing Reason", "Usage: warn <@user> <reason>")
        if(!message.member.hasPermission("MANAGE_MESSAGES"))usage.addField("Missing Permissions", "``MANAGE_MESSAGES``")

        if(!user) {
            return message.channel.send(usage).then(msg => {msg.delete({ timeout: 5000 })})
        }

        if(!reason) {
            return message.channel.send(usage).then(msg => {msg.delete({ timeout: 5000 })})
        }

        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send(usage).then(msg => {msg.delete({ timeout: 5000 })})
        }

        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
        if(warnings === 3) {
        return message.channel.send(`**${message.mentions.users.first().username}** has reached 3 warnings.`)
        }
        
        if(warnings === null) {
        db.set(`warnings_${message.guild.id}_${user.id}`, 1)
        user.send(`You have been warned in **${message.guild.name}**. (Reason: ${reason})`)
        await message.channel.send(`You warned **${message.mentions.users.first().username}**. (Reason: ${reason})`)
        } else if(warnings !== null) {
            db.add(`warnings_${message.guild.id}_${user.id}`, 1)
        user.send(`You have been warned in **${message.guild.name}**. (Reason: ${reason})`)
        await message.channel.send(`You warned **${message.mentions.users.first().username}**. (Reason: ${reason})`)
        }

    }
}