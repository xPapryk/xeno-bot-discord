const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "deepfry",
    category: "image-manipulation",
    description: "Deepfrys a user",
    usage: "deepfry [@member]",
    run: async (client, message, args) => {

        const user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });


        const url = `https://api.alexflipnote.dev/filter/deepfry?image=${avatar}`;

        let embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())
        .setImage(url)
        .setTitle(`${user.username} was deepfried`)

        message.channel.send(embed)

    }
}