const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "bindyt",
    category: "utilities",
    descrition: "This will bind your youtube channel to your accoun",
    usage: "bindyt <youtube channel lin>",
    run: async(client, message, args) => {

        let channel = args[0];
        if(message.deletable) {
            message.delete();
        }
        
        let usage = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())
        
        if(!channel) {
            message.delete();
            usage.addField("Missing Channel Link", "Usage: bindyt <youtube channel link>")
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        if(!channel.includes('youtube.com/channel/' || 'https://youtube.com/channel/')) {
            message.delete();
            usage.addField("Invalid Channel Link", "e.g. ``https://youtube.com/channel/UC0nh4VHHk4I8v9fISOb-oeQ``")
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        if(!db.get(`_yt_${message.author.id}`)) {

            db.set(`_yt_${message.author.id}`, channel)
            let embedY = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Youtube channel has been set to: \`\`${channel}\`\``)

            message.channel.send(embedY)

        } else {

            db.set(`_yt_${message.author.id}`, channel)
            let embedT = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Youtube channel was updated to: \`\`${channel}\`\``)

            message.channel.send(embedT)

        }

    }
} 