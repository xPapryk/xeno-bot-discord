const { Message, MessageEmbed, djsversion } = require('discord.js');

module.exports = {
    name: "serverinfo",
    category: "server_and_user",
    description: "Returns some information about the server",
    usage: "serverinfo",
    run: async (client, message, args) => {

        let sicon = message.guild.iconURL;
        let serverEmbed = new MessageEmbed()
        .setThumbnail(sicon)
        .setTimestamp()
        .setColor("RANDOM")
        .setFooter("Powered By Xeno", `${client.user.avatarURL()}`)
        .addField('General Information', [
        `**• Name:** ${message.guild.name}`,
        `**• ID:** ${message.guild.id}`,
        `**• Owner:** ${message.guild.owner}`,
        `**• Region:** ${message.guild.region}`,
        `**• Members:** ${message.guild.memberCount}`
        
        ])

        message.channel.send(serverEmbed);

    }
}