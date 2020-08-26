const snekfetch = require("snekfetch");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "nsfw",
    category: "nsfw",
    description: "Return a random nsfw image",
    usage: "nsfw",
    run: async (client, message, args) => {

        let premiumUsers = message.author.id == '342333088573161472' || '711123545463455744' || '538594457499729950' || '374173012230144012';

        let usage = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())
        if(!premiumUsers)usage.addField("Missing Permissions", "You need to be a premium user to be able to execute this command")

        if(!premiumUsers) {
            message.channel.send(usage)
            .then(msg => {msg.delete({ timeout: 5000 })})
        } else {

        let subreddit = [
            'gonewild',
            'leggings',
            'panties',
            'bras',
            'boobs',
            'ass',
            'pussy'
        ]

        let subreddits = subreddit[Math.floor(Math.random() * (subreddit.length - 1))];

        const { body } = await snekfetch
            .get(`https://www.reddit.com/r/${subreddits}.json`)
            .query({ limit: 800 });

        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        const randomNumber = Math.floor(Math.random() * allowed.length);

        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())
        .setImage(allowed[randomNumber].data.url)
        .setTitle("Click here if the image failed to load")
        .setURL(allowed[randomNumber].data.url)

        message.channel.send(embed)

        }

    }
} 