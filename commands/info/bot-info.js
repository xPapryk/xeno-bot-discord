const { Message, MessageEmbed, djsversion } = require('discord.js');
const { name, version } = require('../../package.json');
const { utc } = require('moment');

module.exports = {
    name: "botinfo",
    category: "server_and_user",
    description: "Returns some information about the bot",
    usage: "botinfo",
    run: async (client, message, args) => {

        let botEmbed = new MessageEmbed()
        .setThumbnail(client.user.avatarURL())
        .setTimestamp()
        .setColor("RANDOM")
        .setFooter("Powered By Xeno", `${client.user.avatarURL()}`)
        .addField('General Information', [
        `**• Bot Name:** ${name}`,
        `**• Client:** ${client.user.tag} (${client.user.id})`,
        `**• Servers:** ${client.guilds.cache.size}`,
        `**• Creation Date:** ${utc(client.user.createdTimestamp).format('Do MMM YYYY HH:mm:ss')}`,
        `**• Bot version:** ${version}`,
        `**• Node.js:** ${process.version}`,
        `**• Bot Made By:** X3no Epicrafter#3685`
        ])

        message.channel.send(botEmbed);

    }
}