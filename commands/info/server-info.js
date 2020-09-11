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
        .addField('Server Name', message.guild.name, true)
        .addField('Server ID', message.guild.id, true)
        .addField('\u200b', '\u200b', true)
        .addField("Owner", message.guild.owner, true)
        .addField('Highest Role', message.guild.roles.highest, true)
        .addField('\u200b', '\u200b', true)
        .addField("Members", message.guild.memberCount, true)
        .addField("Region", message.guild.region, true)
        .addField('\u200b', '\u200b', true)

        message.channel.send(serverEmbed);

    }
}