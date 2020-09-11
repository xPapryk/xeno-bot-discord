const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "avatar",
    category: "server_and_user",
    description: "Returns the avatar of the mentionned user",
    usage: "avatar [@user]",
    run: async (client, message, args) => {

        const user = message.mentions.users.first() || message.author;

        let embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())
        .setTitle(`${user.tag}'s avatar:`)
        .setImage(user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))

        message.channel.send(embed);
    }   
}