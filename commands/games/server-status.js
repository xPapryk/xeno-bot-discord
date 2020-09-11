const { MessageEmbed } = require("discord.js");
const ping = require("minecraft-server-util");
const motdparser = require('mcmotdparser');

module.exports = {
    name: "server",
    category: "games",
    description: "Get the status of a server with some additional information",
    usage: "server <ip address>",
    run: async (client, message, args) => {

        let usage = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())
        .addField("Missing IP Address", "Usage: server <ip address>")

        if(!args[0]){
        return message.channel.send(usage).then(msg => {msg.delete({ timeout: 5000 })});
        }

        let image = `https://eu.mc-api.net/v3/server/favicon/${args[0]}`

        ping(`${args[0]}`, 25565, (error, reponse) => {
            if(error) throw error;
            const serverEmbed = new MessageEmbed()
            .setThumbnail(image)
            .setColor(`${Math.floor(Math.random()*16777215).toString(16)}`)
            .setTitle('Minecraft Server Status')
            .addField('Server Adress', reponse.host)
            .addField('Server Version', reponse.version)
            .addField('Online Players', `${reponse.onlinePlayers}/${reponse.maxPlayers}`)
            .setFooter("Powered By Xeno", `${client.user.avatarURL()}`)
            .setTimestamp()

            message.channel.send(serverEmbed);
        }) 

    }
}