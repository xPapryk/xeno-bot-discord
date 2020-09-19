const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "mute",
    category: "moderation",
    description: "Mutes a user",
    usage: "mute <@member> <reason>",
    run: async(client, message, args) => {

        const member = message.mentions.members.first();
        const reason = args.slice(1).join(' ');

        let usage = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())

        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            usage.addField("Missing Permission", "``MANAGE_MESSAGES``")
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        if(member.roles.cache.find((r) => r.name === 'muted')) {
            usage.addField("Error", "User is already muted")
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        if(!member) {
            usage.addField("Missing Member", "Usage: mute <@member> <reason>")
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        if(!reason) {
            usage.addField("Missing Reason", "Usage: mute <@member> <reason>")
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }


        const muteRole = message.guild.roles.cache.find((r) => r.name === "muted") || (
            await message.guild.roles.create({
                data: {
                    name: 'muted',
                    color: 'GRAY'
                },
                reason: "Mute a user"
            })
        )

        message.guild.channels.cache.forEach(async (channel) => {

            await channel.overwritePermissions([
                {
                    id: muteRole.id,
                    deny: ["SEND_MESSAGES", "ADD_REACTIONS"],
                },
            ])

        })

        member.roles.add(muteRole);
        member.user.send(`You've been **muted** from **${message.guild.name}** (Reason: ${reason})`);

        message.channel.send(`**${message.author.tag}** muted **${member.user.tag}** (Reason: ${reason})`)

    }
}