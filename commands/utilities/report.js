const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "report",
    category: "utilities",
    description: "Report the mentionned user to Staff",
    usage: "report <@user> <reason>",
    yo: "yo",
    run: async (client, message, args) => {

        if(message.deletable) {
            message.delete();
        }

        let rMember = message.mentions.members.first();
        let reason = args.slice(1).join(' ');

        let usage = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())
        
        if(!rMember) {
            usage.addField("Missing User", "Usage: report <@user> <reason>")
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        if(!reason) {
            usage.addField("Missing Reason", "Usage: report <@user> <reason>")
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        message.channel.send(`Successfully reported **${rMember.user.tag}**`)

        let embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())
        .addField(`${rMember.user.tag} has been reported`, [
            `• **Member:** <@${rMember.id}> (${rMember.id})`,
            `• **Reported By:** <@${message.author.id}> (${message.author.id})`,
            `• **Reported in:** ${message.channel}`,
            `• **Reason:** ${reason}`
        ])
        .setThumbnail(rMember.user.displayAvatarURL())

        const channel =  db.get(`_log_${message.guild.id}`)

        client.channels.cache.get(channel).send(embed)

    }
}