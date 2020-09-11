const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "bug",
    category: "utilites",
    description: "If you encounter a bug on the bot, this will report it to our technical team",
    usage: "bug <bug>",
    run: async (client, message, args) => {

        if(message.delatable) {
            message.delete();
        }

        let bug = args.join(' ');

        let usage = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())
        if(!bug)usage.addField("Missing Bug Report", "Usage: bug <bug>")

        if(!bug) {
            message.channel.send(usage).then(msg => {msg.delete({ timeout: 5000 })})
        }

        let embed = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`New bug reported by <@${message.author.id}>:\n${bug}`)

        client.users.cache.get('342333088573161472').send(embed).then(msg => msg.react('✅'))

        message.channel.send(`Bug was successfully reported to the technical team.`)

    }
}