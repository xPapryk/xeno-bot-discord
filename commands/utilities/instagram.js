const { Message, MessageEmbed } = require('discord.js');
const indentString = require('indent-string');
const fetch = require("node-fetch");

module.exports = {
    name: "instagram",
    category: "fun",
    description: "Returns some information about a Instagram profile",
    usage: "instagram <profile>",
    run: async (client, message, args) => {

        const name = args.join(" ");

        let usage = new MessageEmbed()
        .setColor("RANDOM")
        .addField("Missing User", "Usage: instagram <profile>")

        if(!name) {
            return message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        const url = `https://www.instagram.com/${name}/?__a=1`;
        const res = await fetch(url).then(url => url.json());

        if(!res.graphql ) {
            return message.channel.send("I coudn't find that user.")
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        const account = res.graphql.user;

        let instaEmbed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${account.full_name}'s Instagram Profile`)
        .setURL(`https://www.instagram.com/${name}/`)
        .setThumbnail(account.profile_pic_url_hd)
        .setTimestamp()
        .setFooter("Powered By Xeno", `${client.user.avatarURL()}`)
        /*.addField("Profile Information", `
        ** > Userame:** ${account.username}
        ** > Full Name: ** ${account.full_name}
        ** > Biography:** ${account.biography.lenght == 0 ? "none" : account.biography}
        ** > Posts:** ${account.edge_owner_to_timeline_media.count}
        `)*/
        instaEmbed.addFields(
            {name: `**Username:**`, value: `${account.username}`, inline: true},
            {name: `**Full Name:**`, value: `${account.full_name}`, inline: true},
            {name: `**Biography:**`, value: `${account.biography.lenght == 0 ? "none" : account.biography}`, inline: false},
            {name: `**Post:**`, value: `${account.edge_owner_to_timeline_media.count}`, inline: true},
            {name: `**Followers:**`, value: `${account.edge_followed_by.count}`, inline: true},
            {name: `**Following:**`, value: `${account.edge_follow.count}`, inline: true},
        )

        message.channel.send(instaEmbed);
    }
}