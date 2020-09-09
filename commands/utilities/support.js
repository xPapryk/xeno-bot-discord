const { Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: "support",
    category: "utilities",
    description: "Bot support links",
    usage: "support",
    run: async (client, message, args) => {

        let inviteEmbed = new MessageEmbed()
        .setColor("#00cec9")
        .setThumbnail(`${client.user.avatarURL()}`)
        .setTitle("Xeno Bot Invite")
        .addField("**Links**", [
            `[Xeno Bot](https://discord.com/api/oauth2/authorize?client_id=505454012481667072&permissions=2147483639&scope=bot)`,
            `[Support Server](https://discord.gg/XVyw2Jd)`
        ])
        .setTimestamp()
        .setFooter("Powered By Xeno", `${client.user.avatarURL()}`)

        message.channel.send(inviteEmbed);
    }
}