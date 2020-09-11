const db = require("quick.db");
const { MessageEmbed } = require("discord.js");
const { get } = require("snekfetch");

module.exports = {
    name: "neki",
    run: async(client, message, args) => {
        
        let nsfw = db.get(`_nsfw_${message.guild.id}`);

        let usage = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())

        if(!message.channel.nsfw) {
            usage.addField("Missing Requirements", "I can only send NSFW content in NSFW channels")
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        if(nsfw === 'off'){
            message.channel.send(`NSFW commands are disabled on this server.`)
        } else {
            
            const { body } = await get('https://nekos.life/api/v2/img/lewd');

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTimestamp()
            .setFooter("Powered By Xeno", client.user.avatarURL())
            .setImage(body.url)
            .setTitle(`Click here if the image failed to load`)
            .setURL(body.url)

            message.channel.send(embed)

        }

    }
}