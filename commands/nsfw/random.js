const { MessageEmbed, Message } = require("discord.js");

module.exports = {
    name: "random",
    category: "nsfw",
    description: "Return a random NSFW subreddit",
    usage: "random",
    run: async(client, message, args) => {

        let premiumUsers = [
            '342333088573161472',
            '538594457499729950'
        ]

        let usage1 = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())
        if(!message.channel.nsfw)usage1.addField("🔞", "I cannot display NSFW content in a non-NSFW channel")
        if(message.author.id =! premiumUsers)usage1.addField("Missing Permissions", "You need to be a premium user to be able to execute this command")

        /*let usage = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())
        .addField("Missing Permissions", "You need to be a premium user to be able to execute this command")**/

        if(!message.channel.nsfw) {
            message.channel.send(usage1)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        if(message.author.id =! premiumUsers) {
            message.channel.send(usage1)
            .then(msg => {msg.delete({ timeout: 5000 })})
        }

        let subreddits = [
            'gonewild',
            'UnderwearGW',
            'panties',
            'bra',
            'ass',
            'boobs',
            'pussy'
        ]

        let subreddit = subreddits[Math.floor(Math.random()*(subreddits.length))];

        let embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Powered By Xeno", client.user.avatarURL())
        .setTitle("Click here to proceed")
        .setURL(`https://reddit.com/r/${subreddit}`)

        message.channel.send(embed)

    }
} 