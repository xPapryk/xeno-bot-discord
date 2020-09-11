const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "nsfw",
    category: "config",
    description: "Allow or disallow NSFW commands on your server",
    usage: "nsfw <on/off>",
    run: async(client, message, args) => {

        let OnOff = args[0];

        let usage = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())

        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            usage.addField("Missing Permission", "``MANAGE_MESSAGES``")
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        if(OnOff != 'on' && OnOff != 'off') {
            usage.addField("Usage:", "nsfw <on/off>")
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        if(!db.get(`_nsfw_${message.guild.id}`)) {
            db.set(`_nsfw_${message.guild.id}`, OnOff)
        } else {

            db.set(`_nsfw_${message.guild.id}`, OnOff)
        }

        message.channel.send(`NSFW commands are now turned \`\`${OnOff}\`\` on this server.`)

    }
}